import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Info extends Component {
    render() {
        if (!this.props.contacts) {
            return ( < div className = "info" > < h2 > Open a contact on the left < /h2> < /div>)
        }
        else {
            return ( < div className = "info" > < img className = "info pic"
                src = {
                    this.props.contacts.picture.large
                }
                /> < h2 className = "info name" > {
                    this.props.contacts.name.first
                } {
                    this.props.contacts.name.last
                } < /h2> < p className = "info quick" > {
                    getAge(this.props.contacts.dob) + " "
                } 
                year old < span className = {
                    "info " + this.props.contacts.gender
                } > {
                    this.props.contacts.gender
                } < /span></p > < div className = "info main" > < h3 > Info < /h3> < p > Gender: {
                    this.props.contacts.gender
                } < /p> < p > Birthdate: {
                    this.props.contacts.dob
                } < /p> < p > Email: < a className = "info email"
                href = {
                    "mailto:" + this.props.contacts.email
                } > {
                    this.props.contacts.email
                } < /a></p > < p > Phone: {
                    this.props.contacts.cell
                } < /p> < /div> < div className = "info address" > < h3 > Address < /h3> < p > {
                    this.props.contacts.location.street
                } < br / > {
                    this.props.contacts.location.city
                }, {
                    this.props.contacts.location.state
                } < br / > {
                    this.props.contacts.location.postcode
                } < /p> < /div> < /div>)
        }
    }
}
Info.propTypes = {
    contacts: PropTypes.object
};


function getAge(bday) {
    let birthdate = new Date(bday);
    let difference = Date.now() - birthdate.getTime();
    let age = new Date(difference);
    return Math.abs(age.getUTCFullYear() - 1970);
}