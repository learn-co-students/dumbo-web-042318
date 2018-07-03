import React from 'react';
import VideoListItem from './VideoListItem'

const VideoList = (props) => {
  return (
    <ul>
      {
        props.videos.map(video => <VideoListItem
          key={video.id.videoId}
          video={video}
          changeCurrentVideo={props.changeCurrentVideo}/>)
      }
    </ul>
  )
}

export default VideoList
