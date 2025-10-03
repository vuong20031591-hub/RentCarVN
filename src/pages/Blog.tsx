import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Blog page redirects to News
const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/news', { replace: true });
  }, [navigate]);

  return null;
};

export default Blog;
