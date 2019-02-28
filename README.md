Asgar
==

Open source Ghost theme.

Customization
--

Make sure you replace the URLs in the `partials/social.hbs` file with your own social media URLs.

Additionally you should replace all the image in the `assets/images` folder. You can use [this useful tool](http://realfavicongenerator.net/).

This theme is compatible with Ghost 2.x

Developers
--

You can install all the theme dependencies using:

```
yarn install
```

Available script you can run for development and production:

* `yarn dev` - will build the whole theme for testing.
* `yarn prod` - will build the whole theme for production.
* `yarn watch` - will watch for any sass file modifications and will build.
* `yarn zip` - will zip the theme for production.
* `yarn validate` - will validate the zip created with the previous command.
