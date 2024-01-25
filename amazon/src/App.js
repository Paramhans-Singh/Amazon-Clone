import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //  BEM convention
    <Router>
      <div className="app">
        <Routes>
          {/* Checkout Page Routes */}
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <p>I am Checkout Page</p>
              </>
            }
          />

          {/* Home Page Routes */}
          <Route
            path="/"
            element={
              <>
                <Header />
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
