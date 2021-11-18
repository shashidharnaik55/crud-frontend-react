import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddUser from "./Components/AddUser";
import AllUsers from "./Components/AllUsers";
import EditUser from "./Components/EditUser";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
