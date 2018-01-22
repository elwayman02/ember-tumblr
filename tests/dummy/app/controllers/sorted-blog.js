import Controller from '@ember/controller';

export default Controller.extend({
  sortBy: null,

  init() {
    this._super(...arguments);

    this.set('sortBy', ['date:asc']);
  }
});
