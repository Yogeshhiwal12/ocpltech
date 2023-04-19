import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Container } from "@material-ui/core";
import Register from "./components/Register";

import DataForm from "./components/DataForm";
import { AuthProvider } from "./components/AuthContext";
import PageTransition from "./components/PageTransition";
import HomePage from "./components/HomePage";
import './App.css';

const App = () => {
  return (
  <div className="App">
    <AuthProvider>
      <Router>
        <Container>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageTransition component={HomePage} />} />
              <Route path="/register" element={<PageTransition component={Register} />} />
              
              <Route path="/data-form" element={<PageTransition component={DataForm} />} />
            </Routes>
          </AnimatePresence>
        </Container>
      </Router>
    </AuthProvider>
    </div>
  );
};

export default App;
