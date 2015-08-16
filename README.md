# Ember Tumblr

[![Build Status](https://travis-ci.org/elwayman02/ember-tumblr.svg?branch=master)](https://travis-ci.org/elwayman02/ember-tumblr)
[![npm version](https://badge.fury.io/js/ember-tumblr.svg)](http://badge.fury.io/js/ember-tumblr)
[![Codacy Badge](https://www.codacy.com/project/badge/3d21cc0516214628900f3403de2ebe63)](https://www.codacy.com/app/hawker-jordan/ember-tumblr)
[![Code Climate](https://codeclimate.com/github/elwayman02/ember-tumblr/badges/gpa.svg)](https://codeclimate.com/github/elwayman02/ember-tumblr)
[![Dependency Status](https://www.versioneye.com/user/projects/55916efd396561001900007a/badge.svg?style=flat)](https://www.versioneye.com/user/projects/55916efd396561001900007a)

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
