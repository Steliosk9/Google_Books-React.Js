import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Jumbotron from "./Jumbotron";

class SearchPage extends Compnent{

state = {
    search:"",
    results:[]
};

// on page load, 
    componentDidMount() {
        console.log("Mounted");
        this.searchBooks("Eric Burdon");
}