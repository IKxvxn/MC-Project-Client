import React, { Component } from 'react';
import { Form, InputNumber, TreeSelect, Switch, Row, Col } from 'antd';
import Tooltip from '../otherComponents/tooltip'
import CartoonContainer from '../otherComponents/cartoonContainer'
import * as Rules from '../../assets/formsRules'
const { SHOW_PARENT } = TreeSelect;

class quizzConfigurations extends Component {

    render() {
        return (
            <Row>
                <Col xs={24} sm={18} md={18} lg={20} xl={20}>
                    <Form labelCol={{ span: 3 }} layout="horizontal">
                        <Form.Item name="decks" label="Mazos" rules={Rules.pickDecks}>
                            <TreeSelect treeCheckable showCheckedStrategy={SHOW_PARENT} onChange={this.props.onSelectedDecksChange} defaultValue={this.props.selectedDecksState}
                                treeData={this.props.decks.map(deck => ({ title: deck.name, value: deck._id, children: deck.cards.map((card) => ({ title: card.name, value: deck._id + "!!" + card._id })) }))}
                            />
                        </Form.Item>

                        <Form.Item label="# Preguntas">
                            <InputNumber min={1} max={30} onChange={this.props.onNumPreguntasChange} defaultValue={this.props.numPreguntasState} /> <Tooltip title="Entre 1 y 30 preguntas" />
                        </Form.Item>

                        <Form.Item label="Timer">
                            <Switch defaultChecked={this.props.switchState} onChange={this.props.onSwitchTimerChange} checkedChildren="Sí" unCheckedChildren="No" />
                        </Form.Item>

                        <Form.Item label="Tiempo">
                            <InputNumber disabled={!this.props.switchState} onChange={this.props.onNumSegundosChange} min={15} max={180} defaultValue={this.props.numSegundosState} /> <Tooltip title="Entre 15 y 180 segundos" />
                        </Form.Item>
                    </Form>
                </Col>
                <Col xs={0} sm={6} md={6} lg={4} xl={4}>
                    <CartoonContainer cartoonKey={2} />
                </Col>
            </Row>
        );
    }

}

export default quizzConfigurations

