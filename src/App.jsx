
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/singleRooms";
import Error from "./pages/Error";
import Navbar from "./components/navbar/Navbar";
import './App.css';




function App() {

  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home type="/" />} />
          <Route path="/rooms" element={<Rooms type="/rooms" />} />
          <Route path="/rooms/:slug" element={<SingleRooms type="/rooms/:slug" />} />
          <Route path="*"  element={<Error />} />
        </Routes>

    </>
  )
}


export default App;
