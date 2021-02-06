import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from '../surveyField/surveyField.component'
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validatemails';
import {FIELDS} from '../../utils/formFields';


class SurveyForm extends Component {
    renderFields() {
        return (
            <div>
                {FIELDS.map(field => <Field key={field.key} label={field.label} type="text" name={field.name} component={SurveyField} />)}
            </div>
        )
    }
    render() {
        return (
            <div>
               <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <Link to="/surveys" className="red btn-flat white-text left">Cancel 
                    <i className="material-icons right">cancel</i>
                </Link>
                <button type='submit' className="teal btn-flat white-text right">Next 
                    <i className="material-icons right">done</i>
                </button>
               </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients);
    FIELDS.forEach(({name}) => {
        if(!values[name]) {
            errors[name] = `You must provide a value`;
        }
    })
    return errors
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false,
})(SurveyForm);