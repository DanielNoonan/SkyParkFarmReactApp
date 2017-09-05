import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import articleImageOne from './assets/images/mum-baby-deer-MEDIUM.jpg'
import articleImageTwo from './assets/images/red-deer-close-up-MEDIUM.jpg'

let articleData1 = {
    articleNumber: 1,
    title: 'Article Title One',
    image: articleImageOne,
    altText: 'Mother deer with baby',
    introText: 'Introduction Text One',
    fullArticleText: 'Full Article Text One'
}

let articleData2 = {
    articleNumber: 2,
    title: 'Article Title Two',
    image: articleImageTwo,
    altText: 'This is some alternative text',
    introText: 'Introduction Text Two',
    fullArticleText: 'Full Article Text Two'
}

ReactDOM.render(
    <App articleData1={articleData1} articleData2={articleData2}/>,
    document.getElementById('root')
);
registerServiceWorker();
