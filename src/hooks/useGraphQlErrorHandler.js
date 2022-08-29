import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useGraphQlErrorHandler = ({ loading, error }) => {
  const navigate = useNavigate();

  const handleError = useCallback(() => {
    navigate('../error_404', { replace: true });
  }, [navigate]);

  useEffect(() => {
    if (!loading && error) {
      handleError();
    }
  }, [loading, error, handleError]);
};
