import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface IBlog {
  id: number;
    tag:string
}
function Tags() {
    const [tags, setTags] = useState([] as IBlog[]);
    const fetchTags = async () => {
        let response = await axios.get(" http://localhost:3010/tags");
        setTags(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        fetchTags();
        
    }, [])

    return (
        <div>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                  <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                  <p>
                    <span className="w3-tag w3-black w3-margin-bottom">
                      Travel
                        </span>{" "}
                        {tags.map((tag) => (
                        <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      {tag.tag}
                    </span>
                     ))}
                    
                  </p>
                </div>
              </div>
            
        </div>
    )
}

export default Tags
