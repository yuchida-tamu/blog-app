import React from 'react';
import NavItem from './nav-item/NavItem';

export const Header = () => {
  const navBtns = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Blogs',
      path: '/blogs',
    },

    {
      label: 'Work',
      path: '/work',
    },
    {
      label: 'About',
      path: '/about',
    },
  ];

  const renderNavItem = navBtns.map((item, index) => (
    <NavItem
      path={item.path}
      label={item.label}
      key={`${item.label}_${index}`}
    />
  ));

  return (
    <header className="header">
      <nav className="header__navbar">
        <ul className="nav-list">{renderNavItem}</ul>
      </nav>
    </header>
  );
};
