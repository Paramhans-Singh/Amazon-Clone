import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //  BEM convention
    <Router>
      <div className="app">
        <Header />
        {/* common element outside the routes switch*/}

        <Routes>
          {/* Checkout Page Routes */}
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />

          {/* Home Page Routes */}
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
