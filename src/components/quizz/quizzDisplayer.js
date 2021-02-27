import React, { Component, Fragment } from 'react';
import { Typography, Row, Col } from 'antd';
import Timer from 'react-compound-timer'
import Question from './quizzQuestion'
import QuizzSumup from './quizzSumup'

class quizzDisplayer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            numPregunta: 0,
            numPreguntasOk: 0,
            questionTracker: [],
            hasStarted: false,
            hasFinished: false,
            timerState: null
        }

        this.timerRef = React.createRef();
    }

    onSelectQuestionOption = (isCorrect, chosenAnswer, questionData) => {
        if (isCorrect) {
            this.setState({ numPreguntasOk: this.state.numPreguntasOk + 1 })
        }

        if (this.state.numPregunta === this.props.quiz.length - 1 && !this.state.hasFinished) {
            this.setState({ hasFinished: true })
            this.onStop()
        }
        else {
            this.onReset()
        }
        this.setState({ 
            numPregunta: this.state.numPregunta + 1, 
            timerState: null, 
            questionTracker: [...this.state.questionTracker, { ...questionData, myAnswer: chosenAnswer, isCorrect: isCorrect }] 
        })
    }

    onStart = () => {
        this.setState({ hasStarted: true })
        if (this.props.hasTimer) { this.timerRef.current.start() }
    }

    onReset = () => {
        if (this.props.hasTimer) {
            this.timerRef.current.reset()
            this.timerRef.current.start()
        }
    }

    onStop = () => {
        if (this.props.hasTimer) {
            this.timerRef.current.reset()
            this.timerRef.current.stop()
        }
    }

    getCurrentCardData = () => {
        let currentQuestion = this.props.quiz[this.state.numPregunta]
        let rightAnswer = currentQuestion.options.filter(option => option.correct === true)

        return {
            numPregunta: this.state.numPregunta,
            deckName: currentQuestion.deckName,
            cardName: currentQuestion.cardName,
            rightAnswer: rightAnswer[0].description,
            attribute: rightAnswer[0].fact
        }
    }

    render() {

        let currentQuestionData = !this.state.hasFinished ? this.getCurrentCardData() : {}

        return (
            <Fragment>
                <Timer
                    ref={this.timerRef}
                    initialTime={this.props.numSegundos * 1000}
                    direction="backward"
                    lastUnit="s"
                    startImmediately={false}
                    checkpoints={[
                        {
                            time: 1 * 1000,
                            callback: () => (this.onSelectQuestionOption(false, "-", currentQuestionData)),
                        },
                        {
                            time: 11 * 1000,
                            callback: () => (this.setState({ timerState: "warning" })),
                        },
                        {
                            time: 6 * 1000,
                            callback: () => (this.setState({ timerState: "danger" })),
                        }
                    ]}
                >
                    {({ start, resume, pause, stop, reset, timerState }) => (
                        <Fragment>
                            <Row gutter={[8, 8]} justify="space-between">
                                <Col>
                                    <Typography.Text type={this.state.timerState} style={{ fontSize: "1rem" }}>{"🕒:"}{this.props.hasTimer ? (<Timer.Seconds />) : "Ꝏ"}{"s"}</Typography.Text>
                                </Col>
                                <Col>
                                    <Typography style={{ fontSize: "1rem" }}>{"🟢:" + (this.state.numPreguntasOk) + "/" + this.props.quiz.length}</Typography>
                                </Col>
                                <Col>
                                    <Typography style={{ fontSize: "1rem" }}>{"📝:" + (!this.state.hasFinished ? (this.state.numPregunta + 1) : this.props.quiz.length) + "/" + this.props.quiz.length}</Typography>
                                </Col>
                            </Row>
                        </Fragment>
                    )}
                </Timer>
                {this.props.quiz.length > this.state.numPregunta ?
                    <Question onStart={this.onStart} hasStarted={this.state.hasStarted} question={this.props.quiz[this.state.numPregunta]} currentQuestionData={currentQuestionData} onSelectQuestionOption={this.onSelectQuestionOption} />
                    :
                    <QuizzSumup results={this.state.questionTracker} />
                }

            </Fragment>
        );
    }
}

export default quizzDisplayer

