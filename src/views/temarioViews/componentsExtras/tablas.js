import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'

class TablaInBoundGuia extends Component {
  render() {
    return (
      <div>
        <Col xs="12" className="centrado-fila">
          <table className="table table-bordered table-responsive ">
            <thead class="">
              <tr>
                <th className="bg-danger text-white" scope="col">
                  CAMPAÑA IN
                </th>
                <th className="bg-danger text-white" scope="col">
                  RUBRO
                </th>
                <th className="bg-danger text-white" scope="col">
                  %
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>INTRODUCCIÓN</b>
                </td>
                <td>RUBRO</td>
                <td>2%</td>
              </tr>
              <tr>
                <td rowspan="5" className="align-middle">
                  <b>PROCESO</b>
                </td>
                <td>SALUDO / IDENTIFICA AL CLIENTE</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>SONDEO</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>TIPIFICACIÓN</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>INFORMACIÓN Y ASERTIVIDAD</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>MENCIÓN TELEVIP, POSTPAGO Y WHATSAPP</td>
                <td>10%</td>
              </tr>
              <tr>
                <td rowspan="6" className="align-middle">
                  <b> HABILIDAD DE COMUNICACIÓN</b>
                </td>
                <td>CONTROL DE LLAMADA</td>
                <td>3%</td>
              </tr>
              <tr>
                <td>CORTESÍA Y EMPATÍA</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>ESCUCHA ACTIVA</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>VOZ Y VOCABULARIO</td>
                <td>3%</td>
              </tr>
              <tr>
                <td>CAPTURA / USO DE RECURSOS</td>
                <td>3%</td>
              </tr>
              <tr>
                <td>AHT (TIEMPOS MUERTOS) / AGRADECER TIEMPOS DE ESPERA </td>
                <td>5%</td>
              </tr>
              <tr>
                <td rowspan="3" className="align-middle ">
                  <b>DESPEDIDA</b>
                </td>
                <td>DESPEDIDA</td>
                <td>2%</td>
              </tr>
              <tr>
                <td>AYUDA ADICIONAL</td>
                <td>2%</td>
              </tr>
              <tr>
                <td>TRANSFIERE A ENCUESTA</td>
                <td>10%</td>
              </tr>
              <tr>
                <td colspan="2">TOTAL</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </div>
    )
  }
}

class TablaInBoundRubros extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="6"></Col>
          <Col xs="6">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Código</th>
                </tr>
                <tr>
                  <td>F-Q-09</td>
                </tr>
                <tr>
                  <th>versión</th>
                </tr>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <th>retención</th>
                </tr>
                <tr>
                  <td>1 año</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col xs="12">
            <table className=" table table-bordered table-responsive">
              <thead className="bg-danger text-white">
                <tr>
                  <th colspan="4" scope="col">
                    Campaña IN
                  </th>
                </tr>
                <tr>
                  <th colspan="4" scope="col">
                    INTRODUCCIÓN
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">CONCEPTO</th>
                  <th>DEFINICIÓN</th>
                  <th>NO</th>
                  <th>SI</th>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    SALUDO
                  </th>
                  <td>
                    Agente, debe mencionar frase de cortesía, nombre de la
                    empresa a la que representa, su nombre con primer apellido.
                    (Introducción)
                  </td>
                  <td>
                    ( 0 ) Agente, no menciona frase de cortesía, no proporcionó
                    nombre de la empresa a la que representa, no indica su
                    nombre y/o apellido.
                  </td>
                  <td>
                    ( 1 ) Agente, se presenta mencionando frase de cortesía,
                    nombre de la empresa a la que representa e indica su nombre
                    con primer apellido.
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    IDENTIFICA AL CLIENTE
                  </th>
                  <td>
                    Agente, debe identificar al usuario preguntando ¿Con quién
                    tiene gusto?, personalizar mínimo 3 veces durante la
                    llamada.
                  </td>
                  <td>
                    ( 0 ) Agente, no preguntó ¿Con quién tengo gusto?, no
                    personalizó durante la llamada con nombre o apellido.
                  </td>
                  <td>
                    ( 1 ) Agente, identifica al usuario preguntando ¿Con quién
                    tengo gusto?, posteriormente personaliza la llamada con
                    nombre o apellido mínimo 3 veces durante la llamada.
                  </td>
                </tr>
                <tr>
                  <th colspan="4" scope="row" className="bg-danger text-white">
                    INFORMACIÓN
                  </th>
                </tr>
                <tr>
                  <th scope="row">CONCEPTO</th>
                  <th>DEFINICIÓN</th>
                  <th>NO</th>
                  <th>SI</th>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    SONDEO{' '}
                  </th>
                  <td>
                    Agente, debe hacer preguntas útiles de acuerdo a las
                    necesidades del usuario.{' '}
                  </td>
                  <td>
                    ( 0 ) Agente, no hace preguntas útiles de acuerdo a las
                    necesidades del usuario.{' '}
                  </td>
                  <td>
                    ( 14 ) Agente, hace preguntas útiles de acuerdo a las
                    necesidades del usuario.{' '}
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    INFORMACIÓN
                  </th>
                  <td>
                    Agente, debe mencionar la información completa, correcta y
                    necesaria al usuario.
                  </td>
                  <td>
                    ( 0 ) Agente, no menciona la información completa, correcta
                    y necesaria al usuario.
                  </td>
                  <td>
                    ( 15 ) Agente, menciona la información completa, correcta y
                    necesaria al usuario.
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    ASERTIVIDAD
                  </th>
                  <td>
                    Agente, debe transmitir la información clara, correcta e
                    inmediata al usuario.
                  </td>
                  <td>
                    ( 10 ) Agente, no transmite la información clara, correcta e
                    inmediata al usuario.
                  </td>
                  <td>
                    ( 10 ) Agente, responde la información clara, correcta e
                    inmediata al usuario.
                  </td>
                </tr>
                <tr>
                  <th colspan="4" scope="row" className="bg-danger text-white">
                    PROCESOS
                  </th>
                </tr>
                <tr>
                  <th scope="row">CONCEPTO</th>
                  <th>DEFINICIÓN</th>
                  <th>NO</th>
                  <th>SI</th>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    APEGO A PROCESO / POLÍTICAS
                  </th>
                  <td>
                    Agente, sigue procesos establecidos por Viaducto
                    Bicentenario.{' '}
                  </td>
                  <td>
                    ( 0 ) Agente, no se apega a los procesos establecidos por
                    Viaducto Bicentenario.
                  </td>
                  <td>
                    ( 12 ) Agente, sigue procesos establecidos por Viaducto
                    Bicentenario.{' '}
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    CAPTURA CORRECTA
                  </th>
                  <td>
                    Agente, debe capturar de acuerdo a lo que el usuario indica
                    de forma clara y coherente, sin errores ortográficos.
                  </td>
                  <td>
                    ( 0 ) Agente, no captura de acuerdo a lo que el usuario
                    indica de forma clara y coherente, tiene errores
                    ortográficos.
                  </td>
                  <td>
                    ( 10 ) Agente, captura de acuerdo a lo que el usuario indica
                    de forma clara y coherente, sin errores ortográficos.
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    TIPIFICACIÓN
                  </th>
                  <td>
                    Agente, debe tipificar de acuerdo al tipo de llamada y en
                    tiempo.{' '}
                  </td>
                  <td>
                    ( 0 ) Agente, no tipifica de acuerdo al tipo de llamada y/o
                    en tiempo.{' '}
                  </td>
                  <td>
                    ( 4 ) Agente, tipifica de acuerdo al tipo de llamada y en
                    tiempo.{' '}
                  </td>
                </tr>
                <tr>
                  <th colspan="4" scope="row" className="bg-danger text-white">
                    HABILIDAD DE COMUNICACIÓN
                  </th>
                </tr>
                <tr>
                  <th scope="row">CONCEPTO</th>
                  <th>DEFINICIÓN</th>
                  <th>NO</th>
                  <th>SI</th>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    AGRADECE TIEMPO DE ESPERA
                  </th>
                  <td>
                    Agente, debe solicitar, justificar y agradecer tiempos de
                    espera cada 40 segundos.
                  </td>
                  <td>
                    ( 0 ) Agente, no solicita, justifica y agradece tiempos de
                    espera cada 40 segundos.
                  </td>
                  <td>
                    ( 5 ) Agente, solicita, justifica y agradece tiempos de
                    espera cada 40 segundos.
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    AGRADECE TIEMPO DE ESPERA
                  </th>
                  <td>
                    Agente, debe solicitar, justificar y agradecer tiempos de
                    espera cada 40 segundos.
                  </td>
                  <td>
                    ( 0 ) Agente, no solicita, justifica y agradece tiempos de
                    espera cada 40 segundos.
                  </td>
                  <td>
                    ( 5 ) Agente, solicita, justifica y agradece tiempos de
                    espera cada 40 segundos.
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    CORTESÍA Y EMPATÍA
                  </th>
                  <td>
                    Agente, se muestra cortes utilizando frases de cortesía, no
                    es sarcástico y no interrumpe al usuario.
                  </td>
                  <td>
                    ( 0 ) Agente, no es cortes, no utiliza frases de cortesía,
                    es sarcástico e interrumpe al usuario.{' '}
                  </td>
                  <td>
                    ( 5 ) Agente, es cortes utilizando frases de cortesía, no es
                    sarcástico y no interrumpe al usuario.{' '}
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    ESCUCHA Y COMPRENDE
                  </th>
                  <td>
                    Agente, debe estar atento a las dudas e información del
                    usuario, evita solicitar información ya proporcionada y
                    brinda una respuesta correta.{' '}
                  </td>
                  <td>
                    ( 0 ) Agente, no esta atento a las dudas del usuario,
                    solicita la información ya proporcionda y/o brinda una
                    respuesta ajena a la pregunta del usuario.{' '}
                  </td>
                  <td>
                    ( 5 ) Agente, atiende las dudas y preguntas del usuario, no
                    solicita información ya proporcionada brindando una
                    respuesta correta.{' '}
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    AHT
                  </th>
                  <td>
                    Agente, debe contestar antes del segundo 03, no debe
                    prolongar la llamada innecesariamente con tiempos
                    injustificados y no debe brindar información innecesaria.
                  </td>
                  <td>
                    ( 5 )<br />
                    Agente, deja línea abierta, tiene tiempos injustificados,
                    brinda información innecesaria.
                  </td>
                  <td>
                    ( 5 )<br />
                    Agente, contesta antes del segundo 03, prolongar la llamada
                    innecesariamente con tiempos injustificados y no brinda
                    información innecesaria.
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    CONTROL DE LLAMADA
                  </th>
                  <td>
                    Agente, debe mantener liderazgo durante la llamada para
                    evitar que el usuario se salga de contexto.
                  </td>
                  <td>
                    ( 0 )<br />
                    Agente, permite desvío de conversación durante la llamada.
                  </td>
                  <td>
                    ( 5 )<br />
                    Agente, mantiene el liderazgo durante la llamada, no permite
                    que el usuario se salga de contexto.{' '}
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle ">
                    VOZ Y VOCABULARIO
                  </th>
                  <td>
                    Agente, utiliza un vocabulario apropiado, sin muletillas,
                    sonidos guturales, pleonasmos o extranjerismos, no habla
                    rápido y presenta un tono de voz lineal.
                  </td>
                  <td>
                    ( 0 )<br />
                    Agente, no utiliza un vocabulario apropiado, tiene
                    muletillas, sonidos guturales, pleonasmos o extranjerismos,
                    habla rápido y no tiene un tono de voz lineal.
                  </td>
                  <td>
                    Mark( 5 )<br />
                    Agente, utiliza un vocabulario apropiado, no tiene
                    muletillas, sonidos guturales, pleonasmos o extranjerismos,
                    no habla rápido y presenta un tono de voz lineal.
                  </td>
                </tr>
                <tr>
                  <th colspan="4" scope="row" className="bg-danger text-white">
                    DESPEDIDA
                  </th>
                </tr>
                <tr>
                  <th scope="row">CONCEPTO</th>
                  <th>DEFINICIÓN</th>
                  <th>NO</th>
                  <th>SI</th>
                </tr>
                <tr>
                  <th scope="row">USO DE RECURSOS</th>
                  <td>
                    Agente, debe utilizar correctamente las herramientas de
                    trabajo, (aplicaciones, mute y pagina web).
                  </td>
                  <td>Agente, debe ofrecer ayuda adicional.</td>
                  <td>
                    Agente, debe mencionar frase de cortesía, nombre de la
                    empresa a la que representa, su nombre con primer apellido.
                    (Despedida)
                  </td>
                </tr>
                <tr>
                  <th scope="row">AYUDA ADICIONAL</th>
                  <td>
                    ( 0 ) Agente, no utiliza correctamente las herramientas de
                    trabajo (aplicaciones, mute y pagina web).
                  </td>
                  <td>Agente, no ofrece ayuda adicional.</td>
                  <td>
                    ( 0 ) Agente, no menciona frase de cortesía, nombre de la
                    empresa a la que representa, su nombre con primer apellido.
                    (Despedida)
                  </td>
                </tr>
                <tr>
                  <th scope="row">DESPEDIDA</th>
                  <td>
                    ( 1 ) Agente, hace buen uso de sus herramientas de trabajo
                    (aplicaciones, mute y pagina web).
                  </td>
                  <td>( 1 ) Agente, ofrece ayuda adicional.</td>
                  <td>
                    ( 1 ) Agente, menciona frase de cortesía, nombre de la
                    empresa a la que representa, su nombre con primer apellido.
                    (Despedida)
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    )
  }
}

