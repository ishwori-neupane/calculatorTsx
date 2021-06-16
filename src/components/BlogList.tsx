import React from "react";

interface IBlog {
  id: number;
  title: string;
  content: string;
  image: string;
}
const BlogList = (props: any) => {
  const { data } = props;
  return (
    <div className="w3-card-4 w3-margin w3-white">
      <img src={data.image} alt="Nature" style={{ width: "100%" }} />
      <div className="w3-container">
        <h3>
          <b>{data.title}</b>
        </h3>
        <h5>
          Title description, <span className="w3-opacity">April 7, 2014</span>
        </h5>
      </div>

      <div className="w3-container">
        <p>{data.content}</p>
        <div className="w3-row">
          <div className="w3-col m8 s12">
            <p>
              <button className="w3-button w3-padding-large w3-white w3-border">
                <b>READ MORE &raquo;</b>
              </button>
            </p>
          </div>
          <div className="w3-col m4 w3-hide-small">
            <p>
              <span className="w3-padding-large w3-right">
                <b>Comments &nbsp;</b> <span className="w3-tag">0</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
