import React, {Component} from 'react';
import SurveyForm from '../surveyForm/surveyForm.component'
import SurveyFormReview from '../surveyFormReview/surveyFormReview.component';
import {reduxForm} from 'redux-form';
class SurveyNew extends Component {
    state = {showReview: false};
    renderContent() {
        return this.state.showReview? 
        <SurveyFormReview onCancel= {() => this.setState({showReview: false})} /> 
        : 
        <SurveyForm onSurveySubmit = {() => this.setState({showReview: true}) } />
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);