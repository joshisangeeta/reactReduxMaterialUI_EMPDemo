import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Example1 from './Example1'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <Example1 />
                                     
                </header>
            </div>
        )
    }
}

export default HeaderComponent
