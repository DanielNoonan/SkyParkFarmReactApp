import React from 'react';
import '../css-modules/_flexgrid.css';
import '../css-modules/NewsItem.css';

const NewsItem = (props) => {
    console.log('this image:', props)
    return (
        <div className="small-12 news-column__content-item">
            <h1 className="news-column__content-title">{props.articleData.title}</h1>

            <img className="news-column__image" src={props.articleData.image} alt={props.articleData.altText} />

            <p className="news-column__intro-text">{props.articleData.introText}</p>

            <a href="#/" onClick={props.buttonClicked} className="news-column__button modal-button--open">Read More</a>
        </div>
    )
}

export default NewsItem;
