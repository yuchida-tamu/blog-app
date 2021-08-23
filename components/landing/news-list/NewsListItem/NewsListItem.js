import React from 'react';

import { IconContext } from 'react-icons';
import { BsPencil } from 'react-icons/bs';

const NewsListItem = ({
  item = { heading: 'Bionic', content: 'New chapter is added' },
}) => (
  <li className="news-list__item">
    <IconContext.Provider value={{ color: 'white', className: 'icon' }}>
      <BsPencil />
    </IconContext.Provider>
    <span className="heading">{item.heading} </span>
    <span className="content">{item.content}</span>
  </li>
);

export default NewsListItem;
