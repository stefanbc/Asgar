Asgar
==

A two column, free and open source theme for Ghost.

[![Build Status](https://travis-ci.com/stefanbc/Asgar.svg?branch=master)](https://travis-ci.com/stefanbc/Asgar) [![Maintainability](https://api.codeclimate.com/v1/badges/db551b4c7a25f474e729/maintainability)](https://codeclimate.com/github/stefanbc/Asgar/maintainability) [![Known Vulnerabilities](https://snyk.io/test/github/stefanbc/Asgar/badge.svg?targetFile=package.json)](https://snyk.io/test/github/stefanbc/Asgar?targetFile=package.json) ![Demo Deploy Theme](https://github.com/stefanbc/Asgar/workflows/Demo%20Deploy%20Theme/badge.svg) ![Code scanning](https://github.com/stefanbc/Asgar/workflows/Code%20scanning/badge.svg)

Installation
--

1. Download the theme from GitHub.
2. Upload the theme as described in the [Ghost Documentation](https://docs.ghost.org/concepts/config/).
3. This theme has multiple custom pages: `about`, `projects` and `speaking`.
Checkout the Ghost [docs](https://docs.ghost.org/api/handlebars-themes/context/page/#templates) for more info about custom pages.
To customize the data, on the right side, in the `projects` and `speaking` pages
you'll first need to add this to your `routes.yaml` file, bellow the `routes` key:

```yaml
  /custom/api/:
    permalink: /custom/api/
    template: api
    content_type: json
```

*More info about the `routes.yaml` file [here](https://docs.ghost.org/api/handlebars-themes/routing/).*

4. After that you can customize the `api.hbs` file with your data, just make sure the structure remains the same.
5. Additionally you should replace all the image in the `assets/images` folder. You can use [this useful tool](http://realfavicongenerator.net/).
6. After you've completed the steps above, you can zip the theme and upload it.

Development
--

You can install all the theme dependencies using:

```bash
yarn install
```

Available scripts:

* `yarn prod` - will build the whole theme for production.
* `yarn deploy` - will build the theme for production, zip and validate.
