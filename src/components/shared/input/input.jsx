import classNames from 'classnames/bind';
import React from 'react';

import styles from './input.module.scss';

const cx = classNames.bind(styles);

const Input = ({ label }) => (
  <div className={cx('group')}>
    {/* <label className={cx('label')}>{label}</label> */}
    <div>
      <input
        className={cx('input')}
        type="text"
        value="Create React component"
        onChange={() => {
          console.log('changed');
        }}
      />
    </div>
  </div>
);

export default Input;