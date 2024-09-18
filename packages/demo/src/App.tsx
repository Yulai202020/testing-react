// src/App.tsx
import Home from "./components/Home/Home";
import Form from "./components/MyForm/MyForm";
import Button from "./components/Button/Button";
import GradientForm from "./components/GradientForm/GradientForm";
import AnimatedForm from "./components/AnimatedForm/AnimatedForm";
import NewForm from "./components/NewForm/NewForm";

import "./links.scss";
import "./std.scss";

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
        <Route path="/newform" element={<NewForm />}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;