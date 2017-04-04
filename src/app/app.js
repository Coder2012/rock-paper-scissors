import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './home';
import play from './play';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html')
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, home, play])
  .config(routing)
  .directive('app', app)

export default MODULE_NAME;