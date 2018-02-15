import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tumblr-post', 'Unit | Model | tumblr-post', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.get('store')();
  assert.ok(!!model);
});
