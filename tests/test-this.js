var fif = require('../')
  , path = require('path')
  , tape = require('tape')
  , removals = path.join(__dirname, 'this')
  ;

tape('no globalThis', function (t) {
  require('./this/globalThis.js')
  try {
    fif(path.join(removals, 'globalThis.js'))
    t.ok(false, 'code did not throw')
  } catch(e) {
    t.assert(e)
  }
  t.end()
})

tape('no this in function', function (t) {
  require('./this/thisInFunction.js')
  try {
    fif(path.join(removals, 'thisInFunction.js'))
    t.ok(false)
  } catch(e) {
    t.assert(e)
  }
  t.end()
})

tape('no var self = this', function (t) {
  require('./this/varThis.js')
  try {
    fif(path.join(removals, 'varThis.js'))
    t.ok(false)
  } catch(e) {
    t.assert(e)
  }
  t.end()
})

tape('no var self = this.member', function (t) {
  require('./this/varThisMember.js')
  try {
    fif(path.join(removals, 'varThisMember.js'))
    t.ok(false)
  } catch(e) {
    t.assert(e)
  }
  t.end()
})

tape('no global this.member', function (t) {
  require('./this/globalThisMember.js')
  try {
    fif(path.join(removals, 'globalThisMember.js'))
    t.ok(false)
  } catch(e) {
    t.assert(e)
  }
  t.end()
})

tape('no this member in function', function (t) {
  require('./this/thisInFunctionAsMember.js')
  try {
    fif(path.join(removals, 'thisInFunctionAsMember.js'))
    t.ok(false)
  } catch(e) {
    t.assert(e)
  }
  t.end()
})
