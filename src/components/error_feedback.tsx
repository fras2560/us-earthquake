import * as React from 'react';

/** Give feedback when unable to load earthquake details. */
export class ErrorFeedback extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }
    /** Render details explaining that there was an issue. */
    render(): JSX.Element {
        return (
            <div data-cy="errorFeedback">
                <h1>Something went wrong</h1>
                <p>Unable to load data from USGS</p>
            </div>
        );
    }
}
