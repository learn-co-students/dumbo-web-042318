import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videos = props.videos.map(
    (
      {
        snippet: {
          thumbnails: {
            default: { url }
          },
          title
        }
      },
      idx
    ) => {
      return (
        <VideoListItem
          url={url}
          title={title}
          key={idx}
          id={idx}
          handleOnClick={props.handleOnClick}
        />
      );
    }
  );

  return (
    <div className="four wide column">
      <div className="ui relaxed items">{videos}</div>
    </div>
  );
};

export default VideoList;
