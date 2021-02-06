import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {fetchSurvey} from '../../redux/surveys/survey.actions'
import {selectSurveysList} from '../../redux/surveys/surveys.selectors'

class SurveyList extends Component {

    componentDidMount() {
        const {fetchSurveys} = this.props;
        fetchSurveys();
    }

    renderSurveys() {
        const {surveyList} = this.props;
        console.log('----------------------------------------')
        console.log(surveyList)
        return surveyList.reverse().map(survey=> (
            <div key={survey._id} className="card">
                <div className="card-content">
                    <span className="card-title">{survey.title}</span>
                    <p>{survey.body}</p>
                    <p className="right">
                        Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                    </p>
                </div>
                <div className="card-action">
                    <a href="#">Yes {survey.yes}</a>
                    <a href="#">No {survey.no}</a>
                </div>
            </div>
        ))
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
  surveyList: selectSurveysList,
});
const mapDispatchToProps = dispatch => ({
    fetchSurveys: () => dispatch(fetchSurvey())
})
export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);
