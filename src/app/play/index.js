import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './play.routes';
import PlayController from './play.controller';

export default angular.module('app.play', [uirouter])
	.config(routing)
	.controller('PlayController', PlayController)
	.name;
