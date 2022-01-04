import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import DatePicker from "./pages/DatePicker";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchList from "./pages/SearchList";

function App() {
  const [userEmail, setUserEmail] = useState({});

  return (
    <div>
      {console.log(userEmail)}
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Navbar userEmail={userEmail}/>
          <Login setUserEmail={setUserEmail} />
        </Route>
        <Route path="/register">
          <Navbar />
          <Register />
        </Route>
        <Route path="/search">
          <Navbar />
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
