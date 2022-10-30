import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import { NavBar } from "./components";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route exact path="/" />
        <Route path="/about" />
        <Route path="/product" />
        <Route path="/contact" />
        <Route path="/signin" />
      </Routes>
    </Router>
  );
}

export default App;
