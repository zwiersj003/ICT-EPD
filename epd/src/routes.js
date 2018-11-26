import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Home = Loadable({
  loader: () => import('./views/Epd/Home/Home'),
  loading: Loading,
});

const Dossier = Loadable({
  loader: () => import('./views/Epd/Dossier/Dossier'),
  loading: Loading,
});

const Appointment = Loadable({
  loader: () => import('./views/Epd/Appointment/Appointment'),
  loading: Loading,
});

const Medication = Loadable({
  loader: () => import('./views/Epd/Medication/Medication'),
  loading: Loading,
});


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/home', exact: true, name: '', component: Home },
  { path: '/dossier', exact: true, name: 'Dossier', component: Dossier },
  { path: '/afspraken', exact: true, name: 'Afspraken', component: Appointment },
  { path: '/medicatie', exact: true, name: 'Medicatie', component: Medication },
];

export default routes;
