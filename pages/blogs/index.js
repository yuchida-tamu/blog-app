import Head from 'next/head';
import React from 'react';
import BlogList from '../../components/landing/recent-blog-list/RecentBlogList';
import { Header } from '../../components/layout/header/Header';

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main className="main-container">
        <div className="blog-list-container">
          <BlogList blogs={[{}, {}, {}, {}]} />
        </div>
      </main>
    </>
  );
};

export default Blogs;
