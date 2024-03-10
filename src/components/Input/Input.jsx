import React, { useState, useEffect } from "react";
import cl from "./input.module.css";
import loop from "../../Home/categoryPage/imgs/header/loop.svg";
import arrowLeft from "../../Home/page3/img/arrow-left.svg";
import home from "./img/icons.svg";
import { Link } from "react-router-dom";
import yellow_heart from "../../Home/categoryPage/imgs/main/section__publications/icons/yellow_heart.svg";
import heart from "../../Home/page2/img/food/heart.svg";
import axios from "axios";
import {resetButton, setButtonPressed, setButtons} from "../../features/buttonSlide.js";
import useFetch from "../hooks/useFetch.js";
import {useDispatch, useSelector} from "react-redux";

const Input = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const pageSize = 4; // или любое другое значение, которое вам нужно

  const [searchResults, setSearchResults] = useState({ data: [] });
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { buttons } = useSelector((state) => state.button);
  const dispatch = useDispatch();
  const [allData, setAllData] = useState([]);
  const { data, eloading, error } = useFetch(
      `https://places-test-api.danya.tech/api/posts?populate=*&pagination[pageSize]=${pageSize}&pagination[page]=${page}&sort[0]=createdAt:desc`
  );


  const handleInputClick = () => {
    setIsFullscreen(true);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const apiUrl = "https://places-test-api.danya.tech/api/posts";
      const queryParams = new URLSearchParams({
        "sort[0]": "createdAt:desc",
        populate: "*",
        "filters[title][$containsi]": searchQuery,
        "pagination[pageSize]": 4,
        "pagination[page]": page,
      });
      const fullUrl = `${apiUrl}?${queryParams.toString()}`;

      const response = await fetch(fullUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Search results:", data);

      setSearchResults((prevResults) => {
        if (Array.isArray(prevResults.data)) {
          // Если prevResults.data - это массив, то возвращаем новый массив
          return { data: [...prevResults.data, ...data.data] };
        } else {
          // Если prevResults.data - это объект, добавляем новые данные в поле data
          return { data: [...data.data] };
        }
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setPage(1);
      handleSearch();
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const apiUrl = "https://places-test-api.danya.tech/api/posts";
      const queryParams = new URLSearchParams({
        "sort[0]": "createdAt:desc",
        populate: "*",
        "filters[title][$containsi]": searchQuery,
        "pagination[pageSize]": 4,
        "pagination[page]": page + 1,
      });
      const fullUrl = `${apiUrl}?${queryParams.toString()}`;

      const response = await fetch(fullUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Search results:", data);

      setSearchResults((prevResults) => ({
        data: [...data.data, ...prevResults.data],
      }));
      setPage((prevPage) => prevPage + 1);
      setLoading(false);

    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Backspace") {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
      }
    }
  };

  const handleButtonClick = async (buttonId, postId) => {
    try {
      const response = await axios.get(
          `https://places-test-api.danya.tech/api/like?uid=1295257412&postId=${postId}`
      );

      if (response.data.success) {
        const isPressed = buttons[buttonId]?.isPressed;

        dispatch(isPressed ? resetButton({ buttonId }) : setButtonPressed({ buttonId }));


        if (response.data?.user?.liked) {
          dispatch(setButtons(response.data.user.liked));
        }
      } else {
        console.error("Failed to toggle like status");
      }
    } catch (error) {
      console.error("Error during API request:", error);
    }

  };


// ...




  useEffect(() => {
    if (data && data.length > 0) {
      const uniqueData = data.filter((newPost) => {
        return !allData.some((existingPost) => existingPost.id === newPost.id);
      });

      setAllData((prevData) => [...prevData, ...uniqueData]);
    }
  }, [data]);

  useEffect(() => {
    if (searchQuery) {
      setPage(1);
      handleSearch();
    }
  }, [searchQuery, page]);

  useEffect(() => {
    if (searchResults.data && searchResults.data.length > 0) {
      console.log("Loading...");
    }
  }, [searchResults]);

  return (
      <div className={cl.container}>
        <div className={cl.block}>
          <Link to="/" className={cl.back}>
            <img src={arrowLeft} alt="" />
          </Link>
          <Link to="/" className={cl.home}>
            <img src={home} alt="" />
          </Link>
        </div>

        <div className={cl.fullscreen_input_container}>
          <h1 className={cl.screen_title}>Поиск</h1>
          <div className={cl.img_container}>
            <img src={loop} alt="" className={cl.loop_img} />
            <input
                type="text"
                placeholder="Поиск мест и событий"
                className={cl.fullscreen_input}
                onFocus={handleInputClick}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                onKeyUp={handleKeyUp}
                onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        <div className={cl.postsContainer}>
          <div className={cl.card}>
            {Array.isArray(searchResults.data) &&
                searchResults.data.length > 0 &&
                searchResults.data.map((result, index) => (
                    <div key={`${result.id}-${index}`} className={cl.searchResult}>
                      <img
                          src={`https://places-test-api.danya.tech${result.attributes.images.data[0].attributes.url}`}
                          alt={result.attributes.title}
                          className={cl.searchResultPhoto}
                      />
                      <p className={cl.searchResultSubtitle}>
                        {result.attributes.content || "No content available"}
                      </p>
                      <p className={cl.searchResultTitle}>
                        {result.attributes.title}
                      </p>
                    </div>
                ))}
          </div>
          {loading && <p>Loading...</p>}
          {searchResults.data?.length >= 4 && (
              <div className={cl.section__places__button}>
                <button className={cl.section__places__btn} onClick={handleLoadMore}>
                  Загрузить еще
                </button>
              </div>
          )}
        </div>
      </div>
  );
};

export default Input;



