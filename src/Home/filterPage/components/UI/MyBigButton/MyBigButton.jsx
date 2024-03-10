import React from 'react';
import cl from "./MyBigButton.module.css"
import {useNavigate} from "react-router-dom";

const MyBigButton = ({onSelectCategory,handleFilterPageClose,categoryId,children, ...props }) => {
    const navigate = useNavigate()
    const handleButtonClick = () => {
        if (categoryId) {
            console.log('categoryId:', categoryId); // Добавьте эту строку
            navigate(`/page2/${categoryId}`);
            if (onSelectCategory) {
                onSelectCategory(categoryId);
            }
            handleFilterPageClose();
        } else {
            console.error('Invalid categoryId');
        }
    };

    console.log(categoryId)
    return (
        <button onClick={handleButtonClick} {...props} className={cl.myBtn}>
            {children}
        </button>
    );
};

export default MyBigButton;