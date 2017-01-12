stefan-log
==

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/)

Ghost theme originally based on [Kakotopia](https://en.wiktionary.org/wiki/kakotopia), used on [my personal website](http://stefancosma.xyz).

Customization
--

Make sure you replace the URLs in the `partials/social.hbs` file with your own social media URLs.

Additionally you should replace all the image in the `assets/images` folder. You can use [this useful tool](http://realfavicongenerator.net/).

Also, don't forget to modify the `partials/meta.hbs` file, lines 12,15,18,19 with your correct links.

This theme is compatible with Ghost 0.10

Developers
--

Make sure you have Node 0.10^ and npm installed. You'll need to have Grunt and Sass installed. Use these commands:

```
npm install -g grunt-cli
gem install sass
```

You can then install all the theme dependencies using:

```
npm install
```

If you want to have the livereload feature enable just add this line

```
<script src="//localhost:35729/livereload.js"></script>
```

in the `default.hbs` file before the end `</body>`.

Available Grunt tasks:

* `grunt` - will build the whole theme.
* `grunt watch` - will watch for any file modifications and will build. Will also build on start.
