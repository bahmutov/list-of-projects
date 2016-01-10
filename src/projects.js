const projects = [
  `<a href="https://github.com/bahmutov/bottle-service">bottle-service</a> is a tiny library to enable
  any web application to become a self-rewriting app instantly loaded from ServiceWorker cache.
  See an example application demo at <a href="https://instant-todo.herokuapp.com/">instant-vdom-todo</a>
  and read the blog post <a href="https://glebbahmutov.com/blog/instant-web-application/">Instant Web Application</a>.`,
  `<a href="https://github.com/bahmutov/express-service">express-service</a> is ExpressJS server running inside ServiceWorker.
  I don't know where the server ends and the browser begins anymore.`,
  `<a href="https://github.com/bahmutov/rocha">rocha</a> is a wrapper around
  <a href="https://mochajs.org/">mocha</a> BDD runner. Rocha randomizes the order of unit tests to flush out
  any dependencies among the tests`,
  `<a href="https://github.com/bahmutov/pre-git">pre-git</a> is a utility around Git hooks
  to run unit tests, execute any user commands or validate the commit message according to a template.
  There are wizards for <a href="https://github.com/bahmutov/simple-commit-message">simple</a>
  or <a href="https://github.com/bahmutov/conventional-commit-message">conventional</a> commit message formats.`,
  `<a href="https://github.com/bahmutov/caches-storage">caches-storage</a> is like async storage built
on top of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Cache">Cache</a> API, for use
inside ServiceWorker.`,
  {
    name: '2048 5x5',
    href: 'http://glebbahmutov.com/2048/',
    html: `<a href="http://glebbahmutov.com/2048/">2048 5x5</a> is a clone of the famous 2048 game with larger
          board and two new tiles appearing at each turn. Makes the game very fast paced.
          <a href="https://github.com/bahmutov/2048">source</a>`
  }, {
    name: '2048-cram',
    html: `<a href="http://glebbahmutov.com/2048-cram/">2048-cram</a> lets you play standard 2048 but
          every N seconds pops a JavaScript question. Answer incorrectly and lose a turn, plus get a penalty tile!
          <a href="https://github.com/bahmutov/2048-cram">source</a>.`
  }, {
    name: 'slides-now',
    html: `<a href="http://glebbahmutov.com/slides-now/">slides-now</a> is a stand alone slide presentation
          viewer implemented inside the browser without any server side components. Just drag and drop a Markdown (.md) file
          into the website page and it will play a stylish HTML5 presentation. I love the simplicity of editing my talks
          as pure text files, keeping versions using Git and playing them whenever I need without logging in / uploading / etc.
          It even works when I am offline, because the website is so simple it works from cache.
          <br>
          Alternatively, there is Chrome <a href="https://chrome.google.com/webstore/detail/slides-now/hcohekeghgkdeimnjfmpdlgccfamggac">extension</a>
          and a stand alone Node <a href="https://npmjs.org/package/slides-now-node">module</a> if you prefer.`
  }, {
    name: 'read on paper',
    html: `<a href="http://readonpaper.com/">read on paper</a> is the simplest way to send readable article from PC to your tablet for easier reading. It saves your eyes and trees!`
  }, {
    name: 'json-package',
    html: `<a href="https://github.com/bahmutov/json-package">json-package</a> is tiny utility for quickly looking up properties from a JSON file.`
  },
  `Command line <a href="https://github.com/bahmutov/boggle">Boggle</a> solver.`,
  `<a href="https://github.com/bahmutov/d3-helpers">d3-helpers</a> are tiny functional utilities mostly to simplify
  callbacks for D3. Also could be used to chain method calls, property access and function applications anywhere.`,
  `<a href="https://github.com/bahmutov/dirty-water">dirty-water</a> is CLI tool measuring
    how much JavaScript is in your EJS / AngularJs templates. One should not mix
    js with html, or css with html, or generate html in js. Or drink dirty water.`,
  `<a href="https://github.com/bahmutov/deps-ok">deps-ok</a> quickly checks if any of the top level dependencies
    are missing or out of date. Faster than using <code>npm ls</code>.
    I also wrote <a href="https://github.com/bahmutov/grunt-deps-ok">grunt-deps-ok</a> grunt plugin.`,
  `<a href="https://github.com/bahmutov/grunt-nice-package">grunt-nice-package</a> is an opinionated <i>package.json</i> validator.`,
  `<a href="https://github.com/bahmutov/grunt-npm2bower-sync">grunt-npm2bower-sync</a> is a fork of
    <a href="https://github.com/jonschlinkert/grunt-sync-pkg">another project</a> that copies main properties from <i>package.json</i> to <i>bower.json</i>`,
  `<a href="https://npmjs.org/package/changed">changed</a> is a command line tool that displays changes for a
    given nodejs package, so you do nott have to hunt manually.`,
  `<a href="https://npmjs.org/package/next-update">next-update</a> is a stand alone nodejs tool that can check
    if upgrading your module's dependencies to newer versions breaks any tests. Makes it a breeze to keep your module
    using the latest and greatest 3rd party tools.
    Even if you do not have tests, you can use <a href="http://next-update.herokuapp.com/">next-update-stats</a> service
    to check overall module upgrade success statistics (collected anonymously).`,
  `<a href="https://github.com/bahmutov/next-updater">next-updater</a> can update all your github repos that each pass through next-update.
    Makes keeping dependencies up to date over <strong>all</strong> your projects a breeze.`,
  `<a href="https://github.com/bahmutov/dont-break">dont-break</a> allows to check if your library would break projects that depend on it if you publish it as it is now.`,
  `A homebrew unit testing framework <a href="https://github.com/bahmutov/gt">gt</a> that follows QUnit syntax but adds better async testing and code coverage (via <a href="https://github.com/gotwarlost/istanbul">istanbul</a>).
    There is a <a href="https://github.com/bahmutov/grunt-gt">grunt-gt</a> to run GT as a grunt task.`,
  `There is static source complexity tool <a href="https://github.com/bahmutov/js-complexity-viz">jsc</a> that keeps my code nice and understandable`,
  `I wrote <a href="https://github.com/bahmutov/lasso">lasso</a> to instrument widget test pages on the fly, giving you insight into the code covered for by the unit tests. There is no setup necessary, and check out the list of unit test frameworks in the examples folder: everything just works!`,
  `When the number of tests grows, and you cannot wait to run them all on each code change, take a look at <a href="https://github.com/bahmutov/untested">untested</a>. It stores test point mappings for each JavaScript source file (generated from code coverage reported by <em>gt</em> and <em>lasso</em>), and returns which unit tests should be run for all changed files. Test your changes all the time very quickly!`,
  `Well documented modules with lots of API examples are easier to reuse, maintain and develop.
  I wrote js API documentation tool <a href="https://npmjs.org/package/xplain">xplain</a> that takes an unusual approach of placing unit tests as examples in the API documentation. The specific test syntax is transformed into human readable format, producing documentation that looks hand-crafted, will always stay in sync with the code, and does not require any developer maintenance.
    I wrote <a href="https://github.com/bahmutov/grunt-xplain">grunt-xplain</a> wrapper.`,
  `I automate basic sanity check for any website deployment using <a href="https://github.com/bahmutov/clean-console">clean-console</a>. It loads the url using phantomjs WebKit browser and checks for any JavaScript errors. This is quick test that runs as a last step of the deployment script.
    There is <a href="https://github.com/bahmutov/grunt-clean-console">grunt-clean-console</a> plugin for grunt.`,
  `<a href="http://glebbahmutov.com/risk-map/">risk-map</a> is a cool way to visualize the entire project's code
    complexity and unit test coverage using D3 treemap layout. Shows high risk source files in a very obvious way as
    large red patches. I talk about my inspiration for the project in
    <a href="https://bitbucket.org/bahmutov/talks-public/raw/master/risk-map.md">this talk</a>. I am currently working
    on using <em>risk-map</em> and developer's vanity to improve software quality, see <a href="/man-behind">man-behind</a>
    prototype.`,
  `<a href="https://github.com/bahmutov/qunit-promises">qunit-promises</a> is a QUnit plugin that makes checking promises a breeze.`,
  `<a href="https://github.com/bahmutov/qunit-once">qunit-once</a> is a QUnit plugin adding module.setupOnce and module.teardownOnce functions.`,
  `<a href="https://github.com/bahmutov/qunit-inject">qunit-inject</a> is a QUnit plugin for injecting variables from the module into unit tests by name.`,
  `<a href="https://github.com/bahmutov/qunit-helpful">qunit-helpful</a> is a QUnit plugin for automatically providing the entire failed expression. Magical.`,
  `<a href="https://github.com/bahmutov/npm-utils">npm-utils</a> is a set of promise-returning functions that run different NPM commands.`,
  `<a href="https://npmjs.org/package/jshint-solid">jshint-solid</a> tells how strict your .jshintrc file is. As project matures, you should tighten the Jshint settings.
  There is <a href="https://github.com/bahmutov/grunt-jshint-solid">grunt-jshint-solid</a> plugin for grunt.`,
  `<a href="https://npmjs.org/package/time-promise">time-promise</a> is a functional decorator measuring time for sync or promise-returning functions.
  It is among my <a href="http://glebbahmutov.com/blog/my-favorite-functional-adaptors/">four favorite functional adaptors</a>.`,
  `<a href="https://github.com/bahmutov/proud">proud</a> collects NPM downloads for all modules authored by a developer with given username.
    One can generate a <a href="https://github.com/bahmutov/proud-badge">proud-badge</a>, even host a simple
    <a href="https://github.com/bahmutov/proud-connect">proud-connect</a> server or use the deployed Heroku
    <a href="http://proud.herokuapp.com/">proud.herokuapp.com</a> app.`,
  `<a href="https://github.com/bahmutov/aged">aged</a> is tiny utility grunt helper for filtering
  files by last modified age. Allows to define separate sets of quality metrics for recently modified (fresh)
  and stable files. Read why I think this is important in
  <a href="http://glebbahmutov.com/blog/aged-to-perfection/">Aged to Perfection</a> blog post.`,
  `<a href="https://github.com/bahmutov/es6-generators-example">es6-generators-example</a> shows how to
  write EcmaScript6 code with generators and make them available to everyone, even to people who use EcmaScript5 on node.`,
  `<a href="https://github.com/bahmutov/dotdot">dotdot</a> installs a hook into Node loader and allows you
    to write shorthand <code>foo..bar('something')</code> instead of <code>foo.bar.bind(foo, 'something')</code>.
    You can also write <code>fn..('args')</code> instead of <code>fn.bind(null, 'args')</code>
    To make it compatible with build tools, I wrote <a href="https://github.com/bahmutov/gulp-dotdot">gulp-dotdot</a>
    that transforms ".." notation in the stream.`,
  `<a href="https://github.com/bahmutov/node-hook">node-hook</a> is a simple way to hook into
    Node loader to transform the source before compiling it. There are multiple ways this is
    <a href="http://glebbahmutov.com/blog/hooking-into-node-loader-for-fun-and-profit/">super useful</a>.
  `,
  `<a href="https://github.com/bahmutov/really-need">really-need</a> is a replacement for Node's require
  function. Bust cache, transform loaded source, change loaded object.
  `,
  `<a href="https://github.com/bahmutov/connect-slow">connect-slow</a> is middleware for node Connect and Express
    servers. Allows to selectively delay serving some requests using URL RegExp. Used to polish user experience as
    described in <a href="http://glebbahmutov.com/blog/give-browser-a-chance/">give browser a chance</a>.
    I wrote same feature for <a href="http://koajs.com/">Koa</a> server using generators, see <a href="https://github.com/bahmutov/koa-slow">koa-slow</a>.
  `,
  `<a href="https://github.com/bahmutov/turtle-run">connect-stop</a> stops some requests based on url. Good for testing.`,
  `<a href="https://github.com/bahmutov/console.json">console.json</a> removes need to write
  <code>console.log(JSON.stringify(object, null, 2));</code>`,
  `<a href="https://github.com/bahmutov/console.html">console.html</a> beautifies and prints HTML code or HTMLNode
  <code>console.html($('#id'));</code>`,
  `<a href="https://github.com/bahmutov/console.table">console.table</a> adds a method to print array of objects
    as nice table in Node.
  `,
  `<a href="https://github.com/bahmutov/status-gravatar">status-gravatar</a> changes your Gravatar profile
    image depending on the Travis-ci build status of your projects. Sometimes I look angry when my projects start to fail ;)
    Uses my <a href="https://github.com/bahmutov/set-gravatar">set-gravatar</a> module for Node.
  `,
  `<a href="https://github.com/bahmutov/grunt-help">grunt-help</a> runs given command, captures output and saves
  to given file. Useful to include the program's <code>--help</code> output directly in the README.md.
  `,
  `<a href="https://github.com/bahmutov/iframeable">iframeable</a> is tiny CLI to check if given website could be iframed
    inside another website (and is susceptible to clickjacking attack).
  `,
  `<a href="https://github.com/bahmutov/grunt-filenames">grunt-filenames</a> is a grunt plugin to validate source filenames,
    for example require all filenames to be lower cased with dashes.
  `,
  `<a href="https://github.com/bahmutov/grunt-blank">grunt-blank</a> finds all empty, blank or small files.
  `,
  `<a href="https://github.com/bahmutov/console-pop">console-pop</a> buffers calls to <code>console.log</code> and then
    returns a copy, useful for higher level testing.
  `,
  `<a href="https://github.com/bahmutov/bare-objects">bare-objects</a> adds <code>&lt;&gt;</code> syntax to JavaScript
    via nodejs loader hook. Why? Because bare objects are <a href="http://glebbahmutov.com/blog/sweet-naked-objects/">sweet!</a>
  `,
  `<a href="https://github.com/bahmutov/lcov-filter">lcov-filter</a> filters coverage info for some files, useful
    to send <a href="http://glebbahmutov.com/blog/accurate-coverage-number/">accurate info</a> to coveralls.io
  `,
  `<a href="https://github.com/bahmutov/available-versions">available-versions</a> returns newer releases for a given NPM module.`,
  `<a href="https://github.com/bahmutov/functional-pipeline">functional-pipeline</a> is super simple chaining for
    property access, method and function calls. It is like _.invoke + _.pluck + _.compose in one function.
  `,
  `<a href="https://github.com/bahmutov/heroin">heroin</a> is a single dependency injection function for JavaScript
  changing methods to accept dependencies through separate object.
  `,
  `<a href="https://github.com/bahmutov/post-merge-make">post-merge-make</a> installs a Node git hook that runs after a merge.
  The hook executes <code>make post-merge</code> command and is useful to install dependencies and run builds after new code is pulled.
  I also wrote <a href="https://github.com/bahmutov/pre-commit-make">pre-commit-make</a> to run make before a commit.
  There is also <a href="https://github.com/bahmutov/pre-commit-make-parallel">pre-commit-make-parallel</a> to run make with parallel tasks.
  `,
  `<a href="https://github.com/bahmutov/lazy-ass">lazy-ass</a> is a lazy assertion function for node and browser.
    Do not pay a performance penalty if the condition is false.
  `,
  `<a href="https://github.com/bahmutov/lazy-ass-helpful">lazy-ass-helpful</a> rewrites any function that uses <code>lazyAss</code>
  on the fly putting the condition expression into the message. Super useful for unit testing because you can skip writing
  extra messages in each assertion.
  `,
  `<a href="https://github.com/bahmutov/lazy-test">lazy-test</a> turns testing inside out. You inject small testing
    framework and run the unit tests in production. Makes quick testing of code private to a closure possible, built on
    <a href="https://github.com/bahmutov/test-mole">test-mole</a> principle.
  `,
  `<a href="https://github.com/bahmutov/scoreunder">scoreunder</a> is simple function to make underscore or lodash
    libraries more functional by putting callback first, before data. Makes functional reuse <a href="http://glebbahmutov.com/blog/put-callback-first-for-elegance/">a lot more elegant</a>.
  `,
  `<a href="https://github.com/bahmutov/quiet-grunt">quiet-grunt</a> replaces grunt's output with dots if everything is going ok. If an error
    happens, all output is dumped.
  `,
  `<a href="https://github.com/bahmutov/bunyan-gt">bunyan-gt</a> makes end to end program runs easy to analyze as if they were unit test by inspecting JSON log output`,
  `<a href="https://github.com/bahmutov/angular-q-timeout">ng-q-timeout</a> adds <code>.timeout</code> method to promises returned by angular $q service.`,
  `<a href="https://github.com/bahmutov/bdd-tree">bdd-tree</a> transforms BDD (jasmine, mocha) spec source into syntax tree.`,
  `<a href="https://github.com/bahmutov/ng-ast">ng-ast</a> builds a graph of loaded modules and what they provide from a running Angular app.`,
  `<a href="https://github.com/kensho/check-more-types">check-more-types</a> is a library of predicates, modifiers and defensive programming helpers`,
  `<a href="https://github.com/bahmutov/squint">squint</a> is a visual online tester for source code white space.
    It is a cool project because I implemented it while watching "Overkill" presentation by <a href="https://twitter.com/kytrinyx">@kytrinyx</a>
    at <a href="http://www.engineers4engineers.org/speakers#owen">engineers4engineers</a> conference, and thinking
    "a tool like this would actually be useful".`,
  `<a href="https://github.com/bahmutov/quote">quote</a> safely adds quotes to given string without adding multiple ones.`,
  `<a href="https://github.com/bahmutov/quote-markdown">quote-markdown</a> adds markdown format characters around a string, like <code>_some code_ or *emphasis*</code>`,
  `<a href="https://github.com/bahmutov/find-missing-directives">find-missing-directives</a> detects empty tags in the page due to missing angular directives.`,
  `<a href="https://github.com/bahmutov/stop-angular-overrides">stop-angular-overrides</a> prevents silent and hard to debug angular module overrides.`,
  `<a href="https://github.com/bahmutov/ng-wrap">ng-wrap</a> allows you to wrap global variables into Angular dependencies on the fly.`,
  `<a href="https://github.com/bahmutov/d3-panel">d3-panel</a> adds d3 panel to the Chrome DevTools. You can now plot data while debugging web applications without leaving the browser console.`,
  `<a href="https://github.com/bahmutov/spots">spots</a> is partial application with placeholders.`,
  `<a href="https://github.com/bahmutov/eslint-rules">eslint-rules</a> is my collection of custom <a href="http://eslint.org/">eslint</a> rules.`,
  `<a href="https://github.com/bahmutov/ng-wedge">ng-wedge</a> intercepts <code>$http</code> requests sent by AngularJS app
    without modifying the application code or installing extensions. Pure magic.`,
  `<a href="https://github.com/bahmutov/was-tested">was-tested</a> is a JavaScript code coverage proxy that instruments a live website on the fly.`,
  `<a href="https://github.com/bahmutov/tested-commits">tested-commits</a> splits JavaScript code coverage by commit.`,
  `<a href="https://github.com/bahmutov/turtle-run">turtle-run</a> is a testing proxy that slows down or aborts some requests.`,
  `<a href="https://github.com/bahmutov/service-turtle">service-turtle</a> is in page Ajax mocking proxy using a ServiceWorker.
  Read <a href="http://glebbahmutov.com/blog/robustness-testing-using-proxies/">Robustness testing using proxies</a>.`,
  `<a href="https://github.com/bahmutov/chdir-promise">chdir-promise</a> is a convenient promise-returning stack for changing the current working directory.`,
  `<a href="https://github.com/kensho/ng-describe">ng-describe</a> removes all boilerplate from AngularJS Karma specs.`,
  `<a href="https://github.com/bahmutov/was-it-used">was-it-used</a> - spy on 3rd party modules to tell if they were really used during testing.`,
  `<a href="https://github.com/bahmutov/q-flush">q-flush</a> - flushes Q promise chain on demand for simpler testing.`,
  `I contributed a few features and plugins to <a href="https://github.com/davidmarkclements/cute-stack">cute-stack</a> - a beautiful Node exception stack reporter, for example see my plugin <a href="https://github.com/bahmutov/bad-line">bad-line</a>.`,
  `<a href="https://github.com/bahmutov/ng-hot-templates">ng-hot-templates</a> - reload single AngularJS custom directive in place while keeping the data. See <a href="https://www.youtube.com/watch?v=N5deNI0_caA">demo video</a>`,
  `<a href="https://github.com/bahmutov/gulp-lint-everything">gulp-lint-everything</a> needs just a single command to lint the sources files using all linters.`,
  `<a href="https://github.com/bahmutov/debug-logdown>debug-logdown">debug-logdown</a> is flexible per-feature logger with Markdown support.`,
  `<a href="https://github.com/bahmutov/raven-express">raven-express</a> simplifies Sentry client initialization for Express servers.`,
  `<a href="https://github.com/bahmutov/inquirer-confirm">inquirer-confirm</a> is simple promise-returning CLI confirmation question with yes/no choices. Built on top of <a href="https://www.npmjs.com/package/inquirer">inquirer</a>.`,
  `<a href="https://github.com/bahmutov/crasher">crasher</a> is a tiny middleware for throwing sync and async errors; allows verifying your crash reporting setup.`,
  `<a href="https://github.com/bahmutov/PE-N-starter">PE-N-starter</a> is a dead simple starter project with PouchDB, Express, Node and Github auth. <a href="http://pe-n-starter.herokuapp.com/">Demo</a>`,
  `<a href="https://github.com/bahmutov/cache-require-paths">cache-require-paths</a> and <a href="https://github.com/bahmutov/cache-require-source">cache-require-source</a> speed up the Node app startup, see <a href="http://glebbahmutov.com/blog/faster-node-app-require/">Faster Node app require</a>.`,
  `<a href="https://github.com/bahmutov/quickly">quickly</a> recursively starts all local programs necessary to test a program. Inspired by <a href="http://engineering.clever.com/2015/04/08/aviator-locally-launch-a-service-and-all-its-dependent-services/">Aviator</a>.`,
  `<a href="https://github.com/bahmutov/bdd-stdin">bdd-stdin</a> provides test responses to CLI stdin prompts.`,
  `<a href="https://github.com/bahmutov/functional-extract">functional-extract</a> quickly gives you nested properties and default values from an object.`,
  `<a href="https://github.com/bahmutov/obind">obind</a> is a small utility for partial application for functions taking a single argument object.`,
  `<a href="https://github.com/kensho/git-pages">git-pages</a> lets you run your own github pages-like static website.`,
  `<a href="https://github.com/bahmutov/grunty">grunty</a> runs a single Grunt plugin without writing Gruntfile.js, useful for NPM scripts.`,
  `<a href="https://github.com/bahmutov/last-commit">last-commit</a> saves and reads last commit to allow easy <a href="http://glebbahmutov.com/blog/deployed-commit/">git id embedding</a> into server-side code.`,
  `<a href="https://github.com/bahmutov/render-vars">render-vars</a> provides same variables across all Expressjs rendered views.`,
  `<a href="https://github.com/bahmutov/useful-express-partials">useful-express-partials</a> are several useful partial views for ExpressJS server (analytics, crash reporting).`,
  `<a href="https://github.com/bahmutov/with-package">with-package</a> uses values from the <code>package.json</code> in the NPM script commands.`,
  `<a href="https://github.com/bahmutov/changed-log">changed-log</a> returns list of commit messages for any NPM module between given two tags. Great for finding what has changes between two versions.`,
  `<a href="https://github.com/bahmutov/csv">csv</a> transforms list of objects into CSV text.`,
  `<a href="https://github.com/bahmutov/download-as-file">download-as-file</a> Forms data URI from the given text, then creates and clicks a link to download data as file.`,
  `<a href="https://github.com/bahmutov/csv-pair">csv-pair</a> combines a pair of CSV file collapsing identical columns.`,
  `<a href="https://github.com/bahmutov/first-existing">first-existing</a> finds the first file existing on disk from the list of arguments.`,
  `<a href="https://github.com/bahmutov/csrf-login">csrf-login</a> allows to login from the command line to websites that use CSRF protection.`,
  `<a href="https://github.com/bahmutov/get-username-and-password">get-username-and-password</a> is promise-returning function that asks user to enter username and password. Or reads from the environment.`,
  `<a href="https://github.com/bahmutov/describe-it">describe-it</a> extracts a private function or variable for BDD unit testing. No source code modification necessary, works via NodeJS loader <a href="https://github.com/bahmutov/really-need">really-need</a>.`,
  `<a href="https://github.com/bahmutov/changed-complexity">changed-complexity</a> is a useful CLI tool that tells you how the modified JS files changed in complexity. Lets you judge the commits better.`,
  `<a href="https://github.com/bahmutov/modules-used">modules-used</a> makes a Markdown list of your project's dependencies to share used tools.`,
  `<a href="https://github.com/bahmutov/center-code">center-code</a> shows syntax-highlighted file contents in the center of your terminal. Great for demos and live coding.`,
  `<a href="https://github.com/bahmutov/update-markdown">update-markdown</a> updates a single markdown section with new content.`,
  `<a href="https://github.com/bahmutov/crash-reporter-middleware">crash-reporter-middleware</a> sets the first available crash reporting middleware client by looking at environment keys.`,
  `<a href="https://github.com/bahmutov/object-fitter">object-fitter</a> eliminates properties from objects until they fit size limit.`,
  `<a href="https://github.com/bahmutov/error-receiver">error-receiver</a> - your own crash information collector server, described in <a href="http://glebbahmutov.com/blog/stand-your-own-crash-server/">this blog post</a>.`,
  `<a href="https://github.com/bahmutov/exact-semver">exact-semver</a> is a global script or local tool to clean up the fuzzy versions from your package.json dependencies.`,
  `<a href="https://github.com/bahmutov/js-to-js">js-to-js</a> is Express template engine for rendering input JavaScript modules as external JavaScript snippets to allow
  <a href="http://glebbahmutov.com/blog/disable-inline-javascript-for-security/">very strict and safe Content-Security-Policy to fight script injection attacks.</a>`,
  `<a href="https://github.com/bahmutov/npm-module-checklist">npm-module-checklist</a> is a good checklist for any NPM package author to use.`,
  `<a href="https://github.com/bahmutov/manpm">manpm</a> is the <code>man</code> for <code>NPM</code> modules, based on searching the README files.`,
  `<a href="https://github.com/bahmutov/condition-circle">condition-circle</a> is <a href="https://github.com/semantic-release/semantic-release">semantic-release</a> plugin for publishing to NPM from CircleCI`,
  `<a href="https://github.com/bahmutov/condition-node-version">condition-node-version</a> is another <a href="https://github.com/semantic-release/semantic-release">semantic-release</a> plugin that only publishes from specific Node version CI build, avoiding TravisCI timing problems.`,
  `<a href="https://github.com/bahmutov/top-dependents">top-dependents</a> fetches modules dependent on specific module, sorted by downloads or stars.`,
  `<a href="https://github.com/bahmutov/left-behind">left-behind</a> shows what version your dependent projects are using compared to your current one.`,
  `<a href="https://github.com/bahmutov/simple-bin-help">simple-bin-help</a> is a utility for CLI bin scripts to show basic help if the number of arguments is insufficient.`,
  `<a href="https://github.com/bahmutov/npm-quick-run">npm-quick-run</a> lets me run NPM scripts by shortest matching prefix, like this <code>nr i</code> instead of <code>npm test</code> and <code>nr g --all</code> instead of <code>npm run git-issues -- --all</code>.`,
  `<a href="https://github.com/bahmutov/ban-sensitive-files">ban-sensitive-files</a> tries to stop you from committing private and confidential files to the Git repo.`,
  // front end code
  `<a href="https://github.com/bahmutov/iframe-api">iframe-api</a> is bidirectional communication between parent website and iframed website.`,
  `<a href="http://glebbahmutov.com/color-pusher/">color-pusher</a> is a widget geared towards real time website color tweaking.
    Allows anyone to change multiple page colors, including swapping an entire external palette. I created
    <em>color-pusher</em> to give graphic designers power to tweak live websites without making a round trip to
    a developer to deploy the new color scheme. There is a Chrome DevTools
    <a href="https://chrome.google.com/webstore/detail/color-pusher/gcahnlgconcbplfboahcgaobkpdhidee">panel extension</a>,
    <a href="https://github.com/bahmutov/color-pusher-chrome">source</a>, that allows editing any live website.`,
  `<a href="http://glebbahmutov.com/code-box/">code-box</a> is a lightbox for code blocks. Adds full screen lightbox
    to all code elements in your page with single call.`,
  `<a href="https://github.com/bahmutov/progress-full-width">progress-full-width</a> is a progress bar along
  the bottom of the page, can be stacked or run on a timer.`,
  `<a href="https://github.com/bahmutov/timer-bar">timer-bar</a> is a progress bar connected to a timer for finishing presentations on time.`,
  `<a href="https://github.com/bahmutov/sticky-right-top-icon">sticky-right-top-icon</a> adds a sticky icon to
  any element, even if it has scrollable content inside.`,
  `<a href="https://github.com/bahmutov/code-snippets">code-snippets</a> are performance snippets for Chrome DevTools
  for debugging and fine-tuning application performance. Read how to use them in
  <a href="http://glebbahmutov.com/blog/chrome-devtools-code-snippets/">this blog post</a>. Featured in <a href="http://calendar.perfplanet.com/2014/performance-measurements-using-chrome-devtools-code-snippets/">Performance Calendar</a> 2014.`,
  `<a href="https://github.com/bahmutov/overflowing">overflowing</a> finds elements that do not look right. Makes it simple to detect basic responsive layout problems `,
  `<a href="https://github.com/bahmutov/check-element-attribute">check-element-attribute</a> overwrites <code>Element.prototype.setAttribute</code> to validate passed value, especially used in SVG/D3 code.`,
  `<a href="https://github.com/bahmutov/self-addressed">self-addressed</a> converts iframe communication into promise returning calls.`,
  `<a href="https://github.com/bahmutov/console-log-div">console-log-div</a> mirrors <code>console.log</code> calls to a div created and shown at the bottom of the page. Great for demos and experiments.`,
  `<a href="https://github.com/bahmutov/script-attributes">script-attributes</a> helps read script arguments from the script tag.`,
  `<a href="https://github.com/kensho/ng-alertify">ng-alertify</a> is AngularJS wrapper around <a href="http://fabien-d.github.io/alertify.js/">alertify.js</a> popup library.`,
  `<a href="https://github.com/kensho/ng-waffle">ng-waffle</a> is AngularJS wrapper for <a href="https://github.com/jsocol/django-waffle">Django Waffle</a>.`,
  `<a href="https://github.com/bahmutov/confirm-click">confirm-click</a> asks the user to confirm when clicked on <code>href, ng-href</code> or even before executing <code>ng-click</code> action.</code>`,
  `<a href="https://github.com/bahmutov/angular-in-web-worker">angular in web worker</a> is a demo of running full AngularJS 1.x inside a web worker.`,
  `<a href="https://github.com/bahmutov/ng-http-estimate">ng-http-estimate</a> is a configurable $http time request estimator.`,
  `<a href="https://github.com/bahmutov/freeze-prototypes">freeze-prototypes</a> is tiny code to prevent <a href="http://glebbahmutov.com/blog/unapply-attack/">unapply-style attacks</a> that modify common prototypes.`,
  `<a href="https://github.com/bahmutov/ng-simple-webrtc">ng-simple-webrtc</a> has two tiny directives for broadcasting and watching a room via WebRTC protocol.`,
  `<a href="https://github.com/bahmutov/unit-testing-angularjs-tutorial">unit-testing-angularjs-tutorial</a> a tutorial on testing AngularJS code using <a href="https://github.com/kensho/ng-describe">ng-describe</a> library.`,
  `<a href="https://github.com/bahmutov/ng-services">ng-services</a> is a wrapper for using AngularJS code from apps that do not want AngularJS.`,
  `<a href="https://github.com/bahmutov/bundle-angular-for-web-worker">bundle-angular-for-web-worker</a> bundles Angular 1.x library to be able to run in a WebWorker.`,
  `<a href="https://github.com/bahmutov/parse-github-repo-url">parse-github-repo-url</a> is my fork that adds more types of parsing.`,
  `<a href="https://glebbahmutov.com/hydrate-vue-todo/">demo</a> of Vue.js application hydration on startup with <a href="https://github.com/bahmutov/hydrate-vue-todo">source</a>.
  This website uses the same technique to appear instantly on reload.`,
  `<a href="https://github.com/bahmutov/tiny-toast">tiny-toast</a> is micro JavaScript-only library for poping a message to the user, no dependencies.
  I also wrote <a href="https://github.com/bahmutov/tiny-overlay">tiny-overlay</a> for full page overlays with no dependencies.`,
  `<a href="https://github.com/bahmutov/find-tag-in-git-log">find-tag-in-git-log</a> is a utility for searching through Git logs
  for a line <em>TAG: "something"</em>, useful for building custom semantic release tools.`,
  `<a href="https://github.com/bahmutov/virtual-todos">virtual-todos</a> is a rendering module for a list of Todos using
  <a href="https://github.com/Matt-Esch/virtual-dom">virtual-dom</a> library.`,
  `<a href="https://github.com/bahmutov/fake-todos">fake-todos</a> is a module that generates lots and lots of fake and sometimes hilarious "todo" items.`,
  `<a href="https://github.com/bahmutov/todomvc-model">todomvc-model</a> is the model that keeps
  todo items and responds to outside events. Functions as both M and C in the MVC "Todo" apps.`,
  `<a href="https://github.com/bahmutov/todomvc-express">todomvc-express</a> is a server-side TodoMVC implementation using Express.
  Works just fine with browser JavaScript disabled, see <a href="https://todomvc-express.herokuapp.com/">demo</a>.`,
  `<a href="https://github.com/bahmutov/learn-angular-directives">learn-angular-directives</a> is a
  self-directed study of Angular 1 built-in directives, including a homework assignment.`,
  `<a href="https://github.com/bahmutov/copi">copi</a> is a completely offline NPM installer command that tries
  to find requested modules on disk among your projects.`,
  `<a href="https://github.com/bahmutov/ci-publish">ci-publish</a> is a poor man's semantic release tool.
  Useful for automatic intelligent NPM publishing from CI environments.`
].map((item) => {
  if (typeof item === 'string') {
    return {
      html: item
    }
  }
  return item
})

module.exports = projects
