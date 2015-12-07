'use strict'

const projects = require('./projects')
const Vue = require('vue')

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
    projects: projects
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
