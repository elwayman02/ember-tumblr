import { moduleForModel, test } from 'ember-qunit';
// import { isPresent } from '@ember/utils';

moduleForModel('tumblr-post', 'Unit | Serializer | tumblr-post', {
  // Specify the other units that are required for this test.
  needs: ['serializer:tumblr-post']
});

// Replace this with your real tests.
test('it serializes records', function (assert) {
  const record = this.subject();

  const serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

//test('normalizePayload', function (assert) {
//  const record = this.subject();
//  const payload = { response: { posts: [{
//    id: 1,
//    tags: ['foo', 'bar']
//  }, {
//    id: 2,
//    tags: ['bar', 'baz']
//  }]}};
//
//  const result = record.normalizePayload(payload);
//  const posts = result['tumblr-posts'];
//  assert.ok(isPresent(posts), 'posts mapped to the correct key');
//});
