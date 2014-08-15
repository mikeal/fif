if (process.argv.length !== 3) {
  console.error("Not enough arguments")
  process.exit(1)
}

var recast = require('recast')
  , file = process.argv[2]
  , fif = require('./')
  , ast = fif(file)
  , code = recast.prettyPrint(ast, { tabWidth: 2 }).code
  ;

console.log(code)
