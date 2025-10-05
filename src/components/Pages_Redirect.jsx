import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectComponent = ({ to, delayInMs = 0 }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to, { replace: true });
    }, delayInMs);

    return () => clearTimeout(timer);
    
  }, [navigate, to, delayInMs]);

  const seconds = (delayInMs / 1000).toFixed(1);
  return (
    <></>
  );
};

export default RedirectComponent;