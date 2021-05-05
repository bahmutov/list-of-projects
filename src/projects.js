const la = require('lazy-ass')
const {projects} = require('./data')

const isString = item => typeof item === 'string'
const hasHtml = item => 'html' in item
const isTuple = item => Array.isArray(item) && item.length === 2

function addGitHubIfNeeded (item) {
  if (isTuple(item)) {
    item = {
      name: item[0],
      text: item[1]
    }
  }
  if (isString(item.name) && !isString(item.url)) {
    item.url = `https://github.com/bahmutov/${item.name}`
  }
  return item
}

function makeHtml (item) {
  la(item.name, 'missing name', item)
  la(item.url, 'missing url', item)
  la(item.text, 'missing text', item)
  return {
    html: `<a href="${item.url}">${item.name}</a> - ${item.text}`
  }
}

const htmlProjects = projects.map(item => {
  if (isString(item)) {
    return {
      html: item
    }
  }
  return hasHtml(item) ? item : makeHtml(addGitHubIfNeeded(item))
})

console.log('exporting %d projects', htmlProjects.length)

module.exports = htmlProjects
