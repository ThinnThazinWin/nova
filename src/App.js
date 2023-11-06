// #region load dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// #endregion
// #region load component
import Home from './page/Home'
import Success from './page/success/Success'
// #endregion

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
