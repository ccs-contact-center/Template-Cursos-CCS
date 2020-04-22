import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import Carousel from 'react-bootstrap/Carousel'
import Nota from './componentsExtras/notasReferencia'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader className="text-left">
            <h3>Definiciones</h3>
          </CardHeader>
          <CardBody className="">
            <Row>
              <Col xs="12">
                <Carousel className="bg-fondo-btn pt-2 " interval={50000000}>
                  <Carousel.Item className="pl-4">
                    <Row>
                      <Col xs="12" className="mb-4">
                        <div className="paddingCarousel text-justify">
                          <ul className="pl-2">
                            <li>
                              <b>In Bound</b>: Transacciones de entrada que
                              están destinadas a resolver dudas, aclarar
                              información de la marca, recibir quejas de los
                              usuarios, concertar reuniones con clientes o
                              solventar problemas que parten de los propios
                              clientes. Es la forma efectiva de estar en
                              contacto con un cliente cuando lo requiera.
                            </li>
                            <li>
                              <b>Out Bound</b>: Transacciones de salida, el
                              objetivo es atraer la atención del cliente
                              potencial utilizando eventos, publicidad en
                              medios, e-mail y llamadas no solicitadas y
                              usualmente es con fines comerciales. Se pueden
                              efectuar sondeos en distintos temas, estudios de
                              mercado para saber cuáles son las tendencias
                              actuales, ventas, etc.
                            </li>
                            <li>
                              <b>Ventas</b>: Actividad de venta a través de un
                              ejecutivo de venta especializado y con
                              competencias para vender de forma remota.
                            </li>
                            <li>
                              <b>Soporte</b>: Actividad de encuesta, telefónica
                              a través de un ejecutivo capaz de brindar un
                              rápido levantamiento de información de parte de un
                              cliente.
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row>
                      <Col xs="12" className="mb-4">
                        <div className="paddingCarousel text-justify">
                          <ul>
                            <li>
                              <b>Monitoreo</b>: Evaluación de una llamada con el
                              objetivo de identificar las debilidades y
                              fortalezas del agente telefónico, además de
                              validar el cumplimiento de los requisitos
                              establecidos por el cliente.
                            </li>
                            <li>
                              <b>Retroalimentación</b>: Explicación verbal
                              dirigida al agente con el fin de concientizarle de
                              las debilidades y fortalezas presentadas durante
                              la transacción o llamada con el fin de mejorar su
                              desempeño en la siguiente transacción.
                            </li>
                            <li>
                              <b>Transacción</b>: Es una operación comercial o
                              un acuerdo consistente en intercambiar un bien o
                              servicio entre solicitante y proveedor. Los tipos
                              de transacción pueden ser por vía telefónica,
                              chat, email, etc.
                            </li>
                            <li>
                              <b>Tipificación</b>: Clasificación en tipos o
                              clases de una realidad o un conjunto de
                              interacciones.
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row>
                      <Col xs="12" className="mb-4">
                        <div className="paddingCarousel text-justify">
                          <ul>
                            <li>
                              <b>AHT</b>: Tiempo promedio de relación con el
                              cliente en la interacción.
                            </li>
                            <li>
                              <b>FCR</b>: Indicador de tiempo de resolución de
                              la llamada durante el primer contacto.
                            </li>
                            <li>
                              <b>Gestión</b>: Conjunto de operaciones que se
                              realizan para dirigir y administrar un negocio o
                              una empresa.
                            </li>
                            <li>
                              <b>Error fatal</b>: Se considera error fatal toda
                              mala práctica que afecte al usuario final, cliente
                              o CCS ya sea por imagen y/o económicamente
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col xs="12" className="centrado-fila mt-3">
                <Nota
                  title1="Instrucción:"
                  content1="Dé click en la flecha del slide para VER el contenido."
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}
export default TemaUnoView
