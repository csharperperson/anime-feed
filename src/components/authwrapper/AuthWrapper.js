import React from 'react';
import Signup from '../signup/Signup';
import Login from '../login/Login';

import 'bulma/css/bulma.css'
import './AuthWrapper.css';

class AuthWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeCard: 'login' };
        this.toggleCard = this.toggleCard.bind(this);
    }

    toggleCard(card) {
        this.setState({ activeCard: card })
    }

    render() {
        if (this.state.activeCard === 'login') {
            return (
                <Login toggleCard={this.toggleCard} />
            )
        }
        else {
            return (
                <Signup toggleCard={this.toggleCard} />
            )
        }
    }
}

export default AuthWrapper;