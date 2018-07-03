import React, { Component } from 'react';
import VideoContainer from './VideoContainer'
import exampleResponse from './exampleResponse'
import VideoList from './VideoList'
import SearchBar from './SearchBar'
import keys from './keys'
// SearchBar, VideoList
class App extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: 'hypnotoad',
      currentVideo: exampleResponse.items[0],
      videos: exampleResponse.items
    }
    this.changeCurrentVideo = this.changeCurrentVideo.bind(this)
    this.searchVideo = this.searchVideo.bind(this)
  }

  searchVideo(term) {
    this.setState({searchTerm: term})
    const base = 'https://www.googleapis.com/youtube/v3/search'
    const query = `?part=snippet&key=${keys.API_KEY}&q=${term}&type=video`
    fetch(`${base}${query}`)
      .then((res) => res.json())
      .then(query => {
        const newVideos = query.items
        const newVideo = newVideos[0]
        this.setState({currentVideo: newVideo, videos: newVideos})
      })
  }

  changeCurrentVideo(newVideo) {
    this.setState({currentVideo: newVideo})
  }
  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleSearch={this.searchVideo}
        />
        <VideoContainer currentVideo={this.state.currentVideo} />
        <VideoList videos={this.state.videos}
          changeCurrentVideo={this.changeCurrentVideo}/>
      </div>
    );
  }
}

export default App;
