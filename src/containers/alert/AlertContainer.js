import React from "react";
import { connect } from "react-redux";
import { Collection, CollectionItem } from 'react-materialize'

 class AlertContainer extends React.Component {
   render = () => {
     return(
       <Collection>
          {this.props.alerts.map((item, index)=>{
            return <CollectionItem key={index}>{item.message}</CollectionItem>
          })}
        </Collection>
     )
   }
 }

const mapStateToProps = state => {
  return {
    alerts: state.alert.alerts
  };
};
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
