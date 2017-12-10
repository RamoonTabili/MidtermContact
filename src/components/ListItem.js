import React, {
    Component
}
from "react";
import PropTypes from "prop-types";
export default class ListItem extends Component {
    render() {
        return ( < li className = "contact"
            onClick = {
                this.props.onClick
            }
            id = {
                "contact-" + this.props.id
            } > < a href = {
                "#/contact/" + this.props.id
            } > < div className = "contact item" > < img className = "contact pic"
            src = {
                this.props.picture.thumbnail
            }
            alt = "Contact Photo" / > < div className = "contact name" > < p > {
                this.props.name.first
            } {
                this.props.name.last
            } < /p> < /div> < /div> < /a> < /li>)
    }
}
ListItem.propTypes = {
    onClick: PropTypes.func.isRequired
    , name: PropTypes.object.isRequired 
};