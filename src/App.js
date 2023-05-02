import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>


        </div>
      </div>
    </BrowserRouter>
  )
}
export default App