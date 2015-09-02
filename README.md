# Ember Tumblr

[![Build Status](https://travis-ci.org/elwayman02/ember-tumblr.svg?branch=master)](https://travis-ci.org/elwayman02/ember-tumblr)
[![npm version](https://badge.fury.io/js/ember-tumblr.svg)](http://badge.fury.io/js/ember-tumblr)
[![Ember Observer Score](http://emberobserver.com/badges/ember-tumblr.svg)](http://emberobserver.com/addons/ember-tumblr)
[![Codacy Badge](https://www.codacy.com/project/badge/3d21cc0516214628900f3403de2ebe63)](https://www.codacy.com/app/hawker-jordan/ember-tumblr)
[![Code Climate](https://codeclimate.com/github/elwayman02/ember-tumblr/badges/gpa.svg)](https://codeclimate.com/github/elwayman02/ember-tumblr)
[![Dependency Status](https://www.versioneye.com/user/projects/55916efd396561001900007a/badge.svg?style=flat)](https://www.versioneye.com/user/projects/55916efd396561001900007a)

[![NPM](https://nodei.co/npm/ember-tumblr.png)](https://nodei.co/npm/ember-tumblr/)

This addon allows you to quickly and effortlessly integrate the Tumblr API into your Ember application.

Note: This project is still in a pre-stable (1.0.0) release.  Not all functionality is supported, but the basic text post usage is stable.

## Usage

First, and most importantly, make sure to register a Tumblr application for your account to get an OAuth key: https://www.tumblr.com/oauth/apps

Then, install this addon:

```shell
ember install ember-tumblr
```

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
import Ember from 'ember';

export default Ember.Route.extend({
  model() { // Retrieve all posts of type "text"
    return this.store.find('tumblr-post-text');
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
import Ember from 'ember';

export default Ember.Route.extend({
  model(params/*, transition*/) {
    return this.store.find('tumblr-post-text', {
      id: params.post_id
    }).then(function (posts) {
      return posts.get('firstObject');
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
import Ember from 'ember';

export default Ember.Controller.extend({
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

Ember-Tumblr uses [Ember-Intl](https://github.com/yahoo/ember-intl) (currently `2.0.0-beta.17) for displaying formatted dates. 
Please follow their README for installation instructions. If you would prefer not to use Ember-Intl, you can set the `formatDates` flag to false:

```handlebars
<!-- templates/blog.hbs -->
{{tumblr-blog
  posts=model
  formatDates=false}}
```

```handlebars
{{tumblr-post
  post=model
  formatDates=false}}
```

We would happily accept Pull Requests for making date formatting in Ember-Tumblr more configurable!

### Known Bugs

Filtering text posts by tag via the Tumblr has been broken for quite some time now. 
View the [Tumblr API Google Group](https://groups.google.com/forum/#!topic/tumblr-api/WMCNWES07TY) for more info.

Workaround: Retrieve all posts (without) type, only the text post API is bugged.

## Contributing To Ember-Tumblr

### Installation

* `git clone git@github.com:elwayman02/ember-tumblr.git`
* `npm install -g ember-cli`
* `npm install`
* `bower install`

### Running

* `ember s` or `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test`
* `npm test --server`
