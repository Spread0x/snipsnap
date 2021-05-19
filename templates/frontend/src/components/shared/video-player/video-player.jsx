import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './video-player.module.scss';

const cx = classNames.bind(styles);

const VideoPlayer = ({ videoSrc, className: additionalClassName }) => (
  <div className={cx('wrapper', additionalClassName)}>
    <div className={cx('inner')}>
      <iframe frameBorder="0" title="YouTube video player" src={videoSrc} />
    </div>
  </div>
);

VideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

VideoPlayer.defaultProps = {
  className: null,
};

export default VideoPlayer;