import React from 'react';
import './Blog.css';

const Blog = ({ title, image, content }) => {
  return (
    <div className="blog">
      <img src={image} alt={title} className="blog-image" />
      <h3 className="blog-title">{title}</h3>
      <p className="blog-content">{content}</p>
      <button className="read-more-btn">Read More</button>
    </div>
  );
};

export default Blog;
