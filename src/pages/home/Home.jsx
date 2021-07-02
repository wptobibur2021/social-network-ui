import React from 'react';
import './Home.css'
import Topbar from "../../componets/topbar/Topbar";
import Sidebar from "../../componets/sidebar/Sidebar";
import Feed from "../../componets/feed/Feed";
import Right from "../../componets/right/Right";
const Home = () => {
    return (
        <>
            <Topbar></Topbar>
            <div className='homeContainer'>
                <Sidebar></Sidebar>
                <Feed></Feed>
                <Right></Right>
            </div>
        </>
    );
};

export default Home;