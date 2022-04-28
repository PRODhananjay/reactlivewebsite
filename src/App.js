import axios from "axios";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Styles.css";

function App() {
  axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api`;

  return (
    <div className="app">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
