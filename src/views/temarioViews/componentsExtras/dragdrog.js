import React, { Component } from "react";
import { ReactSortable } from "react-sortablejs";
import Nota from "./notasReferencia";
import swal from "sweetalert";
import AuthService from "../../../services/AuthService";
import API_CCS from "../../../services/API_CCS";
const API = new API_CCS();

class List2 extends Component {
  constructor(state) {
    super(state);
    this.Auth = new AuthService();
    this.state = {
      list: [
        { id: "1", name: "DESCRIPCIÓN" },
        {
          id: "6 ",
          name:
            "	Se realiza sondeo sobre las respuestas brindadas en la encuesta (proporcionado por Altán Redes) para la correcta continuidad del proceso. ",
        },
        { id: "2", name: "	SALUDO" },
        {
          id: "8 ",
          name:
            "	Le atendió (Nombre y Apellido) de ALTÁN REDES; Que tenga un excelente día /tarde/noche.",
        },
        { id: "3", name: "	Lineamientos" },
        {
          id: "7 ",
          name:
            "	Agradezco su tiempo y le comento que se dará seguimiento a las observaciones indicadas durante la llamada (indicando los puntos que tendrán seguimiento).",
        },
        { id: "4 ", name: "	AYUDA ADICIONAL/ DESPEDIDA " },
        {
          id: "5 ",
          name:
            "	Buenos (días, tardes, noches) mi nombre es__________________ le llamo de Altán Redes el motivo de esta llamada, es para dar continuidad a la encuesta que fue realizada con usted hace unas semanas donde comentó que (se informa sobre los resultados obtenidos en la encuesta que le realizaron), por lo que el objetivo es dar seguimiento y entender de manera precisa algunos puntos específicos: ",
        },
      ],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
      list7: [],
      list8: [],
      list9: [],
      id_ccs: this.Auth.getProfile().id_ccs,
      form: "QA-1",
    };
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state);

      swal({
        title: "Status Actividad",
        text: "Se guardo la actividad: 1, con id: " + respuesta[0].id,
        icon: "success",
        dangerMode: true,
        button: {
          text: "Aceptar",
          value: true,
          visible: true,
          className: "btn btn-primary",
          reset: true,
        },
      });

      // alert("Se guardo la actividad: 1, con id: " + respuesta[0].id);
    } catch (err) {
      swal({
        title: "Status Actividad",
        text: "No se guardo la actividad: 1, Intenta de nuevo. ",
        icon: "error",
        dangerMode: true,
        button: {
          text: "Cerrar",
          value: true,
          visible: true,
          className: "btn btn-primary ",
        },
      });
      console.log("loggea si hay un error...");
    }
  }

  render() {
    return (
      <div className="row align-items-start centrado-fila ">
        <div className="col ">
          <div className="card bg-fondo-btn2">
            <h6 className="text-center text-white mt-2">Terminos</h6>

            <ReactSortable
              list={this.state.list}
              setList={(newState) => this.setState({ list: newState })}
              group="shared-group-name"
            >
              {this.state.list.map((item) => (
                <div key={item.id}>
                  <div className="card  m-3 cursor-draggable text-center">
                    <div className="text-dark">{item.name}</div>
                  </div>
                </div>
              ))}
            </ReactSortable>
          </div>
        </div>

        <div className="col">
          <div className="card  bg-fondo-btn2 pl-4 pr-4">
            <h6 className="text-center text-white mt-2">¡Arrastra aqui!</h6>

            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th rowSpan="5" className="align-middle text-danger">
                    <ReactSortable
                      list={this.state.list9}
                      setList={(newState) => this.setState({ list9: newState })}
                      group="shared-group-name"
                    >
                      {this.state.list9.map((item) => (
                        <div key={item.id}>
                          <div className=" cursor-draggable text-center  ">
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </ReactSortable>
                  </th>
                  <th className="bg-danger text-white">RUBRO</th>
                  <th className="bg-danger text-white">SCRIPT</th>
                </tr>
                <tr>
                  <th className="align-middle ">
                    <ReactSortable
                      list={this.state.list2}
                      setList={(newState) => this.setState({ list2: newState })}
                      group="shared-group-name"
                    >
                      {this.state.list2.map((item) => (
                        <div key={item.id}>
                          <div className=" cursor-draggable text-center text-white">
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </ReactSortable>
                  </th>
                  <td>
                    <ReactSortable
                      list={this.state.list3}
                      setList={(newState) => this.setState({ list3: newState })}
                      group="shared-group-name"
                    >
                      {this.state.list3.map((item) => (
                        <div key={item.id}>
                          <div className=" cursor-draggable text-center text-white">
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </ReactSortable>
                  </td>
                </tr>
                <tr>
                  <th className="align-middle ">
                    <ReactSortable
                      list={this.state.list4}
                      setList={(newState) => this.setState({ list4: newState })}
                      group="shared-group-name"
                    >
                      {this.state.list4.map((item) => (
                        <div key={item.id}>
                          <div className=" cursor-draggable text-center text-white">
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </ReactSortable>
                  </th>
                  <td>
                    <ReactSortable
                      list={this.state.list5}
                      setList={(newState) => this.setState({ list5: newState })}
                      group="shared-group-name"
                    >
                      {this.state.list5.map((item) => (
                        <div key={item.id}>
                          <div className=" cursor-draggable text-center text-white">
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </ReactSortable>
                  </td>
                </tr>
                <tr>
                  <th className="align-middle " rowspan="2">
                    <ReactSortable
                      list={this.state.list6}
                      setList={(newState) => this.setState({ list6: newState })}
                      group="shared-group-name"
                    >
                      {this.state.list6.map((item) => (
                        <div key={item.id}>
                          <div className=" cursor-draggable text-center text-white">
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </ReactSortable>
                  </th>
                  <td>
                    <ReactSortable
                      list={this.state.list7}
                      setList={(newState) => this.setState({ list7: newState })}
                      group="shared-group-name"
                    >
                      {this.state.list7.map((item) => (
                        <div key={item.id}>
                          <div className=" cursor-draggable text-center text-white">
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </ReactSortable>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ReactSortable
                      list={this.state.list8}
                      setList={(newState) => this.setState({ list8: newState })}
                      group="shared-group-name"
                    >
                      {this.state.list8.map((item) => (
                        <div key={item.id}>
                          <div className=" cursor-draggable text-center text-white">
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </ReactSortable>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <p>
              {JSON.stringify(this.state)}
            </p> */}
          </div>
        </div>

        <div className="col-12 mt-3 ">
          <button className="btn btn-primary" onClick={this.onSave.bind(this)}>
            Enviar
          </button>
        </div>
        <div className="col-12 mt-3 ">
          <Nota
            title1="Instrucción:"
            content1="Arrastre  las Definiciones correctas a la tabla."
          />
        </div>
      </div>
    );
  }
}

export default List2;
