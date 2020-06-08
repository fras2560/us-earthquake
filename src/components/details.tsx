/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Alert, Color } from '@material-ui/lab';

import { Earthquake } from '@Interfaces/earthquake';

/** Maps the alert level to the severity. */
const severityMap = {
    green: 'success',
    yellow: 'info',
    orange: 'warning',
    red: 'error',
    null: 'info',
};

/** The details of a specific earthquake. */
export class Details extends React.Component<{ earthquake: Earthquake }, {}> {
    constructor(props: { earthquake: Earthquake }) {
        super(props);
    }
    /** Renders the earthquake details. */
    render(): JSX.Element {
        const severity = severityMap[this.props.earthquake.alert] as Color;
        return (
            <ul data-cy="details">
                <li data-cy="place">Place: {this.props.earthquake.place}</li>
                <li data-cy="time">Time: {new Date(this.props.earthquake.time).toString()}</li>
                <li data-cy="severity">
                    <Alert severity={severity}>Magnitude: {this.props.earthquake.mag}</Alert>
                </li>
                <li data-cy="significance">Significance: {this.props.earthquake.sig}</li>
            </ul>
        );
    }
}
