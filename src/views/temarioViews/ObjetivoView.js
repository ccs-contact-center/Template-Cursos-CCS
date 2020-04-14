import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import Objetivo from '../../assets/img/img-cursoQA/objetivo.jpg';

class ObjetivoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
            <Card>
              <CardHeader className="text-left">
                <h3>Objetivo</h3>
              </CardHeader>
              <CardBody className="text-center">
                <Row>
                  <Col xs="12" className="centrado-fila">
                    <Col xs="12" sm="12" md="6" lg="6">
                      <div className="align-middle">
                        <p>
                          Medir el comportamiento de calidad de en las
                          transacciones por diferentes medios de omnicanalidad
                          como llamadas inbound, outbound, WhatsApp, Mail y
                          chats realizadas por los operadores, con la finalidad
                          de mantener y mejorar el servicio, mediante
                          retroalimentaciones de desempeño.
                        </p>
                      </div>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="6">
                      <p>
                        <img
                          src={Objetivo}
                          style={{ width: 360 }}
                          alt="Objetivo"
                          className="img-fluid bordeImagen"
                        />
                      </p>
                    </Col>
                  </Col>
                </Row>
              </CardBody>
            </Card>
      </div>
    )
  }
}
export default ObjetivoView
