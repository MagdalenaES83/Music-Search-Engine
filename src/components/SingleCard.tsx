import { Card, Button } from "react-bootstrap";
import React from "react";
import { Component } from "react";
import Band from "../typings/Band"


interface SingleCard extends Component {
title: string;
artist: string;
 bands :Band[]

}



class SingleCard extends Component {
    render() {
      return (
        <>
          <Card className="card2">
            <Card.Body>
              
                <Card.Title>
                    {/* // {this.props.data.title} */}
                     </Card.Title>
              
              <Card.Subtitle className="mb-2 text-muted">
                { //**{this.props.data.title} */  */
                }
              </Card.Subtitle>
              <Card.Text>
            
              </Card.Text>
  
              
                <Button variant="primary">Details</Button>
              
              
              {/* {
                      this.setState.isFav
                          ? <FaGrinStars color="gold" size={16} className="me-4 my-auto"/>
                          : <Star color="gold" size={16} className="me-4 my-auto"  />
                  }  */}
            </Card.Body>
          </Card>
        </>
      );
    }
  }
  export default SingleCard