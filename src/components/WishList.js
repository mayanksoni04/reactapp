import React from "react";
import { Link } from "react-router-dom";
import Heart from "./Heart";
export default function WishList() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">Image Gallery</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/Heart">
                <i class="fa fa-heart"></i> <span class="sr-only"></span>
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link">
                <i class="fa fa-thumbs-down"></i>
                <span class="sr-only"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
