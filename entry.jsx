import React from "react";
import ReactDOM from "react-dom";
import Gifs from "./src/trending_gifs";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Gifs />, root);
});


