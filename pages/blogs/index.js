import Head from 'next/head';
import React from 'react';
import BlogList from '../../components/landing/recent-blog-list/RecentBlogList';

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <main className="main-container">
        <div className="blog-list-container">
          <BlogList blogs={[{}, {}, {}, {}]} />
        </div>
      </main>
    </>
  );
};

export default Blogs;
