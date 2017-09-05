import React from 'react';
import '../css-modules/_flexgrid.css';


const NewsArticle = (props) => {
    return (
        <div className='content-area__article small-10'>
           <h1>{props.articleData.title}</h1>
            <div><img src={props.articleData.image} alt={props.articleData.altText} /></div>
            <p>{props.articleData.fullArticleText}</p>
        </div>
    )
}

export default NewsArticle;
