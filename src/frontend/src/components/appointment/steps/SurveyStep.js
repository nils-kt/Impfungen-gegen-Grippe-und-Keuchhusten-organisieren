
import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import RadioChoice from 'components/forms/RadioChoice';
import SmartInput from 'components/forms/SmartInput';

export class SurveyStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    /**
     * Configuration props for the
     * form elements.
     */
    this.conf = {
    };
  }
  
  isValidated() {
    return true;
  }

  render() {
    return (
      <div>
        <p>Bitte beantworten Sie die folgenden Fragen:</p>
        <Form>
          <Row>
            <Col lg="8">
              <RadioChoice
                name="vaccination"
                condition="Welche Impfung möchten Sie durchführen lassen?"
                choiceYes="Grippe (Influenza)"
                choiceNo="Keuchhusten (Pneumokokken)"/>
            </Col>
            <Col lg="4">
              <blockquote>
                Diese Information ist notwendig damit der Arzt weiß welchen Impfstoff er Ihnen verabreichen soll.
              </blockquote>
            </Col>
            <Col lg="8">
              <RadioChoice
                name="travels"
                condition="Sind Sie in den letzten 4 Wochen verreist? (innerh. Deutschland oder Ausland)"/>
            </Col>
            <Col lg="4">
              <blockquote>
                Dies ist eine wichtige Information um eine Infektion mit COVID-19 ausschließen zu können.
              </blockquote>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="prediseased"
                condition="Sind Sie vorerkrankt?"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="exhausted"
                condition="Fühlen Sie sich schlapp oder ausgelaugt?"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="limbpain"
                condition="Haben Sie Gliederschmerzen?"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="cough"
                condition="Haben Sie länger anhaltenden Husten?"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="snuff"
                condition="Haben Sie Schnupfen?"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="diarrhoea"
                condition="Haben Sie Durchfall?"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="sorethroat"
                condition="Haben Sie Halsschmerzen?"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="headache"
                condition="Haben Sie Kopfschmerzen?"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="diabetes"
                condition="Haben Sie Diabetes?"
                choiceMaybe="Weiß nicht / keine Angabe"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="breathless"
                condition="Sind Sie schneller außer Atem als sonst?"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="heartdisease"
                condition="Wurde bei Ihnen eine Herzerkrankung diagnostiziert?"
                choiceMaybe="Weiß nicht / keine Angabe"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="lungdisease"
                condition="Wurde bei Ihnen eine chronische Lungenerkrankung diagnostiziert?"
                choiceMaybe="Weiß nicht / keine Angabe"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="adipositas"
                condition="Wurde bei Ihnen Adipositas (Fettsucht) diagnostiziert?"
                choiceMaybe="Weiß nicht / keine Angabe"/>
            </Col>
            <Col lg="8">
              <RadioChoice
                name="coronacontact"
                condition="Hatten Sie engen Kontakt zu einem bestätigtem Corona (COVID-19) Fall?"/>
            </Col>
            <Col lg="4">
              <blockquote>
                Enger Kontakt bedeutet: <ul><li>Angesicht zu Angesicht länger als 15 Minuten</li><li>Berührung, Händeschütteln, Küssen</li><li>Länger als 15 Minuten direkt neben einer infizierten Person (weniger als 2 Meter) verbracht</li><li>Kontakt mit oder Austausch von Körperflüssigkeiten</li><li>Teilen einer Wohnung</li></ul>
              </blockquote>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="coronacontactsuspect"
                condition="Hatten Sie engen Kontakt zu einem Corona (COVID-19) Verdachtsfall?"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="fever"
                condition="Hatten Sie Fieber (über 38 °C) in den letzten 24 Stunden?"/>
            </Col>
            <Col lg="12">
              <RadioChoice
                name="cortisone"
                condition="Nehmen Sie aktuell Cortison ein (in Tablettenform)?"/>
            </Col>
            <Col lg="8">
              <RadioChoice
                name="immunsuppressiva"
                condition="Nehmen Sie aktuell Immunsuppressiva?"/>
            </Col>
            <Col lg="4">
              <blockquote>
                Immunsuppressiva sind Substanzen, welche die Funktionen des Immunsystems vermindern.
              </blockquote>
            </Col>
          </Row>
        
        </Form>
      </div>);
  }
}

export default {
  stepName: 'Fragebogen',
  component: SurveyStep
}
