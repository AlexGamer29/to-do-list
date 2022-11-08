import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import {
  Home,
  MaketodoList,
  TodoList,
  Reminders,
  Calendar,
  Collaboration,
  Explore,
  Learn,
  About,
  Login,
  SignUp,
} from "./pages";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-todolist" element={<MaketodoList />} />
        <Route path="/to-do-list" element={<TodoList />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
