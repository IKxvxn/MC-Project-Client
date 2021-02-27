import React, { Component } from 'react';
import { Col, Card, Typography } from 'antd';

const emojiArray = ["🧠", "🦴", "👂", "👁️"]

class question extends Component {

    render() {
        return (
            <Col span={24}>
                {this.props.hasStarted ?
                    <Card
                        title={<span style={{ overflow: "auto" }}>
                            <Typography.Text>
                                Con respecto al mazo: <Typography.Text style={{ fontWeight: "bold" }}>{this.props.question.deckName + " "}</Typography.Text>
                                y a la carta: <Typography.Text style={{ fontWeight: "bold" }}>{this.props.question.cardName + " "}</Typography.Text>
                                ¿Cuál de los siguientes enunciados es correcto con respecto al atributo: <Typography.Text style={{ fontWeight: "bold" }}>{this.props.question.options[0].fact}</Typography.Text>?
                                </Typography.Text>
                        </span>}
                        bodyStyle={{ padding: "0" }}
                    >
                        {this.props.question.options.map((option, index) => (<Card.Grid onClick={() => (this.props.onSelectQuestionOption(option.correct, option.description, this.props.currentQuestionData))} style={{ width: '100%' }}>{emojiArray[index] + " " + option.description}</Card.Grid>))}
                    </Card>
                    :
                    <Card
                        title="Haz clic en alguna de las opciones para comenzar el quiz"
                        bodyStyle={{ padding: "0" }}
                    >
                        {emojiArray.map(option => <Card.Grid onClick={() => (this.props.onStart())} style={{ width: '100%' }}>{option + " "}Comenzar Quiz</Card.Grid>)}
                    </Card>
                }

            </Col>
        );
    }
}

export default question