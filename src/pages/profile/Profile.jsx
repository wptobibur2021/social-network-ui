import './Profile.css';
import Sidebar from "../../componets/sidebar/Sidebar";
import Topbar from "../../componets/topbar/Topbar";
import Feed from "../../componets/feed/Feed";
import Right from "../../componets/right/Right";

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src="assets/post/3.jpeg"
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src="assets/person/7.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Right profile/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;