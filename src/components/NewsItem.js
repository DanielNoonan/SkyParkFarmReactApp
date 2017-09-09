import React from 'react';
import frontPageButton from './frontPageButton';
//import '../css-modules/_flexgrid.css';
//import '../css-modules/NewsItem.css';
//import '../assets/css/styles.css';

const NewsItem = ({articleData, handleNewsButton}) => {

    return (
        <div className="small-12 news-column__content-item">
            <h1 className="news-column__content-title">{articleData.newsColumnTitle}</h1>

            <img className="news-column__image" src={articleData.image} alt={articleData.altText} />

            <p className="news-column__intro-text">{articleData.introText}</p>

            <frontPageButton onClick={handleNewsButton} className="news-column__button">Read More</frontPageButton>

        </div>
    )
}

export default NewsItem;
