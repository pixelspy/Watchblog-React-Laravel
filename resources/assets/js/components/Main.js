import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Post from './Post';
import AddPost from './AddPost';

/* An example React component */
class Main extends Component {
    constructor() {
      super();

      this.state = {
        posts: [],
        currentPost: null
      }

      this.handleAddPost = this.handleAddPost.bind(this);
    }

    componentDidMount() {
      /* fetch API in action */
      fetch('/api/posts')
          .then(response => {
              return response.json();
          })
          .then(posts => {
              //Fetched product is stored in the state
              this.setState({ posts });
          });
    }

    handleClick(post) {
        this.setState({currentPost: post});
    }

    handleAddPost(post) {
        fetch('api/posts/', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(post)
        })
        .then(response => {
            return response.json();
        })
        .then( data => {
            this.setState((prevState) => ({
                posts: prevState.posts.concat(data),
                currentPost: data
            }))
        })
    }

    renderPosts() {
        return this.state.posts.map(post => {
            return(
                <li key={post.id} onClick={() => this.handleClick(post)}>
                    {post.title}
                </li>
            );
        })
    }

    render() {
        const mainDivStyle =  {
            display: "flex",
            flexDirection: "row"
        }
        const divStyle = {
            justifyContent: "flex-start",
            padding: '10px',
            width: '35%',
            background: '#f0f0f0',
            padding: '20px 20px 20px 20px',
            margin: '30px 10px 10px 30px'
        }
        return (
            <div>
                <div style={mainDivStyle}>
                    <div style={divStyle}>
                        <h3>All Posts</h3>
                        <ul>
                            {this.renderPosts()}
                        </ul>
                    </div>
                    <Post post={this.state.currentPost}/>
                    <AddPost onAdd={this.handleAddPost}/>
                </div>
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
