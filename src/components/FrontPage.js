import React from 'react';
//import '../css-modules/_flexgrid.css';
//import '../assets/css/styles.css';


const FrontPage = (props) => {
    return (
        <div className='frontPageContainer'>

            <div className='row'>
                <div className='small-11 page-title'>
                    <div className='page-title__text-box'>
                        <h1>{props.frontPage.title}</h1>
                        <h2>{props.frontPage.subtitle1}<em>{props.frontPage.subtitle2}</em></h2>
                    </div>
                </div>
            </div>

            <div className='small-12 large-11 page-content__content-box'>
                <img src={props.frontPage.frontPageImageOne} alt={props.frontPage.altTextOne} />
                <p className='page-content__heading'>
                    <strong><em>{props.frontPage.subtitle3}</em></strong>
                </p>

                <p>
                    {props.frontPage.paragraph1}
                </p>
                <p>
                    {props.frontPage.paragraph2}
                </p>
            </div>
            <div className='small-12 large-11 page-content__content-box'>
                <img src={props.frontPage.frontPageImageTwo} alt={props.frontPage.altTextTwo} />
                <p className='page-content__heading'>
                    <strong><em>{props.frontPage.subtitle4}</em></strong>
                </p>

                <p>
                    {props.frontPage.paragraph3}
                </p>
                <p>
                    {props.frontPage.paragraph4}
                </p>
            </div>
            <div className='small-12 large-11 page-content__content-box'>
                <img src={props.frontPage.frontPageImageThree} alt={props.frontPage.altTextThree} />
                <p className='page-content__heading'>
                    <strong><em>{props.frontPage.subtitle5}</em></strong>
                </p>

                <p>
                    {props.frontPage.paragraph5}
                </p>
                <p>
                    {props.frontPage.paragraph6}
                </p>
                <p>
                    {props.frontPage.paragraph7}
                </p>
            </div>
            <div className='small-12 large-11 page-content__content-box'>
                <img src={props.frontPage.frontPageImageFour} alt={props.frontPage.altTextFour} />
                <p className='page-content__heading'>
                    <strong><em>{props.frontPage.subtitle6}</em></strong>
                </p>

                <p>
                    {props.frontPage.paragraph8}
                </p>
            </div>
            <div className='small-12 large-11 page-content__content-box'>
                <img src={props.frontPage.frontPageImageFive} alt={props.frontPage.altTextFive} />
                <p className='page-content__heading'>
                    <strong><em>{props.frontPage.subtitle7}</em></strong>
                </p>

                <p>
                    {props.frontPage.paragraph9}
                </p>
                <p>
                    {props.frontPage.paragraph10}
                </p>
            </div>


        </div>


    )
}

export default FrontPage;
