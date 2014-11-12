Spaceball
=========

A simple app wrapper for javascript code

Example:

```javascript

// Set prefix

Spaceball.setPrefix('_$')

// create a new Spaceball with auto init

Spaceball.create('myFirstSpaceball', {

  init: function() {
  
    console.log('autoload on domready')
  
  },
  
  anotherMethod: function() {
    
    console.log('yeah you triggered me')
  
  }

})

// Access Spaceball

_$MyFirstSpaceball.anotherMethod();

```
