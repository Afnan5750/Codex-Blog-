import React from 'react';
import './Sidebar.css';

const Sidebar = ({ blogs }) => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-heading">Recent Blogs</h3>
      {blogs.map((blog, index) => (
        <div key={index} className="sidebar-item">
          <img src={blog.image} alt={blog.title} className="sidebar-image" />
          <h4 className="sidebar-title">{blog.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;