import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from "./components";
import {
  Login,
  Marketplace,
  UserDashboard,
  Register,
  EditApi,
  NewApi,
  Contactus,
} from "./pages";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Marketplace toast={toast} />} />
          <Route exact path="/login" element={<Login toast={toast} />} />
          <Route exact path="/register" element={<Register toast={toast} />} />
          <Route exact path="/apis" element={<UserDashboard />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="/api/edit" element={<EditApi toast={toast} />} />
          <Route exact path="/api/create" element={<NewApi toast={toast} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
