# Front build comparison

The goal of this repository is to test several front-end build tools (grunt,
gulp, brunch, npm, make) and compare them.

The exact same website will be build with each of them, to provide a fair
comparison.

The following elements will be evaluated :

- Build time
- Build size
- Availability of plugins
- Ease of configuration
- Maintainability

The build tool should provide the following tasks 

- HTML minification
- CSS pre-processing, post-processing, concatenation and minification
- JS concatenation and minification
- Image minification
- Javascript linting and testing
- Development server, with livereload

# Issues

- Had to downgrade to `grunt-contrib-cssmin` v0.11.0 because current v0.12.2
  produces empty files. [Issue #191](https://github.com/gruntjs/grunt-contrib-cssmin/issues/191)

# Photos

- [Cole Patrick](https://unsplash.com/photos/hpCHLFknc2s/) via
  [finda.photo](http://finda.photo/image/8716)
