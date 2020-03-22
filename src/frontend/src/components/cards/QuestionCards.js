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

export default class QuestionCards {
  constructor() {
    this.questions = [];
    this.questionsAnswers = [];
    this.questionIndex = 0;
    this.events = new EventEmitter();
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
    this.getAllAnswers();
  }

  getAllAnswers() {
    console.log(this.questionsAnswers);
  }

  getQuestionAmount() {
    return this.questions.length;
  }

  renderCards() {
    return (
      <Container fluid style={{marginTop: "15px", marginBottom: "15px"}}>
        <Row>
          <Col xs={12} md={12} className="mr-auto ml-auto">
            {this.questions.map((question, _idx) =>
              <Card id={"question_" + _idx}>
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
                      {question.answers.map((question, idx) =>
                        <Button type="button"
                                onClick={() => this.performAnswer(_idx, question.text)}>{question.text}</Button>
                      )}
                    </ButtonGroup>
                  </ButtonToolbar>
                </CardFooter>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}