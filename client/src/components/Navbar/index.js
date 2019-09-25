import React from "react";

function Navbar(props) {
  return (
    <ul className="nav nav-tabs">
  {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
   
       <li className="nav-item">
      
         <a
          // href="#"
          // onClick={() => props.handlePageChange("About")}
          // className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
         Google Books 
        </a>
      </li> 
      <li className="nav-item">
        <a
          href="#Search"
          onClick={() => props.handlePageChange("Search")}
          className={props.currentPage === "Search" ? "nav-link active" : "nav-link"}
        >
       Search
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#display"
          onClick={() => props.handlePageChange("Display")}
          className={props.currentPage === "Display" ? "nav-link active" : "nav-link"}
        >
       Display
        </a>
      </li>
    </ul>
  );
}

export default Navbar;


