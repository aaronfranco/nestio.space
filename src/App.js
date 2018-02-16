import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Row, Col } from 'react-materialize'
import SatelliteContainer from './containers/satellite/SatelliteContainer'
import AlertContainer from './containers/alert/AlertContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nestio<i>.space</i></h1>
        </header>

        <div className="App-Content">

          <Row className="App-Data">
            <Col s={12} m={8} className="col App-Graph">
              <h2 className="App-Graph-Title" style={{marginBottom: 0}}>Satellite Altitude</h2>
              <small>Last 10 minutes of recorded altitudes.</small>
              <SatelliteContainer/>
            </Col>
            <Col s={12} m={4} className="col App-Alerts">
              <h2>Orbit Alerts</h2>
              <AlertContainer/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
