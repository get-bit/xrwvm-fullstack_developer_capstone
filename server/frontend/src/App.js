import LoginPanel from "./components/Login/Login"
import RegisterPanel from "./components/Register/Register"
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer"
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import Register from "./components/Register/Register";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer"
>>>>>>> origin
import PostReview from "./components/Dealers/PostReview"

function App() {
  return (
    <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<LoginPanel />} />
        <Route path="/Register" element={<RegisterPanel />} />
        <Route path="/dealers" element={<Dealers/>} />
        <Route path="/dealer/:id" element={<Dealer/>} />
        <Route path="/postreview/:id" element={<PostReview/>} />

=======
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
>>>>>>> origin
    </Routes>
  );
}
export default App;
