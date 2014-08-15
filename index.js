var recast = require('recast')
  , fs = require('fs')
  , path = require('path')
  ;


function checkRemovals (statement) {
  function recursion (obj, name) {
    // No New
    if (obj.type === 'NewExpression') {
      throw new Error('new keyword is unknown, please read about clone() and copy().')
    }
    // No This
    if (obj.type === 'ThisExpression') {
      throw new Error('`this` is a restricted property, please read about clone() member functions')
    }
    // instanceof
    if (obj.operator === 'instanceof') {
      throw new Error('No instanceof operator.')
    }
    // no prototype
    if (obj.name === 'prototype' && name === 'property') {
      throw new Error('`prototype` is a restricted property name, please read about clone() and copy().')
    }

    // rescusive property access
    for (var i in obj) {
      if (i === 'loc') {
        // skip
      } else if (typeof obj[i] === 'object') {
        if (obj[i]) recursion(obj[i], i)
      }
    }
  }
  recursion(statement)
}

function parse (code) {
  var ast = recast.parse(code)
  var body = ast.program.body
  body.forEach(checkRemovals)
  return ast
}

module.exports = function (f) {
  return parse(fs.readFileSync(f).toString())
}
