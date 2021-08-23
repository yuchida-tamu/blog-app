import React from 'react';
import Image from 'next/image';
import thumbnailImage from '../../../public/assets/blogThumnail.jpg';
import RecentBlogListItem from './RecentBlogListItem/RecentBlogListItem';

const RecentBlogList = ({ blogs = [{}, {}, {}] }) => {
  const renderItems = blogs.map((blog, i) => <RecentBlogListItem key={i} />);
  return <ul className="recent-blog-list">{renderItems}</ul>;
};

export default RecentBlogList;
