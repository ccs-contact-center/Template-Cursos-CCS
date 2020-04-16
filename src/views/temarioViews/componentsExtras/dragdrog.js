import React, { Component } from 'react'
import { ReactSortable } from 'react-sortablejs'
import Nota from './notasReferencia'

class List2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: '1', name: 'Error fatal' },
        { id: '2', name: '	Gestión' },
        { id: '3', name: '	FCR' },
        { id: '4 ', name: '	AHT ' },
        { id: '5 ', name: '	Tipificación ' },
        { id: '6 ', name: '	Transacción ' },
        { id: '7 ', name: '	Retroalimentación    ' },
        { id: '8 ', name: '	Monitoreo' },
        { id: '9 ', name: '	Soporte ' },
        { id: '10 ', name: '	Ventas   ' },
        { id: '11 ', name: '	Out Bound ' },
        { id: '12 ', name: '	In Bound ' },
      ],
      list2: [],
    }
  }

  render() {
    return (
      <div className="row align-items-start ">
        <div className="col bg-fondo-btn">
          <h6 className="text-center text-white mt-2">Terminos</h6>

          <ReactSortable
            list={this.state.list}
            setList={newState => this.setState({ list: newState })}
            group="shared-group-name"
          >
            {this.state.list.map(item => (
              <div key={item.id}>
                <div className="card  m-3 cursor-draggable text-center">
                  <div className="text-dark">{item.name}</div>
                </div>
              </div>
            ))}
          </ReactSortable>
        </div>

        <div class="col bg-dark">
          <h6 className="text-center text-white mt-2">¡Arrastra aqui!</h6>

          <ReactSortable
            list={this.state.list2}
            setList={newState => this.setState({ list2: newState })}
            group="shared-group-name"
          >
            {this.state.list2.map(item => (
              <div key={item.id}>
                <div className="card m-3 cursor-draggable text-center text-dark">
                  {item.name}
                </div>
              </div>
            ))}
          </ReactSortable>
        </div>

        <div className="col-12 mt-3 ">
          <button className="btn btn-primary">Enviar</button>
        </div>
        <div className="col-12 mt-3 ">

       
        <Nota
          title1="Instrucción:"
          content1="Arrastre los las Definiciones correctas."
        />
         </div>
      </div>
    )
  }
}

export default List2
