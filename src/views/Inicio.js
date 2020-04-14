import React, { Component } from 'react'
import { Col, Row, Card } from 'reactstrap'
import withAuth from '../services/withAuth'
//import { connect } from 'react-redux';
//import { addProfile, setCampaign, darkTheme,setAvatar } from '../../Redux/Actions/profile';
import Navegador from './temarioViews/ComponentsNavTemari/Navegador'
import BienvenidaView from './temarioViews/BienvenidaView'
import ObjetivoView from './temarioViews/ObjetivoView'
import PresentacionView from './temarioViews/PresentacionView'
import TemaUnoView from './temarioViews/TemaUnoView'
import TemaDosView from './temarioViews/TemaDosView'
import TemaTresView from './temarioViews/TemaTresView'
import TemaCuatroView from './temarioViews/TemaCuatroView'
import TemaCincoView from './temarioViews/TemaCincoView'
import TemaSeisView from './temarioViews/TemaSeisView'
import ActividadView from './temarioViews/ActividadView'
//import ConclusionView from './temarioViews/ConclusionView'
//import RecapitulacionView from './temarioViews/RecapitulacionView'

class Inicio extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )
  state = {
    index: 0,
  }
  constructor() {
    super()
    this.setIndex = this.setIndex.bind(this)
  }

  setIndex(index) {
    this.setState({
      index: index,
    })
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card className="pb-4">
              <Col xs="12" className="">
                {this.state.index === 0 ? (
                  <BienvenidaView />
                ) : this.state.index === 1 ? (
                  <ObjetivoView />
                ) : this.state.index === 2 ? (
                  <PresentacionView />
                ) : this.state.index === 3 ? (
                  <TemaUnoView />
                ) : this.state.index === 4 ? (
                  <TemaDosView />
                ) : this.state.index === 5 ? (
                  <TemaTresView />
                ) : this.state.index === 6 ? (
                  <TemaCuatroView />
                ) : this.state.index === 7 ? (
                  <TemaCincoView />
                ) : this.state.index === 8 ? (
                  <TemaSeisView />
                 ) : this.state.index === 9 ? (
                    <ActividadView />
                ) : null}
                <br />
              </Col>
              <Navegador handleNavigation={this.setIndex} maxIndex={10} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     profile: state.profile.profile,
//     campaign: state.campaign.campaign,
//     darkTheme: state.darkTheme.darkTheme
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addProfile: (name) => {
//       dispatch(addProfile(name))
//     },
//     setCampaign: (id) => {
//       dispatch(setCampaign(id))
//     },
//     darkTheme: (isDarkTheme) => {
//       dispatch(darkTheme(isDarkTheme))
//     },
//     setAvatar: (data) => {
//       dispatch(setAvatar(data))
//     }

//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Inicio));
export default withAuth(Inicio)
