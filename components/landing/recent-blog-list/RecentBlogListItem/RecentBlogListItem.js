import React from 'react';
import Image from 'next/image';
import defaultThumbnail from '../../../../public/assets/blogThumnail.jpg';

const defaultTitle = 'How to write a good blog post';

const defaultDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam utest a gravida. Fusce dignissim quis...';

const RecentBlogListItem = ({
  blog = {
    title: defaultTitle,
    description: defaultDescription,
    thumbnail: defaultThumbnail,
  },
}) => (
  <li className="blog-list__item">
    <div className="blog-list__item__thumbnail-container">
      <Image
        src={blog.thumbnail}
        alt="thumbnail"
        layout="fill"
        objectFit="cover"
        objectPosition="right top"
        loading="eager"
      />
    </div>
    <div className="blog-list__item__content-container">
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
    </div>
  </li>
);

export default RecentBlogListItem;
