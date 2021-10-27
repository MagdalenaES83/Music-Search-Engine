import { Component } from "react";
import { useEffect, useState } from "react";
import Band from "../typings/Band"
import SingleCard from "./SingleCard"
import{ Col, Row, Container, Form } from "react-bootstrap"


function Body() {
    const [bands, setBands] = useState<Band[]>([])

    useEffect(() => {
        const fetchBands = async () => {
          try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=metal')
            if (response.ok) {
              let fetchBands: Band[] = await response.json()
              console.log(fetchBands)
              setBands(fetchBands)
            }
          } catch (error) {}
        }
        fetchBands()
      }, [])






  return <div> 

<div>
<img id="jumbo"  src="https://www.thelocal.no/wp-content/uploads/2016/12/d3cedcdc5261347ae8443743acab9cc2eab0ad274a06c82dd7e26fe6ca63b19d.jpg" ></img>

<Col className="m-5 bg-dark" md={6}> <Container>
          <Form>
            <Form.Control
              id="search"
              type="search"
              placeholder="Search "
              className="mr-2"
              aria-label="Search"
              
            />
          </Form>
        </Container> </Col> 

</div> 
<Container> 
 
    <Row> 

        <Col md={6}> <SingleCard  
        // bands={bands}
        /> </Col> 
    </Row>
    
    </Container> 
     
  </div>;
}

export default Body;
