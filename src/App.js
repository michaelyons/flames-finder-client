import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCurrentWeatherData } from './helper/apiCalls';
import { addCurrentWeather } from './actions/weatherActions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      errors: ''
    };
  }
  componentDidMount = () => {
    this.populateCurrentWeather();
  };

  populateCurrentWeather = async () => {
    try {
      const currentLocationWeather = await getCurrentWeatherData();
      this.props.addCurrentWeather(currentLocationWeather);
    } catch (error) {
      this.setState({
        errors: error.message
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FlamesFinder</h1>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  addCurrentWeather: PropTypes.isRequired
};

export default App;
