import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tumblr-photo-size', 'Unit | Model | tumblr photo size', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
