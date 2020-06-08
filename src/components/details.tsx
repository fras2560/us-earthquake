import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Modal from 'react-modal';
import {Alert, Color} from '@material-ui/lab';

import {Earthquake} from '@Interfaces/earthquake';


const severityMap = {
  'green': 'success',
  'yellow': 'info',
  'orange': 'warning',
  'red': 'error' 
};

export class Details extends React.Component<{earthquake: Earthquake}, {}> {
    
    constructor(props: {earthquake: Earthquake}){
        super(props); 
    }
    render() {
      const severity = severityMap[this.props.earthquake.alert] as Color;
        return (
            <ul>
                <li>Place: {this.props.earthquake.place}</li>
                <li>Time: {new Date(this.props.earthquake.time).toString()}</li>
                <li><Alert severity={severity}>Magnitude: {this.props.earthquake.mag}</Alert></li>
                <li>Significance: {this.props.earthquake.sig}</li>
            </ul>
        );
    }
}