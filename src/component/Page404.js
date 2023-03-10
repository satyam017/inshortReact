import React from "react";
import { Container,Row ,Col} from "react-bootstrap";

function Page404() {
  return (
    <section className="page_404">
      <Container>

        <Row>
          <Col sm='12'>
            <Col sm={{span:10, offset:1}}>
               
                <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                    <h3 className="h2">Look like you're lost</h3>

                    <p>the page you are looking for not avaible!</p>

                    <a href="" className="link_404">
                    Go to Home
                    </a>
                </div>
               
            </Col>
          </Col>
        
        </Row>
       
      </Container>
    </section>
  );
}

export default Page404;
