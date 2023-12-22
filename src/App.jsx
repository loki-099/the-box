import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen bg-cover bg-[url('/assets/desktop-bg.png')] p-4 ring-[8px] lg:ring-[12px] xl:ring-[16px] ring-black ring-inset">
      <div className="max-w-[1140px] mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
