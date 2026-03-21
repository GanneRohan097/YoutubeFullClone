import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Hero from './components/hero'
import SideBar from './components/SideBar'
import Videos from './components/Videos'

function App() {
const [searchResult,setSearchResult] = useState("");
  return (
    <div className="bg-black text-white h-screen overflow-hidden">

      <Hero setSearchResult={setSearchResult}/>

      <div className="flex h-[calc(100vh-56px)]">

        <div className="hidden md:block w-60">
          <SideBar />
        </div>

        <div className="flex-1 overflow-y-auto">
          <Videos searchResult={searchResult}/>
        </div>

      </div>

    </div>
  );
}

export default App
