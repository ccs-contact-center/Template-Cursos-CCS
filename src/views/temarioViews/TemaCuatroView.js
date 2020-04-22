import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import {
  TablaLineaHistorico,
  TablasImputables,
  TablaMonitoreo,
} from './componentsExtras/tablas'
import temaCuatroView from '../../assets/img/img-cursoQA/temaCuatroView.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <Card>
          <CardHeader className="text-left">
            <h3>Lineamientos generales de la Metodología</h3>
          </CardHeader>
          <CardBody className="">
            <Row>
              <Col xs="12 centrado-fila">
                <Col xs="12" sm="12" md="6" className="text-justify">
                  <ul>
                    <li>
                      Todas las guías de monitoreo se generan bajo el esquema de
                      reponderación.{' '}
                    </li>
                    <li>
                      Para crear una guía se utilizará dummy en blanco, no se
                      podrá editar guías ya creadas de otra campaña.{' '}
                    </li>
                    <li>
                      Una vez creadas las guías de monitoreo de una campaña
                      nueva, implementación realizará pruebas de estrés para
                      validar la caída de los reportes de calidad.{' '}
                    </li>
                    <li>Lo monitoreos de dividirán en las siguientes:</li>
                  </ul>
                  <div className="centrado-fila">
                    <TablaLineaHistorico />
                  </div>
                </Col>
                <Col xs="12" sm="12" md="6" className="centrado-fila">
                  <img
                    src={temaCuatroView}
                    style={{ width: 360 }}
                    alt="temaCuatroView"
                    className="img-fluid bordeImagen"
                  />
                </Col>
              </Col>

              <Col xs="12 " className="text-justify centrado-fila mt-4">
                <ul>
                  <li>
                    Lo monitoreos en línea se realizarán en PSup o con diadema
                    inalámbrica.
                  </li>
                  <li>
                    Los monitoreos en histórico se deben realizar el mismo día,
                    si existiera alguna situación como descanso del analista y/o
                    agente, falta, incapacidad, vacaciones, incidencia en
                    sistema, se podrán utilizar grabaciones de 24 a 48 horas.
                  </li>
                  <li>Tabla de aleatoriedad </li>
                  <li>
                    La llamada se elige de manera aleatoria, el criterio puede
                    ser el tiempo de duración.
                  </li>
                  <li>
                    La llamada con un periodo mayor a 48hrs, se realizará el
                    monitoreo a través de una solicitud interna o de cliente ya
                    sea porque se detectó un error en la llamada o en el
                    proceso.
                  </li>
                  <li>
                    En el rubro de “Imputable” dentro del aplicativo de CCS, se
                    deberá considerar lo siguiente:{' '}
                  </li>
                </ul>
                <Col xs="12" sm="12" md="6">
                  <div className="centrado-fila">
                    <TablasImputables />
                    <p className="text-center TextoPie">
                      Tabla 1.
                      <br /> Imputables Consideraciones para imputar evaluar el
                      rubro durante el monitoreo
                    </p>
                  </div>
                </Col>
              </Col>

              <Col xs="12" className="text-justify">
                <ul>
                  <li>
                    De acuerdo con el promedio que haya obtenido en la Guía de
                    Monitoreo el agente se clasificará en la en la escala A, B,
                    C, D que será el número de monitoreó a trabajar.{' '}
                  </li>
                </ul>
                <div className="centrado-fila">
                  <TablaMonitoreo />
                </div>
                <ul>
                  <li>
                    Los agentes <b>de nuevo ingreso entran en la escala “D”</b>{' '}
                    y se le realizan 5 monitoreos semanales{' '}
                    <b>durante el primer mes</b>, posteriormente se realizan el
                    criterio de monitoreó aplicara de acuerdo con la tabla
                    anterior.{' '}
                  </li>
                  <li>
                    Se genera audioteca en FTP: Se agregan en carpetas por
                    campaña y por skill.
                  </li>
                  <li>
                    Campañas de ventas que generen transacciones con TDC no se
                    guardaran grabaciones.{' '}
                  </li>
                  <li>
                    En la audioteca se cargarán las llamadas que sean
                    consideradas modelo para Coaching, Foda y Error fatal.
                  </li>
                  <li>(et)</li>
                </ul>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}
export default TemaDosView
