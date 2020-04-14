import React from 'react';


const Inicio = React.lazy(() => import('./views/Inicio'));
const BienvenidaView = React.lazy(() => import('./views/temarioViews/BienvenidaView'));
const ObjetivoView = React.lazy(() => import('./views/temarioViews/ObjetivoView'));
const PresentacionView = React.lazy(() => import('./views/temarioViews/PresentacionView'));
const TemaUnoView = React.lazy(() => import('./views/temarioViews/TemaUnoView'));
const TemaDosView = React.lazy(() => import('./views/temarioViews/TemaDosView'));
const TemaTresView = React.lazy(() => import('./views/temarioViews/TemaTresView'));
const TemaCuatroView = React.lazy(() => import('./views/temarioViews/TemaCuatroView'));
const TemaCincoView = React.lazy(() => import('./views/temarioViews/TemaCincoView'));
const TemaSeisView = React.lazy(() => import('./views/temarioViews/TemaSeisView'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Inicio', name: 'Inicio', component: Inicio },
  { path: '/temarioViews/BienvenidaView', name: 'Bienvenida', component: BienvenidaView },
  { path: '/temarioViews/ObjetivoView', name: 'Objetivo', component: ObjetivoView },
  { path: '/temarioViews/PresentacionView', name: 'Presentación', component: PresentacionView },
  { path: '/temarioViews/TemaUnoView', name: 'Definiciones', component: TemaUnoView },
  { path: '/temarioViews/TemaDosView', name: 'Lineamientos generales de la Metodología P 1', component: TemaDosView },
  { path: '/temarioViews/TemaTresView', name: 'Lineamientos generales de la Metodología P 2', component: TemaTresView },
  { path: '/temarioViews/TemaCuatroView', name: 'Lineamientos generales de la Metodología P 3', component: TemaCuatroView },
  { path: '/temarioViews/TemaCincoView', name: 'Descripción del procedimiento ', component: TemaCincoView },
  { path: '/temarioViews/TemaSeisView', name: 'Seguimiento de operaciones', component: TemaSeisView },

];


export default routes;
