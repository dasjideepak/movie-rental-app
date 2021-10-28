import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-blue-200 flex justify-between p-2">
        <Link to="/" className="font-medium">
          Movie Rental App
        </Link>
        <div className="flex  text-sm	 font-medium hover:text-gray-700">
          <Link className="px-3" to="/">
            Home
          </Link>
          <Link className="px-3" to="/login">
            Login
          </Link>
          <Link className="px-3" to="/register">
            Register
          </Link>
          <Link className="px-3" to="/cart">
            Cart
          </Link>
        </div>
      </div>
    );
  }
}
