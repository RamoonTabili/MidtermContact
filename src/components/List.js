import React, {Component} from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
export default class List extends Component {
    render() {
        let contactList = [];
        for (var i = 0; i < this.props.contacts.length; i++) {
            contactList.push( < ListItem {...this.props.contacts[i]
                }
                onClick = {
                    this.props.onClick
                }
                />);
            }
            return ( < div className = "contact list" > < ul > {
                contactList
            } < /ul> < /div>);
        }
    }
    List.propTypes = {
        onClick: PropTypes.func.isRequired
        , contacts: PropTypes.array.isRequired
    };