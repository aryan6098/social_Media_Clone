import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Links, Route } from 'react-router-dom';
import { fetchPosts } from '../actions/posts';
import { PostsList, Navbar } from './';
const Login = ()=>(
  <div>Login</div>
);
const SignUp = () =>(
  <div>SignUp</div>
);
const Home = () =>(
  <div>Home</div>
)

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
          {/* <PostsList posts={posts} /> */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/SignUp">SignUp</Link></li>
          </ul>
          <Route exact={true} path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
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