class TablaInBoundScript extends Component {
  render() {
    return (
      <table className="table table-bordered table-responsive">
        <tbody>
          <tr>
            <td className="align-middle">
              <b>DESCRIPCIÓN</b>
            </td>
            <td className="text-justify">
              SCRIPT INBOUND
              <br />
              Buen día gracias por comunicarte a _________ te atiende (nombre de
              asesor telefónico), ¿Con quién tengo el gusto? _________
              (personalizar al contacto por nombre o apellido) En que puedo
              apoyarte?
              <br />
              Escenarios de llamada:
              <br />
              Sí corresponde de un Restaurante: ·        Cambios de: Horario,
              Costo de envío, Tiempo de entrega, Pedido mínimo, Cambio de menú,
              Cambio de número telefónico, Faltante en menú, Cierre de
              restaurante, Cancelación de pedidos:
              <br />
              Agente: Sr. (Srita) __________(personalizar) me puede proporcionar
              el ID o nombre de su restaurante por favor.
              <br />
              Confirmación de la solicitud del cliente, Agente: Bien Sr.
              Srita____(personalizar) lo que requieres es realizar el cambio y/o
              actualización de__________ (confirmar la petición del contacto)
              <br />
              Agente: Permíteme un momento para validar la información, te
              recuerdo que esto lo puedes realizar desde el portal de tu
              restaurante, ¿Ya cuentas con tus accesos?
              <br />
              Si aplica cambio:
              <br />
              Gracias por el tiempo de espera Sr. (Srita)
              __________(personalizar), te confirmo que ya se realizó el cambio
              __________ (mencionar el cambio realizado).
              <br />
              ¿Puedo ayudarle en algo más?
              <br />
              Respuesta No: Ejecutar Despedida: ¡¡¡Gracias por haberte
              comunicado a ________ te atendió_______ (nombre de agente) Que
              tengas un excelente día!!!
              <br />
              Respuesta Si:
              <br /> Se sondea la petición adicional y se otorga el apoyo. /
              Cerrar con el flujo de script de despedida al concluir.
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

//-----------------------------------------------------------------------------------------------------------------------------
class TablaOutBoundGuia extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div>
          <table className="table table-bordered table-responsive">
            <thead class="">
              <tr>
                <th className="bg-danger text-white" scope="col">
                  Rubro
                </th>
                <th className="bg-danger text-white" scope="col">
                  Subrubro
                </th>
                <th className="bg-danger text-white" scope="col">
                  %
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">
                  <b>INTRODUCCIÓN</b>
                </td>
                <td>Introducción/Saludo</td>
                <td>3%</td>
              </tr>
              <tr>
                <td>Identifica a Cliente y Personalizar</td>
                <td>3%</td>
              </tr>
              <tr>
                <td rowspan="4" className="align-middle">
                  <b>Sondeo</b>
                </td>
                <td>Sondeo de tipo de evento</td>
                <td>4%</td>
              </tr>
              <tr>
                <td>Sondeo de prendas/modelos</td>
                <td>3%</td>
              </tr>
              <tr>
                <td>Sondeo de talla</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Sondeo de entrega ( domicilio o empresa) </td>
                <td>5%</td>
              </tr>

              <tr>
                <td rowspan="2" className="align-middle">
                  <b> Información</b>
                </td>
                <td>Información y Asertividad</td>
                <td>6%</td>
              </tr>
              <tr>
                <td>Promociones</td>
                <td>9%</td>
              </tr>

              <tr>
                <td rowspan="3" className="align-middle ">
                  <b>Gestión</b>
                </td>
                <td>Cierre de Ventas</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Manejo de objeciones</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Venta Cruzada/Incremental </td>
                <td>9%</td>
              </tr>

              <tr>
                <td rowspan="3" className="align-middle ">
                  <b>Proceso</b>
                </td>
                <td>Redacción</td>
                <td>6%</td>
              </tr>
              <tr>
                <td>Ortografía</td>
                <td>6%</td>
              </tr>
              <tr>
                <td>Confirmación de pedido</td>
                <td>6%</td>
              </tr>
              <tr>
                <td rowspan="4" className="align-middle ">
                  <b>Habilidad de Comunicación</b>
                </td>
                <td>Cortesía y Empatía</td>
                <td>4%</td>
              </tr>
              <tr>
                <td>Tiempo de Respuesta </td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Ayuda Adicional </td>
                <td>3%</td>
              </tr>
              <tr>
                <td>Despedida</td>
                <td>3%</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablaOutBoundRubros extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="6"></Col>
          <Col xs="6">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Código</th>
                </tr>
                <tr>
                  <td>F-Q-09</td>
                </tr>
                <tr>
                  <th>versión</th>
                </tr>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <th>retención</th>
                </tr>
                <tr>
                  <td>1 año</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Col xs="12" className="centrado-fila">
          <table className="table table-bordered table-responsive">
            <thead>
              <tr>
                <th colspan="5" scope="col" className="bg-danger text-white">
                  Campaña OUT
                </th>
              </tr>
              <tr>
                <th colspan="5" scope="col" className="bg-danger text-white">
                  Saludo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>CONCEPTO</th>
                <th>NO</th>
                <th>SI</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td className="align-middle">
                  Identificación del cliente Personalizar{' '}
                </td>
                <td className="align-middle">
                  Agente debe de identificar el nombre del cliente al inicio y
                  posteriormente personalizar el chat por el nombre o apellido
                  (mínimo en tres ocasiones durante el chat).
                </td>
                <td className="align-middle">
                  (0) Agente no sondea el nombre del cliente y/o no personaliza
                  la llamada con el nombre o apellido de la misma.
                </td>
                <td className="align-middle">
                  (2) Agente sondea el nombre del cliente y posteriormente
                  personaliza el chat por el nombre o apellido (mínimo en tres
                  ocasiones durante la llamada)
                </td>
                <td className="align-middle">¿Con quién tengo el gusto?</td>
              </tr>
              <tr>
                <th colspan="5" scope="col" className="bg-danger text-white">
                  Sondeo
                </th>
              </tr>
              <tr>
                <td className="align-middle">Sondeo de modelos</td>
                <td className="align-middle">
                  Agente sondea modelos ya sea para realizar una compra o para
                  gestionar existencia.
                </td>
                <td className="align-middle">
                  (0) Agente no sondea prendas para verificar existencia / para
                  realizar compra.
                </td>
                <td className="align-middle">
                  (5) Agente sondea prendas para verificar existencia / para
                  realizar compra.
                </td>
                <td className="align-middle">
                  Jose serias tan amable de decirme el modelo para poder validar
                  la información
                </td>
              </tr>
              <tr>
                <td className="align-middle">Sondeo de talla </td>
                <td className="align-middle">
                  Agente sondea tallas de cada uno de los modelos.
                </td>
                <td className="align-middle">
                  (0) Agente no sondea tallas para verificar existencia / para
                  realizar compra.
                </td>
                <td className="align-middle">
                  (5) Agente sondea tallas para verificar existencia / para
                  realizar compra.
                </td>
                <td className="align-middle">
                  ¿Jose ¿En qué talla lo necesitas?{' '}
                </td>
              </tr>
              <tr>
                <td className="align-middle">Sondeo de lugar de entrega </td>
                <td className="align-middle">
                  Agente sondea lugar de entrega / valida si la dirección
                  previamente registrada será a donde llegara el pedido .
                </td>
                <td className="align-middle">
                  (0) Agente no sondea lugar de entrega / da por hecho que será
                  la misma dirección que esta previamente registrada.
                </td>
                <td className="align-middle">
                  (0) Agente sondea lugar de entrega / verifica si la misma
                  dirección que esta previamente registrada será donde llegara
                  el pedido.
                </td>
                <td className="align-middle">
                  ¿¡Jose me facilitas la dirección a donde llegara tu pedido ?
                </td>
              </tr>
              <tr>
                <td className="align-middle">Confirmación de pedido </td>
                <td className="align-middle">
                  Agente verifica pedido brindando talla y modelo .
                </td>
                <td className="align-middle">
                  (0) Agente no confirma prendas y/o tallas del pedido .
                </td>
                <td className="align-middle">
                  (5) Agente confirma prendas y/o tallas del pedido .
                </td>
                <td className="align-middle">
                  Confirmo su pedido : Jose confirmo tu compra, Es un traje Slim
                  fit talla 36 con un costo de promocion de $999,00 pesos el
                  cual se enviara al domiciolio confirmado.
                </td>
              </tr>
              <tr>
                <th colspan="5" scope="col" className="bg-danger text-white">
                  Información
                </th>
              </tr>
              <tr>
                <td className="align-middle">Ortografía</td>
                <td className="align-middle">
                  Agente no cuenta con faltas de ortografía.
                </td>
                <td className="align-middle">
                  (0) Agente cuenta con faltas de ortografía en la conversación
                  .
                </td>
                <td className="align-middle">
                  (4) Agente cuenta con buena ortografía dentro del chat .
                </td>
                <td className="align-middle">
                  Revisar la escritura con corrector para contar buen
                  aortografia al transmitir el mensaje en la intereaccion.
                </td>
              </tr>
              <tr>
                <td className="align-middle">Redacción</td>
                <td className="align-middle">
                  Agente cuenta con buena redacción.
                </td>
                <td className="align-middle">
                  (0) Agente no redacta de forma adecuada.
                </td>
                <td className="align-middle">
                  (4) Agente cuenta con buen redacción.
                </td>
                <td className="align-middle">
                  El pago, puedes realizarlo, por medio de tarjeta de crédito,
                  débito y OXXO,
                </td>
              </tr>
              <tr>
                <td className="align-middle">Manejo de objeciones</td>
                <td className="align-middle">
                  Agente debe de hacer vencimiento de al menos 3 objeciones sin
                  hostigar al cliente.
                </td>
                <td className="align-middle">
                  (0) Agente no vence objeciones teniendo apertura por parte del
                  cliente
                </td>
                <td className="align-middle">(10) Agente vence objeciones</td>
                <td className="align-middle">
                  *No confio en las ventas por internet. Todas nuestras compras
                  son 100 % confiables, te enviamos el Boucher de tu compra por
                  fotografía en el momento de realizar tu pago con TDC o si lo
                  deseas puedes hacer deposito bancario o directamente en Oxxo.
                  *No se si tengan todas las tallas y modelos que requiero. Las
                  tallas que aparecen en la pagina son con las que contamos en
                  existencia por ello en este momento te confirmo la compra .
                  *Lo voy a pensar . Aprovecha en este momento y se el primero
                  en tener los nuevos modelos.
                </td>
              </tr>
              <tr>
                <th colspan="5" scope="col" className="bg-danger text-white">
                  Gestión
                </th>
              </tr>
              <tr>
                <td className="align-middle">Venta incremental</td>
                <td className="align-middle">
                  Agente ofrece prenda para hacer conjunto y/o ofrece prenda
                  recién liberada.
                </td>
                <td className="align-middle">
                  (0) Agente no ofrece prenda para completar conjunto / recién
                  liberada .
                </td>
                <td className="align-middle">
                  (9) Agente ofrece prenda para completar conjunto / recién
                  liberada .
                </td>
                <td className="align-middle">
                  Jose tenemos el complemento perfecto para ti contamos con una
                  excelente corbata que hace juego con tu traje y asi tener el
                  atuendo completo.
                </td>
              </tr>
              <tr>
                <td className="align-middle">Promociones</td>
                <td className="align-middle">
                  Agente menciona promociones del catalogo y de venta vía call
                  center
                </td>
                <td className="align-middle">
                  (0) Agente no menciona promociones del catalogo y de venta vía
                  call center
                </td>
                <td className="align-middle">
                  (9) Agente menciona promociones del catalogo y de venta vía
                  call center
                </td>
                <td className="align-middle">
                  Ahora en esta temporada Navideña contamos con excelentes
                  propuestas para que luscas un look increible
                </td>
              </tr>
              <tr>
                <td className="align-middle">Cierre de ventas</td>
                <td className="align-middle">
                  Agente debe de cerrar la venta sin ser forzada o con dolo
                </td>
                <td className="align-middle">
                  (0) Agente cierra venta aun cuando el prospecto no la acepta /
                  no cierra venta
                </td>
                <td className="align-middle">
                  (10) Agente hace un cierre de cita adecuado
                </td>
                <td className="align-middle">
                  Muy bien ya tenemos listos los modelos y tallas , ¿Tu forma de
                  pago seria con tdc, tdd? ¿O prefieres pagar en oxxo?
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="align-middle">Cortesía y empatía</td>
                <td className="align-middle">
                  Agente brinda frases de cortesía, no interrumpe al cliente y
                  es cortes en todo momento .
                </td>
                <td className="align-middle">
                  (0) Agente no brinda frases de cortesía, interrumpe al cliente
                  cuando habla, es cortante y lineal.
                </td>
                <td className="align-middle">
                  ( 2 ) Agente brinda frases de cortesía, no interrumpe al
                  cliente cuando habla y es cortante.
                </td>
                <td className="align-middle">
                  Por favor, entiendo, gracias, lo escucho, comprendo, etc.).No
                  interrumpe al cliente cuando habla, no es cortante.
                </td>
              </tr>
              <tr>
                <td className="align-middle">Tiempo de respuesta</td>
                <td className="align-middle">
                  Agente contesta mensaje cada minuto .
                </td>
                <td className="align-middle">
                  (0) Agente tarda mas de un minuto en contestar mensajes .
                </td>
                <td className="align-middle">
                  (5) Agente contesta mensajes en tiempo .
                </td>
                <td className="align-middle">
                  *Jose: Hola (14:15) *Agente : ¡Hola! bienvenido a Men´s
                  Fashion On Line, te atiende ______ (nombre del agente) (14:16)
                </td>
              </tr>
              <tr>
                <th colspan="5" scope="col" className="bg-danger text-white">
                  Despedida
                </th>
              </tr>
              <tr>
                <td className="align-middle">Despedida</td>
                <td className="align-middle">
                  Agente se despide de acuerdo a script: menciona frase de
                  cortesía, nombre de la empresa a la que representa, nombre y
                  apellido.
                </td>
                <td className="align-middle">
                  Agente no menciona su nombre, no menciona nombre de la
                  institución a la cual representa .
                </td>
                <td className="align-middle">
                  (2) Agente se despide de acuerdo a script: menciona frase de
                  cortesía, nombre de la empresa a la que representa, nombre y
                  apellido.
                </td>
                <td className="align-middle">
                  Gracias por haberte comunicado a Men's Fashion .Fue un placer
                  atenderte mi nombres es _____ quedo a tus ordenes. Que tengas
                  una excelente tarde .
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </div>
    )
  }
}

