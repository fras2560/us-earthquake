import * as React from 'react';

/** The details of a specific earthquake. */
export class ErrorFeedback extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }
    /** Renders the earthquake details. */
    render(): JSX.Element {
        return (
            <div data-cy="errorFeedback">
                <h1>Something went wrong</h1>
                <p>Unable to load data from USGS</p>
            </div>
        );
    }
}
