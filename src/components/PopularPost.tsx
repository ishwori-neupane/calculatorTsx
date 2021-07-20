import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface IBlog {
  id: number;
  title: string;
  content: string;
  image: string;
  popular?: boolean;
}
const PopularPost = () => {
    const [popularPost, setPopularPost] = useState([] as IBlog[]);
    const fetchPopularPost = async () => {
        let response = await axios.get("http://localhost:3010/popularPosts");
        setPopularPost(response.data);

    }
  useEffect(() => {
    fetchPopularPost();
  }, []);
  const getPopularOfAll = (blog: IBlog) => {
    return !blog.popular;
  }
    return (
        <div>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                  <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {popularPost.filter(getPopularOfAll).map((popularpost) => (
                         <li className="w3-padding-16">
                    <img
                      src={popularpost.image}
                      alt=""
                      className="w3-left w3-margin-right"
                      style={{ width: "50px" }}
                    />
                    <span className="w3-large">{popularpost.title}</span>
                    <br />
                    <span>{popularpost.content}</span>
                  </li>
                     ))}
                </ul>
              </div>
             
        </div>
    )
}

export default PopularPost
