import * as React from 'react';
import { Element } from '@Components/element';
import { Earthquake } from '@Interfaces/earthquake';

/** Display a list of earth quakes. */
export class List extends React.Component<{ quakes: Earthquake[] }, {}> {
    constructor(props: { quakes: Earthquake[] }) {
        super(props);
    }

    /** Render the earth quakes in a list. */
    render(): JSX.Element {
        const renderedQuakes = this.props.quakes.map((quake: Earthquake, key: number) => (
            <Element key={key} earthquake={quake}></Element>
        ));
        return <ul>{renderedQuakes}</ul>;
    }
}
