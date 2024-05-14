import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route, Link
} from "react-router-dom";
import HomePage from "./components/HomePage";
import EmailConfirm from "./components/EmailConfirm";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App bg-[url('/src/assets/nwoff/bg-img.png')] bg-no-repeat bg-cover bg-center min-h-screen mx-auto p-4 w-full">
<Router>
     <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/confirm" element={<EmailConfirm />} />
      <Route exact path="/verification" element={<Loading />} />
    </Routes>
    </Router>    </div>
  );
}

export default App;
