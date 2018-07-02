import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AnumsVideoContainer from './VideoContainer';
import VideoList from './VideoList';
import keys from './keys';
import _ from 'lodash';

class App extends Component {
  state = {
    selectedVideoIndex: 0,
    results: {
      kind: 'youtube#searchListResponse',
      etag: '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/BxLiBJJF69g4anZ7jmQri0JSa8s"',
      nextPageToken: 'CAUQAA',
      regionCode: 'US',
      pageInfo: {
        totalResults: 29984,
        resultsPerPage: 5
      },
      items: [
        {
          kind: 'youtube#searchResult',
          etag: '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/JN0i6KxGAPXNk4zkNHG9DmfrtYE"',
          id: {
            kind: 'youtube#video',
            videoId: 'tk7PMSzY00U'
          },
          snippet: {
            publishedAt: '2013-07-24T01:54:56.000Z',
            channelId: 'UCItp3dNzCiFlezqYYeBpEGA',
            title: 'Everybody Loves Hypnotoad',
            description: '22 minutes of ALL GLORY TO THE HYPNOTOAD.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/tk7PMSzY00U/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/tk7PMSzY00U/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/tk7PMSzY00U/hqdefault.jpg',
                width: 480,
                height: 360
              }
            },
            channelTitle: 'snobbigztif',
            liveBroadcastContent: 'none'
          }
        },
        {
          kind: 'youtube#searchResult',
          etag: '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/4Mgm0lvJl3j-QPgQtj-cutgtdac"',
          id: {
            kind: 'youtube#video',
            videoId: 'L7wxpEpyw24'
          },
          snippet: {
            publishedAt: '2016-08-08T14:00:01.000Z',
            channelId: 'UCiDJtJKMICpb9B1qf7qjEOA',
            title: 'Real-Life Futurama Hypnotoad Animatronic!',
            description:
              'Our very own Frank Ippolito recently built a lifelike Hypnotoad for the Fan-o-Rama Futurama fan film, and shows how he built the animatronic for the project.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/L7wxpEpyw24/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/L7wxpEpyw24/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/L7wxpEpyw24/hqdefault.jpg',
                width: 480,
                height: 360
              }
            },
            channelTitle: 'Tested',
            liveBroadcastContent: 'none'
          }
        },
        {
          kind: 'youtube#searchResult',
          etag: '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/CVBnqBr4PhEWq2nrJPAPLxj8MHQ"',
          id: {
            kind: 'youtube#video',
            videoId: 'TiFlMspJvN0'
          },
          snippet: {
            publishedAt: '2015-04-29T23:57:16.000Z',
            channelId: 'UCb6JTMjrHZCYFD9Y04CBk9g',
            title: 'Hypnotoad - S3RL',
            description:
              'Radio Edit - iTunes - https://itunes.apple.com/au/album/hypnotoad-single/id980632487 - Google Play ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/TiFlMspJvN0/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/TiFlMspJvN0/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/TiFlMspJvN0/hqdefault.jpg',
                width: 480,
                height: 360
              }
            },
            channelTitle: 'S3RL',
            liveBroadcastContent: 'none'
          }
        },
        {
          kind: 'youtube#searchResult',
          etag: '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/M6kGFEMlsRWq8WD_wz6vXuk9Zwg"',
          id: {
            kind: 'youtube#video',
            videoId: '64Qq31ucGy0'
          },
          snippet: {
            publishedAt: '2011-05-10T02:27:18.000Z',
            channelId: 'UCXxUaa9CfzeQ2Z2jAu0JYsg',
            title: 'THE HYPNOTOAD',
            description: '',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/64Qq31ucGy0/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/64Qq31ucGy0/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/64Qq31ucGy0/hqdefault.jpg',
                width: 480,
                height: 360
              }
            },
            channelTitle: 'MrVisteel',
            liveBroadcastContent: 'none'
          }
        },
        {
          kind: 'youtube#searchResult',
          etag: '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/-fprw7eJ9-62GbQVUxD_iKWie9g"',
          id: {
            kind: 'youtube#video',
            videoId: 'zZX_ce5M2G4'
          },
          snippet: {
            publishedAt: '2014-09-02T22:57:39.000Z',
            channelId: 'UCXbT51sHALe76TepJd5VCcg',
            title: 'Everybody Loves Hypnotoad',
            description: 'Everybody Loves Hypnotoad.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/zZX_ce5M2G4/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/zZX_ce5M2G4/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/zZX_ce5M2G4/hqdefault.jpg',
                width: 480,
                height: 360
              }
            },
            channelTitle: 'kod593',
            liveBroadcastContent: 'none'
          }
        }
      ]
    }
  };

  fetchResults = _.debounce((searchTerm) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
        keys.API_KEY
      }&q=${searchTerm}&type=video`
    )
      .then((resp) => resp.json())
      .then((results) => {
        this.setState({
          results,
          selectedVideoIndex: 0
        });
      });
  }, 1000);

  handleOnClick = (id) => (e) => {
    this.setState({
      selectedVideoIndex: id
    });
  };

  render() {
    return (
      <div className="ui grid container">
        <SearchBar onSearch={this.fetchResults} />
        <AnumsVideoContainer
          {...this.state.results.items[this.state.selectedVideoIndex]}
        />
        <VideoList
          handleOnClick={this.handleOnClick}
          videos={this.state.results.items}
        />
      </div>
    );
  }
}

export default App;
