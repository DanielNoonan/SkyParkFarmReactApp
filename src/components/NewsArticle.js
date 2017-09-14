import React from 'react';
import frontPageButton from './frontPageButton';
//import '../css-modules/_flexgrid.css';
//import '../assets/css/styles.css';


const NewsArticle = ({articleData, handlePrintButton}) => {
    return (
        <div>


            <div className='row'>
               <frontPageButton onClick={handlePrintButton} className="news-column__button">{articleData.button}</frontPageButton>
            <div className='small-11 page-title'>
                    <div className='page-title__text-box'>
                        <h1>{articleData.mainArticleTitle}</h1>
                    </div>
                </div>
            </div>

            <div className='small-12 large-11 page-content__content-box'>
                <img src={articleData.image1} alt={articleData.altText1} />
                <img src={articleData.image2} alt={articleData.altText2} />
                <p className='page-content__heading'>
                   <a href="http://www.southdowns.gov.uk/planning" target="blank">
                       {articleData.link}
                   </a>
                </p>
                <img src={articleData.image3} alt={articleData.altText3} />
                <p className='page-content__heading'>
                    <strong><em>{articleData.mainArticleSubtitle}</em></strong>
                </p>
            {/*
                <p>
                    {articleData.paragraph1}
                </p>
                <p>
                    {articleData.paragraph2}
                </p>
                <p>
                    {articleData.paragraph3}
                </p>
                <p>
                    {articleData.paragraph4}
                </p>
                <p>
                    {articleData.paragraph5}
                </p>
                <p>
                    {articleData.paragraph6}
                </p>
                <p>
                    {articleData.paragraph7}
                </p>
            */}
            </div>


        </div>


    )
}

export default NewsArticle;
