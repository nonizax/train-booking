import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Search } from "./components/Search";
import { Trip } from "./components/Trip";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path="/trip" element={<Trip />} />

      </Routes>
    </BrowserRouter>
    )
}

export default Router;
