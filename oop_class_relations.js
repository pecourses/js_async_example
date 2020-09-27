// Association

class Logger1 {
  constructor() {
    this._method = null;
  }

  get method(){
      return this._method;
  }

  set method(m){
    this._method = m;
  }

  log(value) {
    if (this.method) {
      this.method(value);
    }
  }
}

const logger = new Logger1();

logger.method = console.log;

logger.log('string');
logger.log('string test 2');

logger.method = console.error;

logger.log('some err!'); 

//Aggregation

class Logger2 {
  constructor(method) {
    this._method = method;
  }

  get method (){
      return this._method;
  }

  log(value) {
    if (this.method) {
      this.method(value);
    }
  }
}

const loggerLog = new Logger2(console.log);
const loggerError = new Logger2(console.error);

loggerLog.log("string without error!");
loggerError.log("String with error!");

//Composition

class Logger3 {
    constructor(){
        this._method = console.log;
    }



}

