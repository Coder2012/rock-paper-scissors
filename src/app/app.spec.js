import app from './app';

describe('app', () => {

  describe('PlayController', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('PlayController', {});
      });
    });

    it('player score should be 0', () => {
      expect(ctrl.scores.player).toEqual(0);
    });

    it('computer score should be 0', () => {
      expect(ctrl.scores.computer).toEqual(0);
    });
  });
});