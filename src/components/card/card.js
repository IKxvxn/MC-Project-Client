import React, { Component } from 'react';
import { Row, Col, Card, Popconfirm, Typography, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
import * as Messages from '../../assets/mensajes'
import * as Style from '../../style/myStyle'

class card extends Component {

  render() {

    let actions = this.props.createMode ? [
        <Tooltip placement="bottom" title="Crear"><PlusCircleOutlined onClick={this.props.onOpen} key="create" /></Tooltip>] :
      [
        <Tooltip placement="bottom" title="Borrar"><Popconfirm title={Messages.deleteCardConfirmation} placement="top" onConfirm={this.props.onDelete} okText="Sí" cancelText="No"> <a href="#"><DeleteOutlined key="delete" /></a></Popconfirm></Tooltip>,
        <Tooltip placement="bottom" title="Editar"><EditOutlined onClick={this.props.onOpen} key="edit" /></Tooltip>,
      ]

    return (
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Card
          title={
            <div style={{ backgroundImage: `url(${this.props.banner})`, ...Style.cardHeaderTextContainer }}>
              <div style={Style.cardHeaderText}>{this.props.cardName}</div>
            </div>
          }
          size="small"
          bodyStyle={{ background: this.props.background + "55", height: "22rem" }}
          headStyle={{ ...Style.cardHeader, background: this.props.background }}
          onClick={this.props.onClick}
          actions={actions}
        >
          <Scrollbars autoHide style={{ height: "21rem" }}>
            <Row align="top">
              {this.props.cardData.map(dato =>
                <Col span={24}>
                  <Typography.Text style={{ fontSize: "1rem", marginLeft: "-0.2rem" }} strong keyboard>{"🦴 " + dato.fact}</Typography.Text>
                  <Typography.Paragraph style={{ textAlign: "justify", textJustify: "inter-word" }}>{dato.description}</Typography.Paragraph>
                </Col>
              )}
            </Row>
          </Scrollbars>
        </Card>
      </Col>
    );
  }
}

export default card