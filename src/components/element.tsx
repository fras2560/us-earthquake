import * as React from 'react';
import {Earthquake} from '@Interfaces/earthquake';
import {Details} from '@Components/details'
import * as Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#appContainer')


export class Element extends React.Component<
    {earthquake: Earthquake}, {showDetails: boolean}> {
    constructor(props: {earthquake: Earthquake}) {
        super(props);
        this.state = {
            showDetails: false,
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    /** Close the modal that contains more details */
    closeModal() {
        this.setState({
            showDetails: false
        });
    }

    /** Open the modal that contains more details. */
    openModal() {
        this.setState({
            showDetails: true
        });
    }

    /** Render the element */
    render() {
        const modal = (
            <div>
            <Modal
              isOpen={this.state.showDetails}
              onAfterOpen={() => {console.log("Opened modal");}}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Earthquake Details"
            >
              <h2>Earthquake Details</h2>
              <Details earthquake={this.props.earthquake}></Details>
              <button onClick={this.closeModal}>close</button>
            </Modal>
          </div>
        );
        return (
            <li>
                {this.props.earthquake.place} - {this.props.earthquake.mag}
                <button onClick={this.openModal}>More details</button>
                {modal}
            </li>
        );
    }
}

