import React  from "react";
import "./Navbar.scss";
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="wrapper">
                <div classname="left">
                    <span className="logo">Share.File</span>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..."></input>
                    <SearchOutlined className="icon"/>
                </div>
                <div className="items">
                    <div className="item">
                        Shreya Garg
                    </div>

                    <div className="item">
                        <UserOutlined className="icon1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;