//2. CREATE EXPRESS CONFIG AWAY FROM MAIN APP 


import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'logger';
import path from 'path';
import serveStatic from 'serve-static';
import history from 'connect-history-api-fallback'

//CORS CONFIGURATION

const incomingOriginWhitelist = [
  //for machines that use 'origin'
  'http://localhost:7000',
  //for machines that use 'host'
  'localhost:7000',
]
//CORS only takes requests hence the (req , next )
//Takes the request checks the header and passes it on to the next process

const corsConfig = (req, next) => {
  let corsOptions;
  let incomingOrigin = req.header('host') || req.header('origin');
  if (incomingOriginWhitelist.indexOf(incomingOrigin !== -1)) {
    corsOptions = {
      origin: true
    }
    return next(null, corsOptions);
  } else
    corsOptions = {
      origin: false
    }
  return next(new Error('You like going under the hood, i like you. Contact me '))

}

module.exports = (app, express) => {
    
  const api = express.Router()

  app.use(cors(corsConfig), (req, res, next) => {
    next();
  })

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }))

  app.use(express.static(path.join(__dirname, 'public')));
  app.use(history({
    verbose: true
  })) // for vue history
  app.use(logger('short')); // For logging errors on command line

  app.use('/api', api); //Use api (express router) whenever 'api' is hit
  app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
  })

  app.use((err, req, res) => {
    res.locals.message = err.message
    //Only prviding errors in development 
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    console.log(err);
    res.render('error')
  })
}
