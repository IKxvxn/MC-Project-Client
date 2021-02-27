import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Col, Card, Popconfirm, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined, EyeOutlined, ImportOutlined, ExportOutlined   } from '@ant-design/icons';
import * as CLIENT_ROUTES from '../../assets/clientRoutes'
import * as Messages from '../../assets/mensajes'

const { Meta } = Card;

class deck extends Component {

  render() {

    let actions = this.props.createMode ? [
      <Tooltip placement="bottom" title="Crear"><PlusCircleOutlined onClick={this.props.onOpen} key="create" /></Tooltip>,
      <Tooltip placement="bottom" title="Importar"><ImportOutlined onClick={this.props.onImport} key="import" /></Tooltip>
    ]
      :
    [
      <Tooltip placement="bottom" title="Borrar"><Popconfirm title={Messages.deleteDeckConfirmation} placement="top" onConfirm={this.props.onDelete} okText="Sí" cancelText="No"> <a href="#"><DeleteOutlined key="delete" /></a></Popconfirm></Tooltip>,
      <Tooltip placement="bottom" title="Editar"><EditOutlined onClick={this.props.onOpen} key="edit" /></Tooltip>,
      <Tooltip placement="bottom" title="Exportar"><ExportOutlined onClick={() => this.props.onExport(this.props.deckShareCode)} key="export" /></Tooltip>,
      <Tooltip placement="bottom" title="Ver"><Link to={CLIENT_ROUTES.cardsRouteCreator + this.props.deckId} ><EyeOutlined key="see" /></Link></Tooltip>
    ]

    return (
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Card
          size="small"
          onClick={this.props.onClick}
          cover={
            <img
              style={{ background: this.props.background }}
              alt={this.props.deckName}
              src={this.props.banner}
            />
          }
          actions={actions}
        >
          <Meta title={this.props.deckName} />
        </Card>
      </Col>
    );
  }
}

export default deck