class TablaOutBoundScript extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <table className="table table-bordered table-responsive">
          <tbody>
            <tr>
              <td className="align-middle">
                <b>DESCRIPCIÓN</b>
              </td>
              <td className="text-justify">
                SCRIPT OUT
                <br />
                Buenos días (tardes/noches), tengo el gusto con (Sr/ Srita)
                ____________________
                <br />
                Mucho gusto, mi nombre es ____________me estoy comunicando de
                ________. <br />
                ¿Como se encuentra? <br />
                Muy bien Srita/Sr. _______
                <br />
                El motivo de mi llamada es para dar continuidad a la suscripción
                de su revista_____.
                <br />
                Si menciona que no es la revista a la que es suscrito sondear
                cual es.
                <br />
                Esta revista cuenta con un precio en su puesto de revistas de
                $49 cada una y anualmente cuenta con un precio de $588, en este
                momento para usted tenemos un precio especial de _____ que
                genera un ahorro considerable para su bolsillo. (validar en
                tabulador).
                <br />
                Sr/ Srita, le confirmo su número de suscriptor que aparece como
                (validar costumer), la revista estará llegando al nombre de
                (validar nombre).
                <br />
                La forma de pago es muy sencilla, solo es necesario que me
                brinde los 16 dígitos de su TDC o TDD, si cuenta con una
                departamental también es posible realizar el cargo. <br />
                  Ø   CIERRE DE VENTA <br />
                ¿Me indica los 16 dígitos de su tarjeta visa o MasterCard, por
                favor?
                <br />
                  Ø   OBJECIONES <br />
                No me interesa <br />
                Esta es una excelente oportunidad para renovarla, sobre todo por
                el precio. Pero por favor indíqueme cual es el verdadero motivo
                por el cual no le interesa.
                <br />
                No tengo dinero <br />
                Comprendo, sin embargo, no requerimos el pago en efectivo en
                este momento, afortunadamente para usted contamos con el pago a
                TDC o departamental.
                <br />
                No me da confianza brindar mis datos de TDC o TDD por teléfono.
                <br />
                Entiendo su preocupación, pero afortunadamente contamos con un
                numero de autorización donde usted podrá realizar el seguimiento
                con su banco, así como su número de suscriptor.
                <br />
                Le invito a validar el aviso de privacidad en la página
                www.editorialtelevisa.com .<br />
                Le brindare mi nombre completo, ¿tiene donde anotar?
                <br />
                Mala experiencia <br />
                Actualmente el servicio de entrega es sumamente eficiente, para
                ellos le hacemos llegar el primer ejemplar para confirmar que
                llegue a la comodidad de su casa. <br />
                Ya no me interesa esa revista
                <br />
                Contamos con más títulos de su interés, solo indíqueme cual como
                (Mujer) Cosmopolitan o Vanidades, (Hombre) Automóvil
                Panamericano y Mens Healt
                <br />
                Aplicar cierre. <br />
                Como le comenté hace un momento.
                <br />
                La forma de pago es muy sencilla, solo es necesario que me
                brinde los 16 dígitos de su TDC o TDD, si cuenta con una
                departamental también es posible realizar el cargo. <br />
                  Ø   CIERRE DE VENTA <br />
                ¿Me indica los 16 dígitos de su tarjeta visa o MasterCard, por
                favor?
                <br />
                  Ø   VENTA CRUZADA <br />
                Sr. Srita. El sistema nos está arrojando un descuento exclusivo
                para obtener una suscripción adicional (mencionar título de
                acuerdo con el perfil)
                <br />
                Como beneficio adicional en este momento le otorgamos un
                descuento preferencial en otra suscripción o en uno de nuestros
                libros de venta exclusiva. <br />
                  Ø   CONFIRMACIÓN DE TODOS <br />
                Se deben confirmar al 100% todos los datos del cliente
                actualizando número telefónico y correo electrónico
                principalmente este ultimo
                <br />
                  Ø   RECAPITULACION
                <br />
                Sr. /Srita: ____ Confirmo que se ha realizado el pago y la
                suscripción está vigente (mencionar cuando finaliza la
                suscripción). <br />
                  Ø   DESPEDIDA
                <br />
                ¿Alguna información adicional que pueda brindarle/apoyarle?
                <br />
                ¿Alguna duda con respecto a su suscripción?
                <br />
                Agradecemos su tiempo quedamos a sus órdenes en el 01 800
                7384782 (REVISTA) le atendió ______________ de Editorial
                Televisa.
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
    )
  }
}
//-------------------------------------------------------------------------------------------------------

