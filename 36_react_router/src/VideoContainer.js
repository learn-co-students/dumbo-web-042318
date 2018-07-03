import React, { Component } from 'react';

const VideoContainer = ({
  id: { videoId: id },
  snippet: { title, description }
}) => {
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return (
    <div className="twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <iframe src={embedUrl} frameBorder="0" />
          </div>
        </div>
        <div className="ui segment">
          <h4>{title}</h4>
        </div>
        <div className="ui secondary segment">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
