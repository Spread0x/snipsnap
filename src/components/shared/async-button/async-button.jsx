import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

import Button from 'components/shared/button';

const SUCCESS_TIMEOUT_SECONDS = 2;

const AsyncButton = ({ type, text, successText, className, onClick, onError }) => {
  const [color, setColor] = useState('default');
  const [loading, setIsLoading] = useState(false);

  const [currentWidth, setCurrentWidth] = useState(null);

  // preserve button width to show the same size for success state
  const buttonRef = useRef(null);
  useEffect(() => {
    if (typeof window === 'undefined' || typeof buttonRef.current === 'undefined') {
      return;
    }
    if (color === 'default') {
      setCurrentWidth(buttonRef.current.getBoundingClientRect().width);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonRef.current]);

  return (
    <Button
      ref={buttonRef}
      className={className}
      type={type}
      themeColor={color}
      isLoading={loading}
      onClick={async () => {
        setIsLoading(true);
        try {
          await onClick();
          setIsLoading(false);
          setColor('success');
          await setTimeout(() => setColor('default'), SUCCESS_TIMEOUT_SECONDS * 1000);
        } catch (error) {
          onError(error);
          setIsLoading(false);
          setColor('default');
        }
      }}
      {...(color === 'success' ? { width: currentWidth } : {})}
    >
      {color === 'success' ? successText : text}
    </Button>
  );
};

AsyncButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  text: PropTypes.string.isRequired,
  successText: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onError: PropTypes.func,
};

AsyncButton.defaultProps = {
  type: 'button',
  successText: 'success',
  className: undefined,
  onClick: undefined,
  onError: undefined,
};

export default AsyncButton;