class TablaSoporteGuia extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <di>
          <table className="table table-bordered table-responsive ">
            <thead class="">
              <tr>
                <th className="bg-danger text-white" scope="col">
                  Rubro
                </th>
                <th className="bg-danger text-white" scope="col">
                  Subrubro
                </th>
                <th className="bg-danger text-white" scope="col">
                  %
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">
                  <b>INTRODUCCIÓN</b>
                </td>
                <td>Introduccion / Saludo</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Identifica al Cliente</td>
                <td>5%</td>
              </tr>
              <tr>
                <td rowspan="2" className="align-middle">
                  <b>INFORMACIÓN</b>
                </td>
                <td>Sondeo</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Conocimiento de Información</td>
                <td>10%</td>
              </tr>

              <tr>
                <td rowspan="3" className="align-middle">
                  <b>PROCESO</b>
                </td>
                <td>Apego a proceso (Encuesta)</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Captura completa y correcta</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Tipificacion</td>
                <td>10%</td>
              </tr>

              <tr>
                <td rowspan="6" className="align-middle ">
                  <b>HABILIDAD DE COMUNICACIÓN</b>
                </td>
                <td>Agradece Tiempos de espera</td>
                <td>3%</td>
              </tr>
              <tr>
                <td>Escucha y comprende</td>
                <td>7%</td>
              </tr>
              <tr>
                <td>Voz y Vocabulario</td>
                <td>7%</td>
              </tr>
              <tr>
                <td>Control de llamada</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Cortesía y Empatía </td>
                <td>5%</td>
              </tr>
              <tr>
                <td>AHT</td>
                <td>5%</td>
              </tr>

              <tr>
                <td rowspan="2" className="align-middle ">
                  <b>DESPEDIDA</b>
                </td>
                <td>Uso de Recursos</td>
                <td>2%</td>
              </tr>
              <tr>
                <td>Despedida</td>
                <td>1%</td>
              </tr>

              <tr>
                <td colspan="2"></td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </di>
      </Col>
    )
  }
}

class TablaSoporteRubros extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="6"></Col>
          <Col xs="6">
            <table class="table table-striped ">
              <tbody>
                <tr>
                  <th>Código</th>
                </tr>
                <tr>
                  <td>F-Q-09</td>
                </tr>
                <tr>
                  <th>versión</th>
                </tr>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <th>retención</th>
                </tr>
                <tr>
                  <td>1 año</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Col xs="12 " className="centrado-fila">
          <table className="table table-bordered table-responsive ">
            <tbody>
              <tr>
                <th colspan="4" scope="col" className="bg-danger text-white">
                  INTRODUCCIÓN
                </th>
              </tr>

              <tr>
                <td width="128">SALUDO</td>
                <td width="382">
                  Agente debe presentarse mencionando frase de cortesía, nombre
                  de la empresa a la que representa, primer nombre y primer
                  apellido, solicitando nombre y apellido de cliente
                </td>
                <td width="285">
                  Agente, no menciona frase de cortesía, no proporcionó nombre
                  de la empresa a la que representa, no indica su nombre y/o
                  apellido.
                </td>
                <td width="277">
                  Agente, se presenta mencionando frase de cortesía, nombre de
                  la empresa a la que representa e indica su nombre con primer
                  apellido.{' '}
                </td>
              </tr>
              <tr>
                <td>IDENTIFICA AL CLIENTE</td>
                <td>
                  Agente, debe identificar al usuario, personalizando mínimo 3
                  veces durante la llamada.
                </td>
                <td>
                  Agente no personalizó durante la llamada con nombre o
                  apellido.
                </td>
                <td>
                  Agente personaliza la llamada con nombre o apellido mínimo 3
                  veces durante la llamada.
                </td>
              </tr>

              <tr>
                <th colspan="4" scope="col" className="bg-danger text-white">
                  INFORMACIÓN
                </th>
              </tr>
              <tr>
                <td>SONDEO</td>
                <td>
                  Agente, debe hacer preguntas útiles de acuerdo a las
                  necesidades del usuario.{' '}
                </td>
                <td>
                  Agente, no hace preguntas útiles de acuerdo a las necesidades
                  del usuario.{' '}
                </td>
                <td>
                  Agente, hace preguntas útiles de acuerdo a las necesidades del
                  usuario.{' '}
                </td>
              </tr>
              <tr>
                <td>CONOCIMIENTO DE INFORMACION</td>
                <td>
                  Agente, debe mencionar la información completa y correcta,
                  atendiendo las necesidades del usuario.
                </td>
                <td>
                  Agente, no menciona la información completa, correcta y
                  necesaria al usuario.
                </td>
                <td>
                  Agente, menciona la información completa, correcta y necesaria
                  al usuario.
                </td>
              </tr>

              <tr>
                <th colspan="4" scope="col" className="bg-danger text-white">
                  PROCESO
                </th>
              </tr>
              <tr>
                <td>APEGO A PROCESO (ENCUESTA)</td>
                <td>
                  Agente ofrece prenda para hacer conjunto y/o ofrece prenda
                  recién liberada.
                </td>
                Agente, realiza proceso completo acorde al tipo de llamada,
                ademas de mencionar encuesta de satisfaccion.
                <td>Agente, no hace proceso o realiza proceso incompleto</td>
              </tr>
              <tr>
                <td>CAPTURA CORRECTA Y COMPLETA</td>
                <td>
                  Agente, debe capturar de acuerdo a lo que el usuario indica de
                  forma clara y coherente, sin errores ortográficos.
                </td>
                <td>
                  Agente, no captura de acuerdo a lo que el usuario indica de
                  forma clara y coherente, tiene errores ortográficos.
                </td>
                <td>
                  Agente, captura de acuerdo a lo que el usuario indica de forma
                  clara y coherente, sin errores ortográficos.
                </td>
              </tr>
              <tr>
                <td>TIPIFICACION</td>
                <td>
                  Agente debe seleccionar la categoria correspondiente a la
                  llamada de forma correcta dentro del tiempo establecido a la
                  llamada
                </td>
                <td>Agente no guarda registro antes de terminar llamada</td>
                <td>
                  Agente guarda registro antes de terminar llamada en forma
                  correcta
                </td>
              </tr>

              <tr>
                <th colspan="4" scope="col" className="bg-danger text-white">
                  HABILIDAD DE COMUNICACIÓN
                </th>
              </tr>
              <tr>
                <td>AGRADECE TIEMPO DE ESPERA</td>
                <td>
                  Agente debe solicitar, justificar y agradecer tiempos de
                  espera, evitando exceder el 1 min establecido.
                </td>
                <td>
                  Agente no solicita, justifica o agradece tiempo de espera o el
                  tiempo es excedido a 1 min
                </td>
                <td>
                  Agente solicita, justifica y agradece tiempos de espera cada
                  sin exceder el tiempo establecido
                </td>
              </tr>
              <tr>
                <td>CORTESÍA Y EMPATÍA</td>
                <td>
                  Agente se muestra cortes utilizando frases de cortesia,
                  evitando ser sarcástico y no interrumpe al usuario.
                </td>
                <td>
                  Agente, no es cortes, no utiliza frases de cortesía, es
                  sarcástico ó interrumpe al usuario.{' '}
                </td>
                <td>
                  Agente es cortes utilizando frases de cortesía, no es
                  sarcástico y no interrumpe al usuario.{' '}
                </td>
              </tr>
              <tr>
                <td>ESCUCHA Y COMPRENDE</td>
                <td>
                  Agente debe estar atento a las dudas e información del
                  usuario, evita solicitar información ya proporcionada
                  brindando una respuesta correcta
                </td>
                <td>
                  Agente no esta atento a las dudas del usuario, solicita la
                  información ya proporcionda y/o brinda una respuesta ajena a
                  la pregunta del usuario.{' '}
                </td>
                <td>
                  Agente atiende las dudas y preguntas del usuario, no solicita
                  información ya proporcionada brindando una respuesta correta.{' '}
                </td>
              </tr>
              <tr>
                <td>CONTROL DE LLAMADA</td>
                <td>
                  Agente debe mantener liderazgo durante la llamada para evitar
                  que el usuario se salga de contexto.
                </td>
                <td>
                  Agente permite desvío de conversación durante la llamada.
                </td>
                <td>
                  Agente mantiene el liderazgo durante la llamada, no permite
                  que el usuario se salga de contexto.{' '}
                </td>
              </tr>
              <tr>
                <td>AHT</td>
                <td>Agente no excede el tiempo establecido de llamada </td>
                <td>
                  Agente excede el tiempo establecido de llamada en minimo 7 min
                </td>
                <td>Agente no excede el tiempo establecido de llamada </td>
              </tr>
              <tr>
                <td>VOZ Y VOCABULARIO</td>
                <td>
                  Agente utiliza un tono de voz acorde a la conversacion,
                  utilizando vocabulario apropiado, sin muletillas, sonidos
                  guturales, pleonasmos o extranjerismos, evitando el hablar
                  rápido.
                </td>
                <td>
                  Agente no utiliza un vocabulario apropiado, tiene muletillas,
                  sonidos guturales, pleonasmos o extranjerismos, habla rápido y
                  no tiene un tono de voz lineal.
                </td>
                <td>
                  Agente utiliza un vocabulario apropiado, no tiene muletillas,
                  sonidos guturales, pleonasmos o extranjerismos, no habla
                  rápido y presenta un tono de voz lineal.
                </td>
              </tr>

              <tr>
                <th colspan="4" scope="col" className="bg-danger text-white">
                  DESPEDIDA
                </th>
              </tr>
              <tr>
                <td>USO DE RECURSOS</td>
                <td>
                  Agente debe utilizar correctamente las herramientas de
                  trabajo, (aplicaciones, mute, intranet y pagina web).
                </td>
                <td>
                  Agente no utiliza correctamente las herramientas de trabajo
                  (aplicaciones, mute y pagina web).
                </td>
                <td>
                  Agente hace buen uso de sus herramientas de trabajo
                  (aplicaciones, mute y pagina web).
                </td>
              </tr>
              <tr>
                <td>DESPEDIDA</td>
                <td>
                  Agente se despide mencionando, nombre de la empresa a la que
                  representa, primer nombre con primer apellido y frase de
                  cortesía
                </td>
                <td>
                  Agente no menciona frase de cortesía, nombre de la empresa a
                  la que representa, su nombre con primer apellido. (Despedida)
                </td>
                <td>
                  Agente menciona frase de cortesía, nombre de la empresa a la
                  que representa, su nombre con primer apellido. (Despedida)
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </div>
    )
  }
}

