import React from 'react';
import cl from './SelectBlock.module.css'
import MySelector from "../UI/MySelector/MySelector.jsx";
import MyLine from "../UI/MyLine/MyLine.jsx";

import Categories from "../Categories/Categories.jsx";
import Places from "../Places/Places.jsx";
import MyBigButton from "../UI/MyBigButton/MyBigButton.jsx";

const SelectBlock = ({activeCategory,handleFilterPageClose}) => {
    return (
        <>
            <div className={cl.selectBlock}>
                <MySelector>По популярности</MySelector>
                <MySelector>Сначала новые посты</MySelector>
            </div>
            <MyLine />
            <Categories handleFilterPageClose={handleFilterPageClose} activeCategory={activeCategory}/>
            <MyLine />

        </>
    );
};

export default SelectBlock;