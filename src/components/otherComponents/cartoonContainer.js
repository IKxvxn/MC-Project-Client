import React, { Component } from 'react';
import * as ClientCartoons from "../../assets/clientCartoons"
import * as Style from '../../style/myStyle'

class cartoonContainer extends Component {

    cartoonInfo = ClientCartoons.getcartoonByKey(this.props.cartoonKey)

    render() {

        return (
            <div style={Style.cartoonContainer}>
                <span style={Style.cartoonAlignHelper}/>
                <img style={{...Style.cartoonContaint, ...this.cartoonInfo.style}} alt="cartoon" src={this.cartoonInfo.cartoon} />
            </div>
        );
    }
}

export default cartoonContainer