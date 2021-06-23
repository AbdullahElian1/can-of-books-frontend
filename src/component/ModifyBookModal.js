import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export class ModifyBookModal extends Component {

    getdata=(event)=>{
        event.preventDefault();
        let object = {
            name: event.target.book.value,
            description: event.target.des.value,
            status: event.target.Status.value,
          };
        //   console.log(object);
          this.props.modifyBook(object);
    }

    render() {
        return (
            <div>
                {/* onChange={(e)=>this.getdata(e)} */}
                {/* onChange={(e)=>this.getdata(e)}  */}
                {/* onChange={(e)=>this.getdata(e)} */}
<Modal show={this.props.flagUpdateBook} onHide={this.props.updatBookModal}>
<Modal.Header closeButton>
<Modal.Title id="contained-modal-title-vcenter">
{this.props.title1}
</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form onSubmit={this.getdata}>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Book Name</Form.Label>
<Form.Control type="text" placeholder="Enter Book Name" name="book"  defaultValue={this.props.inputData.name}/>
<Form.Text className="text-muted">
  Pleas add your book.
</Form.Text>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Description </Form.Label>
<Form.Control type="text" placeholder="Description" name="des"  defaultValue={this.props.inputData.description} />
</Form.Group>
<Form.Group controlId="exampleForm.SelectCustom">
<Form.Label>Status</Form.Label>
<Form.Control as="select" custom name="Status"  defaultValue={this.props.inputData.status}>
  <option value="lifeChanging">Life Changing </option>
  <option value="favoriteFive">Favorite Five</option>
  <option value="recommendedtoMe">Recommended to Me </option>
</Form.Control>
</Form.Group>
<Button variant="primary" type="submit" onClick={this.props.updatBookModal} >
Submit
</Button>
</Form>
</Modal.Body>
<Modal.Footer>
{/* <Button onClick={this.close}>Close</Button> */}
</Modal.Footer>
</Modal>
                
            </div>
        )
    }
}

export default ModifyBookModal
