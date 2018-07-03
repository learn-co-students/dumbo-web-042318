import React from 'react';

class VideoContainer extends React.Component {
  // constructor() {
  //   super()
  //
  // }
  render() {
    const {title, description} = this.props.currentVideo.snippet
    const {videoId} = this.props.currentVideo.id;
     const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div>
        <h2>{title}</h2>
        <iframe title={title} src={embedUrl} />
        <p>{description}</p>
      </div>)
  }
}

export default VideoContainer
