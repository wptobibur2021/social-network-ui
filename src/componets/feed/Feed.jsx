import './Feed.css'
import Share from "../share/Share";
import Post from "../post/Post";
import {Posts} from "../../dummyData";
import {useEffect, useState} from "react";
import axios from "axios";

const Feed = () => {
   const [posts, setPosts]= useState();

    // useEffect(() =>{
    //     axios.get('https://restcountries.eu/rest/v2/all')
    //         .then(response => setPosts(response.data.posts));
    //         console.log(posts)
    //
    // },[]);

   const allGetPosts = (e) =>{
       e.preventDefault()
       axios.get('https://restcountries.eu/rest/v2/all')
           .then(function (response){
               //setPosts(response.data)
               console.log(response)
               //const allPosts = response.data.posts.allPosts
              // console.log(response.data)
               //this.setState({posts:response.data})
           })
           .catch()
   }

    return (
        <div className='feed'>
            <div className='feedWrapper'>
                <Share></Share>

                {Posts.map((p)=> (
                    <Post key={p.id} post={p} />
                ))}

            </div>
        </div>
    );
};

export default Feed;