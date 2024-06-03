import Post from "../post";
import {useState, useEffect} from 'react';
import "./posts.css";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const axios = require('axios')

const Posts = () => {
  const [posts, setPosts] = useState()
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/posts',
      data: {
        currentUserID: currentUser.users_id,
      }
    })
      .then(function (response) {
        setPosts(response)
      })
      // BURADA BACKENDDEN GÖNDERİLEN HATA MESAJINI YAKALIYORUZ.
      .catch(function (error) {
        console.log(error.response.data)
      })
  }, [])
  

  return <div className="posts">
    {posts?.data?.map(post=>(
      <Post post={post} key={post.post_id}/>
    ))}
  </div>;
};

export default Posts;