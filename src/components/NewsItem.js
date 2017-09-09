import React from 'react';
//import '../css-modules/_flexgrid.css';
//import '../css-modules/NewsItem.css';
//import '../assets/css/styles.css';

const NewsItem = ({articleData, buttonClicked}) => {

    return (
        <div className="small-12 news-column__content-item">
            <h1 className="news-column__content-title">{articleData.newsColumnTitle}</h1>

            <img className="news-column__image" src={articleData.image} alt={articleData.altText} />

            <p className="news-column__intro-text">{articleData.introText}</p>

            <a href="#/" onClick={buttonClicked} className="news-column__button modal-button--open">Read More</a>
        </div>
    )
}

export default NewsItem;
