import React from 'react';

const VideoListItem = (props) => {
  const {video, video:{snippet:{thumbnails:{default: {url}}}}} = props
  return (
    <li onClick={() => {
      return props.changeCurrentVideo(video)
    }} >
      <h3>{video.snippet.title}</h3>
      <img src={url} alt='thumnail'/>
      <p>{video.snippet.description}</p>
    </li>
  )

}

export default VideoListItem

// key={video.id.videoId}
