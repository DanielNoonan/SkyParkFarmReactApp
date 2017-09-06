import React from 'react';
import NewsItem from './components/NewsItem';
import NewsArticle from './components/NewsArticle';
import FrontPage from './components/FrontPage';
//import './css-modules/_flexgrid.css';
//import './App.css';
import './assets/css/styles.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articleData: '',
            frontPage: this.props.frontPage,
            showFrontPage: true
        }
        this.buttonClicked = this.buttonClicked.bind(this);
    }


    buttonClicked(articleDataNumber) {
        this.setState({
            articleData: articleDataNumber,
            showFrontPage: false
        });
        window.scrollTo(0, 0)
        return;
    }


  render() {
        console.log(this.props.frontPage, this.props.articleData1, this.props.articleData2);
    return (

        <div className='row full-page-row full-page-row--news-column-padding'>

            <div className='small-12 large-3 news-column'>

                <div className='row'>
                    <div className='small-12'>
                        <div className='news-column__main-title-box'>
                            <h1 className='news-column__main-title'>LATEST NEWS</h1>
                        </div>
                    </div>
                </div>


                <div className='row news-column__content-box'>

                        <NewsItem articleData={this.props.articleData1} buttonClicked={() => this.buttonClicked(this.props.articleData1)} />

                        <NewsItem articleData={this.props.articleData2} buttonClicked={() => this.buttonClicked(this.props.articleData2)} />

                        <NewsItem articleData={this.props.articleData3} buttonClicked={() => this.buttonClicked(this.props.articleData3)} />

                        <NewsItem articleData={this.props.articleData4} buttonClicked={() => this.buttonClicked(this.props.articleData4)} />

                        <NewsItem articleData={this.props.articleData5} buttonClicked={() => this.buttonClicked(this.props.articleData5)} />

                        <NewsItem articleData={this.props.articleData6} buttonClicked={() => this.buttonClicked(this.props.articleData6)} />

                </div>
            </div>



            <div className='small-12 large-9 page-content'>
                <div className='row page-content__outer-row'>
                    <div className='small-12 large-11'>
                        <div className='row page-content__inner-row page-content__inner-row--blue-border'>

                    {/*Only shows FrontPage component if this.state.frontpage is true.
                    It is set to false when a news item button is clicked */}
                           {this.state.showFrontPage &&
                            <FrontPage frontPage={this.state.frontPage} />
                            }

                            <NewsArticle articleData={this.state.articleData} />
                        </div>

                    </div>
                </div>
            </div>



        </div>

    );
  }
}

export default App;
