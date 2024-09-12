// src/App.tsx
import Home from "./components/Home";
import Form from "./components/MyForm";
import Button from "./components/Button";
import AnimatedBorder from "./components/AnimatedBorders";

import "./std.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />}/>
        <Route path="/animatedform" element={<AnimatedBorder />}/>
        <Route path="/button" element={<Button />}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;