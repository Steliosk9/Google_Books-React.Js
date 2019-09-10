import React from "react";
import Search from "./pages/Search";
// import Books from "./pages/Saved";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
    <div>
       <Nav />
      {/* <Saved /> */}
      <Search />
    </div>
    </Router>
  );
}

export default App;
