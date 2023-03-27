import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './friends.scss';

const Friends = () => {
    return(
        <div className="friends">
            <Sidebar />
            <div className="friendsContainer">
                <Navbar />
                
            </div>
        </div>
        
    );
};

export default Friends;