import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('tumblr-blog', 'Unit | Component | tumblr blog', {
  needs: ['component:tumblr-post'],
  unit: true
});

test('it renders', function (assert) {
  assert.expect(2);

  // Creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('defaults', function (assert) {
  const component = this.subject();

  assert.ok(!Ember.isPresent(component.get('postsRoute')), 'postsRoute is not defined by default');
  assert.ok(!component.get('collapsible'), 'blog is not collapsible by default');
  assert.ok(component.get('collapseByDefault'), 'blog is set to collapse by default if collapsible');

  const sortBy = component.get('sortBy');
  assert.ok(Ember.isArray(sortBy), 'sortBy is array');
  assert.equal(sortBy.length, 0, 'sortBy has no elements');
});
