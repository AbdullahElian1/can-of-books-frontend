import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './Bestbook.css'
import Card from 'react-bootstrap/Card';



export class Bestbook extends Component {
    render() {
        return (

            <>
           
                {this.props.data.map((item,idx) => {
                  return (
                    <Card className="text-center" key={idx}>
  
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                      {item.description}
                      </Card.Text>
                      <Button variant="primary"  onClick={()=>this.props.deletebook(idx)}>Delete</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                  </Card>
                  
      
                  );
                })}
      
      
              
            </>
          )
    }
}

export default Bestbook