class TablaSoporteScript extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <table className="table table-bordered table-responsive">
          <tbody>
            <tr>
              <th rowspan="5" className="align-middle text-danger">
                DESCRIPCIÓN
              </th>
              <th className="bg-danger text-white">RUBRO</th>
              <th className="bg-danger text-white">SCRIPT</th>
            </tr>
            <tr>
              <th className="align-middle ">SALUDO</th>
              <td>
                Buenos (días, tardes, noches) mi nombre es__________________ le
                llamo de Altán Redes el motivo de esta llamada, es para dar
                continuidad a la encuesta que fue realizada con usted hace unas
                semanas donde comentó que (se informa sobre los resultados
                obtenidos en la encuesta que le realizaron), por lo que el
                objetivo es dar seguimiento y entender de manera precisa algunos
                puntos específicos:
              </td>
            </tr>
            <tr>
              <th className="align-middle ">Lineamientos</th>
              <td>
                Se realiza sondeo sobre las respuestas brindadas en la encuesta
                (proporcionado por Altán Redes) para la correcta continuidad del
                proceso.
              </td>
            </tr>
            <tr>
              <th className="align-middle " rowspan="2">
                AYUDA ADICIONAL/ DESPEDIDA
              </th>
              <td>
                Agradezco su tiempo y le comento que se dará seguimiento a las
                observaciones indicadas durante la llamada (indicando los puntos
                que tendrán seguimiento).
              </td>
            </tr>
            <tr>
              <td>
                Le atendió (Nombre y Apellido) de ALTÁN REDES; Que tenga un
                excelente día /tarde/noche.
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
    )
  }
}
//--------------------------------------------------------------------------------------------
class TablaWhGuia extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div>
          <table className="table table-bordered  ">
            <thead class="">
              <tr>
                <th className="bg-danger text-white" scope="col">
                  WHATSAPP
                </th>
                <th className="bg-danger text-white" scope="col">
                  RUBRO{' '}
                </th>
                <th className="bg-danger text-white" scope="col">
                  %
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowspan="2" className="align-middle">
                  INTRODUCCIÓN
                </th>
                <td>IDENTIFICA AL CLIENTE</td>
                <td>2%</td>
              </tr>
              <tr>
                <td>NTRODUCCIÓN / SALUDO</td>
                <td>2%</td>
              </tr>
              <tr>
                <th rowspan="4" className="align-middle">
                  PROCESO
                </th>
                <td>APEGO A PROCESO</td>
                <td>13%</td>
              </tr>
              <tr>
                <td>SONDEO</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>TIPIFICACIÓN</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>MENCIÓN CLUB TELEVIP / POSTPAGO / WHATSAPP</td>
                <td>13%</td>
              </tr>

              <tr>
                <th rowspan="3" className="align-middle">
                  HABILIDAD DE
                  <br /> COMUNICACIÓN
                </th>
                <td>CORTESÍA Y EMPATÍA</td>
                <td>8%</td>
              </tr>
              <tr>
                <td>ORTOGRAFÍA</td>
                <td>14%</td>
              </tr>
              <tr>
                <td>REDACCIÓN</td>
                <td>14%</td>
              </tr>
              <tr>
                <th rowspan="3" className="align-middle">
                  DESPEDIDA
                </th>
                <td>AYUDA ADICIONAL</td>
                <td>2%</td>
              </tr>
              <tr>
                <td>DESPEDIDA</td>
                <td>2%</td>
              </tr>
              <tr>
                <td>LIGA DE ENCUESTA</td>
                <td>10%</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablaWhCriterios extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="6"></Col>
          <Col xs="6">
            <table class="table table-striped ">
              <tbody>
                <tr>
                  <th>Código</th>
                </tr>
                <tr>
                  <td>F-Q-09</td>
                </tr>
                <tr>
                  <th>versión</th>
                </tr>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <th>retención</th>
                </tr>
                <tr>
                  <td>1 año</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>

        <Col xs="12" className="centrado-fila">
          <table className="table table-bordered table-responsive ">
            <tbody>
              <tr>
                <th colspan="5" scope="col" className="bg-danger text-white">
                  Criterios WhatsApp
                </th>
              </tr>
              <tr>
                <th colspan="5" scope="col" className="bg-danger text-white">
                  INTRODUCCIÓN
                </th>
              </tr>

              <tr>
                <th width="128">CONCEPTO</th>
                <td width="382">DEFINICIÓN</td>
                <td width="285">NO</td>
                <td width="277">SI</td>
                <td width="277"></td>
              </tr>
              <tr>
                <th className="align-middle">SALUDO</th>
                <td className="align-middle">
                  AG realiza llamada de salida, menciona frase de cortesía,
                  nombre de la empresa a la que representa y su primer nombre
                </td>
                <td className="align-middle">
                  AG no menciona su nombre y/o menciona su apellido, no
                  identificó nombre de la institución a la cual representa y/o
                  omite frase de cortesía
                </td>
                <td className="align-middle">
                  ( 4)
                  <br />
                  AG se apega menciona frase de cortesía, nombre de la empresa a
                  la que representa y su primer nombre
                </td>
                <td className="align-middle">4</td>
              </tr>
              <tr>
                <th className="align-middle">DENTIFICA AL CTE</th>
                <td className="align-middle">
                  AG debe personalizar más de 3 veces durante la llamada al
                  invitado
                </td>
                <td className="align-middle">
                  {' '}
                  ( 0 ) <br />
                  AG no personaliza 3 veces en la llamada con el invitado.
                </td>
                <td className="align-middle">
                  ( 4 )<br />
                  AG personaliza más de 3 veces durante la llamada.
                </td>
                <td className="align-middle">4</td>
              </tr>

              <tr>
                <th colspan="5" scope="col" className="bg-danger text-white">
                  SERVICIO
                </th>
              </tr>
              <tr>
                <th className="align-middle">CONCEPTO</th>
                <td className="align-middle">DEFINICIÓN</td>
                <td className="align-middle">NO</td>
                <td className="align-middle">SI</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <th className="align-middle">INFORMACIÓN</th>
                <td className="align-middle">
                  AG conoce y domina la información de acuerdo al motivo de la
                  llamada que se le realiza al invitado, así como proporcionar
                  información completa y correcta de forma inmediata
                </td>
                <td className="align-middle">
                  ( 0 )<br />
                  AG no domina información. Proporciona información redundante o
                  con tecnicismos.{' '}
                </td>
                <td className="align-middle">
                  ( 10 )<br />
                  AG domina y proporciona información completa y correcta
                </td>
                <td className="align-middle">10</td>
              </tr>
              <tr>
                <th className="align-middle">ASERTIVIDAD</th>
                <td className="align-middle">
                  AG responde de forma clara, concreta e inmediata;
                  transmitiendo la información solicitada al Usuario.
                </td>
                <td className="align-middle">
                  ( 0 )<br />
                  AG no proporciona información clara e inmediata; no transmite
                  la información solicitada por el Usuario,{' '}
                </td>
                <td className="align-middle">
                  ( 10)
                  <br />
                  AG proporciona información clara, concreta e inmediata.
                  Transmitiendo la información solicitada por el Usuario,
                </td>
                <td className="align-middle">10</td>
              </tr>

              <tr>
                <th colspan="5" scope="col" className="bg-danger text-white">
                  Proceso
                </th>
              </tr>
              <tr>
                <th className="align-middle">SONDEO</th>
                <td className="align-middle">
                  AG debe sondear datos del cliente como información de la
                  queja, seguimiento, personalización, facturación, etc., que
                  tiene; número telefónico alternos y correo electrónico, para
                  mandar o dar seguimiento a su caso.
                </td>
                Agente, realiza proceso completo acorde al tipo de llamada,
                ademas de mencionar encuesta de satisfaccion.
                <td className="align-middle">
                  ( 0 )<br />
                  AG no sondea los datos completos para tener un registro del
                  cliente.
                </td>
                <td className="align-middle">
                  ( 12 )<br />
                  AG sondea los datos completos para tener registro y mandar
                  información.
                </td>
                <td className="align-middle">12</td>
              </tr>
              <tr>
                <th className="align-middle">PROCESO Y CAPTURA</th>
                <td className="align-middle">
                  AG debe identificar el tipo de nivel del comentario en la
                  matriz de escalación y capturar los datos completos del
                  cliente
                </td>
                <td className="align-middle">
                  ( 0 )<br />
                  AG no identifica en tipo de nivel de acuerdo al comentario y
                  no capturas datos completos del cliente.
                </td>
                <td className="align-middle">
                  ( 12 )<br />
                  AG identifica y canaliza de acuerdo a la matriz de escalación
                  y captura datos completos del cliente,
                </td>
                <td className="align-middle">12</td>
              </tr>
              <tr>
                <th className="align-middle">
                  SEGUIMIENTO ( LLAMADA DE SALIDA )
                </th>
                <td className="align-middle">
                  AG deberá realizar llamada de salida con cliente para
                  determinar una solución de acuerdo al nivel de escalación.
                </td>
                <td className="align-middle">
                  ( 0 )<br />
                  AG no realiza la llamada de salida con cliente para darle una
                  solución a su motivo.
                </td>
                <td className="align-middle">
                  ( 12 )<br />
                  AG realiza la llamada de salida con cliente para darle una
                  solución a su motivo.
                </td>
                <td className="align-middle">12</td>
              </tr>
              <tr>
                <th className="align-middle">TIPIFICACIÓN</th>
                <td>AG debe ingresar el motivo de la llamada en sistema </td>
                <td className="align-middle">
                  ( 0 )<br />
                  AG no ingresa en sistema el motivo de comentario en el
                  aplicativo.
                </td>
                <td className="align-middle">
                  ( 12 )<br />
                  AG ingresa en sistema el motivo de comentario en el
                  aplicativo.
                </td>
                <td className="align-middle">12</td>
              </tr>

              <tr>
                <th colspan="5" scope="col" className="bg-danger text-white">
                  HABILIDAD DE COMUNICACIÓN
                </th>
              </tr>
              <tr>
                <th className="align-middle">AGRADECE TIEMPOS DE ESPERA</th>
                <td className="align-middle">
                  AG Informa al usuario si lo dejará en línea para consultar
                  alguna duda, al retomar agradece el tiempo de espera, si se
                  tardará en dar una respuesta retoma cada 40 segundos e informa
                  que actividades se están realizando.
                </td>
                <td className="align-middle">
                  ( 0 )<br />
                  El AG no agradeció la espera del usuario al retomar la
                  llamada, no retomó cada 40 segundos dejando al usuario en la
                  línea.
                </td>
                <td className="align-middle">
                  ( 3 )<br />
                  El AG al retomar la llamada agradece el tiempo de espera,
                  retoma cada 40 segundos para informar que se esta realizando.
                </td>
                <td className="align-middle">3</td>
              </tr>
              <tr>
                <th className="align-middle">CORTESÍA Y EMPATÍA</th>
                <td className="align-middle">
                  AG debe brindar frases de cortesía{' '}
                </td>
                <td className="align-middle">
                  ( 0 )<br />
                  AG no brinda frases de cortesía y no personaliza mínimo 3
                  veces durante la llamada
                </td>
                <td className="align-middle">
                  ( 3 )<br />
                  AG brinda frases de cortesía, es amable y personaliza durante
                  la llamada
                </td>
                <td className="align-middle">3</td>
              </tr>
              <tr>
                <th className="align-middle">ESCUCHA ACTIVA</th>
                <td className="align-middle">
                  AG se muestra atento a la llamada y a las dudas y preguntas
                  del Usuario, evita solicitar información ya proporcionada y no
                  interrumpe al Usuario cuando habla
                </td>
                <td className="align-middle">
                  ( 0 )<br />
                  AG no atiende las dudas y preguntas del Usuario. Solicita
                  información ya proporcionada e interrumpe al Usuario cuando
                  habla, es cortante y lineal
                </td>
                <td className="align-middle">
                  ( 3 )<br />
                  AG atiende las dudas y preguntas del Usuario
                </td>
                <td className="align-middle">3</td>
              </tr>
              <tr>
                <th className="align-middle">CONTROL DE LLAMADA</th>
                <td className="align-middle">
                  AG debe mantener liderazgo durante la llamada, sin permitir
                  que el contacto se salga de contexto
                </td>
                <td className="align-middle">
                  ( 0 )<br />
                  AG permite desvío de conversación durante la llamada, sin
                  ubicarlo nuevamente en objetivo de la misma
                </td>
                <td className="align-middle">
                  ( 3 )<br />
                  AG ubica rápidamente al Usuario cuando se desvía del motivo de
                  la llamada, lleva los puntos clave de la llamada
                </td>
                <td className="align-middle">3</td>
              </tr>
              <tr>
                <th className="align-middle">VOZ Y VOCABULARIO</th>
                <td className="align-middle">
                  AG debe modular su voz de acuerdo a la llamada utilizando
                  ritmo y tono de voz adecuados. Utiliza un vocabulario
                  apropiado sin muletillas, palabras altisonantes, con correcta
                  dicción, sin utilizar tecnicismos, pleonasmos, anglicismos o
                  extranjerismos
                </td>
                <td className="align-middle">
                  ( 0 )<br />
                  AG lleva la llamada con un tono de voz lineal y con vicios de
                  respiración, tiene vicios de dicción, y presenta muletillas o
                  palabras no adecuadas durante la llamada
                </td>
                <td className="align-middle">
                  ( 3 )<br />
                  AG lleva la llamada con un tono de voz dinámico y sin vicios
                  de respiración. Utiliza un vocabulario apropiado, sin
                  muletillas con palabras adecuadas y con correcta dicción
                </td>
                <td className="align-middle">3</td>
              </tr>

              <tr>
                <th colspan="5" scope="col" className="bg-danger text-white">
                  DESPEDIDA
                </th>
              </tr>
              <tr>
                <th className="align-middle">USO DE RECURSOS</th>
                <td className="align-middle">
                  {' '}
                  AG hará buen uso de sus herramientas de trabajo (Script, Mute,
                  Sistema, mail){' '}
                </td>
                <td className="align-middle">
                  ( 0 )<br />
                  AG no utiliza sus herramientas de trabajo de acuerdo a la
                  necesidad de la llamada
                </td>
                <td className="align-middle">
                  ( 6 )<br />
                  AG utiliza en tiempo y forma las herramientas necesarias
                  (Script, Mute, Sistema, mail) de acuerdo a la llamada.
                </td>
                <td className="align-middle">3</td>
              </tr>
              <tr>
                <th className="align-middle">AYUDA ADICIONAL</th>
                <td className="align-middle">
                  Ofrece ayuda adicional antes de finalizar la llamada
                </td>
                <td className="align-middle">
                  No ofrece ayuda adicional antes de finalizar la llamada
                </td>
                <td className="align-middle">
                  (2)
                  <br />
                  Ofrece ayuda adicional antes de culminar la llamada
                </td>
                <td className="align-middle">3</td>
              </tr>
              <tr>
                <th className="align-middle">DESPEDIDA</th>
                <td className="align-middle">
                  AG menciona frase de cortesía, nombre de la empresa a la que
                  representa y su primer nombre.
                </td>
                <td className="align-middle">
                  {' '}
                  ( 0 ) <br />
                  AG no menciona su nombre, no menciona nombre de la institución
                  a la cual representa y omite frase de cortesía
                </td>
                <td className="align-middle">
                  ( 2 )<br />
                  AG se apega a Script (despedida), Menciona frase de cortesía,
                  nombre de la empresa a la que representa y su primer nombre.
                </td>
                <td className="align-middle">3</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </div>
    )
  }
}

