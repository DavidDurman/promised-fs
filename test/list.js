'use strict'

var fs = require('promised-fs')
,   q = require('q'), when = q.when

exports['test list `fs.workingDirectory`'] = function(assert, done) {
  var entries = fs.list(fs.workingDirectory())
  when
  ( entries
  , function(list) {
      assert.ok(Array.isArray(list), 'resolves to an array of entries:' + list.length)
      done()
    }
  , assert.fail.bind(assert)
  )
}

exports['test list `fs.workingDirectoryPath`'] = function(assert, done) {
  var entries = fs.list(fs.workingDirectoryPath())
  when
  ( entries
  , function(list) {
      assert.ok(Array.isArray(list), 'resolves to an array of entries:' + list.length)
      done()
    }
  , assert.fail.bind(assert)
  )
}

exports['test list file'] = function(assert, done) {
  var entries = fs.list(module.filename)
  when
  ( entries
  , function(list) {
      assert.fail('file cant be listed')
      done()
    }
  , function(e) {
      assert.pass('file can not be listed:' + e)
      done()
    }
  )
}

if (module == require.main) require('test').run(exports)
