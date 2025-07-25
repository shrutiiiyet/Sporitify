import { useState } from 'react'
import {Routes, Route } from "react-router-dom";
import './App.css'
//import Navbar from './component/Navbar';
import Home from './component/homepage';
//import Signup from './component/Signup';
//import Login from './component/Login';
import Sportpage from './Sports/Sportpage';
import About from './component/About';
import Matches from './Sports/Matches';
import Cricket from './Sports/Cricket';
import NewNavbar from './component/NewNavbar';
import Samarth from './component/Samarth';
import CreateMatch from './Sports/createMatch';
import Allsports from './LiveScore/Allsports';
import Signupnew from './component/Signup UI';
import Article from './component/article';
import LiveScore from './component/LiveComponent';
import FetchLivematches from './FetchliveMatches/FetchLivematches';
import AboutSection from './component/AboutPage';
// import Newhomepage from './FetchliveMatches/FetchLivematches';
import LoginNew from './component/login UI'
function App() {
  

  return (
    <>
        {/* <Navbar/> */}
        <NewNavbar/>
       <Routes>
        
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signupnew/>}/>

            <Route path='/login' element={<LoginNew/>}/>
            <Route path='/sports' element={<Sportpage/>}/>

            <Route path='/matches' element={<Matches/>}/> 
            <Route path='/cricket' element={<Cricket/>}/>
            <Route path='/creatematches' element={<CreateMatch/>}/>
            <Route path='/uploadscore' element={<Allsports/>}/>
            <Route path='/samarth' element={<Samarth/>}/>
            <Route path='/article' element={<Article/>}/>
            <Route path='/livescore' element={<LiveScore/>}/>
            {/* <Route path='/fetchlivematch' element={<FetchLivematches/>}/> */}
            {/* sport for arrays's url */}
            {/* <Route path='/newhomepage' element={<Newhomepage/>}/> */}
            <Route path='/livescore' element={<LiveScore/>}/>  
            <Route path='/AboutPage' element={<AboutSection />} />      
       </Routes>
     
    </>
  )
}

export default App