class TablaWhPlantilla extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <table className="table table-bordered table-responsive">
          <tbody>
            <tr>
              <th className="align-middle">Saludo Inicial</th>
            </tr>
            <tr>
              <th className=""></th>
              <td className="text-justify">
                ¡Hola! Buen día, (tardes, noches) bienvenido a Condé Nast
                México, le atiende _____, ¿Con quién tengo el gusto?
              </td>
            </tr>
            <tr>
              <th>HORARIO DE ATENCIÓN</th>
              <td className="text-justify">
                Sr./Srta.______, nuestro horario de atención es de Lunes a
                Viernes, de 08:00 a.m. a 09:00 p.m., y los días viernes de 08:00
                a.m. a 15:00 hrs.
              </td>
            </tr>
            <tr>
              <th className="align-middle ">Facturación</th>
              <td className="text-justify">
                Sr./Srta.______, para la facturación, solicito de su apoyo, para
                el envío de los siguientes datos: por favor.
                <br />
                <ul>
                  <li>RFC</li>
                  <li>Razón social</li>
                  <li>Domicilio fiscal</li>
                  <li>Correo electrónico </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th className="align-middle ">QUEJAS/FACTURACIÓN</th>
              <td className="text-justify">
                Comprendo Sr./Srita. ______ le ofrezco una disculpa por el
                inconveniente generado, no se preocupe, vamos a verificar cuál
                fue el tema, para resolverlo lo antes posible, ¿me confirma por
                favor el nombre completo con el que generó la suscripción?, para
                ubicar el registro en sistema_____.{' '}
              </td>
            </tr>
            <tr>
              <th className="align-middle ">QUEJAS/REPOSICIÓN</th>
              <td className="text-justify">
                Entiendo la situación Sr./Srita. ____ comprendo su molestia, le
                ofrecemos una disculpa por los inconvenientes, voy a generar un
                reporte de investigación en Correos de México para verificar
                cuál está siendo el problema y solucionarlo lo antes posible, me
                confirma si es tan amable, el nombre completo con el que generó
                la suscripción?, para ubicar el registro en sistema_____.{' '}
              </td>
            </tr>
            <tr>
              <td colspan="2" className="align-middle ">
                CARACTERISTICAS
              </td>
            </tr>
            <tr>
              <th className="align-middle ">REVISTA GQ</th>
              <td className="text-justify">
                GQ es la guía de moda y estilo de vida para el hombre
                contemporáneo. Con más de 50 años de experiencia en el mercado
                global, GQ es la marca que inspira y ayuda al hombre de hoy a
                tomar decisiones y estar informado sobre moda, tecnología, sexo,
                salud, gastronomía y negocios. A través de un diseño único e
                innovador, GQ ofrece al público material de los mejores
                expertos, escritores y fotógrafos a nivel mundial convirtiéndose
                en ese aliado que uno necesita tener cerca.
              </td>
            </tr>
            <tr>
              <th className="align-middle ">REVISTA VOGUE</th>
              <td className="text-justify">
                Es la marca editorial más famosa de todos los tiempos. Fundada
                en 1892, Vogue ha traspasado las fronteras mundiales para
                convertirse no sólo en ícono de la cultura pop sino también en
                la Biblia de la Moda de todas las regiones a las que pertenece.
                <br />
                Un título con autoridad y estilo que sirve de barómetro de la
                cultura, la moda, la belleza, el lujo, el estilo de vida y el
                universo digital. Con su exquisito y cuidado estilismo ofrece un
                contenido único y relevante para el lector.
              </td>
            </tr>
            <tr>
              <th className="align-middle ">REVISTA AD</th>
              <td className="text-justify">
                Architectural Digest es la autoridad internacional del diseño,
                interiorismo y arquitectura. Es la guía de estilo en donde
                expertos y amantes del mundo creativo son testigos, antes que
                nadie, de las tendencias, las casas, los lugares, los objetos y
                las obras de arte más hot del momento. Exclusivo, fresco y
                vibrante, así es el universo AD.
              </td>
            </tr>
            <tr>
              <th className="align-middle ">SUSCRIPCIÓN A REVISTA AD</th>
              <td className="text-justify">
                Sr./Srta.____ para la suscripción a la revista AD (Architectural
                Digest), le estamos ofreciendo un excelente descuento del ___%,
                el costo sería de $____, por 12 ejemplares. ¿Le agregamos la
                suscripción?
              </td>
            </tr>
            <tr>
              <th className="align-middle ">SUSCRIPCIÓN A REVISTA VOGUE</th>
              <td className="text-justify">
                Sr/Srta. ___________le comento que el precio normal de la
                suscripción a la revista Vogue es de _____. Ahora tenemos un
                descuento especial del 45% por lo que sólo pagará _____ Usted
                recibirá 12 ejemplares de manera mensual durante un año.
              </td>
            </tr>
            <tr>
              <th className="align-middle ">USCRIPCIÓN A REVISTA GQ</th>
              <td className="text-justify">
                Sr./Srta.____ para la suscripción a la revista GQ, le estamos
                ofreciendo un excelente descuento del ___%, el costo sería de
                $____, por 11 ejemplares. ¿Le agregamos la suscripción?
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
    )
  }
}

