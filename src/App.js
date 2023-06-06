import './App.css';
// components
import Header from './components/Header';
// pages
import { Main, About, User } from "./pages";
// router
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
