import './Post.css';
import {MoreVert} from "@material-ui/icons";
import {Users} from "../../dummyData";
import {useState} from "react";

const Post = ({post}) => {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsliked] = useState(false)
    const [heart, setHeart] = useState(post.heart)
    const [isHearted, setIsHeart] = useState(false)

    const likeHandler = () =>{
        setLike(isLiked ? like-1 : like+1)
        setIsliked(!isLiked)
    }

    const heartHandler = () =>{
        setHeart(isHearted ? heart-1 : heart+1)
        setIsHeart(!isHearted)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={Users.filter((u)=>u.id === post?.userId)[0].profilePicture}
                            alt=""
                        />
                        <span className="postUsername">
                            {Users.filter((u) => u.id === post?.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert></MoreVert>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter"> {like}</span>
                        <img className="likeIcon" src="assets/heart.png" onClick={heartHandler} alt="" />
                        <span className="postLikeCounter"> {heart}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;