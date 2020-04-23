import React, { Component } from 'react'
import {
  CardBody,
  Col,
  Row,
  CardHeader,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card
} from 'reactstrap';
import classnames from 'classnames';
import { Accordion, Button } from 'react-bootstrap';
import {
  TablaInBoundGuia,
  TablaInBoundRubros,
  TablaInBoundScript,
  TablaOutBoundGuia,
  TablaOutBoundRubros,
  TablaOutBoundScript,
  TablaSoporteGuia,
  TablaSoporteRubros,
  TablaSoporteScript,
  TablaWhRubros,
  TablaWhPlantilla,
  TablaWhCriterios,
  TablaWhGuia
} from './componentsExtras/tablas';

import Nota from './componentsExtras/notasReferencia'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )
  state = {
    activeTab: '0',
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) this.setState({ activeTab: tab })
  }
  render() {
    return (
      <div className="animated fadeIn ">
   
        <CardHeader className="text-left">
          <h3>Lineamientos generales de la Metodología</h3>
        </CardHeader>
        <CardBody className="text-center">
          <Row>
            <Col xs="12">
              <Accordion>
                <Col className=" btn  bg-fondo-btn bordeAcordeon  " style={{ padding:'0px',}}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                    <span>In Bound</span>
                  </Accordion.Toggle>
                </Col>
                <div className="bg-light">
                  <Accordion.Collapse eventKey="0">
                    <Row>
                      <Col xs="12">
                        <Col xs="12" className="centrado-fila">
                          <Nav tabs className="text-center">
                            <NavItem className="d-flex justify-content-center">
                              <NavLink
                                className={
                                  (classnames({
                                    active: this.state.activeTab === '1',
                                  }),
                                  'bg-fondo-btn btn btnAct text-danger ')
                                }
                                onClick={() => {
                                  this.toggle('1')
                                }}
                              >
                                <div className=" text-center ">
                                <b>Guía In</b>
                                </div>
                              </NavLink>
                            </NavItem>

                            <NavItem>
                              <NavLink
                                className={
                                  (classnames({
                                    active: this.state.activeTab === '2',
                                  }),
                                  'bg-fondo-btn btn btnAct text-danger ')
                                }
                                onClick={() => {
                                  this.toggle('2')
                                }}
                              >
                                <div
                                  color="primary"
                                  className="dark text-center"
                                >
                                   <b>Rubros In</b>
                                </div>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={
                                  (classnames({
                                    active: this.state.activeTab === '3',
                                  }),
                                  'bg-fondo-btn btn btnAct text-danger ')
                                }
                                onClick={() => {
                                  this.toggle('3')
                                }}
                              >
                                <div
                                  color="primary"
                                  className="dark text-center"
                                >
                                  <b>Script In</b>
                                </div>
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </Col>
                        <Col xs="12">
                          <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="0"></TabPane>
                            <TabPane tabId="1">
                              <Row>
                                <Col sm="12 centrado-fila">
                                  <TablaInBoundGuia />
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId="2">
                              <Row>
                                <Col sm="12">
                                  <TablaInBoundRubros />
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId="3">
                              <Row>
                                <Col sm="12">
                                  <TablaInBoundScript />
                                </Col>
                              </Row>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Col>
                    </Row>
                  </Accordion.Collapse>
                </div>
                <Col className=" btn  bg-fondo-btn bordeAcordeon  " style={{ padding:'0px',}}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <span>Out Bound</span>
                  </Accordion.Toggle>
                </Col>
                <div className="bg-light">
                  <Accordion.Collapse eventKey="1">
                    <Row>
                      <Col xs="12 centrado-fila">
                        <Nav tabs className="text-center">
                          <NavItem className="d-flex justify-content-center">
                            <NavLink
                              className={
                                (classnames({
                                  active: this.state.activeTab === '4',
                                }),
                                'btn-primary btn text-light btnAct')
                              }
                              onClick={() => {
                                this.toggle('4')
                              }}
                            >
                              <div className=" text-center ">
                              <b>Guía Out</b>
                              </div>
                            </NavLink>
                          </NavItem>

                          <NavItem>
                            <NavLink
                              className={
                                (classnames({
                                  active: this.state.activeTab === '5',
                                }),
                                'btn-primary text-light btnAct')
                              }
                              onClick={() => {
                                this.toggle('5')
                              }}
                            >
                              <div color="primary" className="dark text-center">
                              <b>Rubros Out</b>
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={
                                (classnames({
                                  active: this.state.activeTab === '6',
                                }),
                                'btn-primary text-light btnAct')
                              }
                              onClick={() => {
                                this.toggle('6')
                              }}
                            >
                              <div color="primary" className="dark text-center">
                              <b>Script Out</b>
                              </div>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col xs="12">
                        <TabContent activeTab={this.state.activeTab}>
                          <TabPane tabId="01"></TabPane>
                          <TabPane tabId="4">
                            <Row>
                              <Col sm="12 ">
                                <TablaOutBoundGuia />
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId="5">
                            <Row>
                              <Col sm="12">
                                <TablaOutBoundRubros />
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId="6">
                            <Row>
                              <Col sm="12">
                                <TablaOutBoundScript />
                              </Col>
                            </Row>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Accordion.Collapse>
                </div>
                <Col className=" btn  bg-fondo-btn bordeAcordeon  " style={{ padding:'0px',}}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    <span>Soporte</span>
                  </Accordion.Toggle>
                </Col>
                <div className="bg-light">
                  <Accordion.Collapse eventKey="2">
                  <Row>
                      <Col xs="12 centrado-fila">
                        <Nav tabs className="text-center">
                          <NavItem className="d-flex justify-content-center">
                            <NavLink
                              className={
                                (classnames({
                                  active: this.state.activeTab === '7',
                                }),
                                'btn-primary btn text-light btnAct')
                              }
                              onClick={() => {
                                this.toggle('7')
                              }}
                            >
                              <div className=" text-center ">
                              <b>Guía Sporte</b>
                              </div>
                            </NavLink>
                          </NavItem>

                          <NavItem>
                            <NavLink
                              className={
                                (classnames({
                                  active: this.state.activeTab === '8',
                                }),
                                'btn-primary text-light btnAct')
                              }
                              onClick={() => {
                                this.toggle('8')
                              }}
                            >
                              <div color="primary" className="dark text-center">
                              <b>Rubros Sporte</b>
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={
                                (classnames({
                                  active: this.state.activeTab === '9',
                                }),
                                'btn-primary text-light btnAct')
                              }
                              onClick={() => {
                                this.toggle('9')
                              }}
                            >
                              <div color="primary" className="dark text-center">
                              <b>Script Sporte</b>
                              </div>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col xs="12">
                        <TabContent activeTab={this.state.activeTab}>
                          <TabPane tabId="02"></TabPane>
                          <TabPane tabId="7">
                            <Row>
                              <Col sm="12 ">
                                <TablaSoporteGuia />
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId="8">
                            <Row>
                              <Col sm="12">
                                <TablaSoporteRubros />
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId="9">
                            <Row>
                              <Col sm="12">
                                <TablaSoporteScript />
                              </Col>
                            </Row>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Accordion.Collapse>
                </div>
                <Col className=" btn  bg-fondo-btn bordeAcordeon  " style={{ padding:'0px',}}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3" className="">
                    <span >WhatsApp y Mails</span>
                  </Accordion.Toggle>
                </Col>
                <div className="bg-light">
                  <Accordion.Collapse eventKey="3">
                  <Row>
                      <Col xs="12 centrado-fila">
                        <Nav tabs className="text-center">
                          <NavItem className="d-flex justify-content-center">
                            <NavLink
                              className={
                                (classnames({
                                  active: this.state.activeTab === '10',
                                }),
                                'btn-primary btn text-light btnAct')
                              }
                              onClick={() => {
                                this.toggle('10')
                              }}
                            >
                              <div className=" text-center ">
                              <b>Guía WhatsApp</b>
                              </div>
                            </NavLink>
                          </NavItem>

                          <NavItem>
                            <NavLink
                              className={
                                (classnames({
                                  active: this.state.activeTab === '11',
                                }),
                                'btn-primary text-light btnAct')
                              }
                              onClick={() => {
                                this.toggle('11')
                              }}
                            >
                              <div color="primary" className="dark text-center">
                              <b>Criterios WhatsApp</b>
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={
                                (classnames({
                                  active: this.state.activeTab === '12',
                                }),
                                'btn-primary text-light btnAct')
                              }
                              onClick={() => {
                                this.toggle('12')
                              }}
                            >
                              <div color="primary" className="dark text-center">
                              <b>Plantilla WhatsApp</b>
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={
                                (classnames({
                                  active: this.state.activeTab === '13',
                                }),
                                'btn-primary btn text-light btnAct')
                              }
                              onClick={() => {
                                this.toggle('13')
                              }}
                            >
                         
                         <b>Rubros Mail</b>
                         
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col xs="12">
                        <TabContent activeTab={this.state.activeTab}>
                          <TabPane tabId="02"></TabPane>
                          <TabPane tabId="10">
                            <Row>
                              <Col sm="12 ">
                                <TablaWhGuia />
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId="11">
                            <Row>
                              <Col sm="12">
                                <TablaWhCriterios />
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId="12">
                            <Row>
                              <Col sm="12">
                                <TablaWhPlantilla />
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId="13">
                            <Row>
                              <Col sm="12">
                                <TablaWhRubros />
                              </Col>
                            </Row>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </Col>
            <Col xs="12" className="centrado-fila mt-3">
            <Nota
                  title1="Instrucción:"
                  content1="Dé click en cada Lineamento para VER el contenido."
                />
            </Col>
          </Row>
        </CardBody>
  
      </div>
    )
  }
}
export default TemaDosView
