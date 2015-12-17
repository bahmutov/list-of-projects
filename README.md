# projects-list

> Personal NPM and GitHub projects web app

[![Build status][list-of-projects-ci-image] ][list-of-projects-ci-url]
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This is a list of my personal projects and the source for my main personal
website [glebbahmutov.com](http://glebbahmutov.com/).

## Development

    npm install
    npm run dev

Starts local webserver.

To deploy a minified build to [glebbahmutov.com/list-of-projects/](http://glebbahmutov.com/list-of-projects/)
use command

    npm run deploy

The deploy takes settings from the [gh-pages.json](gh-pages.json) file.

## Copying tested web application to the main repo 

My main repo is `bahmutov.github.io` - to update it

* clone the target repo
* copy files listed in `gh-pages.json` (typically "dist", "images", "styles" and "index.html")
  there.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/list-of-projects/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[list-of-projects-ci-image]: https://travis-ci.org/bahmutov/list-of-projects.png?branch=master
[list-of-projects-ci-url]: https://travis-ci.org/bahmutov/list-of-projects
[list-of-projects-dependencies-image]: https://david-dm.org/bahmutov/list-of-projects.png
[list-of-projects-dependencies-url]: https://david-dm.org/bahmutov/list-of-projects
[list-of-projects-devdependencies-image]: https://david-dm.org/bahmutov/list-of-projects/dev-status.png
[list-of-projects-devdependencies-url]: https://david-dm.org/bahmutov/list-of-projects#info=devDependencies
