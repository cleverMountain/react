import React from "react"
import Navbar from "./Navbar"
import "./index.less"
const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="header"></div>
      <div className="body">
        <div className="navigate">
          <Navbar />
        </div>
        {/* <div className="content">
          <Routes>
            <Route path="firstpage" element={<FirstPage />} />
            <Route path="stopcheck" element={<StopCheck />} />
            <Route path="clock" element={<Clock />} />
          </Routes>
        </div> */}
      </div>
    </div>
  )
}

export default Home