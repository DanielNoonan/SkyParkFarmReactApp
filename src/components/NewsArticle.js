import React from 'react';
//import '../css-modules/_flexgrid.css';
//import '../assets/css/styles.css';


const NewsArticle = ({articleData}) => {
    return (
        <div>

            <div className='row'>
                <div className='small-11 page-title'>
                    <div className='page-title__text-box'>
                        <h1>{articleData.mainArticleTitle}</h1>
                    </div>
                </div>
            </div>

            <div className='small-12 large-11 page-content__content-box'>
                <img src={articleData.image} alt={articleData.altText} />
                <p className='page-content__heading'>
                    <strong><em>{articleData.mainArticleSubtitle}</em></strong>
                </p>
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
                   <a href="http://www.southdowns.gov.uk/planning" target="blank">
                       {articleData.link}
                   </a>
                </p>
                <p>
                    {articleData.paragraph7}
                </p>
            </div>


        </div>


    )
}

export default NewsArticle;
