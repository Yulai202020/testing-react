// src/App.tsx
import Home from "./components/Home";
import Form from "./components/MyForm";
import Button from "./components/Button";
import GradientForm from "./components/GradientForm";
import AnimatedForm from "./components/AnimatedForm";

import "./std.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />}/>
        <Route path="/animatedform" element={<AnimatedForm />}/>
        <Route path="/button" element={<Button />}/>
        <Route path="/gradientform" element={<GradientForm />}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;