/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Earthquake } from '@Interfaces/earthquake';
import { Details } from '@Components/details';
import * as Modal from 'react-modal';
import Icon from '@material-ui/core/Icon';

const buttonStyle = {
    padding: '1px',
    margin: '5px',
};

/** Custom style associated with the modal. */
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#appContainer');

/**One earthquake element in a list. */
export class EarthquakeElement extends React.Component<{ earthquake: Earthquake }, { showDetails: boolean }> {
    constructor(props: { earthquake: Earthquake }) {
        super(props);
        this.state = {
            showDetails: false,
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    /** Close the modal that contains more details */
    closeModal(): void {
        this.setState({
            showDetails: false,
        });
    }

    /** Open the modal that contains more details. */
    openModal(): void {
        this.setState({
            showDetails: true,
        });
    }

    /** Render the earthquake element. */
    render(): JSX.Element {
        const modal = (
            <div>
                <Modal
                    isOpen={this.state.showDetails}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Earthquake Details"
                >
                    <h2>Earthquake Details</h2>
                    <Details earthquake={this.props.earthquake}></Details>
                    <button style={buttonStyle} data-cy="close" onClick={this.closeModal}>
                        close
                    </button>
                </Modal>
            </div>
        );
        return (
            <li data-cy="earthquake">
                {this.props.earthquake.place} - {this.props.earthquake.mag}
                <button aria-label="More Details" style={buttonStyle} data-cy="showDetails" onClick={this.openModal}>
                    <Icon>info</Icon>
                </button>
                {modal}
            </li>
        );
    }
}
