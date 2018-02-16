import React from "react";
import { connect } from "react-redux";
import { satelliteActions } from "./satelliteActions"
import { LineChart } from 'react-easy-chart';

 class SatelliteContainer extends React.Component {
   constructor(props){
     super(props);
     this.timer = null;
   }
   componentWillMount = () => {
     this.fetchSatelliteData()
     this.pollSatelliteData()
   }
   pollSatelliteData = async () => {
     this.timer = setInterval(this.fetchSatelliteData, 10000)
   }
   fetchSatelliteData = async() => {
     let response = await fetch("http://nestio.space/api/satellite/data")
     let data = await response.json();
     this.props.updateSatelliteData({ history: this.props.history, position: data, orbit: this.props.orbit })
   }
   render = () => {
     return(
           <LineChart
            axes
            dataPoints
            width={650}
            height={350}
            xType={'text'}
            xTicks={10}
            yDomainRange={[100, 220]}
            interpolate={'cardinal'}
            axisLabels={{x: 'Time', y: 'Altitude'}}
            data={[this.props.history]}
          />
     )
   }
 }

const mapStateToProps = state => {
  return {
    history: state.satellite.history,
    orbit: state.satellite.holdingOrbit
  };
};
const mapDispatchToProps = dispatch => ({
     updateSatelliteData: (input) => dispatch(satelliteActions.process(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SatelliteContainer);
