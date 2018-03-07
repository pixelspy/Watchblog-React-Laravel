import React, { Component } from 'react';

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPost: {
        title: '',
        body: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(key, el) {
    var state = Object.assign({}, this.state.newPost);
    state[key] = el.target.value;
    this.setState({newPost: state});
  }

  handleSubmit(el) {
    el.preventDefault();
    this.props.onAdd(this.state.newPost);
  }

  render() {
    const divStyle = {
        position: 'absolute',
        left: '35%',
        top: '60%',
        flexDirection: 'space-between',
        marginLeft: '30px'
        }
    const inputStyle = {
      margin: '0px 10px 0px 10px'
    }
    return(
      <div>
        <div style={divStyle}>
          <h2>Add new Post</h2>

          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input style={inputStyle} type="text" onChange={(el) => this.handleInput('title', el)} />
            </label>

            <label>
              Body :
              <input style={inputStyle} type="text" onChange={(el) => this.handleInput('body', el)}/>
            </label>

            <input style={inputStyle} type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddPost;
