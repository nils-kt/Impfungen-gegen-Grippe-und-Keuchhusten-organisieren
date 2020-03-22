import React from 'react';
import {Form} from 'reactstrap';
import QuestionCards from 'components/cards/QuestionCards';
import $ from 'jquery';

export class SurveyStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.questions = new QuestionCards();
    this.validated = false;
    /**
     * Configuration props for the
     * form elements.
     */
    this.questions.addQuestion('Welche Impfung möchten Sie durchführen lassen?', [{text: 'Grippe (Influenza)'}, {text: 'Keuchhusten (Pneumokokken)'}], 'Diese Information ist notwendig damit der Arzt weiß welchen Impfstoff er Ihnen verabreichen soll.');
    this.questions.addQuestion('Sind Sie in den letzten 4 Wochen verreist? (innerh. Deutschland oder Ausland)', [{text: 'Ja'}, {text: 'Nein'}], 'Dies ist eine wichtige Information um eine Infektion mit COVID-19 ausschließen zu können.');
    this.questions.addQuestion('Sind Sie vorerkrankt?', [{text: 'Ja'}, {text: 'Nein'}]);
    this.questions.addQuestion('Fühlen Sie sich schlapp oder ausgelaugt?', [{text: 'Ja'}, {text: 'Nein'}]);
    this.questions.addQuestion('Haben Sie Gliederschmerzen?', [{text: 'Ja'}, {text: 'Nein'}]);
    this.questions.addQuestion('Haben Sie länger anhaltenden Husten?', [{text: 'Ja'}, {text: 'Nein'}]);
    this.questions.addQuestion('Haben Sie Schnupfen?', [{text: 'Ja'}, {text: 'Nein'}]);
    this.questions.addQuestion('Haben Sie Durchfall?', [{text: 'Ja'}, {text: 'Nein'}]);
    this.questions.addQuestion('Haben Sie Halsschmerzen?', [{text: 'Ja'}, {text: 'Nein'}]);
    this.questions.addQuestion('Haben Sie Kopfschmerzen?', [{text: 'Ja'}, {text: 'Nein'}]);
    this.questions.addQuestion('Haben Sie Diabetes?', [{text: 'Ja'}, {text: 'Nein'}]);
    this.questions.addQuestion('Sind Sie schneller außer Atem als sonst?', [{text: 'Ja'}, {text: 'Nein'}]);
    this.questions.addQuestion('Wurde bei Ihnen eine Herzerkrankung diagnostiziert?', [{text: 'Ja'}, {text: 'Nein'}, {text: 'Weiß nicht / keine Angabe'}]);
    this.questions.addQuestion('Wurde bei Ihnen eine chronische Lungenerkrankung diagnostiziert?', [{text: 'Ja'}, {text: 'Nein'}, {text: 'Weiß nicht / keine Angabe'}]);
    this.questions.addQuestion('Wurde bei Ihnen Adipositas (Fettsucht) diagnostiziert?', [{text: 'Ja'}, {text: 'Nein'}, {text: 'Weiß nicht / keine Angabe'}]);
    this.questions.addQuestion('Hatten Sie engen Kontakt zu einem bestätigtem Corona (COVID-19) Fall?', [{text: 'Ja'}, {text: 'Nein'}], 'Enger Kontakt bedeutet: <ul><li>Angesicht zu Angesicht länger als 15 Minuten</li><li>Berührung, Händeschütteln, Küssen</li><li>Länger als 15 Minuten direkt neben einer infizierten Person (weniger als 2 Meter) verbracht</li><li>Kontakt mit oder Austausch von Körperflüssigkeiten</li><li>Teilen einer Wohnung</li></ul>');
    this.questions.addQuestion('Hatten Sie engen Kontakt zu einem Corona (COVID-19) Verdachtsfall?', [{text: 'Ja'}, {text: 'Nein'}], 'Enger Kontakt bedeutet: <ul><li>Angesicht zu Angesicht länger als 15 Minuten</li><li>Berührung, Händeschütteln, Küssen</li><li>Länger als 15 Minuten direkt neben einer infizierten Person (weniger als 2 Meter) verbracht</li><li>Kontakt mit oder Austausch von Körperflüssigkeiten</li><li>Teilen einer Wohnung</li></ul>');
    this.questions.addQuestion('Hatten Sie Fieber (über 38 °C) in den letzten 24 Stunden?', [{text: 'Ja'}, {text: 'Nein'}]);
    this.questions.addQuestion('Nehmen Sie aktuell Cortison ein (in Tablettenform)?', [{text: 'Ja'}, {text: 'Nein'}]);
    this.questions.addQuestion('Nehmen Sie aktuell Immunsuppressiva?', [{text: 'Ja'}, {text: 'Nein'}], 'Immunsuppressiva sind Substanzen, welche die Funktionen des Immunsystems vermindern.');

    /* Event listener */
    this.questions.getEvents().on('performAnswer', (result) => {
      console.log(result);
      this.renderQuestion(result.newIndex);
    });
  }

  isValidated() {
    return this.validated;
  }

  renderQuestion(index) {
    for (let i = 0; i < this.questions.getQuestionAmount(); i++) {
      if (index === i)
        $("#question_" + i).show();
      else
        $("#question_" + i).hide();
    }
  }

  render() {
    return (
      <div>
        <p>Bitte beantworten Sie die nachfolgenden Fragen:</p>
        <Form>
          {this.questions.renderCards()}
        </Form>
      </div>);
  }

  componentDidMount() {
    {this.renderQuestion(0)}
  }
}

export default {
  stepName: 'Fragebogen',
  component: SurveyStep
}
