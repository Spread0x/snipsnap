import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './video-player.module.scss';

const cx = classNames.bind(styles);

const VideoPlayer = ({ videoSrc, className: additionalClassName }) => (
  <div className={cx('wrapper', additionalClassName)}>
    <div className={cx('inner')}>
      <video src={videoSrc} type="video/mp4" controls />
    </div>
  </div>
);

VideoPlayer.propTypes = {};

VideoPlayer.defaultProps = {};

export default VideoPlayer;
