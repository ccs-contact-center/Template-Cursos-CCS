import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap'
import classnames from 'classnames'
import Nota from './componentsExtras/notasReferencia'
import { TablaTipoMotivo, TablaRetro } from './componentsExtras/tablas'
import Modal1 from './componentsExtras/modales'
import temaCincoView from '../../assets/img/img-cursoQA/temaCincoView.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }

    this.toggleM = this.toggleM.bind(this)
  }
  toggleM(modIndex) {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))

    this.setState({ modalIndex: modIndex })
  }

  state = {
    activeTab: '0',
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) this.setState({ activeTab: tab })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader className="text-left">
            <h3>Descripción del procedimiento</h3>
          </CardHeader>
          <CardBody className="">
            <Row>
              <Col xs="12 centrado-fila">
                <Nav tabs className="text-center">
                  <NavItem className="d-flex justify-content-center">
                    <NavLink
                     style={{backgroundColor: '#737276'}}
                      className={
                        (classnames({
                          active: this.state.activeTab === '1',
                        }),
                        ' btn text-light btnAct')
                       
                      }
                      onClick={() => {
                        this.toggle('1')
                      }}
                    >
                      <div className=" text-center ">
                        
                          <b>1. Monitoreo</b>
                      
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                     style={{backgroundColor: '#737276'}}
                      className={
                        (classnames({
                          active: this.state.activeTab === '2',
                        }),
                        ' btn text-light btnAct')
                      }
                      onClick={() => {
                        this.toggle('2')
                      }}
                    >
                      <div color="primary" className=" text-center">
                        
                          <b>2. Retroalimentación</b>
                      
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                     style={{backgroundColor: '#737276'}}
                      className={
                        (classnames({
                          active: this.state.activeTab === '3',
                        }),
                        ' btn text-light btnAct')
                      }
                      onClick={() => {
                        this.toggle('3')
                      }}
                    >
                      <div color="primary" className=" text-center">
                        
                          <b>2.1. Coaching</b>
                      
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                     style={{backgroundColor: '#737276'}}
                      className={
                        (classnames({
                          active: this.state.activeTab === '4',
                        }),
                        ' btn text-light btnAct')
                      }
                      onClick={() => {
                        this.toggle('4')
                      }}
                    >
                      <div color="primary" className=" text-center">
                        
                          <b>2.2. FODA</b>
                        
                      </div>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col xs="12">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="0">
                    <p></p>
                  </TabPane>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12 " className="text-justify" centrado-fila>
                        <ul>
                          <li>
                            1.1. El analista ingresa al sistema ACD y elige
                            llamada de manera aleatoria.
                          </li>
                          <li>1.2. Escucha la llamada</li>
                          <li>
                            1.3. En paralelo ingresa al aplicativo de CCS y en
                            el apartado de calidad selecciona “Monitoreo”.
                          </li>
                          <li>
                            1.4. Selecciona la guía de acuerdo con la campaña y
                            el tipo de monitoreo de acuerdo con la siguiente
                            tabla.
                          </li>
                          <div className="centrado-fila mt-3">
                            <TablaTipoMotivo />
                          </div>
                          <li>
                            1.5. Ingresa el ID de la grabación obtenida del ACD
                            y en automático se registran los datos como nombre
                            del agente, supervisor, duración de la llamada y la
                            fecha de audio.
                          </li>
                          <li>
                            1.6. En una primera fase el analista de calidad
                            evalúa la llamada con base en el contenido de la
                            guía de monitoreo de la campaña.
                          </li>
                          <li>
                            1.7. De acuerdo con lo detectado el analista ingresa
                            su comentario en el aplicativo.
                          </li>
                          <li>
                            1.8. Antes de finalizar el monitoreo, se ingresa
                            obligatoriamente los campos correspondientes: AHT,
                            FCR, la gestión del agente, imputable (revisar tabla
                            1 “Imputables”), la tipificación y el ruido o
                            <span style={{ whiteSpace: 'nowrap' }}>
                              ambiente.
                              <Nota
                                title1="1"
                                content1="Algunos de los
                             rubros podrán o no estar de acuerdo con la campaña."
                              />
                            </span>
                          </li>
                          <li>1.9. El analista guarda monitoreo.</li>
                        </ul>
                      </Col>
                      <div>
                        {this.state.modal ? (
                          <Modal1
                            cerrar={() => this.toggleM()}
                            title={
                              this.state.modalIndex === 5
                                ? 'Excepciones  '
                                : this.state.modalIndex === 6
                                ? 'Error Fatal'
                                : null
                            }
                            body={
                              this.state.modalIndex === 5 ? (
                                <di className="text-justify">
                                  <ul>
                                    <li>
                                      {' '}
                                      En caso de no contar con el ACD (
                                      <b style={{ color: 'red' }}>ID MITROL</b>
                                      ), los datos de la llamada se deberán
                                      registrar de forma manual.
                                    </li>
                                    <li>
                                      Dentro de la guía el existe el rubro
                                      “N/A” (No aplica), este se considera para
                                      los casos en el que elemento a verificar
                                      no se encuentre durante la llamada por
                                      finalización antes de tiempo.
                                    </li>
                                  </ul>
                                </di>
                              ) : this.state.modalIndex === 6 ? (
                                <div className="text-justify">
                                  <ol>
                                    <li>
                                      Cuando el analista detecte un error fatal
                                      durante la llamada, marca la casilla de
                                      “Error fatal” dentro del aplicativo y en
                                      automático la calificación será
                                      <b>cero</b>.
                                    </li>
                                    <li>
                                      El analista deberá colocar el minuto donde
                                      se cometió el error fatal.
                                    </li>
                                    <li>
                                      Una vez ingresado el comentario con la
                                      descripción del error, selecciona la
                                      opción de “Alerta Operativa”.
                                    </li>
                                    <li>
                                      Guarda monitoreo y en automático envía
                                      “Alerta Operativa”.
                                    </li>
                                    <li>
                                      Analista notifica a supervisor y
                                      coordinador de Operaciones y determinan
                                      sanción.
                                    </li>
                                    <li>
                                      Una vez aplicada sanción el analista de
                                      calidad dará retroalimentación bajo el
                                      método de FODA.
                                    </li>
                                  </ol>
                                </div>
                              ) : null
                            }
                          />
                        ) : null}
                      </div>
                      <Col xs="12 " className="centrado-distribuido ">
                        <Button className="btnAct" color="dark" onClick={() => this.toggleM(5)}>
                          Excepciones
                        </Button>
                        <Button className="btnAct" color="dark" onClick={() => this.toggleM(6)}>
                          Error Fatal
                        </Button>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col xs="12 " className="centrado-fila">
                        <Col xs="12" sm="6" className="text-justify">
                          <p>
                            Para poder realizar la retroalimentación el agente
                            deberá pausarse y se notifica a través del correo a
                            las partes correspondientes (operaciones, command
                            center).
                          </p>
                          <p>
                            El analista de calidad deberá tomar en cuenta el
                            tiempo que durará la retroalimentación:
                          </p>
                        </Col>
                        <Col xs="12" sm="6">
                          <img
                            src={temaCincoView}
                            style={{ width: 360 }}
                            alt="temaCincoView"
                            className="img-fluid bordeImagen"
                          />
                        </Col>
                      </Col>
                      <Col sm="12 " className="mt-4">
                        <div className="centrado-fila ">
                          <TablaRetro />
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Col sm="12" className="text-justify">
                        <p>
                          Este método de retroalimentación se aplicará siempre y
                          cuando el resultado de la evaluación sea mayor al 80%.
                        </p>
                        <p>
                          El tiempo máximo para concluir esta retroalimentación
                          es de 24 horas.
                        </p>
                        <ul>
                          <li>
                            2.1.1. Analista de calidad ingresa al aplicativo de
                            CCS y selecciona la retroalimentación como
                            “Coaching”
                          </li>
                          <li>
                            2.1.2. El analista retroalimenta conforme a las
                            áreas de oportunidad del agente (son aquellas que
                            durante el monitoreo se penalizaron bajo el tipo
                            “NO”).
                          </li>
                          <li>
                            2.1.3. El agente coloca su compromiso de acuerdo con
                            sus áreas de oportunidad detectadas en el monitoreo,
                            escucha la llamada en el minuto donde fue detectada,
                            <b style={{ color: 'red' }}>
                              (SOLO FODA) SOLO LOS OXXO´S
                            </b>
                          </li>
                          <li>
                            2.1.4. El analista ingresa los comentarios del
                            comportamiento de la retroalimentación y el
                            compromiso colocando su firma.
                          </li>
                          <li>
                            2.1.5. Analista de calidad retroalimenta al agente
                            telefónico y solicita al termino firma de
                            conformidad al agente telefónico.
                          </li>
                          <li>2.1.6. Se guardan comentarios. </li>
                          <Nota
                            title1="Nota:"
                            content1="De no estar conforme el agente telefónico el analista de
                                calidad revisará en conjunto con el supervisor operativo o
                                 coordinador la grabación para obtener la conformidad."
                          />
                        </ul>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="4">
                    <Row>
                      <Col sm="12" className="text-justify">
                        <p>
                          La calificación debe ser igual o menor a 79.9% y se
                          deberá retroalimentar de inmediato al agente
                          telefónico.
                        </p>
                        <ul>
                          <li>
                            2.2.1. Analista de calidad ingresa al aplicativo de
                            CCS y selecciona la retroalimentación como “
                            <b>FODA</b>”
                          </li>
                          <li>
                            2.2.2. El analista retroalimenta conforme a las
                            áreas de oportunidad del agente, son aquellas que
                            durante el monitoreo se penalizaron bajo el tipo
                            “NO”
                          </li>
                          <li>
                            2.2.3. El analista le indica al agente los rubros
                            que se le penalizaron y retroalimenta sobre cómo
                            puede llevarlos a cabo
                          </li>
                          <li>
                            2.2.4. El agente coloca su compromiso de acuerdo con
                            sus áreas de oportunidad detectadas en el monitoreo,
                            escucha la llamada completa
                          </li>
                          <li>
                            2.2.5. El analista ingresa los comentarios del
                            comportamiento de la retroalimentación y el
                            compromiso colocando su firma.
                          </li>
                          <li>
                            2.2.6. Analista de calidad retroalimenta al agente
                            telefónico y solicita al termino firma de
                            conformidad al agente telefónico.
                          </li>
                          <li>2.2.7. Se guardan comentarios. </li>
                          <Nota
                            title1="Nota:"
                            content1="De no estar conforme el agente telefónico, 
                          el analista de calidad revisará en conjunto con el supervisor, 
                          la grabación para obtener la conformidad."
                          />
                        </ul>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
              <Col xs="12" className="centrado-fila mt-3">
                <Nota
                  title1="Instrucción:"
                  content1="Dé click en cada Descripción del procedimiento para VER el contenido."
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}
export default TemaDosView
