import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Setting from './components/Setting/Setting';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile" element={<Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />} />
            <Route path="/dialogs/*" element={<Dialogs
              state={props.state.dialogsPage}
              store={props.store} />} />
            <Route path="/news" element={<News />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>


        </div>
      </div>
    </BrowserRouter>
  )
}
export default App