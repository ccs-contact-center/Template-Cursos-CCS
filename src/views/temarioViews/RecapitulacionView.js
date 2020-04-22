import React, { Component } from "react";
import { CardBody, CardHeader } from "reactstrap";

class RecapitulacionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-center">
          Texto1! RecapitulacionView
        </CardHeader>
        <CardBody className="text-center">
          contenido texto RecapitulacionView
        </CardBody>
      </div>
    );
  }
}
export default RecapitulacionView;
