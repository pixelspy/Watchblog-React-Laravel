import React, { Component } from 'react';

/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
const Post = ({post}) => {

  const divStyle = {
          justifyContent: "flex-start",
          padding: '10px',
          width: '35%',
          background: '#f0f0f0',
          padding: '20px 20px 20px 20px',
          margin: '30px 10px 10px 30px'
      }

  //if the props product is null, return Product doesn't exist
  if(!post) {
    return(<div style={divStyle}>  Post Doesn't exist </div>);
  }

  //Else, display the product data
  return(
    <div style={divStyle}>
      <h2> {post.title} </h2>
      <p> {post.body} </p>


    </div>
  )
}

export default Post ;
