import angular from 'angular';
import 'satellizer'; //for authetification on client side
import 'angular-messages'; //for messages in form validation management

//Router
import '@uirouter/angularjs';
import Router from './config/router';

//config for Auth
import Auth from './config/auth';

//controllers
import AuthRegisterLoginCtrl from './controllers/auth/authRegisterLogin';
import MainCtrl from './controllers/trips/main';
import TripsIndexCtrl from './controllers/trips/tripsIndex';


//service


//directives
import googleMap from './directives/google-map';
import googleAutocomplete from './directives/google-autocomplete';

//sass styling and bulma
import './assets/scss/style.scss';
import 'bulma';

//setup angular module
angular
  .module('holidayPlanner', ['ui.router', 'satellizer', 'ngMessages'])
  .config(Router)
  .config(Auth)
  .controller('AuthRegisterLoginCtrl', AuthRegisterLoginCtrl)
  .controller('MainCtrl', MainCtrl)
  .controller('TripsIndexCtrl', TripsIndexCtrl)
  .directive('googleMap',googleMap)
  .directive('googleAutocomplete',googleAutocomplete);
