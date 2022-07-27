import React from "react";
import Navbar from "../Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Customers from "../../Pages/Customers";
import Projects from "../../Pages/Projects";
import Orders from "../../Pages/Orders";
import Inventory from "../../Pages/Inventory";
import Accounts from "../../Pages/Accounts";
import Tasks from "../../Pages/Tasks";
import NotFound from "../../Pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
