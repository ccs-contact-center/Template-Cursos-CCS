import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row,  } from 'reactstrap'

import logo from '../../assets/img/brand/logo.png'

class BienvenidaView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <CardHeader className="text-center">
              <h1>¡Bienvenido! </h1>
            </CardHeader>
            <CardBody className="text-center">
              <img
                src={logo}
                style={{ width: 260 }}
                alt="Logo CCS"
                className="img-fluid"
              />
              <h1>SISTEMA DE GESTIÓN CCS</h1>
              <h2>Metodología de Calidad</h2>
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default BienvenidaView
