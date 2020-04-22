import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Button } from 'reactstrap'
import temaTresView from '../../assets/img/img-cursoQA/temaTresView.jpg'
import Modal1 from './componentsExtras/modales'
import {
  TablaATC,
  TablaVentas,
  TablasVentasOut,
} from './componentsExtras/tablas'
import Nota from './componentsExtras/notasReferencia'
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



  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader className="text-left">
            <h3>Lineamientos generales de la Metodología</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12" className="centrado-fila">
                <img
                  src={temaTresView}
                  style={{ width: 360 }}
                  alt="temaTresView"
                  className="img-fluid bordeImagen"
                />
              </Col>
              <Col xs="12" className="text-justify">
                <p>Para campañas nuevas:</p>
                <ul>
                  <li>
                    Durante la implementación de una nueva campaña el área de
                    implementación y el área comercial definen el numero y tipo
                    de guías de monitoreo que se crearan por parte del área de
                    calidad.
                  </li>
                  <li>
                    El área de Calidad genera una propuesta de guía de monitoreo
                    de a cuerdo a la matriz de criterios para cada tipo de
                    campaña.
                  </li>
                  <li>
                    Si el cliente proporciona su propia guía de monitoreo, el
                    área de calidad deberá realizar recomendaciones.
                  </li>
                  <li>
                    Se deberá validar con el cliente la guía de monitoreo,
                    criterios de evaluación y ponderación antes de cargarse al
                    aplicativo{' '}
                  </li>
                  <li>
                    El Gerente de calidad es responsable de validar que se
                    genera correctamente la guía.
                  </li>
                  <li>
                    Dependiendo del tipo de guía deberá llevar un marco general
                    para evaluar:
                  </li>
                </ul>

                {this.state.modal ? (
                  <Modal1
                    cerrar={() => this.toggleM()}
                    title={
                      this.state.modalIndex === 1
                        ? 'ATC'
                        : this.state.modalIndex === 2
                        ? 'VENTAS'
                        : this.state.modalIndex === 3
                        ? 'VENTAS OUT'
                        : null
                    }
                    body={
                      this.state.modalIndex === 1 ? (
                        <TablaATC />
                      ) : this.state.modalIndex === 2 ? (
                        <TablaVentas />
                      ) : this.state.modalIndex === 3 ? (
                        <TablasVentasOut />
                      ) : null
                    }
                  />
                ) : null}
              </Col>
              <Col xs="12" className="centrado-distribuido">
                <Button
                  className="btnAct bg-fondo-btn"
                  style={{ width: '90px', height: '58px' }}
                  
                  onClick={() => this.toggleM(1)}
                >
                  ATC
                </Button>

                <Button
                
                className="btnAct bg-fondo-btn"
                  style={{ width: '90px', height: '58px' }}
                
                  onClick={() => this.toggleM(2)}
                >
                  VENTAS
                </Button>

                <Button
                className="btnAct bg-fondo-btn"
                  style={{ width: '90px' }}
                  
                  onClick={() => this.toggleM(3)}
                >
                  VENTAS OUT
                </Button>
              </Col>
              <Col xs="12" className="centrado-fila mt-3">
                <Nota
                  title1="Instrucción:"
                  content1="Dé click en cada boton para VER el contenido."
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
