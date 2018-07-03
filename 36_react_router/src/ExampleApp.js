import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = (props) => {
  // console.log('INDIVIDUAL TOPIC MATCH ', props.match);
  return (
    <div>
      <h3>
        {props.name} {props.match.params.doggy}
      </h3>
    </div>
  );
};

const Topics = (props) => {
  // console.log('TOPICS CONTAINER MATCH', props.match);
  return (
    <div>
      We're here!
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${props.match.url}/rendering`}>Cool stuff</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/components`}>Cool stuff</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/cool-stuff`}>Cool stuff</Link>
        </li>
      </ul>
      BEGIN ONE LEVEL DEEPER
      <Route path={`${props.match.path}/:doggy`} component={Topic} />
      {/* <Topic location={} history={} match={} /> */}
      <Route
        exact
        path={props.match.path}
        render={({ location, match, history }) => (
          <Topic name="Gigi" match={match} />
        )}
      />
      END ONE LEVEL DEEPER
    </div>
  );
};

const BasicExample = () => (
  <div>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="ui button"
          activeClassName="ui primary button"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="ui button"
          activeClassName="ui primary button"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/topics"
          className="ui button"
          activeClassName="ui primary button"
        >
          Topics
        </NavLink>
      </li>
    </ul>
    <hr />
    {/* before the dynamic part of the page */}
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route exact path="/" component={Home} />
      <Route render={() => <h1>404 Not found</h1>} />
      {/* <Topics location={} history={} match={} /> */}
    </Switch>
    {/* after the dynamic part of the page */}
  </div>
);

export default BasicExample;
