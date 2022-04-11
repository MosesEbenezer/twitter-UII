import React from 'react';
import './Sidebar.css';
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SidebarOption from './SidebarOption';
import { Button } from "@material-ui/core";


function Sidebar() {
  const handleLogout = () => {
    const token = localStorage.getItem("token");

    if(token !== ""){
      localStorage.removeItem("token")
      window.location = "/"
    }
  }
  return (
    <div className='sidebar'>
      {/* twitee icon */}
      <TwitterIcon className='sidebar__twitterIcon' />

      <SidebarOption active Icon={HomeIcon} text="Home"/>
      <SidebarOption Icon={SearchIcon} text="Explore"/>
      <SidebarOption Icon={NotificationNoneIcon} text="Notifications"/>
      <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
      <SidebarOption Icon={ListAltIcon} text="Lists"/>
      <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>


      {/* Button - weet */}
      <Button variant='outlined' className='sidebar_tweet' fullWidth>Twit</Button>
      <Button variant='outlined' className='sidebar_tweet' fullWidth onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Sidebar;