import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron"
import SearchForm from "../components/SearchForm";


class Search extends Component {



render(){
return(
<div>
< Navbar />
< Jumbotron />
< SearchForm />
</div>
)
}
}
export default Search;