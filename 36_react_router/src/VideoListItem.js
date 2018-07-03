import React from 'react';

const VideoListItem = function(props) {
  return (
    <div
      className="item"
      onClick={props.handleOnClick(props.id)}
      data-video-id={props.id}
    >
      <div className="ui small image">
        <img src={props.url} />
      </div>
      <div className="content">{props.title}</div>
    </div>
  );
};

export default VideoListItem;
