/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { EarthquakeElement } from '@Components/earthquake';
import { Earthquake } from '@Interfaces/earthquake';

/** Display a list of earth quakes. */
export class List extends React.Component<{ quakes: Earthquake[] }, {}> {
    constructor(props: { quakes: Earthquake[] }) {
        super(props);
    }

    /** Render the earth quakes in a list. */
    render(): JSX.Element {
        const renderedQuakes = this.props.quakes.map((quake: Earthquake, key: number) => (
            <EarthquakeElement key={key} earthquake={quake}></EarthquakeElement>
        ));
        return (
            <div className="centered">
                <h1>USGS Earthquakes</h1>
                <ul data-cy="earthquakes">{renderedQuakes}</ul>
            </div>
        );
    }
}
