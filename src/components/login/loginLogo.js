import React, { Component } from 'react';
import { Typography } from 'antd';
import logo from "../../images/logo.png"
import * as Style from '../../style/myStyle'

class loginLogo extends Component {

    render() {

        return (
            <div>
                <img style={Style.loginLogo} alt="logo" src={logo} />
                <Typography style={Style.logoText}>medCards</Typography>
            </div>
        );
    }
}

export default loginLogo