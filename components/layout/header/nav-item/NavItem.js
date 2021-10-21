import { withRouter } from 'next/router';
import Link from 'next/link';

const NavItem = ({ path, label, router }) => {
  return (
    <li className={router?.pathname === path ? 'nav-item action' : 'nav-item'}>
      <Link href={path}>
        <a className="link">{label}</a>
      </Link>
    </li>
  );
};

export default withRouter(NavItem);
