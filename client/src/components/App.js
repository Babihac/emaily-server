import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header/Header.component";
import { connect } from "react-redux";
import { fetchUserAsync } from "../redux/auth/auth.actions";
import Landing from "./landing/landing.component";
const Dashboard = () => <h2>Dashboard</h2>;

const SurveyNew = () => <h2>New Survey</h2>;
class App extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUserAsync()),
});
export default connect(null, mapDispatchToProps)(App);
