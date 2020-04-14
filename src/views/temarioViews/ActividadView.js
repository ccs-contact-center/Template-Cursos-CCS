import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';
import withAuth from '../../services/withAuth';
import List2 from './componentsExtras/dragdrog';

class ActividadView extends Component {


  
  loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>

  render() {

    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardHeader className="text-center">
                Texto1! ActividadView
              </CardHeader>
              <CardBody className="text-center">
             
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ActividadView

