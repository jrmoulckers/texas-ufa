import React, {Component} from 'react';
import BasePage from '../BasePage'

class InvestmentTeams extends Component {

    render() {
        return (
            <BasePage pageWPSlug='example' pageData={this.props.pageData}></BasePage>
        );
    }
}

export default InvestmentTeams;