import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';


class RecapitulacionView extends Component {  
  loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader className="text-center">
                Texto1!  RecapitulacionView
              </CardHeader>
              <CardBody className="text-center">
                  contenido texto RecapitulacionView
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default RecapitulacionView

