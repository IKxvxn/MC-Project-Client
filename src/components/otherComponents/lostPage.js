import React, { Component } from 'react';
import { Row, Col, Typography } from 'antd';
import pageNotFoundImage from '../../images/404.png'

class lostPage extends Component {

    render() {
        return (
            <Row justify="center" align="middle" style={{minHeight:"75vh"}}>
                <Col span={24} style={{textAlign:"center"}}>
                    <img alt="404" style={{maxWidth:"25vw", minWidth:"10rem", height:"auto"}} src={pageNotFoundImage} />
                    <Typography.Paragraph type="secondary" style={{fontWeight:"bold", fontSize:"1rem"}}>
                        Parece que te has perdido
                    </Typography.Paragraph>
                </Col>
            </Row>
        );
    }
}

export default lostPage

