import { Modal, Button } from 'react-bootstrap'
import React from 'react';

function ResultModal(detail) {
    return (
      <Modal
        {...detail}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {detail.detail.title}
          </Modal.Title>
          <p>
            {detail.detail.section}
            {detail.detail.byline}
            {detail.detail.published_date}
            {detail.detail.source}
            {detail.detail.url}
          </p>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            {detail.detail.abstract}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={detail.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default ResultModal;