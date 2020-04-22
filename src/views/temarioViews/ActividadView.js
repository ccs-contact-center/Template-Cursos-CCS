import React, { Component } from "react";
import {CardBody, CardHeader} from "reactstrap";

import List2 from "./componentsExtras/dragdrog";

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="">
          <h2> Actividad</h2>
        </CardHeader>
        <CardBody className="text-center">
          <List2></List2>
        </CardBody>
      </div>
    );
  }
}
export default ActividadView;
