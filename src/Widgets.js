import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";


function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <SearchIcon className='widget_searchIcon' />
        <input placeholder='Search Twitee' type="text"/>
      </div>

      <div className='widgets_widgetContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed 
          sourceType='profile'
          screenName='mosesebenezer'
          options={{ heigth: 400 }}
        />

        <TwitterShareButton 
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#twitee is awesome", via: 'mosesebenezer'}}
        />
      </div>
    </div>
  )
}

export default Widgets;