import React, { Component } from 'react';
import * as Style from '../../style/myStyle'

class imagePickerElement extends Component {

    render() {

        return (
            <div style={{ background: this.props.background.name }}>
                <img
                    alt=""
                    style={Style.createDeckBanner}
                    src={this.props.banner.banner.large}
                />
            </div>
        );
    }
}

export default imagePickerElement
