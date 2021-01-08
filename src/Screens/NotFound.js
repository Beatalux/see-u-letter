import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      시작페이지로...
    </Link>
  </div>
);

export default NotFound;