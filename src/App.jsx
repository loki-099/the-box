import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Socials from "./pages/Socials";

function App() {
  return (
    <div className="w-screen h-screen bg-primaryWhite p-4 relative overflow-y-auto">
      <div className="max-w-[1140px] mx-auto lg:pt-4">
        <BrowserRouter>
        <Header/>
          <div className="mt-4">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/blogs" element={<Blogs/>}/>
              <Route path="/socials" element={<Socials/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
