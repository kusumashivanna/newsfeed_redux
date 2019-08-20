import React, { Component } from "react";

export default class News extends Component {
  componentDidMount = () => {
    this.props.GetNEW();
  };
  render() {
    return (
      <div>
        <div>Redux training</div>
        <hr/>
        {this.props.NewsData &&
          this.props.NewsData.newsData && this.props.NewsData.newsData.articles &&
          this.props.NewsData.newsData.articles.map(news => {
            return (
              <div>
                <div>{news.title}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
