import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// 
import Header from './components/Header';
import Home from './components/Home/Home';
import CreatePost from './myPosts/CreatePost';
import ViewPost from './myPosts/ViewPost';
import UpdatePost from './myPosts/UpdatePost';

function App() {
  return (
    <>
    <Router>
     <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route exact path='/create' element={<CreatePost />} />
        <Route exact path='/view' element={<ViewPost />} />
        <Route exact path='/update' element={<UpdatePost />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
