import React from 'react';

// https://api.adorable.io/avatars/285/#{current time}.png
// pass function to this.setState

class Clock extends React.Component {
  constructor() {
    // when the component is being created
    super();

    this.state = {
      time: new Date().getTime(),
      fetching: false
    };
  }

  componentDidMount() {
    // after the first/initial render
    fetch(`https://uinames.com/api/`)
      .then((resp) => resp.json())
      .then((user) => {
        const { time } = this.state;
        this.setState({
          name: `${user.name} ${user.surname}`,
          avatar: `https://api.adorable.io/avatars/285/${time}.png`
        });
      });

    this.intervalId = setInterval(
      function() {
        this.setState({
          prettyTime: new Date().toLocaleTimeString()
        });
      }.bind(this),
      1000
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // if you change the state / props
    let time = new Date().getTime();
    if (time - prevState.time > 5000) {
      fetch(`https://uinames.com/api/`)
        .then((resp) => resp.json())
        .then((user) => {
          this.setState((prevState) => {
            if (time - prevState.time > 5000) {
              time = new Date().getTime();
              return {
                time: time,
                name: `${user.name} ${user.surname}`,
                avatar: `https://api.adorable.io/avatars/285/${time}.png`
              };
            }
          });
        });
    }
  }

  componentWillUnmount() {
    // if you take the component off of the page
    clearInterval(this.intervalId);
    delete this.intervalId;
  }

  render() {
    // NEVER DO THIS
    // fetch(someApi).then(name => {
    //   this.setState({
    //     name: name
    //   })
    // })

    // first, and then after each update to state / props
    return (
      <div>
        {this.state.name ? (
          <React.Fragment>
            {/* LOOK UP FRAGMENTS!!! */}

            <h1>
              {this.props.message} {this.state.name}
            </h1>
            <h2>{this.state.prettyTime}</h2>
            <img src={this.state.avatar} />
          </React.Fragment>
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default Clock;
