import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Socials from "./pages/Socials";

function App() {
  return (
    <div className="w-screen h-screen bg-primaryWhite relative overflow-y-scroll">
        <BrowserRouter>
          <div className="w-[95%] min-w-[335px] tablet:max-w-[696px] laptop:max-w-[960px] desktop:max-w-[1140px] mx-auto relative">
            <Header/>
          </div>
          <div>
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
  )
}

export default App
