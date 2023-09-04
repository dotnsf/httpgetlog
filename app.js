//. app.js
var express = require( 'express' ),
    log4js = require( 'log4js' ),
    app = express();

log4js.configure({
  appenders: {
    stdout: {
      type: 'stdout'
    }
  },
  categories: {
    default: {
      appenders: ['stdout'],
      level: 'trace'
    }
  }
});
var logger = log4js.getLogger( 'default' );

app.use( express.Router() );

api.all( '/*', function( req, res, next ){
  res.setHeader( 'Access-Control-Allow-Origin', '*' );
  res.setHeader( 'Access-Control-Allow-Methods', '*' );
  res.setHeader( 'Access-Control-Allow-Headers', '*' );
  res.setHeader( 'Vary', 'Origin' );

  next();
});

app.get( '/', function( req, res ){
  var ip = '0.0.0.0';
  if( req.headers['x-forwarded-for'] ){
    ip = req.headers['x-forwarded-for'];
  }else if( req.connection && req.connection.remoteAddress ){
    ip = req.connection.remoteAddress;
  }else if( req.connection.socket && req.connection.socket.remoteAddress ){
    ip = req.connection.socket.remoteAddress;
  }else if( req.socket && req.socket.remoteAddress ){
    ip = req.socket.remoteAddress;
  }

  var repid = '';
  if( req.query && req.query.repid ){
    repid = req.query.repid;
  }

  if( repid ){
    logger.trace( 'IP: ' + ip + ', ReplicaID = ' + repid );
  }else{
    logger.warn( 'IP: ' + ip + ', ReplicaID = ' + repid );
  }

  res.contentType( 'application/json; charset=utf-8' );
  res.write( JSON.stringify( { status: true }, null, 2 ) );
  res.end();
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );

module.exports = app;
