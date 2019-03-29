Asgar
==

Open source Ghost theme.

Customization
--

Make sure you replace the URLs in the `partials/social.hbs` file with your own social media URLs.

This theme has multiple custom pages: /about, /projects and /speaking. You should modify the tables in each of the pages. Checkout the Ghost [docs](https://docs.ghost.org/api/handlebars-themes/context/page/#templates) for more info about custom pages.

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
