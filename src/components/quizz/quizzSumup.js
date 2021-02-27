import React, { Component } from 'react';
import { Row, Table, Col, Tag } from 'antd';

class quizzSumup extends Component {

    columns = [{
        title: "#",
        dataIndex: "numPregunta",
        render: numPregunta => (numPregunta+1)
    },
    {
        title: "Mazo",
        dataIndex: "deckName"
    },
    {
        title: "Carta",
        dataIndex: "cardName"
    },
    {
        title: "Atributo",
        dataIndex: "attribute"
    },
    {
        title: "Respuesta Correcta",
        dataIndex: "rightAnswer",
        width: '30%',
    },
    {
        title: "Mi respuesta",
        dataIndex: "myAnswer",
        width: '30%',
    },
    {
        title: "Resultado",
        dataIndex: "isCorrect",
        width: '1rem',
        align: 'center',
        render: isCorrect => (isCorrect?<Tag color="#7ac70c55">✔️</Tag>:<Tag color="#d3313155">❌</Tag>)
    },
    ]

    render() {
        return (
            <Row>
                <Col span={24}>
                    <Table pagination={{ pageSize: 10 }} scroll={{ x: true }} columns={this.columns} dataSource={this.props.results} size="small" />
                </Col>
            </Row>
        );
    }
}

export default quizzSumup

