import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { fetchPosts } from '../actions/posts';
import { Home, Navbar ,Page404,Login } from './';

const SignUp = () =>(
  <div>Hey Register to youself in Our Website!</div>
);


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
          {/* <PostsList posts={posts} />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/SignUp">SignUp</Link></li>
          </ul> */}
          <Route exact={true} path="/" render={(props)=>
          {
            return <Home {...props} posts={posts}/>
          }} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
