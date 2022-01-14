const projects = [
  `<a href="https://github.com/bahmutov/draw-cycle">draw-cycle</a> is
  a simple Cycle.js application visualized: streams, events, DOM.`,
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
  `<a href="https://github.com/bahmutov/compiled">compiled</a> is the simplest way to write ES6 code today and
  let the Node clients <a href="https://glebbahmutov.com/blog/javascript-needs-compile-step/">compile on install</a>.`,
  `Alternatively, you can use <a href="https://github.com/bahmutov/pre-compiled">pre-compiled</a> to build bundles for different clients
  and just <a href="https://glebbahmutov.com/blog/precompiled-javascript/">let them pick what they support</a>.`,
  `<a href="https://github.com/bahmutov/javascript-journey">javascript-journey</a> is a repo with examples for my popular
  presentation <a href="https://glebbahmutov.com/blog/journey-from-procedural-to-reactive-javascript-with-stops/">Journey from procedural to reactive JavaScript with stops</a>.`,
  `<a href="https://github.com/bahmutov/caches-storage">caches-storage</a> is like async storage built
on top of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Cache">Cache</a> API, for use
inside ServiceWorker.`,
  `<a href="https://github.com/bahmutov/as-a">as-a</a>
  runs a given command with additional environment settings for simple local development.`,
  `<a href="https://github.com/bahmutov/all-nvm">all-nvm</a> - run any NPM command (including install)
  in all versions of Node managed by NVM`,
  {
    name: '2048 5x5',
    href: 'http://glebbahmutov.com/2048/',
    html: `<a href="http://glebbahmutov.com/2048/">2048 5x5</a> is a clone of the famous 2048 game with larger
          board and two new tiles appearing at each turn. Makes the game very fast paced.
          <a href="https://github.com/bahmutov/2048">source</a>`
  },
  {
    name: '2048-cram',
    html: `<a href="http://glebbahmutov.com/2048-cram/">2048-cram</a> lets you play standard 2048 but
          every N seconds pops a JavaScript question. Answer incorrectly and lose a turn, plus get a penalty tile!
          <a href="https://github.com/bahmutov/2048-cram">source</a>.`
  },
  {
    name: 'slides-now',
    html: `<a href="http://glebbahmutov.com/slides-now/">slides-now</a> is a stand alone slide presentation
          viewer implemented inside the browser without any server side components. Just drag and drop a Markdown (.md) file
          into the website page and it will play a stylish HTML5 presentation. I love the simplicity of editing my talks
          as pure text files, keeping versions using Git and playing them whenever I need without logging in / uploading / etc.
          It even works when I am offline, because the website is so simple it works from cache.
          <br>
          Alternatively, there is Chrome <a href="https://chrome.google.com/webstore/detail/slides-now/hcohekeghgkdeimnjfmpdlgccfamggac">extension</a>
          and a stand alone Node <a href="https://npmjs.org/package/slides-now-node">module</a> if you prefer.`
  },
  {
    name: 'read on paper',
    html: `<a href="http://readonpaper.com/">read on paper</a> is the simplest way to send readable article from PC to your tablet for easier reading. It saves your eyes and trees!`
  },
  {
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
  `<a href="https://github.com/bahmutov/debug-logdown">debug-logdown</a> is flexible per-feature logger with Markdown support.`,
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
  Useful for automatic intelligent NPM publishing from CI environments.`,
  `<a href="https://github.com/bahmutov/taskify">taskify</a> for converting Node-style callback function into a Task returning function.`,
  `<a href="https://github.com/bahmutov/task-task">task-task</a> is a postfix combinator for task objects.`,
  `<a href="https://github.com/bahmutov/node-rx-cycle">node-rx-cycle</a> is a good example for understanding Reactive programming on the server, in Cycle.js style.`,
  `<a href="https://github.com/bahmutov/es-features-to-babel-plugins">es-features-to-babel-plugins</a> is a map between
  <a href="https://github.com/getify/es-feature-tests">detected ES6 features</a> and
  <a href="https://babeljs.io/docs/plugins/">Babel</a> transpiler plugins.`,
  `<a href="https://github.com/bahmutov/generator-node-bahmutov">generator-node-bahmutov</a> is my
  personal quick Node project starter.`,
  `<a href="https://github.com/bahmutov/node-sentry-error-reporter">node-sentry-error-reporter</a>
  is a zero configuration exception reporter for Node.`,
  `<a href="https://github.com/bahmutov/pad-filenames">pad-filenames</a> is CLI filename padder
  to solve annoying file sorting when filenames are of different length.`,
  `<a href="https://github.com/bahmutov/wiseli">wiseli</a> shows usage example for an NPM
  project while running the NPM install command.`,
  `<a href="https://github.com/bahmutov/vo-task">vo-task</a>
  wraps data.task around VO async function.`,
  `<a href="https://github.com/bahmutov/redux-vs-rethinkdb">redux-vs-rethinkdb</a> -
  immutable Redux "store" is just a database example.`,
  `<a href="https://github.com/bahmutov/rollem">rollem</a> - for bundling multiple
  ES6 modules at once using Rollup.`,
  `<a href="https://github.com/bahmutov/report-result">report-result</a> is
  a small functional utility for top level reporting to console and
  crash reporting service.`,
  `<a href="https://github.com/bahmutov/double-docker">double-docker</a> -
  building NPM docker image in stages for faster NPM installs.`,
  `<a href="https://github.com/bahmutov/rambo">Rambo</a> -
  Automatic Ramda solution bot.`,
  `<a href="https://github.com/bahmutov/liverage">liverage</a> -
  Makes your server-side code coverage a real time live source.
  There is a corresponding
  <a href="https://github.com/bahmutov/liverage-client">liverage-client</a>.`,
  `<a href="https://github.com/bahmutov/feathers-nedb-dump">feathers-nedb-dump</a>
  - Middleware for Feathers.js framework to dump and restore NeDB databases.`,
  `<a href="https://github.com/bahmutov/feathers-chat-app">feathers-chat-app</a>
  - example Feathers application that uses <code>feathers-nedb-dump</code>
  to roll over database durig immutable <a href="https://zeit.co/">Zeit</a> deploys.`,
  `<a href="https://github.com/bahmutov/http2-push-example">http2-push-example</a>
  - example Node HTTP/2 server with Server Push feature`,
  `<a href="https://github.com/bahmutov/version-middleware">version-middleware</a>
  - Express.js middleware that returns NPM version and Git SHA`,
  `<a href="https://github.com/bahmutov/built-version">built-version</a>
  - Generates a JSON file with git SHA and latest module version`,
  `<a href="https://github.com/bahmutov/next-ver">next-ver</a>
  - Tells you the next semantic version for your local package`,
  `<a href="https://github.com/bahmutov/latest-version-or-tag">latest-version-or-tag</a>
  - Finds latest semver from the package or git tag`,
  `<a href="https://github.com/bahmutov/cypress-failed-log">cypress-failed-log</a>
  - Gets you the Cypress test command log as JSON on failure`,
  `<a href="https://github.com/bahmutov/run-each-cypress-spec">run-each-cypress-spec</a>
  - Small script to run each Cypress spec file one by one`,
  `<a href="https://github.com/bahmutov/send-test-info">send-test-info</a>
  - Attach unit test information to exceptions sent by Raven to Sentry`,
  `<a href="https://github.com/bahmutov/dont-crack">dont-crack</a>
  - semantic-release plugin checking if the new semantic release is breaking dependent projects`,
  `<a href="https://github.com/bahmutov/archetype-actions">archetype-actions</a>
  Create Redux actions with run time type checks via Archetype`,
  `<a href="https://github.com/bahmutov/if-monad-frp">if-monad-frp</a>
  - Example with imperative if-else vs monad vs functional reactive programming`,
  `<a href="https://github.com/bahmutov/stop-build">stop-build</a>
  - Exits with non-zero code if there are modified Git files`,
  `<a href="https://github.com/bahmutov/simple-commit-message">simple-commit-message</a>
  - Simple commit message wizard and validator; works with commitizen and pre-git`,
  {
    name: 'safe-env',
    url: 'https://github.com/bahmutov/safe-env',
    text: 'Returns all environment variables with sensitive values hidden, great for logs'
  },
  {
    name: 'little-store',
    url: 'https://github.com/bahmutov/little-store',
    text: 'Super simple curried storage in a given plain object when you just must have mutable state'
  },
  {
    name: 'cypress-arrows',
    url: 'https://github.com/bahmutov/cypress-arrows',
    text: 'Custom left, right, up and down keyboard arrow commands for Cypress'
  },
  {
    name: 'gitlab-build-info',
    url: 'https://github.com/bahmutov/gitlab-build-info',
    text: 'Grabs GitLab environment variables, useful for detailed emails and test logs'
  },
  {
    name: 'jenkins-build-info',
    url: 'https://github.com/bahmutov/jenkins-build-info',
    text: 'Link <code>gitlab-build-info</code> but for Jenkins'
  },
  {
    name: 'cypress-failed-email',
    url: 'https://github.com/bahmutov/cypress-failed-email',
    text: 'A beautifully formatted and helpful email when Cypress test fails'
  },
  {
    name: 'snap-shot',
    url: 'https://github.com/bahmutov/snap-shot',
    text: 'Jest-like snapshot feature for the rest of us, works magically by finding the right caller function'
  },
  {
    name: 'game-of-github',
    url: 'https://glebbahmutov.com/game-of-github/',
    text: 'Play Game of Life inside GitHub contributions chart'
  },
  {
    name: 'stack-sites',
    url: 'https://github.com/bahmutov/stack-sites',
    text: `Returns current stack as call sites using a mock exception,
    accurate for <a href="https://glebbahmutov.com/blog/accurate-call-sites/">transpiled code</a>`
  },
  {
    name: 'validate-by-example',
    url: 'https://github.com/bahmutov/validate-by-example',
    text: 'Derives a JSON schema from an object and then uses it to validate other objects'
  },
  {
    name: 'schema-shot',
    url: 'https://github.com/bahmutov/schema-shot',
    text: 'Framework-agnostic snapshot testing using "schema by example" for highly dynamic data'
  },
  {
    name: 'subset-shot',
    url: 'https://github.com/bahmutov/subset-shot',
    text: 'Snapshot testing where new value can be a superset of the saved snapshot'
  },
  {
    name: 'have-it',
    url: 'https://github.com/bahmutov/have-it',
    text: 'The fastest NPM install does nothing because you already have it'
  },
  {
    name: 'focha',
    url: 'https://github.com/bahmutov/focha',
    text: 'Mocha wrapper that runs previously failed tests first'
  },
  {
    name: 'bin-up',
    url: 'https://github.com/bahmutov/bin-up',
    text: 'Finds an installed tool in node_modules/.bin folders from current up to the git root'
  },
  {
    name: 'rebuild-node-sass',
    url: 'https://github.com/bahmutov/rebuild-node-sass',
    text: 'Rebuilds node-sass but only if needed'
  },
  {
    name: 'am-i-a-dependency',
    url: 'https://github.com/bahmutov/am-i-a-dependency',
    text: 'Check if the package is being installed by another package'
  },
  {
    name: 'next-update-travis',
    url: 'https://github.com/bahmutov/next-update-travis',
    text: 'Safely update your NPM dependencies using TravisCI cron jobs'
  },
  {
    name: 'prefixed-list',
    url: 'https://github.com/bahmutov/prefixed-list',
    text: `Given a list of strings, finds common prefix and returns shorter string <code>prefix[foo, bar, baz]</code>`
  },
  {
    name: 'new-public-commits',
    url: 'https://github.com/bahmutov/new-public-commits',
    text: 'Returns list of commits since last tag with types relevant to users: major, minor, etc'
  },
  {
    name: 'commit-closes',
    url: 'https://github.com/bahmutov/commit-closes',
    text: 'Parses commit message to find all "fixes", "closes" and "resolves" issue numbers'
  },
  {
    name: 'github-post-release',
    url: 'https://github.com/bahmutov/github-post-release',
    text: 'Forms release changelog and posts a note to each referenced issues after semantic release publishes a new module version'
  },
  {
    name: 'stub-spawn-once',
    url: 'https://github.com/bahmutov/stub-spawn-once',
    text: 'Stubs <code>child_process.spawn</code> for a single command; cleans up afterwards. Perfect for testing.'
  },
  {
    name: '@cypress/questions-remain',
    url: 'https://github.com/cypress-io/questions-remain',
    text: 'Asks the user to provide the remaining options not specified via CLI'
  },
  {
    name: '@cypress/error-message',
    url: 'https://github.com/cypress-io/error-message',
    text: 'User-friendly error text with additional information'
  },
  {
    name: '@cypress/env-or-json-file',
    url: 'https://github.com/cypress-io/env-or-json-file',
    text: 'Loads JSON object from environment string or local file'
  },
  {
    name: 'simple-changelog',
    url: 'https://github.com/bahmutov/simple-changelog',
    text: 'Simple GitHub release changelog from public semantic commits'
  },
  {
    name: 'object-to-camel-case',
    url: 'https://github.com/bahmutov/object-to-camel-case',
    text: 'Renames every property in the given object to be camelCased'
  },
  {
    url: 'https://github.com/bahmutov/semantic-action',
    name: 'semantic-action',
    text: 'Flexible action based on semantic commits: npm publish, deploy'
  },
  {
    name: 'url-to-sha',
    text: 'Plugin for semantic-action that fetches commit SHA from JSON at given URL'
  },
  {
    name: 'from-iso',
    text: 'CLI utility that converts ISO string date to local time'
  },
  {
    name: 'repeat-it',
    text: 'Run a Mocha BDD "it" test as many times as you want'
  },
  {
    name: 'stop-only',
    text: 'Detects ".only" left in the code accidentally'
  },
  {
    name: 'snap-shot-it',
    text: 'Smarter snapshot utility for Mocha and BDD test runners + data-driven testing!'
  },
  {
    name: 'its-name',
    text: 'Given (Mocha) test object, walks it up to give you list of context names'
  },
  {
    name: 'now-checklist',
    text: 'Personal checklist when writing and deploying a small Node.js service with Zeit Now'
  },
  {
    name: 'leave-tests',
    text: 'Given Mocha test suite leaves only tests in the given list (using full titles)'
  },
  {
    name: 'execa-wrap',
    text: 'Wraps execa and makes output suitable for snapshot testing'
  },
  {
    name: 'locha',
    text: 'Loud Mocha (locha) runs specs twice - first time all, second time just the failing ones with extra verbosity'
  },
  {
    name: 'unload-me',
    text: 'Self-destruct the current module from require cache'
  },
  {
    name: 'require-and-forget',
    text: 'Require Node module and immediately remove it from module cache to force loading again next time'
  },
  {
    name: 'make-empty-github-commit',
    text: 'Makes a new empty commit on GitHub using API'
  },
  {
    name: 'ok-file',
    text: 'CLI checks if given file exists and is not empty'
  },
  {
    name: 'print-arch',
    text: 'Cross-platform print platform and architecture'
  },
  {
    name: 'print-env',
    text: 'Prints all environment variables that start with given string'
  },
  {
    name: 'commit-message-install',
    text: 'NPM install a package by name taken from the last commit message'
  },
  {
    name: 'colon-names',
    text: 'Checks if the NPM script commands in the package.json are all colon separated'
  },
  {
    name: 'list-of-functions',
    text: 'Returns a function that gives each item from the list one by one'
  },
  {
    name: 'start-server-and-test',
    text: 'Starts server, waits for URL, then runs test command; when the tests end, shuts down server'
  },
  {
    name: 'add-objects',
    text: 'Returns a function that combines two objects using given per-property functions'
  },
  {
    name: 'image-as-script',
    text: 'JavaScript code recognized and executed from an image'
  },
  {
    name: 'vue-vuex-todomvc',
    text: 'Example TodoMVC Vue.js app with Vuex store and server backend via REST'
  },
  {
    name: 'add-typescript-to-cypress',
    text: 'Quickly adds TypeScript spec support to Cypress'
  },
  {
    name: 'json-server-reset',
    text: 'Reset middleware for <a href="https://github.com/typicode/json-server">json-server</a>'
  },
  {
    name: 'error-snapshot',
    text: 'Checks if given function throws an expected error (by saving snapshot)'
  },
  {
    name: 'cypress-vue-unit-test',
    text: 'A little helper to unit test Vue components in the Cypress.io E2E test runner'
  },
  {
    name: 'cypress-hyperapp-unit-test',
    text: 'Unit test Hyperapp components using Cypress'
  },
  {
    name: 'cypress-react-unit-test',
    text: 'Unit test React components using Cypress'
  },
  {
    name: 'cypress-svelte-unit-test',
    text: 'Unit testing Svelte components in Cypress E2E test runner'
  },
  {
    name: 'node-mock-examples',
    text: 'Examples of tests that mock Node system APIs: fs, http, child_process, timers'
  },
  {
    name: 'mocha-banner',
    text: 'Terminal-wide banner with test name before each Mocha test'
  },
  {
    name: 'hyperapp-es6-module-cypress',
    text: 'Testing Hyperapp with ES6 module import in Cypress example'
  },
  [
    'terminal-banner',
    'Banner text across your terminal. Great separator for tests or long running operations.'
  ],
  [
    'cypress-form-data-with-file-upload',
    'How to test HTTP form submission with file input using Cypress - a hack'
  ],
  [
    'count-app',
    'Learning to add numbers through a game. <a href="https://glebbahmutov.com/count-app/">Try it</a>'
  ],
  [
    'cypress-cycle-unit-test',
    'Unit testing Cycle.js components in Cypress E2E test runner'
  ],
  [
    'cypress-parcel-preprocessor',
    'Cypress preprocessor for bundling JavaScript via Parcel'
  ],
  [
    'has-only',
    'Tells if the current Mocha execution is running only some tests that use <code>.only</code>'
  ],
  [
    'is-fork-pr',
    'Returns true if CI is building a pull request from a remote fork'
  ],
  [
    'change-by-example',
    'Finds a function that transforms a given object into another given object.'
  ],
  [
    'all-paths',
    'Given an object returns list of all possible paths to its properties'
  ],
  [
    'arguments-as-string',
    'Converts passed arguments into a user-friendly string'
  ],
  [
    'not-allowed',
    'Throws a good user friendly error if a function is called, useful in stubs during testing'
  ],
  [
    'cypress-angularjs-unit-test',
    'Unit test Angularjs code using Cypress.io test runner'
  ],
  [
    're-quire',
    'Quick and dirty Node require for many files at once from subfolders'
  ],
  [
    'print-cachedir',
    'Prints cache dir for a given project that uses <a href="https://github.com/LinusU/node-cachedir">node-cachedir</a>'
  ],
  {
    name: 'schema-tools',
    url: 'https://github.com/cypress-io/schema-tools',
    text: 'Validate, sanitize and document JSON schemas'
  },
  [
    'data-cover',
    'Instruments code for collecting data coverage (instead of code coverage)'
  ],
  [
    'rolling-task',
    'Bundles JS using Rollup using Cypress task command'
  ],
  [
    'test-wallaby',
    'Trying out the Wallaby.js test runner on a small Jest + TypeScript example'
  ],
  [
    'mocked-env',
    'Easy way to mock process.env during BDD testing'
  ],
  [
    'js-equality-game',
    'Solving "JS equality" game using Cypress test runner'
  ],
  [
    'stop-upper',
    'Checks that every file in the given folder is lower case'
  ],
  [
    'cypress-dark',
    'Dark and Halloween color themes for Cypress.io test runner'
  ],
  [
    'cypress-retry',
    'Retry just the failed Cypress.io tests using Cypress module API and AST rewriting'
  ],
  [
    'cypress-should-callback',
    'Example running multiple assertions from cypress `should(cb)` function'
  ],
  [
    'cypress-skip-and-only-ui',
    'Client-side buttons to run a single test or skip it for Cypress test runner'
  ],
  [
    'cypress-get-it',
    'Get elements by data attribute by creating a Cy command on the fly'
  ],
  [
    'was-tdd',
    'Checks a branch that claims to fix a bug using TDD principle'
  ],
  [
    '@bahmutov/cly',
    'A prototype of Cypress CLI for quicker project scaffolding'
  ],
  [
    'cypress-watch-and-reload',
    'Reloads Cypress when one of the watched files changes'
  ],
  [
    'cypress-select-tests',
    'User space solution for picking Cypress tests to run'
  ],
  [
    'ts-mock-imports-example',
    'Example mocking individual functions in TypeScript unit tests with ts-mock-imports'
  ],
  [
    'parcel-json-server',
    'Combination of ParcelJs bundler and json-server'
  ],
  [
    'code-coverage-webpack-dev-server',
    'Example of Cypress.io code coverage collected from webpack dev server'
  ],
  [
    'cypress-native-chrome-code-coverage-example',
    'Native code coverage in Chrome browser via Debugger protocol during Cypress end-to-end tests'
  ],
  [
    'multiple-cy-example',
    'Example using multiple Cypress versions in a monorepo'
  ],
  [
    'cypress-kv-storage-demo',
    'Proof of concept for testing built-in web module "std:kv-storage"'
  ],
  {
    name: '@cypress/fiddle',
    url: 'https://github.com/cypress-io/cypress-fiddle',
    text: 'Generate Cypress tests live from HTML and JS'
  },
  [
    'cypress-and-jest',
    'Cypress and Jest both with code coverage running unit tests'
  ],
  {
    name: '@cypress/code-coverage',
    url: 'https://github.com/cypress-io/code-coverage',
    text: 'Saves the code coverage collected during Cypress tests'
  },
  [
    'cy-api',
    'Cypress custom command "cy.api" for end-to-end API testing'
  ],
  [
    'all-logs',
    'Utility method to capture all server console logs including DEBUG=... module logs and util.debuglog'
  ],
  [
    'prettier-config-example',
    'Example for the blog post <a href="https://glebbahmutov.com/blog/configure-prettier-in-vscode/">How to configure Prettier and VSCode</a>'
  ],
  [
    'csv-load-sync',
    'Sync loading routine for a small comma-separated values file (.csv)'
  ],
  [
    'cypress-expect-n-assertions',
    'Cypress helper that checks number of expected and actual assertions in the test, read <a href="https://www.cypress.io/blog/2020/01/16/when-can-the-test-stop/">When can the test stop?</a>'
  ],
  [
    'term-to-html',
    'Stream terminal output with ansi codes into nicely formatted HTML'
  ],
  {
    name: '@cypress/skip-test',
    url: 'https://github.com/cypress-io/cypress-skip-test',
    text: 'Simple commands to skip a test based on platform, browser or an url'
  },
  [
    'after-test-run-circle-example',
    'CircleCI example showing how to run jobs after tests pass or fail'
  ],
  [
    'find-webpack',
    'Utility to find Webpack settings in react-scripts and other situations'
  ],
  [
    'triple-tested',
    'Deploying to GitHub Pages using GitHub Actions and triple testing it with Cypress'
  ],
  [
    'dependency-version-badge',
    'A little script to update README file with dependency version badge'
  ],
  [
    'check-code-coverage',
    'Utilities for checking the coverage produced by NYC against extra or missing files'
  ],
  {
    name: '@bahmutov/cy-rollup',
    url: 'https://github.com/bahmutov/cy-rollup',
    text: 'Cypress Rollup preprocessor'
  },
  [
    'cypress-extends',
    'Cypress plugin that adds "extends" support to the configuration file'
  ],
  [
    'cypress-expect',
    'Cypress CLI wrapper where you can specify the total number of expected tests'
  ],
  [
    'cypress-book-todomvc',
    'Cypress tests inside README that update the screenshots'
  ],
  [
    'sudoku-applitools',
    'Cypress React component tests using Applitools visual testing'
  ],
  [
    'bahmutov/sudoku-qafest',
    'Cypress React component tests using Percy.io visual testing'
  ],
  [
    'cypress-repeat',
    'Run Cypress multiple times in a row, great at finding test flake'
  ],
  [
    'cypress-db-example',
    'Example that resets the database before every spec, queries the database from the test'
  ],
  [
    'cy-search',
    'Search Cypress documentation from the terminal'
  ],
  [
    'cypress-timings',
    'A Cypress plugin for reporting individual command timings'
  ],
  [
    'cypress-markdown-preprocessor',
    'Use Markdown files as Cypress specs'
  ],
  [
    'cypress-book',
    'Utilities for updating Cypress screenshots saved as repo images'
  ],
  [
    'local-cypress',
    'Use Cypress without global objects'
  ],
  [
    'test-personal-site',
    'Example testing an external site using Cypress and GitHub Actions'
  ],
  [
    'netlify-plugin-github-dispatch',
    'A Netlify plugin that triggers GitHub Actions after the deploy finishes'
  ],
  [
    'monalego',
    'Visual testing for HTML canvas drawing via Cypress'
  ],
  [
    'cypress-recurse',
    'A way to re-run Cypress commands until a predicate function returns true'
  ],
  [
    'borda-count',
    'Counting ranked votes using the Borda tournament method'
  ],
  [
    'cypress-esbuild-preprocessor',
    'Bundle Cypress specs using esbuild'
  ],
  [
    'cypress-grep',
    'Filter Cypress tests using title or tags'
  ],
  [
    'trigger-circleci-pipeline',
    'A little utility for triggering CircleCI pipelines for a given branch with fallback to the default branch'
  ],
  [
    'mock-in-bundle',
    'Cypress utility for mocking a module inside a Webpack bundle'
  ],
  [
    'cyclope',
    'Cypress DOM snapshots and consistent image diffing in the cloud'
  ],
  [
    'scrape-blog-post-page',
    'Scraping my blog posts using Cypress to send to Algolia search index'
  ],
  [
    'cypress-data-session',
    'Cypress command for flexible test data setup'
  ],
  [
    'chat.io',
    'Cypress.io testing for a chat application that requires auth'
  ],
  [
    'cypress-testrail-simple',
    'Simple upload of Cypress test results to TestRail'
  ],
  [
    'cypress-each',
    'A plugin that adds describe.each and it.each data-driven testing to Cypress'
  ],
  [
    'cypress-network-idle',
    'A little Cypress.io plugin for waiting for network to be idle before continuing with the test'
  ],
  [
    'find-test-names',
    'Given a Mocha / Cypress spec file, returns the list of suite and test names'
  ],
  [
    'cypress-high-resolution',
    'A plugin to increase the video resolution for cypress run'
  ],
  [
    'cypress-highlight',
    'Highlights all elements on the page with good test selectors by injecting a CSS rule'
  ],
  [
    'cypress-should-really',
    'Functional helpers for constructing Cypress should callbacks'
  ],
  [
    'was-it-scraped',
    'Tracking scraped resources using an external database'
  ],
  [
    'gh-build-matrix',
    'A little GitHub Action to generate matrix list for other actions to run jobs in parallel'
  ],
  [
    'cypress-workflows',
    'Reusable Cypress workflows for GitHub Actions'
  ],
  [
    'gh-action-triggers-circleci',
    'An example GitHub Action that periodically triggers the CircleCI Pipeline that uses context variables'
  ],
  [
    'cypress-timestamps',
    'Add timestamps to Cypress tests, error screenshots, and Command Log'
  ],
  [
    'run-cy-on-ci',
    'Launch on CI a particular Cypress test using grep or grep tags'
  ],
  [
    'cypress-json-results',
    'A plugin that saves Cypress test results as a JSON file'
  ],
  [
    'find-cypress-specs',
    'Find Cypress spec files using the config settings, print the names or test structure'
  ]
]

module.exports = {projects}
