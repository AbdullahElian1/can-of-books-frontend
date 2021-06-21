import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Bestbook.css'



export class Bestbook extends Component {
    render() {
        return (

            <>
              <Carousel>
                {this.props.data.map((item) => {
                  return (
      
                    <Carousel.Item>
                      <img
                        className="d-block"
                        src={item.url}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3> {item.name}</h3>
                        <p>{item.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
      
      
      
                  );
                })}
      
      
              </Carousel>
            </>
          )
    }
}

export default Bestbook
