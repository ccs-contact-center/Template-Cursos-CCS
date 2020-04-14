import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { Accordion, Button } from 'react-bootstrap'
import {
  TablaControlCambios,
  TablaAnexos,
  TablaHotTopics,
  TablaConcentrado,
  TablaMisteries,
} from './componentsExtras/tablas'
import temaTresView from '../../assets/img/img-cursoQA/temaTresView.jpg'
import Nota from './componentsExtras/notasReferencia'

class TemaSeisView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader className="text-left">
            <h3>Seguimiento de operaciones</h3>
          </CardHeader>
          <CardBody className="">
            <Row>
              <Col xs="12">
                <Accordion>
                  <Col className=" btn bg-fondo-btn bordeAcordeon" style={{ padding: '0' }}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <span className="text-light">
                        Seguimiento de operaciones
                      </span>
                    </Accordion.Toggle>
                  </Col>
                  <div className="bg-light">
                    <Accordion.Collapse eventKey="0">
                      <div className="mx-3">
                        <Row>
                          <Col xs="12" className="text-justify">
                            <ul className="mt-3">
                              <li>
                                Una vez que el supervisor de operaciones recibe
                                la notificación de un FODA, deberá
                                retroalimentar al agente de inmediato.
                              </li>
                              <li>
                                Realizará un monitoreo de seguimiento para
                                validar la recepción de retroalimentación por
                                parte del agente, no aplicará para bono.
                              </li>
                              <li>
                                Cada semana se revisará con operaciones el
                                concentrado de errores de la operación y se
                                cotejarán con las sanciones. Lo genera calidad,
                                da seguimiento operaciones y RR.HH revisa
                                seguimiento y calificara el seguimiento
                                operativo. COMPARTIR EVIDENCIA CON CALIDAD
                              </li>
                              <li>
                                Se enviarán estos resultados al responsable de
                                generar los bonos para que se incluya en el
                                soporte y aplicar el descuento.
                              </li>
                              <li>
                                En campañas de ventas se penalizará 25 % del
                                bono por error fatal. (revisar matriz de
                                sanciones para error fatal)
                              </li>
                              <li>
                                En campañas de atención a clientes es candado
                                para bono.
                              </li>
                              <li>
                                La cuota de monitoreo de operaciones es
                                1monitoero por agentes a la semana,
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <Col className=" btn bg-fondo-btn bordeAcordeon" style={{ padding: '0' }}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <span className="text-light"> Elaboración reportes </span>
                    </Accordion.Toggle>
                  </Col>
                  <div className="bg-light">
                    <Accordion.Collapse eventKey="1">
                      <div className="mx-3">
                        <Row>
                          <Col xs="12" className="text-justify">
                            <ul className="mt-3">
                              <li>
                                Todos los resultados deben estar en el mismo
                                reporte de calidad y no se mezclan
                                características de los diferentes reportes.
                              </li>
                            </ul>
                            <p>Hot topics</p>
                            <p>
                              Áreas de oportunidad o fortalezas detectadas en la
                              campaña y que tiene relevancia en la resolución
                              del cliente, cuenta o campaña: lo más relevante
                              del día*{' '}
                              <b style={{ color: 'red' }}>
                                (SE ENVIA DIARIO Y CONCENTRADO A LA SEMANA )
                              </b>
                            </p>
                            <TablaHotTopics />
                            <p>Hallazgos </p>
                            <p>
                              Áreas de oportunidad o fortalezas dirigidas al
                              agente telefónico y a la campaña que tiene
                              relevancia en la resolución del cliente de manera
                              cualitativa y cuantitativa. (se envía por correo,
                              cuando se detectan)
                            </p>
                            <p>CONCENTRADO</p>
                            <TablaConcentrado />
                            <p>Mysteries</p>
                            <p>
                              {' '}
                              Reporte de transacciones dirigidas a un tema u
                              objetivo particular.
                            </p>

                            <p>
                              Se realiza de manera aleatoria una vez a la semana
                              por cada campaña. (oxxo, 2 por semana)
                            </p>
                            <TablaMisteries />
                            <p>Reporte de desempeño IN</p>
                            <p>
                              Reporte en el cual se analiza el resultado de los
                              monitoreos realizados de manera grupal e
                              individual de cada campaña; así como el
                              comparativo de semana a semana
                            </p>
                            <p>
                              Política **El área de operaciones tiene acceso a
                              la plataforma de reportes para dar seguimiento{' '}
                            </p>
                            <p>
                              Ya no se estarán enviando reportes (ABC) bajo
                              particularidades de dirección.**
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <Col className=" btn bg-fondo-btn bordeAcordeon " style={{ padding: '0' }}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      <span className="text-light">Tripartita</span>
                    </Accordion.Toggle>
                  </Col>
                  <div className="bg-light">
                    <Accordion.Collapse eventKey="2">
                      <div className="mx-3">
                        <Row>
                          <Col xs="12" className="text-justify">
                            <p className="mt-3">
                              El reporte tripartita proporciona información
                              sobre el desempeño obtenido durante un tiempo
                              determinado. Se divide en dos tipos: Inbound y
                              Outboun.
                            </p>
                            <p>
                              <b>Inbound</b> analiza el AHT, Tipificación y
                              Resolución
                            </p>
                            <p>
                              <b>Outbound </b> Analiza Gestión, Tipificación y
                              Aprovechamiento de BBDD
                            </p>
                            <p>Se envía semanalmente </p>
                            <p>
                              La operación tiene la obligación de revisarlo
                              diario :
                            </p>
                            <p>
                              <b style={{ color: 'red' }}>Assesment</b>
                            </p>
                            <p>
                              Análisis basado en los resultados obtenidos en un
                              periodo determinado y en el cual se informa el
                              seguimiento que ha tenido la campaña, los
                              resultados de su desempeño, áreas de oportunidad
                              grupal e individual, hallazgos reincidentes (tanto
                              información como agentes).
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <Col className=" btn bg-fondo-btn bordeAcordeon " style={{ padding: '0' }}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                      <span className="text-light">
                        Actividades adicionales{' '}
                      </span>
                    </Accordion.Toggle>
                  </Col>
                  <div className="bg-light">
                    <Accordion.Collapse eventKey="3">
                      <div className="mx-3">
                        <Row>
                          <Col xs="12" className="centrado-fila mt-3">
                            <Col xs="12" sm="6" md="7" xl="8" className="text-justify">
                              <ul>
                                <li>
                                  Supervisor de calidad auditara las
                                  calificaciones con promedio de 100% mediante
                                  una calibración, los resultados no pueden
                                  diferir respecto al + -3 puntos de diferencia.
                                </li>
                              </ul>
                              <p>Calibración </p>
                              <ul>
                                <li>
                                  {' '}
                                  Se creará un score card para calibraciones.
                                </li>
                                <li> Clínica de calidad</li>
                                <li> Plan de trabajo: </li>
                                <li> Conexión en operaciones:</li>
                                <li> Mystery</li>
                              </ul>
                            </Col>
                            <Col xs="12" sm="6" md="5" xl="4" className="mb-4">
                              <img
                                src={temaTresView}
                                style={{ width: 360 }}
                                alt="temaTresView"
                                className="img-fluid bordeImagen"
                              />
                            </Col>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <Col className=" btn bg-fondo-btn bordeAcordeon" style={{ padding: '0' }}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                      <span className="text-light">ANEXOS </span>
                    </Accordion.Toggle>
                  </Col>
                  <div className="bg-light">
                    <Accordion.Collapse eventKey="4">
                      <div className="mx-3">
                        <br />
                        <p>Matriz de KPI´S de operaciones</p>
                        <TablaAnexos />
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <Col className=" btn bg-fondo-btn bordeAcordeon" style={{ padding: '0' }}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                      <span className="text-light">Control de cambios </span>
                    </Accordion.Toggle>
                  </Col>
                  <div className="bg-light">
                    <Accordion.Collapse eventKey="5">
                      <div className="mx-3">
                        <TablaControlCambios />
                      </div>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
              </Col>
              <Col xs="12" className="centrado-fila mt-3">
                <Nota
                  title1="Instrucción:"
                  content1="Dé click en cada Lineamientos generales de la Metodología para VER el contenido."
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}
export default TemaSeisView
