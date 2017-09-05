import React from 'react';
import NewsItem from './components/NewsItem';
import NewsArticle from './components/NewsArticle';
import './css-modules/_flexgrid.css';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articleData: ''
        }
        this.buttonClicked = this.buttonClicked.bind(this);
    }


    buttonClicked(articleNumber) {
        if(articleNumber === 1) {
            console.log(this.props.articleData1);
            this.setState({
                articleData: this.props.articleData1
            });
        } else if(articleNumber === 2) {
            console.log(this.props.articleData2);
            this.setState({
                articleData: this.props.articleData2
            });
        }
        window.scrollTo(0, 0)
        return;
    }

  render() {
        console.log(this.props.articleData1, this.props.articleData2);
    return (

        <div className='row full-page-row'>

            <div className='demo-styles news-column small-3'>
                <NewsItem articleData={this.props.articleData1} buttonClicked={() => this.buttonClicked(1)} />
                <NewsItem articleData={this.props.articleData2} buttonClicked={() => this.buttonClicked(2)} />

{/*<NewsItem articleData={this.props.articleData3} buttonClicked={() => this.buttonClicked(3)} /><NewsItem articleData={this.props.articleData4} buttonClicked={() => this.buttonClicked(4)} /><NewsItem articleData={this.props.articleData5} buttonClicked={() => this.buttonClicked(5)} /><NewsItem articleData={this.props.articleData6} buttonClicked={() => this.buttonClicked(6)} />*/}

            </div>

            <div className='demo-styles content-area row small-8'>

                <NewsArticle articleData={this.state.articleData} />

            </div>

        </div>

    );
  }
}

export default App;
