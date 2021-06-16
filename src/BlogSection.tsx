import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogList from "./components/BlogList";

interface IBlog {
  id: number;
  title: string;
  content: string;
  image: string;
}
const BlogSection = () => {
  const [blogs, setBlogs] = useState([] as IBlog[]);

  const fetchAllBlogs = async () => {
    const response = await axios.get("http://localhost:3010/blogs");
    setBlogs(response.data);
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className="w3-col l8 s12">
      {blogs.map((blog) => (
        <>
          <BlogList data={blog} />
          <hr />
        </>
      ))}
    </div>
  );
};

export default BlogSection;
