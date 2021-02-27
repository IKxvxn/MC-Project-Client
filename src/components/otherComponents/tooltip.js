import React, { Component } from 'react';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

class tooltip extends Component {

    render() {
        return (
            <Tooltip title={this.props.title}><InfoCircleOutlined style={{ color: "#7ac70c", marginLeft: "0.5rem" }} /></Tooltip>
        );
    }
}

export default tooltip

