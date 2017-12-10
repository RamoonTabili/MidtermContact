require("./main.scss");
import React from "react";
import ReactDOM from "react-dom";
import View from "./components/View";
import {contacts}
from "./components/data/contacts";

const contactList = contacts;
let contact = undefined;
if (location.hash.split("/").includes("contact")) {
    let id = location.hash.split("/");
    id = id[id.length - 1];
    contact = contactList.find((i) => i.id == id);
}
let state = {};

function setState(changes) {
    state = Object.assign({}, state, changes);
    state.onClick = function (e) {
        let id = e.target.closest("li").id.split("-")[1];
        location.hash = "#/contact/" + id;
        let contact = contactList.find((i) => i.id == id);
        setState({
            contact: contact
        });
    };
    ReactDOM.render(React.createElement(View, state), document.getElementById("react-app"));
}
setState({
    contactList: contactList
    , contact: contact
});