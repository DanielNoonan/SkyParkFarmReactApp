import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/styles.css';

import frontPageImageOne from './assets/images/deer-group-MEDIUM.jpg';
import frontPageImageTwo from './assets/images/red-deer-close-up-MEDIUM.jpg';
import frontPageImageThree from './assets/images/spf-sunrise-MEDIUM.jpg';
import frontPageImageFour from './assets/images/deer-following-dom-MEDIUM.jpg';
import frontPageImageFive from './assets/images/open-space-MEDIUM.jpg';

import articleImageOne from './assets/images/races-MEDIUM.jpg';
import articleImageTwo from './assets/images/mum-baby-deer-MEDIUM.jpg';
import articleImageThree from './assets/images/quebec-cottage-MEDIUM.jpg';
import articleImageFour from './assets/images/farm-renovation-MEDIUM.jpg';
import articleImageFive from './assets/images/deer-grazing-lensflare-MEDIUM.jpg';
import articleImageSix from './assets/images/red-deer-MEDIUM.jpg';

let frontPage = {
    title: 'The Reintroduction of Red Deer into the Parish of Harting.',
    subtitle1: 'Hart - ',
    subtitle2: 'An adult male deer, especially a red deer over five years old - Oxford Dictionary refers',
    subtitle3: 'Putting the Hart back into Harting',
    subtitle4: 'A Rich History',
    subtitle5: 'Changing Times',
    subtitle6: 'History Revisited',
    subtitle7: 'Large Free Roaming Spaces',
    frontPageImageOne: frontPageImageOne,
    frontPageImageTwo: frontPageImageTwo,
    frontPageImageThree: frontPageImageThree,
    frontPageImageFour: frontPageImageFour,
    frontPageImageFive: frontPageImageFive,
    altTextOne: 'Front Page Image One',
    altTextTwo: 'Front Page Image Two',
    altTextThree: 'Front Page Image Three',
    altTextFour: 'Front Page Image Four',
    altTextFive: 'Front Page Image Five',
    paragraph1: 'Over the last eight hundred years the manor of Harting has been home to a number of deer parks, in which red deer (the largest species of wild deer found in the UK) were emparked (enclosed within a fence) in landscaped parkland.',
    paragraph2: ' In the context of those times, a time when wild venison could not be freely sold; with these parks came enormous status to their owners. It should be borne in mind that the building of a park required a royal licence and there is little doubt that the associated earthworks and tree planting schemes must have influenced swathes of the landscape that this area of the South Downs National Park still benefits from today.',
    paragraph3: "From as far back as medieval times through to the eighteenth century, ownership of a deer park was just about the pinnacle of achievement in terms of social standing, allowing the park's owner to entertain wealthy guests with hunting as well as the significant prestige associated with being able to bestow venison as a gift.",
    paragraph4: 'Indeed, A History of Harting, by Rev. H. D. Gordon, published in 1876, said of one of the Harting deer parks that the Duke of Richmond, and three succeeding orthodox Protestant Bishops of Chichester had pronounced the red deer as being "the best venison in the world."',
    paragraph5: 'However, as the years rolled on and the laws relaxed, allowing the free trade of venison, so hunting and the keeping of red deer ceased to have the material value and status that it had held previously, and as a result deer parks fell into decline across the country and indeed into extinction in the Parish of Harting.',
    paragraph6: 'Sky Park Farm seeks to revive the tradition of enclosed red deer in the Parish.',
    paragraph7: 'Our herd of red deer already numbers over 100 animals and these numbers will be bred-up over the coming years. As with the Harting deer parks of old, Sky Park Farm seeks to breed animals for both live sales and venison, but without the element of hunting that would have been of such significance to our ancestors.',
    paragraph8: 'Our aim at Sky Park Farm is to balance modern cutting edge deer farming techniques, with the beauty and traditions of the South Downs National Park, allowing these magnificent animals to be seen and enjoyed once again in the same fields and perhaps even under the same ancient oak trees where they once roamed. Sky Park Farm is lucky to have the benefit of numerous centuries-old oak trees, and with the same hindsight that our forebears showed by planting these trees, we have ourselves planted scores of new oaks and other native trees; together with hundreds of mixed native hedging plants which we hope will benefit future generations to come.',
    paragraph9: 'There are 15 deer enclosures at Sky Park Farm all connected to one-another by a series of races, which are essential for the movement and rotation of deer between fields.',
    paragraph10: 'When our deer are not being moved these races are ideal for for people to walk around and view these majestic animals close up. The setting of our red deer in the South Downs National Park is therefore much the same as in previous centuries, with the main difference being that our deer are no longer shot by our guests with bows and arrows or guns, but rather through the lens of a camera.'
}

