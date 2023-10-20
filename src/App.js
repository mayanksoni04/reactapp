import "./App.css";
import "./components/Todo.css";
import { createContext } from "react";
import "./components/Form2.css";
import Signup from "./components/Signup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Form2 from "./components/Form2";
import Todolist from "./components/Todolist";
import Demo from "./components/Demo";
import Image from "./components/Image";
import Shift from "./components/Shift";
import Heart from "./components/Heart";
import WishList from "./components/WishList";

const data = createContext();
const data1 = createContext();
function App() {
  const name = "mayank";
  const pass = 10000;
  return (
    <BrowserRouter>
      <data.Provider value={name}>
        <data1.Provider value={pass}>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Form2" element={<Form2 />} />
            <Route path="/Image" element={<Image />} />
            <Route path="/Todolist" element={<Todolist />} />
            <Route path="/Shift" element={<Shift />} />
            <Route path="/Heart" element={<Heart />} />
            <Route path="/Wishlist" element={<WishList />} />
          </Routes>
        </data1.Provider>
      </data.Provider>
    </BrowserRouter>
  );
}
export default App;
export { data, data1 };
