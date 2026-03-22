import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Hero from './components/hero'
import SideBar from './components/SideBar'
import Videos from './components/Videos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Watch from './components/Watch'
function App() {
const [searchResult,setSearchResult] = useState("");
const [videos, setVideos] = useState([]);
  return (
    <BrowserRouter>
      <div className="bg-black text-white h-screen overflow-hidden">

        <Hero setSearchResult={setSearchResult}/>

        <div className="flex h-[calc(100vh-56px)]">

          <div className="hidden md:block w-60">
            <SideBar setVideos={setVideos} />
          </div>

          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path='/' element={<Videos searchResult={searchResult} videos={videos} setVideos={setVideos} />} />
              <Route path="/watch/:videoId" element={<Watch videos={videos}/>}/>
            </Routes>
          </div>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App