class TablaWhRubros extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="6"></Col>
          <Col xs="6">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Código</th>
                </tr>
                <tr>
                  <td>F-Q-09</td>
                </tr>
                <tr>
                  <th>versión</th>
                </tr>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <th>retención</th>
                </tr>
                <tr>
                  <td>1 año</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Col xs="12" className="centrado-fila">
          <div>
            <table className="table table-bordered  table-responsive ">
              <thead class="">
                <tr>
                  <th className="bg-danger text-white" scope="col">
                    MAIL
                  </th>
                  <th className="bg-danger text-white" scope="col">
                    RUBRO
                  </th>
                  <th className="bg-danger text-white" scope="col">
                    %
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowspan="8" className="bg-danger text-white align-middle">
                    <b>PROCESO</b>
                  </th>
                  <td>
                    <b>Apego a Proceso </b>
                  </td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td>
                    <b>Captura Completa y Correcta de Datos </b>
                  </td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>
                    <b>Tiempo de Respuesta </b>
                  </td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>
                    <b>Liga de encuesta. </b>
                  </td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td>
                    <b>Nota en CRM. </b>
                  </td>
                  <td>10%</td>
                </tr>

                <tr>
                  <td>
                    <b>Ortografía y redacción. </b>
                  </td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td>
                    <b>Seguimiento de casos. </b>
                  </td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td>
                    <b>Captura en bitacora. </b>
                  </td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td colspan="2">TOTAL</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </div>
    )
  }
}

