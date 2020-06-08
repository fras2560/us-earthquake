/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { getEarthquakes } from '@Services/usgs';
import { List } from '@Components/list';
import { Earthquake } from './interfaces/earthquake';

/** The minimum threshold for an earthquake to be displayed. */
const MINIMUM_MAGNITUDE = 1.0;

getEarthquakes(MINIMUM_MAGNITUDE).then((quakes: Earthquake[]) => {
    console.log(quakes);
    ReactDOM.render(<List quakes={quakes} />, document.getElementById('appContainer'));
});
