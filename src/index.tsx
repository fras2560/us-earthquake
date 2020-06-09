/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getEarthquakes } from '@Services/usgs';
import { List } from '@Components/list';
import { Earthquake } from '@Interfaces/earthquake';
import { ErrorFeedback } from '@Components/error_feedback';
import * as Modal from 'react-modal';
/** The minimum threshold for an earthquake to be displayed. */
const MINIMUM_MAGNITUDE = 1.0;

/** Load the earthquakes and display them in a list. */
getEarthquakes(MINIMUM_MAGNITUDE)
    .then((quakes: Earthquake[]) => {
        ReactDOM.render(<List quakes={quakes} />, document.getElementById('appContainer'));
    })
    .catch((error) => {
        // display some feedback if unable to load earthquakes
        ReactDOM.render(<ErrorFeedback />, document.getElementById('appContainer'));
    });
