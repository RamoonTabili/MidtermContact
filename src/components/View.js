import React, {Component} from "react";
import PropTypes from "prop-types";
import List from "./List";
import Info from "./Info";

export default class View extends Component {
    render() {
        return ( < div className = "main-view" > < h1 > Contact List < /h1> < div className = "contacts container" > < List contacts = {
                this.props.contactList
            }
            onClick = {
                this.props.onClick
            }
            /></div > < div className = "contacts view" > < Info contacts = {
                this.props.contact
            }
            /></div > < /div>)
    }
}
View.propTypes = {
    onClick: PropTypes.func.isRequired
    , contact: PropTypes.object
    , contactList: PropTypes.array.isRequired
};