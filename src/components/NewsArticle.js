import React from 'react';
//import '../css-modules/_flexgrid.css';
//import '../assets/css/styles.css';


const NewsArticle = (props) => {
    return (
        <div>

            <div className='row'>
                <div className='small-11 page-title'>
                    <div className='page-title__text-box'>
                        <h1>{props.articleData.mainArticleTitle}</h1>
                    </div>
                </div>
            </div>

            <div className='small-12 large-11 page-content__content-box'>
                <img src={props.articleData.image} alt={props.articleData.altText} />
                <p className='page-content__heading'>
                    <strong><em>{props.articleData.mainArticleSubtitle}</em></strong>
                </p>
                <p>
                    {props.articleData.paragraph1}
                </p>
                <p>
                    {props.articleData.paragraph2}
                </p>
                <p>
                    {props.articleData.paragraph3}
                </p>
                <p>
                    {props.articleData.paragraph4}
                </p>
                <p>
                    {props.articleData.paragraph5}
                </p>
                <p>
                    {props.articleData.paragraph6}
                </p>
                <p>
                   <a href="http://www.southdowns.gov.uk/planning" target="blank">
                       {props.articleData.link}
                   </a>
                </p>
                <p>
                    {props.articleData.paragraph7}
                </p>
            </div>


        </div>


    )
}

export default NewsArticle;