let articleData1 = {
    articleNumber: 1,
    newsColumnTitle: 'Petersfield Post',
    image: articleImageOne,
    altText: 'The races at Sky Park Farm',
    introText: 'The Petersfield Post prints local interest article on Sky Park Farm',
    mainArticleTitle: "Farm hopes to hard surface 'races' so deer can feed easily",
    mainArticleSubtitle: "One of the 'races' at Sky Park Farm",
    paragraph1: 'A DEER farm near West Harting has applied to hard surface farm tracks to allow deer to move freely.',
    paragraph2: "Owners of Sky Park Farm on the Harting to Rogate road plan to hard surface tracks or 'races' between feeding meadows to ease the movement of deer between them.",
    paragraph3: 'At the moment there are about 100 red deer on the farm, but in time that number is expected to double, says joint farm owner Pierce Noonan.',
    paragraph4: 'In plans with the South Downs National Park Authority (SDNPA), it says that last winter the races became waterlogged and churned up, causing problems for the deer, and the movement of farm vehicles.',
    paragraph5: "It also says the type of compacted surfacing being proposed is a mix of sand, gravel and clay called 'hoggin', which is available from a quarry over the road from the farm.",
    paragraph6: 'The farm has a contract to supply venison to Waitrose. The plans can be viewed on the website at:',
    link: 'www.southdowns.gov.uk/planning',
    paragraph7: 'Article from The Petersfield Post - (picture additional)'
}

let articleData2 = {
    articleNumber: 2,
    newsColumnTitle: 'Baby Deer Born Last Week',
    image: articleImageTwo,
    altText: 'This is some alternative text',
    introText: 'Introduction Text Two',
    mainArticleTitle: 'Baby Deer Born Last Week',
    mainArticleSubtitle: 'Article Two Subtitle Text',
    paragraph1: 'Full Article Text'
}
let articleData3 = {
    articleNumber: 3,
    newsColumnTitle: 'Quebec Cottage',
    image: articleImageThree,
    altText: 'This is some alternative text',
    introText: 'Introduction Text Three',
    mainArticleTitle: 'Luxury Accommodation',
    mainArticleSubtitle: 'Article Three Subtitle Text',
    paragraph1: 'Full Article Text'
}
let articleData4 = {
    articleNumber: 4,
    newsColumnTitle: 'Farm Renovation',
    image: articleImageFour,
    altText: 'This is some alternative text',
    introText: 'Introduction Text Four',
    mainArticleTitle: 'Farm Renovation',
    mainArticleSubtitle: 'Article Four Subtitle Text',
    paragraph1: 'Full Article Text'
}
let articleData5 = {
    articleNumber: 5,
    newsColumnTitle: 'Deer Feeding Open To Public',
    image: articleImageFive,
    altText: 'This is some alternative text',
    introText: 'Introduction Text Five',
    mainArticleTitle: 'Deer Feeding Open To Public',
    mainArticleSubtitle: 'Article Five Subtitle Text',
    paragraph1: 'Full Article Text'
}
let articleData6 = {
    articleNumber: 6,
    newsColumnTitle: 'Name A Deer Competition',
    image: articleImageSix,
    altText: 'This is some alternative text',
    introText: 'Introduction Text Six',
    mainArticleTitle: 'Name A Deer Competition',
    mainArticleSubtitle: 'Article Six Subtitle Text',
    paragraph1: 'Full Article Text'
}

ReactDOM.render(
    <App frontPage={frontPage} articleData1={articleData1} articleData2={articleData2} articleData3={articleData3} articleData4={articleData4} articleData5={articleData5} articleData6={articleData6}/>,
    document.getElementById('root')
);
registerServiceWorker();


