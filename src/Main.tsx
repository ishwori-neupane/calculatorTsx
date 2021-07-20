import React from "react";
import BlogSection from "./BlogSection";
import Tags from "./components/Tags";
import PopularPost from "./components/PopularPost";
import NavBar from "./components/NavBar";
import Header from "./Header";

const Main = () => {
  return (
    <>
      <NavBar/>
      <div className="w3-light-grey">
        <div className="w3-content" style={{ maxWidth: 1400 }}>
          <Header/>
          <div className="w3-row">
            <BlogSection />

            <div className="w3-col l4">
              <div className="w3-card w3-margin w3-margin-top">
                <img
                  src="https://www.w3schools.com/w3images/avatar_g.jpg" alt=""
                  style={{ width: "100%" } }
                />
                <div className="w3-container w3-white">
                  <h4>
                    <b>Ishwori Neupane</b>
                  </h4>
                  <p>
                    Just me, myself and I, exploring the universe of uknownment.
                    I have a heart of love and a interest of lorem ipsum and
                    mauris neque quam blog. I want to share my world with you.
                  </p>
                </div>
              </div>
              <hr />
              <PopularPost/>
               <hr />
               <Tags/>
              </div>
          </div>
          <br />
        </div>
      </div>
      <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
        <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
          Previous
        </button>
        <button className="w3-button w3-black w3-padding-large w3-margin-bottom">
          Next &raquo;
        </button>
        <p>
          Powered by{" "}
          <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
            w3.css
          </a>
        </p>
      </footer>
    </>
  );
};

export default Main;
