var fif = require('../')
  , path = require('path')
  , tape = require('tape')
  , removals = path.join(__dirname, 'inheritance')
  ;

tape('no new', function (t) {
  require('./inheritance/new.js')
  try {
    fif(path.join(removals, 'new.js'))
    t.ok(false, 'code did not throw')
  } catch(e) {
    t.assert(e)
  }
  t.end()
})

tape('no global new', function (t) {
  require('./inheritance/globalNew.js')
  try {
    fif(path.join(removals, 'globalNew.js'))
    t.ok(false)
  } catch(e) {
    t.assert(e)
  }
  t.end()
})

tape('no prototype', function (t) {
  require('./inheritance/prototype.js')
  try {
    fif(path.join(removals, 'prototype.js'))
    t.ok(false)
  } catch(e) {
    t.assert(e)
  }
  t.end()
})

tape('no instanceof', function (t) {
  require('./inheritance/instanceof.js')
  try {
    fif(path.join(removals, 'instanceof.js'))
    t.ok(false)
  } catch(e) {
    t.assert(e)
  }
  t.end()
})
