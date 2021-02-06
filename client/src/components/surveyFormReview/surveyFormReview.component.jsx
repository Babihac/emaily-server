import React from 'react';
import {connect} from 'react-redux';
import {FIELDS} from '../../utils/formFields';
import {submitSurvey} from '../../redux/form/form.actions'
import {withRouter} from 'react-router-dom';

const SurveyReview = ({onCancel, formValues, submitSurvey, history}) => {
    return (
        <div>
            <h5>Please confirm your entries</h5>
            <div>
                {FIELDS.map(field => (
                    <div key={field.key}>
                        <label>{field.label}</label>
                        <div>{formValues[field.name]}</div>
                    </div>
                ))}
            </div>
            <button className='yellow darken-3 btn-flat white-text' onClick={onCancel}>
                Back
            </button>

            <button onClick={() => submitSurvey(formValues, history)} className="green btn-flat right white-text">
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        formValues: state.form.surveyForm.values
    }
}

const mapDispatchToProps = dispatch => ({
    submitSurvey: (formValues, history) => dispatch(submitSurvey(formValues, history))
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SurveyReview));