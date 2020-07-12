import React, {Component} from 'react';
import BasePage from '../BasePage'

class Contact extends Component {

    render() {
        return (
            <div className='content-below-navbar'>
                <BasePage pageWPSlug='contact' pageData={this.props.pageData}></BasePage>
            </div>
        );
    }
}

export default Contact;