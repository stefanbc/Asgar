Asgar
==

Ghost theme. [Demo](http://stefancosma.xyz).

Customization
--

Make sure you replace the URLs in the `partials/social.hbs` file with your own social media URLs.

Additionally you should replace all the image in the `assets/images` folder. You can use [this useful tool](http://realfavicongenerator.net/).

Also, don't forget to modify the `partials/meta.hbs` file, lines 12,15,18,19 with your correct links.

This theme is compatible with Ghost 2.x

Developers
--

You can install all the theme dependencies using:

```
yarn install
```

Available tasks:

* `yarn dev` - will build the whole theme unminified.
* `yarn build` - will build the whole theme for production.
* `yarn watch` - will watch for any file modifications and will build. Will also build on start.
