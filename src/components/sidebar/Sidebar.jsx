import React  from "react";
import "./sidebar.scss";
import { FolderOpenFilled, UsergroupAddOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="top">
                <span className="logo">Share.File</span>
            </div>

            

            <div className="center">
                <ul>
                    <p className="title1">MAIN</p>
                    <li>
                        <FolderOpenFilled className="icon"/>
                        <Link to = "/home" style = {{ textDecoration:'none' }}><span>Files</span></Link>
                    </li>
                    <p className="title">FRIENDS</p>
                    <li>
                        <UsergroupAddOutlined className="icon"/>
                        <Link to = "/friends" style = {{ textDecoration:'none' }}><span>Users</span></Link>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <UserOutlined className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlined className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;