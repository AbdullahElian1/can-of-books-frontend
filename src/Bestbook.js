import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './Bestbook.css'
import Card from 'react-bootstrap/Card';
import ModifyBookModal from './component/ModifyBookModal';
import CardColumns from 'react-bootstrap/CardColumns'
// import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import CloseButton from 'react-bootstrap/CloseButton'



export class Bestbook extends Component {
  editDta = (item, idx) => {
    this.props.updatBookModal();
    this.props.test(item, idx);
  }
  render() {
    return (

      <>

        <CardColumns>
          {this.props.data.map((item, idx) => {
            return (
              <Card className="text-center" key={idx} >
                <CloseButton onClick={() => this.props.deletebook(idx)} />
                <Card.Title>{item.name}</Card.Title>
                <Card.Body>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      Book Description <br /> <br />
                      <small className="text-muted">Click for Description</small>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>     {item.description} </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                </Card.Body>
                {/* <Button variant="primary" onClick={() => this.props.deletebook(idx)}>Delete</Button> */}
                <Button variant="primary" onClick={() => this.editDta(item, idx)} className="button">Update</Button>
                <Card.Footer>
                  <small className="text-muted">
                    Status : {item.status}
                  </small>
                </Card.Footer>
              </Card>
            );
          })}
        </CardColumns>

        <ModifyBookModal updatBookModal={this.props.updatBookModal} flagUpdateBook={this.props.flagUpdateBook} inputData={this.props.inputData} modifyBook={this.props.modifyBook} />







      </>
    )
  }
}

export default Bestbook

