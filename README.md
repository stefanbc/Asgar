# ReadMe

[Kakotopia](https://en.wiktionary.org/wiki/kakotopia) is a clean, minimal, light Ghost blog theme built off the [Skeleton](http://getskeleton.com/) framework and the default Casper theme. The theme is fully responsive.

Fonts are included locally. There are no externally hosted libraries used, everything is hosted locally for maximum privacy. This theme works perfectly without javascript. You can choose to shift these resources to external servers (like Google Fonts) if you'd like to sacrifice your users privacy for a small boost in page load time.

##Installation

Before using, be sure to clear the readme example images out of `/assets/images/` (the files to delete are example.png, article.png, and markdown.png).

#####Customization

The theme is hardcoded with a Creative Commons release instead of the usual copyright information. To change this, edit line 56 of default.hbs. You'll probably want to change `<a href="https://creativecommons.org/licenses/by-nc-sa/2.0/">CC BY-NC-SA</a></span>` to `Copyright &copy`.

Additionally, the twitter link is hardcoded to [@ourdarkfuture](https://twitter.com/ourdarkfuture). To change this, simply edit line line 57 of default.hbs and swap in the link to your twitter page. This is a good place to add other social media links you may have (facebook, etc).

This theme uses custom error pages. Currently it uses a skull image (found in assets/images/largeskull.png) instead of the default ghost. If you'd like to add a custom image, place an image in assets and update lines 30 and 31 of error.hbs with your new imagename.png. You can also just upload your new image to assets/image and overwrite the skull images in there.

Favicon can be customized in /assets/images/favicon.ico.

Featured images used in post listings (index, tax pages, etc) are pulled from the metadata image. It doesn't use any width resizing, but resizes to a height of 230px. Uploading a 230x800px image is suggested for best results.

It's currently used to power [our dark future](https://ourdarkfuture.org/) if you'd like to see it in action. Example pages are below: 

![](https://raw.githubusercontent.com/ourdarkfuture/kakotopia/master/assets/images/example.png)

![](https://raw.githubusercontent.com/ourdarkfuture/kakotopia/master/assets/images/article.png)

![](https://raw.githubusercontent.com/ourdarkfuture/kakotopia/master/assets/images/markdown.png)