class TablaATC extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div>
          <table className="table table-bordered table-responsive ">
            <thead>
              <tr>
                <th
                  style={{ border: 'solid 1px' }}
                  colspan="3"
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  ATC{' '}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="align-middle bg-secondary text-white text-center ">
                  T-AHT
                </th>
                <th className="align-middle bg-secondary text-white text-center ">
                  T-Tipifica
                </th>
                <th className="align-middle bg-secondary text-white  text-center">
                  T-Resolucion
                </th>
              </tr>
              <tr>
                <td className="align-middle">Justificado</td>
                <td>Tipifica</td>
                <td>Soluciona</td>
              </tr>
              <tr>
                <td className="align-middle">Injustificado</td>
                <td>No tipifica</td>
                <td>No Soluciona</td>
              </tr>
              <tr>
                <th
                  style={{ border: 'solid 1px' }}
                  className="align-middle bg-secondary text-white "
                >
                  <strong>Imputable</strong>
                </th>
                <td
                  style={{ border: 'solid 1px' }}
                  className="align-middle bg-secondary text-white "
                >
                  <b>
                    <strong>T-Calidad Tipificación</strong>
                  </b>
                </td>
                <td>No Aplica</td>
              </tr>
              <tr>
                <td className="align-middle">Agente</td>
                <td>Correcta</td>
              </tr>
              <tr>
                <td className="align-middle">Cliente </td>
                <td>Incorrecta</td>
              </tr>
              <tr>
                <td className="align-middle">Usuario</td>
                <td>
                  <b>No Aplica</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablaVentas extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div>
          <table className="table table-bordered table-responsive  ">
            <thead class="">
              <tr>
                <th
                  style={{ border: 'solid 1px' }}
                  colspan="3"
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  ATC{' '}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="align-middle bg-secondary text-white text-center ">
                  T-AHT
                </th>
                <th className="align-middle bg-secondary text-white text-center ">
                  T-Tipifica
                </th>
                <th className="align-middle bg-secondary text-white  text-center">
                  T-Gestión
                </th>
              </tr>
              <tr>
                <td className="align-middle">Justificado</td>
                <td>Tipifica</td>
                <td>Gestiona</td>
              </tr>
              <tr>
                <td className="align-middle">Injustificado</td>
                <td>No tipifica</td>
                <td>No Gestiona</td>
              </tr>
              <tr>
                <th
                  style={{ border: 'solid 1px' }}
                  className="align-middle bg-secondary text-white "
                >
                  <strong>Imputable</strong>
                </th>
                <td
                  style={{ border: 'solid 1px' }}
                  className="align-middle bg-secondary text-white "
                >
                  <b>
                    <strong>T-Calidad Tipificación</strong>
                  </b>
                </td>
                <td>No Aplica</td>
              </tr>
              <tr>
                <td className="align-middle">Agente</td>
                <td>Correcta</td>
              </tr>
              <tr>
                <td className="align-middle">Cliente </td>
                <td>Incorrecta</td>
              </tr>
              <tr>
                <td className="align-middle">Usuario</td>
                <td>
                  <b>No Aplica</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablasVentasOut extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div>
          <table className="table table-bordered table-responsive  ">
            <thead class="">
              <tr>
                <th
                  style={{ border: 'solid 1px' }}
                  colspan="4"
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  <strong>VENTAS OUT</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="align-middle bg-secondary text-white text-center ">
                  T-AHT
                </th>
                <th className="align-middle bg-secondary text-white text-center ">
                  T-Tipifica
                </th>
                <th className="align-middle bg-secondary text-white  text-center">
                  T-Gestión
                </th>
                <th className="align-middle bg-secondary text-white  text-center">
                  T-Aprovechamiento de BDD
                </th>
              </tr>
              <tr>
                <td className="align-middle">Justificado</td>
                <td>Tipifica</td>
                <td>Gestiona</td>
                <td>SI</td>
              </tr>
              <tr>
                <td className="align-middle">Injustificado</td>
                <td>No tipifica</td>
                <td>No Gestiona</td>
                <td>NO</td>
              </tr>
              <tr>
                <th
                  style={{ border: 'solid 1px' }}
                  className="align-middle bg-secondary text-white "
                >
                  <strong>Imputable</strong>
                </th>
                <td
                  style={{ border: 'solid 1px' }}
                  className="align-middle bg-secondary text-white "
                >
                  <b>
                    <strong>T-Calidad Tipificación</strong>
                  </b>
                </td>
                <td>No Aplica</td>
                <td>No Aplica</td>
              </tr>
              <tr>
                <td className="align-middle">Agente</td>
                <td>Correcta</td>
              </tr>
              <tr>
                <td className="align-middle">Cliente </td>
                <td>Incorrecta</td>
              </tr>
              <tr>
                <td className="align-middle">Usuario</td>
                <td>
                  <b>No Aplica</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablaLineaHistorico extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div>
          <table className="table table-bordered table-responsive ">
            <thead class="">
              <tr>
                <th
                  style={{ border: 'solid 1px' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  Línea{' '}
                </th>
                <th
                  style={{ border: 'solid 1px' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  Histórico{' '}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle text-center">80%</td>
                <td className="align-middle text-center">20%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablasImputables extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div>
          <table className="table table-bordered table-responsive">
            <thead class="">
              <tr>
                <th
                  colspan="2"
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  IMPUTABLES
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  style={{ border: 'solid' }}
                  className="align-middle bg-secondary text-white text-center "
                >
                  ITEM
                </th>
                <th
                  style={{ border: 'solid' }}
                  className="align-middle bg-secondary text-white text-center "
                >
                  MOTIVO
                </th>
              </tr>
              <tr>
                <th className="align-middle">Contacto</th>
                <td>Cuando el interlocutor comete la incidencia  </td>
              </tr>
              <tr>
                <th className="align-middle">Agente</th>
                <td>Cuando el agente comente una falta </td>
              </tr>
              <tr>
                <th className="align-middle">Cliente </th>
                <td>
                  Falla o actualización de sistema o herramienta de cliente que
                  no permite continuar con la llamada
                </td>
              </tr>
              <tr>
                <th className="align-middle">Contacto-agente </th>
                <td>
                  Cuando la fluidez de la llamada se genera cumpliendo el
                  proceso ya que no hay incidencia o si hay incidencia{' '}
                </td>
              </tr>
              <tr>
                <th className="align-middle">Ruido o ambiente </th>
                <td>
                  <ul>
                    <li>Disciplina: Correspondiente al área de trabajo</li>

                    <li>Ambiental: Ruido externo, ajeno a la operación</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablaMonitoreo extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div>
          <table className="table table-bordered  table-responsive ">
            <thead class="">
              <tr>
                <th
                  colspan=""
                  style={{ border: 'solid' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  ESCALA
                </th>
                <th
                  colspan=""
                  style={{ border: 'solid' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  MONITOREOS
                </th>
                <th
                  colspan=""
                  style={{ border: 'solid' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="align-middle text-center">A</th>
                <td className="text-center">
                  <b>Dos a la semana</b>
                </td>
                <td className="text-center">
                  <strong>95 A 100%</strong>
                </td>
              </tr>
              <tr>
                <th className="align-middle text-center">B</th>
                <td className="text-center">
                  <strong>Tres a la semana</strong>
                </td>
                <td className="text-center">
                  <strong>80 A 94.99%</strong>
                </td>
              </tr>
              <tr>
                <th className="align-middle text-center">C</th>
                <td className="text-center">
                  <strong>Cuatro a la semana</strong>
                </td>
                <td className="text-center">
                  <strong>0- 79.99%</strong>
                </td>
              </tr>
              <tr>
                <th className="align-middle text-center">D</th>
                <td className="text-center">
                  <strong>Cinco a la semana</strong>
                </td>
                <td className="text-center">
                  <strong>NI</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablaTipoMotivo extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div>
          <table className="table table-bordered  table-responsive">
            <thead>
              <tr>
                <th
                  colspan=""
                  style={{ border: 'solid' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  TIPO{' '}
                </th>
                <th
                  colspan=""
                  style={{ border: 'solid' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  MOTIVO{' '}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="align-middle text-center">Solicitud</th>
                <td className="">Llamadas con tiempo mayor a 48 hrs</td>
              </tr>
              <tr>
                <th className="align-middle text-center">Histórico </th>
                <td className="">Mismo día </td>
              </tr>
              <tr>
                <th className="align-middle text-center">Línea</th>
                <td className="">Al momento de generar la llamada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablaRetro extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div>
          <table className="table table-bordered table-responsive ">
            <thead>
              <tr>
                <th
                  colspan=""
                  style={{ border: 'solid' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  <strong>Coaching </strong>
                </th>
                <th
                  colspan=""
                  style={{ border: 'solid' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  <strong>FODA</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5 minutos aprox.</td>
                <td className="">15 minutos aprox.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablaHotTopics extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div style={{width:"100%"}}>
          <table className="table table-bordered table-responsive ">
            <tbody>
              <tr>
                <th className="bg-danger text-white align-middle text-center">
                  Fecha
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Analista
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  IDllamada
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Agente
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Campania
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Tipificacíon Agente
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Tipifica Correctamente{' '}
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Tipificacíon Analista
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Comentarios Analista
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Error Fatal
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Hllazgos/ Hot Topics
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Calificacíon
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Duracíon de llamada
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Recomendacíon QA
                </th>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablaConcentrado extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div id="TConcentrado"  className="centrado-fila">
          <table className="table table-bordered table-responsive">
            <tbody>
              <tr>
                <th className="bg-danger text-white align-middle text-center">
                  Fecha
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Analista
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Agente
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Campania
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  Hallazgo
                </th>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablaMisteries extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div style={{width:"85%"}}  className="centrado-fila">
          <table className="table table-bordered table-responsive">
            <tbody>
              <tr>
                <th className="bg-danger text-white align-middle text-center">
                  FECHA
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  ANALISTA
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  FECHA
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  AGENTE
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  AREA DE OPORTUNIDAD
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  FOLIO
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  SKILL
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  CALIFICACÍON
                </th>
                <th className="bg-danger text-white align-middle text-center">
                  OBSEVACIONES
                </th>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablaAnexos extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div id="TablaAnexos" >
          <table className="table table-bordered table-responsive">
            <thead>
              <tr>
                <th
                  colspan=""
                  style={{ border: 'solid' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  <strong>Campaña</strong>
                </th>
                <th
                  colspan=""
                  style={{ border: 'solid' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  <strong>Tipo de campaña </strong>
                </th>
                <th
                  colspan=""
                  style={{ border: 'solid' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  <strong>Indicador Principal </strong>
                </th>
                <th
                  colspan=""
                  style={{ border: 'solid' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  <strong>Indicador Secundario</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle">Altan Redes</td>
                <td className="text-center align-middle">Outbound </td>
                <td className="text-center align-middle">Satisfacción</td>
                <td className="text-center align-middle">Tipificación</td>
              </tr>
              <tr>
                <td className="align-middle">America Movil </td>
                <td className="text-center align-middle">Inbound </td>
                <td className="text-center align-middle">AHT </td>
                <td className="text-center align-middle">Tipificación </td>
              </tr>
              <tr>
                <td className="align-middle">Buongiorno </td>
                <td className="text-center align-middle"> Inbound </td>
                <td className="text-center align-middle">AHT </td>
                <td className="text-center align-middle">Satisfacción </td>
              </tr>
              <tr>
                <td className="align-middle">Castrol </td>
                <td className="text-center align-middle">
                  Inbound/Outbound/Mail{' '}
                </td>
                <td className="text-center align-middle">AHT </td>
                <td className="text-center align-middle">Tipificación </td>
              </tr>
              <tr>
                <td className="align-middle">Singer </td>
                <td className="text-center align-middle">
                    Inbound/mail/backoff/Wa{' '}
                </td>
                <td className="text-center align-middle">AHT </td>
                <td className="text-center align-middle">Tipificación </td>
              </tr>
              <tr>
                <td className="align-middle">Televia Pagos </td>
                <td className="text-center align-middle">Mail </td>
                <td className="text-center align-middle">AHT </td>
                <td className="text-center align-middle">Tipificación </td>
              </tr>
              <tr>
                <td className="align-middle">Televia SAC </td>
                <td className="text-center align-middle">Inbound </td>
                <td className="text-center align-middle">AHT </td>
                <td className="text-center align-middle">Tipificación </td>
              </tr>
              <tr>
                <td className="align-middle">Televia Backoffice </td>
                <td className="text-center align-middle">Backoffice </td>
                <td className="text-center align-middle">Tipificación </td>
                <td className="text-center align-middle">QA Tipi </td>
              </tr>
              <tr>
                <td className="align-middle">Televia Whatsapp </td>
                <td className="text-center align-middle">Wa </td>
                <td className="text-center align-middle">Tip Whats ATC </td>
                <td className="text-center align-middle">AHT Whats ATC </td>
              </tr>
              <tr>
                <td className="align-middle">Edenred </td>
                <td className="text-center align-middle">Outbound </td>
                <td className="text-center align-middle">Citas </td>
                <td className="text-center align-middle">Talk Time </td>
              </tr>
              <tr>
                <td className="align-middle">Conde Nast </td>
                <td className="text-center align-middle">
                  Inbound/Outbound/Mail/Wa{' '}
                </td>
                <td className="text-center align-middle">Conversión IN </td>
                <td className="text-center align-middle">Conversión OUT </td>
              </tr>
              <tr>
                <td className="align-middle">Harmon Hall </td>
                <td className="text-center align-middle">
                  Inbound/Outbound/Mail{' '}
                </td>
                <td className="text-center align-middle">Venta x día </td>
                <td className="text-center align-middle">Venta indirecta </td>
              </tr>
              <tr>
                <td className="align-middle">Mens Fashion </td>
                <td className="text-center align-middle">
                  Inbound/Outbound/Chat{' '}
                </td>
                <td className="text-center align-middle">Monto </td>
                <td className="text-center align-middle">SLA </td>
              </tr>
              <tr>
                <td className="align-middle">Vicky Form </td>
                <td className="text-center align-middle">
                  Inbound/Outbound/Chat{' '}
                </td>
                <td className="text-center align-middle">Monto </td>
                <td className="text-center align-middle">Tipificación </td>
              </tr>
              <tr>
                <td className="align-middle">Price Shoes </td>
                <td className="text-center align-middle">Inbound </td>
                <td className="text-center align-middle">Monto </td>
                <td className="text-center align-middle">Cartera </td>
              </tr>
              <tr>
                <td className="align-middle">Price Shoes Back Office </td>
                <td className="text-center align-middle">Mail </td>
                <td className="text-center align-middle">Monto </td>
                <td className="text-center align-middle">Cartera </td>
              </tr>
              <tr>
                <td className="align-middle">Price Shoes WhatsApp </td>
                <td className="text-center align-middle">Wa </td>
                <td className="text-center align-middle">Monto </td>
                <td className="text-center align-middle">Cartera </td>
              </tr>
              <tr>
                <td className="align-middle">Sin Delantal </td>
                <td className="text-center align-middle">
                  Inbound/Account Manager/Key Account{' '}
                </td>
                <td className="text-center align-middle">Registro x hora </td>
                <td className="text-center align-middle">-</td>
              </tr>
              <tr>
                <td className="align-middle">VIPS </td>
                <td className="text-center align-middle"> Inbound/outbound </td>
                <td className="text-center align-middle">Ticket Promedio </td>
                <td className="text-center align-middle">AHT</td>
              </tr>
              <tr>
                <td className="align-middle">Gana Mexico </td>
                <td className="text-center align-middle">
                  {' '}
                  Inbound/backoffice{' '}
                </td>
                <td className="text-center align-middle">Tipificación </td>
                <td className="text-center align-middle">AHT</td>
              </tr>
              <tr>
                <td className="align-middle">INEA </td>
                <td className="text-center align-middle"> Inbound </td>
                <td className="text-center align-middle">Tipificación </td>
                <td className="text-center align-middle">AHT</td>
              </tr>
              <tr>
                <td className="align-middle">OXXO </td>
                <td className="text-center align-middle">Inbound </td>
                <td className="text-center align-middle">Tipificación </td>
                <td className="text-center align-middle">Reprocesos</td>
              </tr>
              <tr>
                <td className="align-middle">TCL </td>
                <td className="text-center align-middle">
                  Inbound/backoffice/Wa{' '}
                </td>
                <td className="text-center align-middle">Tipificación </td>
                <td className="text-center align-middle">AHT</td>
              </tr>
              <tr>
                <td className="align-middle">Televisa </td>
                <td className="text-center align-middle"> Inbound/outbound </td>
                <td className="text-center align-middle">VPH </td>
                <td className="text-center align-middle">Marcaciones x hora</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

class TablaControlCambios extends Component {
  render() {
    return (
      <Col xs="12" className="centrado-fila">
        <div>
          <table className="table table-bordered table-responsive ">
            <thead>
              <tr>
                <th
                  colspan="4"
                  style={{ border: 'solid' }}
                  scope="col"
                  className="bg-secondary text-white text-center "
                >
                  <strong>Cambios</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle text-center">Revisión anterior</td>
                <td className="text-center align-middle">Punto afectadas </td>
                <td className="text-center align-middle">
                  Descripción de modificación
                </td>
                <td className="text-center align-middle">Fecha</td>
              </tr>
              <tr>
                <td className="align-middle text-center">01 </td>
                <td className="text-center align-middle">Estructura </td>
                <td className="text-justify align-middle">
                  Se genera el documento donde se describe la metodología a
                  utilizar en el área de calidad{' '}
                </td>
                <td className="text-center align-middle">agosto 2019 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    )
  }
}

export {
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
  TablaWhGuia,
  TablaATC,
  TablaVentas,
  TablasVentasOut,
  TablaLineaHistorico,
  TablasImputables,
  TablaMonitoreo,
  TablaTipoMotivo,
  TablaRetro,
  TablaHotTopics,
  TablaConcentrado,
  TablaMisteries,
  TablaAnexos,
  TablaControlCambios,
}
