import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core"


function TweetBox(props) {
  const [tweet, setTweet] = useState("")
  const [imgurl, setImgurl] = useState("")

  const handleClick = () => {
    const data = {
      user_id:1,
      content: tweet,
      img_url: imgurl
    }
    props.addTweet(data)
    setTweet("")
    setImgurl("")
  }


  const handleChange = (e) => {
    setTweet(e.target.value)
  }
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png'/>
          <input placeholder="What's happening?" type="text" value={tweet} onChange={handleChange} />
        </div>
        <input className='tweetBox__imageInput' placeholder="Optional: Enter Image URL" type="text" value={imgurl} onChange={(e)=>setImgurl(e.target.value)} />

        <Button className='tweetBox__tweetButton' onClick={handleClick}>Twit</Button>
      </form>
    </div>
  )
}

export default TweetBox;