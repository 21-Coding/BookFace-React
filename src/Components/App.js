import React from 'react';
import NavBar from './NavBar';
import Container from './Container';
import CreatePost from './CreatePost';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <h1>BookFace Inc.</h1>
      <Container />
    </React.Fragment>
  )
}

export default App;