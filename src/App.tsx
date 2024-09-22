import { Route, Routes } from 'react-router-dom'
import './App.css'
import Content from './components/Content'
import About from './components/About'
import Resume from './components/Resume'
import Work from './components/Work'
import Contact from './components/Contact'
import Home from './components/Home'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className='w-full h-screen bg-slate-200 flex items-center gap-10 justify-center border-box'>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className='w-[95%] h-[95%]'>
        <Routes>
          <Route path="/" element={<Content />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
