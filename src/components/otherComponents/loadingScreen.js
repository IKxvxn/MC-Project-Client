import React, { Component, Fragment } from 'react';
import { Spin, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import * as Style from '../../style/myStyle'


const antIcon = <LoadingOutlined style={{ fontSize: "5rem" }} spin />;

class colorPicker extends Component {

    render() {
        return (
            <Fragment>
                <Spin style={{width:"100%", marginTop:this.props.marginTop}} indicator={antIcon} />
                <Typography.Text type="success" style={Style.loadingPage}>Cargando...</Typography.Text>
            </Fragment>
        );
    }
}

export default colorPicker

