import {useEffect, useState} from "react";
import { NavLink, useParams} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";

import './Post.css'




const Post = () => {

    const  [post, setPost] = useState([null]);
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response)=>response.json()).then((list)=>setPost(list));
        },[]);


    return(
      <div className={"content_box"}>
          {post && (
              <>
                  <div className={"backpage"}>
                      <NavLink to={"/post"}>
                          <ArrowLeftOutlined />
                      </NavLink>
                  </div>
                  <div className={"post_title"}>
                        {post.title}
                  </div>
                  <div className={"post_content"}>
                        {post.body}
                  </div>
              </>
              )
          }
      </div>
    );
}

export default Post;