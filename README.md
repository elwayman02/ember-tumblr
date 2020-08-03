Ember Tumblr
==============================================================================

[![Netlify Status](https://api.netlify.com/api/v1/badges/30ac1e1c-2d4e-462b-930b-c86407ef8d30/deploy-status)](https://app.netlify.com/sites/nervous-fermi-a72202/deploys)
[![Build Status](https://travis-ci.org/elwayman02/ember-tumblr.svg?branch=master)](https://travis-ci.org/elwayman02/ember-tumblr)
[![npm version](https://badge.fury.io/js/ember-tumblr.svg)](http://badge.fury.io/js/ember-tumblr)
[![Ember Observer Score](http://emberobserver.com/badges/ember-tumblr.svg)](http://emberobserver.com/addons/ember-tumblr)
[![Codacy Badge](https://www.codacy.com/project/badge/3d21cc0516214628900f3403de2ebe63)](https://www.codacy.com/app/hawker-jordan/ember-tumblr)
[![Code Climate](https://codeclimate.com/github/elwayman02/ember-tumblr/badges/gpa.svg)](https://codeclimate.com/github/elwayman02/ember-tumblr)

[Demo](http://elwayman02.github.io/ember-tumblr/)

This addon allows you to quickly and effortlessly integrate the Tumblr API into your Ember application.

Note: This project is still in a pre-stable (1.0.0) release.  Not all functionality is supported, but the basic text post usage is stable.

Installation
------------------------------------------------------------------------------

```
ember install ember-tumblr
```


Usage
------------------------------------------------------------------------------

First, and most importantly, make sure to register a Tumblr application for your account to get an OAuth key: https://www.tumblr.com/oauth/apps

Once you have that, create an adapter named `tumblr-post` to set up your blog url and API key.

```javascript
// adapters/tumblr-post.js
import PostAdapter from 'ember-tumblr/adapters/tumblr-post';

export default PostAdapter.extend({
  blogUrl: 'myblog.tumblr.com',
  apiKey: 'myTumblrApiKey'
});
```

Then, simply create a route for your blog to retrieve the data, and utilize the ```tumblr-blog``` component in its template!

```javascript
// routes/blog.js
import Route from '@ember/routing/route';

export default Route.extend({
  model() { // Retrieve all posts of type "text"
    return this.get('store').findAll('tumblr-post-text');
  }
});
```

```handlebars
<!-- templates/blog.hbs -->
{{tumblr-blog posts=model}}
```

And you're done! Ember-Tumblr can be customized far beyond this to retrieve specific 
types of posts or override the default templates, but that's all you need to do to get started!

### Linking to Individual Posts

If you want Ember-Tumblr to provide links to individual posts (by id), add the `postsRoute` option when defining `tumblr-blog`:

```handlebars
<!-- templates/blog.hbs -->
{{tumblr-blog
  posts=model
  postsRoute='post'}}
```

Then, define the route and template for your `postsRoute`:

```javascript
// routes/post.js
import Route from '@ember/routing/route';

export default Route.extend({
  model(params/*, transition*/) {
    return this.get('store').queryRecord('tumblr-post-text', {
      id: params.post_id
    });
  }
});
```

```javascript
// routes/post.hbs
{{tumblr-post-text post=model}}
```

### Collapsible Posts

Ember-Tumblr supports collapsible posts, via class styles you can implement. To activate this feature, set `collapsible` to true (defaults to false).

```handlebars
<!-- templates/blog.hbs -->
{{tumblr-blog
  posts=model
  collapsible=true}}
```

This will add a `.tumblr-post-collapsed` class to all posts by default, and a button at the bottom of the post that allows users to toggle the collapse (removing the class). 
To implement styles for the collapse, you could add something like this to your project:

```
<!-- styles/blog.scss -->
.tumblr-post {
  &.tumblr-post-collapsed {
    .tumblr-body {
      max-height: 300px;
      overflow: hidden;
    }
  }
}
```

If you want posts to be expanded by default but still be collapsible, just set `collapseByDefault` to false (defaults to true, only used if `collapsible` is also true).

```handlebars
<!-- templates/blog.hbs -->
{{tumblr-blog
  posts=model
  collapsible=true
  collapseByDefault=false}}
```

If you are using the `tumblr-post` component (or any of its derivatives) and want it to be `collapsible`, you can set the property there, too.

```handlebars
{{tumblr-post
  post=model
  collapsible=true <!-- allows the post to be collapsed -->
  collapsed=false}} <!-- overrides the default to make it expanded when rendered -->
```

### Sorting Posts

By default, Ember-Tumblr doesn't attempt to do any sorting on your behalf. However, should you want the component to perform sorting operations for you, 
simply pass in the `sortBy` properties as an array, exactly as described for [Ember.computed.sort](http://emberjs.com/api/classes/Ember.computed.html#method_sort).

```javascript
// controllers/blog.js (or components/blog.js, once routeable components land in Ember)
import Controller from '@ember/controller';

export default Controller.extend({
  sortBy: ['date:asc']
});
```

```handlebars
<!-- templates/blog.hbs -->
{{tumblr-blog
  posts=model
  sortBy=sortBy}}
```

Ember-Tumblr can handle multiple sort properties, just like the computed macro in Ember (because that's what we use!).

### Date Formatting

Ember-Tumblr uses [Ember-Moment](https://github.com/stefanpenner/ember-moment) for displaying formatted dates. 
This is an optional dependency that you can leverage by setting the `formatDates` flag to true:

```handlebars
<!-- templates/blog.hbs -->
{{tumblr-blog
  posts=model
  formatDates=true}}
```

```handlebars
{{tumblr-post
  post=model
  formatDates=true}}
```

Refer to that package's [documentation](https://github.com/stefanpenner/ember-moment#global-default-output-format) 
for information on setting the default date format in your application config.

Note: You must install ember-moment in your application to use this feature.

### Known Bugs

Filtering text posts by tag via the Tumblr API has been broken for quite some time now. 
View the [Tumblr API Google Group](https://groups.google.com/forum/#!topic/tumblr-api/WMCNWES07TY) for more info.

Workaround: Retrieve all posts (without) type, only the text post API is bugged.


Contributing
------------------------------------------------------------------------------

[CONTRIBUTING.md](https://github.com/elwayman02/ember-tumblr/blob/master/CONTRIBUTING.md) details how to contribute to this project.

We adhere to the [Ember Community Guidelines](https://emberjs.com/guidelines/) for our Code of Conduct.

[![Powered By Netlify](https://www.netlify.com/img/global/badges/netlify-light.svg)](https://www.netlify.com)

### Installation

* `git clone git@github.com:elwayman02/ember-tumblr.git`
* `cd ember-tumblr`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `yarn test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
