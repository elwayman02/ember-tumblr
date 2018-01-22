import { isPresent } from '@ember/utils';
import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:tumblr-post', 'Unit | Adapter | tumblr-post', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function (assert) {
  const adapter = this.subject();
  assert.ok(adapter);
});

test('pathForType', function (assert) {
  const type = 'foo';
  const adapter = this.subject({});

  let result = adapter.pathForType();

  assert.equal(result, 'posts', 'no type added if not defined');

  adapter.set('type', type);

  result = adapter.pathForType();
  assert.equal(result, `posts/${type}`, 'type added to path');
});

test('namespace', function (assert) {
  const blogUrl = 'foo.tumblr.com';
  const adapter = this.subject({ blogUrl  });

  assert.equal(adapter.get('namespace'), `v2/blog/${blogUrl}`, 'blogUrl added to api namespace');
});

test('ajaxOptions', function (assert) {
  const apiKey = 'foo';
  const adapter = this.subject({
    apiKey
  });
  const hash = {};
  adapter._super = function () {
    return hash;
  };

  const result = adapter.ajaxOptions();
  const data = result.data;

  assert.ok(isPresent(data), 'data object is added if not present');
  assert.equal(data.api_key, apiKey, 'apiKey is added to data');
  assert.equal(result.dataType, 'jsonp', 'dataType is jsonp');
});
