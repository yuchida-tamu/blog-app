import React from 'react';
import NewsListItem from './NewsListItem/NewsListItem';
const NewsList = ({ news = [{}, {}, {}, {}, {}] }) => {
  const renderNews = news.map((item, i) => <NewsListItem key={i} />);

  return (
    <div className="news-container">
      <h2>NEWS</h2>
      <hr className="divider" />
      <ul className="news-list">{renderNews}</ul>
      <span className="btn">More</span>
      <hr className="divider" />
    </div>
  );
};

export default NewsList;
