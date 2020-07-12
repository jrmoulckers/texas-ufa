import React, {Component} from 'react';
import BasePage from '../BasePage'

class Contact extends Component {

    render() {
        return (
            <BasePage pageWPSlug='contact' pageData={this.props.pageData}></BasePage>
        );
    }
}

export default Contact;