import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DatePicker from "./pages/DatePicker";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchList from "./pages/SearchList";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path="/">
        <Home />
        </Route>
      <Route path="/login">
        <Navbar/>
        <Login />
        </Route>
      <Route path="/register">
        <Navbar/>
        <Register />
        </Route>
      <Route path="/search">
      <Navbar/>
      <DatePicker />
        </Route>
      <Route path="/searchlist">
        <Navbar />
        <SearchList />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
