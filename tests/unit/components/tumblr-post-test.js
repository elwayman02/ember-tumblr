import { isPresent } from '@ember/utils';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('tumblr-post', 'Unit | Component | tumblr post', {
  needs: ['component:tumblr-post-text'],
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

  assert.ok(!isPresent(component.get('postsRoute')), 'postsRoute is not defined by default');
  assert.ok(!component.get('collapsible'), 'post is not collapsible by default');
  assert.ok(component.get('collapsed'), 'post is set to collapse by default if collapsible');
  assert.ok(!component.get('isCollapsed'), 'post will not collapse by default, because it is not collapsible');
  assert.ok(component.get('formatDates'), 'date formatting enabled by default');
  assert.ok(isPresent(component.get('collapsedText')), 'default collapsedText is supplied');
  assert.ok(isPresent(component.get('expandedText')), 'default expandedText is supplied');
});

test('isCollapsed', function (assert) {
  const component = this.subject();

  component.set('collapsible', true);
  assert.ok(component.get('isCollapsed'), 'post is collapsed by default when collapsible');

  component.set('collapsed', false);
  assert.ok(!component.get('isCollapsed'), 'post is not collapsed');
});

test('expandButtonText', function (assert) {
  const collapsedText = 'foo';
  const expandedText = 'bar';
  const component = this.subject({
    collapsedText,
    expandedText
  });

  assert.equal(component.get('expandButtonText'), expandedText, 'expandedText is displayed by default');

  component.set('collapsible', true);
  assert.equal(component.get('expandButtonText'), collapsedText, 'collapsedText is displayed when collapsed');
});
