import classNames from 'classnames/bind';
import { signOut, useSession } from 'next-auth/client';
import PropTypes from 'prop-types';

import DropdownMenu from 'components/shared/dropdown-menu';
import Input from 'components/shared/input';

import Button from '../button';

import Menu from './menu/menu';
import styles from './sidebar.module.scss';

const cx = classNames.bind(styles);

const Sidebar = () => {
  const [session] = useSession();
  const {
    user: { name: userName },
  } = session;
  const avatar = userName.slice(0, 1);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('user-wrapper')}>
        <div className={cx('user-info')}>
          <div className={cx('avatar-wrapper')}>
            <div className={cx('avatar')}>{avatar}</div>
          </div>
          <span>{userName}</span>

          <DropdownMenu className={cx('user-info-dropdown')}>
            <a href="/" onClick={() => signOut()}>
              Log out
            </a>
          </DropdownMenu>
        </div>
        <Button theme="primary">Create Template</Button>
      </div>
      <Menu />
      <div className={cx('templates')}>
        <h3>Templates groups</h3>
      </div>
    </div>
  );
};

export default Sidebar;