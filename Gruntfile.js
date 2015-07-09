/*jshint node:true */

var path = require( 'path' );

module.exports = function( grunt ) {
	'use strict';

	require( 'load-grunt-config' )( grunt, {
		configPath: path.join( process.cwd(), 'config/grunt' ),
		data: {},
		jitGrunt: {}
	});

};
