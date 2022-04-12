import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import './Posts.css'



const Posts = () => {

    const  [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>response.json()).then((list)=>setPosts(list));
        },[]);

    if (!posts.length) {
        return null
    };

    return(
      <div className={"content_box"}>
          <ol>
              {posts.map((el)=>(
                  <li  key={el.id} >
                      <Link to={`/post/${el.id}`} className={"post"}>{el.title}</Link>
                  </li>
              ))}
          </ol>
      </div>
    );
}

export default Posts;