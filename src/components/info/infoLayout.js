import React, { Component, Fragment } from 'react';
import { Divider, Typography, Row, Col, Card, List } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import CartoonContainer from '../otherComponents/cartoonContainer'
import * as Style from '../../style/myStyle'
import ReactLogo from '../../images/logos/React.png'
import ReduxLogo from '../../images/logos/Redux.png'
import AntdLogo from '../../images/logos/Antd.png'
import NodeLogo from '../../images/logos/Node.png'
import MongoLogo from '../../images/logos/Mongo.png'


class infoLayout extends Component {

    render() {
        const listData = [
            'Diseño responsive.',
            'Manejo de sesión a través de tokens.',
            'Uso de cookies.',
            'Feedback al usuario por sus acciones.',
            'Restful API.',
        ];

        return (
            <Fragment>
                <Divider>Funcionalidades</Divider>
                <Row gutter={[8, 8]}>
                    <Col span={24}>
                        <Typography.Paragraph style={{ textAlign: "justify" }}>
                            La página permite al usuario crear mazos temáticos que luego pueden ser utilizados para crear quizzes. Las funcionalidad ofrecidas son las siguientes:
                        </Typography.Paragraph>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card title="🗃️ Mazos" size="small" bodyStyle={{ height: "10rem" }}>
                            <Scrollbars autoHide style={{ height: "9rem" }}>
                                <Typography.Paragraph>
                                    🦴 Los mazos creados contendrán las cartas.
                                    </Typography.Paragraph>
                                <Typography.Paragraph>
                                    🦴 Estos pueden personalizarse eligiendo un color y una mascota.
                                    </Typography.Paragraph>
                                <Typography.Paragraph>
                                    🦴 En cualquier momento pueden ser modificados o eliminados.
                                    </Typography.Paragraph>
                            </Scrollbars>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card title="🃏 Cartas" size="small" bodyStyle={{ height: "10rem" }}>
                            <Scrollbars autoHide style={{ height: "9rem" }}>
                                <Typography.Paragraph >
                                    🦴 Las cartas ganarán el aspecto del mazo al que pertenezcan.
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                    🦴 Las cartas pueden tener N atributos distintos.
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                    🦴 Las cartas con los mismos atributos son usadas para crear las opciones de respuesta de los quizzes.
                                </Typography.Paragraph>
                            </Scrollbars>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card title="📝 Quizzes" size="small" bodyStyle={{ height: "10rem" }}>
                            <Scrollbars autoHide style={{ height: "9rem" }}>
                                <Typography.Paragraph>
                                    🦴 Se pueden crear quizzes combinando mazos y cartas específicas.
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                    🦴 Los quizzes pueden ser cronometrados.
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                    🦴 Los quizzes pueden tener de 1 a 30 preguntas.
                                </Typography.Paragraph>
                            </Scrollbars>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={0} lg={0} xl={0}>
                        <CartoonContainer cartoonKey={1} />
                    </Col>
                </Row>
                <Divider>Apectos Técnicos</Divider>
                <Row gutter={[8, 8]} justify="space-between">
                    <Col xs={0} sm={12} md={8} lg={8} xl={8}>
                        <CartoonContainer cartoonKey={0} />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <List
                            bordered
                            dataSource={listData}
                            renderItem={item => (
                                <List.Item>
                                    <Typography.Text>🧠</Typography.Text> {item}
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col xs={0} sm={0} md={8} lg={8} xl={8}>
                        <CartoonContainer cartoonKey={1} />
                    </Col>
                </Row>
                <Divider>Tecnologías</Divider>
                <Row justify="center" gutter={[8, 8]}>
                    <Col xs={12} sm={8} md={5} lg={4} xl={3} style={{ textAlign: "center" }}>
                        <img style={Style.tecnologiasItem} alt="ReactLogo" src={ReactLogo} />
                    </Col >
                    <Col xs={12} sm={8} md={5} lg={4} xl={3} style={{ textAlign: "center" }}>
                        <img style={Style.tecnologiasItem} alt="ReduxLogo" src={ReduxLogo} />
                    </Col>
                    <Col xs={12} sm={8} md={5} lg={4} xl={3} style={{ textAlign: "center" }}>
                        <img style={Style.tecnologiasItem} alt="AntdLogo" src={AntdLogo} />
                    </Col>
                    <Col xs={12} sm={8} md={5} lg={4} xl={3} style={{ textAlign: "center" }}>
                        <img style={Style.tecnologiasItem} alt="NodeLogo" src={NodeLogo} />
                    </Col>
                    <Col xs={12} sm={8} md={5} lg={4} xl={3} style={{ textAlign: "center" }}>
                        <img style={Style.tecnologiasItem} alt="MongoLogo" src={MongoLogo} />
                    </Col>
                </Row>
            </ Fragment>
        );
    }
}

export default infoLayout

