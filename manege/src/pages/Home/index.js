import "./index.css"
import Navbar from "./Navbar"
import FirstPage from "../FirstPage"
import StopCheck from "../StopCheck"
import Clock from "../Clock"
import { Route, Routes } from 'react-router-dom';
export default function HomePage() {
  return (
    <div className="home">
      <div className="header"></div>
      <div className="body">
        <div className="navigate">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="firstpage" element={<FirstPage />} />
            <Route path="stopcheck" element={<StopCheck />} />
            <Route path="clock" element={<Clock />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}