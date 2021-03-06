var test = require('tape')
var shapeshift = require('../')

test('check if ShapeShift is down', function (t) {
  t.plan(2)
  shapeshift.isDown(function (err, isDown) {
    // if it's down, return err
    t.true(((isDown && !!err) || (!isDown && !err)))
    t.is(typeof isDown, 'boolean')
    t.end()
  })
})
