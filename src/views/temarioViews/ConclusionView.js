import React, { Component } from "react";
import { CardBody, CardHeader } from "reactstrap";

class ConclusionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-center">Texto1! ConclusionView</CardHeader>
        <CardBody className="text-center">
          contenido texto ConclusionView
        </CardBody>
      </div>
    );
  }
}
export default ConclusionView;
