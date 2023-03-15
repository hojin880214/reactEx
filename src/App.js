import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Todo from "./components/Todo/Todo";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/todo" element={<Todo/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
