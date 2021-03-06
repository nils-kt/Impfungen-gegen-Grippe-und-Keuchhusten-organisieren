import React from 'react';
import {
  Container,
  Row,
  Col,
  CardTitle,
  CardHeader,
  CardBody,
  ButtonGroup,
  CardFooter,
  ButtonToolbar,
  Button,
  Card
} from 'reactstrap';
import {EventEmitter} from 'events';
import Progress from 'reactstrap/lib/Progress';
import $ from 'jquery';

export default class QuestionCards {
  constructor() {
    this.questions = [];
    this.questionsAnswers = [];
    this.questionIndex = 0;
    this.events = new EventEmitter();
    this.isReady = false;
  }

  getEvents() {
    return this.events;
  }

  addQuestion(question, answers, note) {
    note = note || undefined;
    this.questions.push({question: question, answers: answers, note: note});
    this.questionsAnswers.push({question: question, answer: undefined});
  }

  performAnswer(index, text) {
    this.questionIndex++;
    this.events.emit('performAnswer', {oldIndex: (this.questionIndex - 1), newIndex: this.questionIndex});
    if (text === "Nein" || text === "Keuchhusten (Pneumokokken)") {
      this.questionsAnswers[index].answer = 0;
    } else if (text === "Ja" || text === "Grippe (Influenza)") {
      this.questionsAnswers[index].answer = 1;
    } else {
      this.questionsAnswers[index].answer = 2;
    }

    this.updateProgressValue((this.questionIndex / this.getQuestionAmount()) * 100);
    this.getAllAnswers();
  }

  getAllAnswers() {
    return this.questionsAnswers;
  }

  getQuestionAmount() {
    return this.questions.length;
  }

  updateProgressValue(value) {
    $('.progress-bar:last').css('width', value + '%').attr('aria-valuenow', value).text(Math.round(value) + '%');
  }

  isValidated() {
    return this.isReady;
  }

  renderCards() {
    return (
      <Container fluid style={{marginTop: "15px", marginBottom: "15px"}}>
        <Row>
          <Col xs={12} md={12} className="mr-auto ml-auto">
            <Card>
              <CardHeader><i className="fas fa-info-circle"></i> Bitte beantworten Sie die nachfolgenden
                Fragen:</CardHeader>
              <CardBody>
                {this.questions.map((question, _idx) =>
                  <Card key={_idx} id={"question_" + _idx}>
                    <CardHeader>
                      <CardTitle>{question.question}</CardTitle>
                    </CardHeader>
                    {question.note &&
                    <CardBody className="alert-info">
                      <p dangerouslySetInnerHTML={{__html: question.note}}></p>
                    </CardBody>
                    }
                    <CardFooter>
                      <ButtonToolbar>
                        <ButtonGroup>
                          {question.answers.map((answer, adx) =>
                            <Button type="button" key={adx}
                                    onClick={() => this.performAnswer(_idx, answer.text)}>{answer.text}</Button>
                          )}
                        </ButtonGroup>
                      </ButtonToolbar>
                    </CardFooter>
                  </Card>
                )}
              </CardBody>
              <CardFooter>
                <Progress animated color="info" value={0}>0%</Progress>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}