import React, { useEffect, useState } from 'react';
import Blog from './components/Blog';
import Sidebar from './components/Sidebar';
import './App.css';
import blogsData from './data/blogs.json';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  return (
    <div className="app-container">
      <Sidebar blogs={blogs} />
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <Blog key={index} title={blog.title} image={blog.image} content={blog.content} />
        ))}
      </div>
    </div>
  );
};

export default App;
