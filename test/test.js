

describe('is-floating', function(){

  var float = require('is-floating')
    , domify = require('domify')
    , assert = require('assert');

  describe('float: left', function(){
    it('should return `true`', function(){
      assert(float(create('<a style="float: left">')));
    })
  })

  describe('float: right', function(){
    it('should return `true`', function(){
      assert(float(create('<a style="float: right">')));
    })
  })

  describe('display: table-cell', function(){
    it('should return `true`', function(){
      assert(float(create('<td>')));
    })
  })

  describe('display: inline', function(){
    it('should return `true`', function(){
      assert(float(create('<span>')));
    })
  })

  describe('display: block', function(){
    it('should return `false`', function(){
      assert(false == float(create('<div>')));
    })
  })


  function create(html){
    var el = domify(html);
    document.getElementById('hide').appendChild(el);
    return el;
  }
})
