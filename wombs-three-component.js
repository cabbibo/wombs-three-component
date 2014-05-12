
  var Component = require( 'wombs-component' );
  var _ = require( 'underscore' );

  var mutation = {};

  mutation.add = function( obj ){

    this._three.add( obj );

  }

  mutation.remove = function( obj ){

    this._three.remove( obj );

  }


  ThreeComponent.prototype = _.extend(
    Component.prototype,
    mutation
  );


  function ThreeComponent( threeObj ){

    Component.call( this );
    this._three = threeObj;

  }


  module.exports = ThreeComponent; 

