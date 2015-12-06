var Vue = require('vue')

/* global $ */

Vue.transition('fade', {
  css: false,
  enter: function (el, done) {
    // element is already inserted into the DOM
    // call done when animation finishes.
    $(el)
      .css('opacity', 0)
      .animate({ opacity: 1 }, 200, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    // same as enter
    $(el).animate({ opacity: 0 }, 200, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})

new Vue({ // eslint-disable-line
  el: '#projects-list',
  data: {
    searchText: '',
    projects: [{
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
            <p>
            Alternatively, there is Chrome <a href="https://chrome.google.com/webstore/detail/slides-now/hcohekeghgkdeimnjfmpdlgccfamggac">extension</a>
            and a stand alone Node <a href="https://npmjs.org/package/slides-now-node">module</a> if you prefer.
            </p>`
    }]
  },
  methods: {
    sortBy: function sortBy (key) {
      if (this.sortKey === key) {
        this.reversedSort = this.reversedSort * -1
      } else {
        this.sortKey = key
        this.reversedSort = 1
      }
    }
  }
})