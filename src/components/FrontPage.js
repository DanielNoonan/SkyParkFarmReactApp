import React from 'react';
//import '../css-modules/_flexgrid.css';
//import '../assets/css/styles.css';


const FrontPage = ({frontPage}) => {
    return (
        <div className='frontPageContainer'>

            <div className='row'>
                <div className='small-11 page-title'>
                    <div className='page-title__text-box'>
                        <h1>{frontPage.title}</h1>
                        <h2>{frontPage.subtitle1}<em>{frontPage.subtitle2}</em></h2>
                    </div>
                </div>
            </div>

            <div className='small-12 large-11 page-content__content-box'>
                <img src={frontPage.frontPageImageOne} alt={frontPage.altTextOne} />
                <p className='page-content__heading'>
                    <strong><em>{frontPage.subtitle3}</em></strong>
                </p>

                <p>
                    {frontPage.paragraph1}
                </p>
                <p>
                    {frontPage.paragraph2}
                </p>
            </div>
            <div className='small-12 large-11 page-content__content-box'>
                <img src={frontPage.frontPageImageTwo} alt={frontPage.altTextTwo} />
                <p className='page-content__heading'>
                    <strong><em>{frontPage.subtitle4}</em></strong>
                </p>

                <p>
                    {frontPage.paragraph3}
                </p>
                <p>
                    {frontPage.paragraph4}
                </p>
            </div>
            <div className='small-12 large-11 page-content__content-box'>
                <img src={frontPage.frontPageImageThree} alt={frontPage.altTextThree} />
                <p className='page-content__heading'>
                    <strong><em>{frontPage.subtitle5}</em></strong>
                </p>

                <p>
                    {frontPage.paragraph5}
                </p>
                <p>
                    {frontPage.paragraph6}
                </p>
                <p>
                    {frontPage.paragraph7}
                </p>
            </div>
            <div className='small-12 large-11 page-content__content-box'>
                <img src={frontPage.frontPageImageFour} alt={frontPage.altTextFour} />
                <p className='page-content__heading'>
                    <strong><em>{frontPage.subtitle6}</em></strong>
                </p>

                <p>
                    {frontPage.paragraph8}
                </p>
            </div>
            <div className='small-12 large-11 page-content__content-box'>
                <img src={frontPage.frontPageImageFive} alt={frontPage.altTextFive} />
                <p className='page-content__heading'>
                    <strong><em>{frontPage.subtitle7}</em></strong>
                </p>

                <p>
                    {frontPage.paragraph9}
                </p>
                <p>
                    {frontPage.paragraph10}
                </p>
            </div>


        </div>


    )
}

export default FrontPage;
