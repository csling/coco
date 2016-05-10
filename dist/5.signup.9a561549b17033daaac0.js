webpackJsonp([5],{

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(364);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(448), __esModule: true };

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(399);
	__webpack_require__(371);
	__webpack_require__(383);
	__webpack_require__(449);
	module.exports = __webpack_require__(256).Promise;

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(374)
	  , global             = __webpack_require__(255)
	  , ctx                = __webpack_require__(257)
	  , classof            = __webpack_require__(450)
	  , $export            = __webpack_require__(254)
	  , isObject           = __webpack_require__(262)
	  , anObject           = __webpack_require__(261)
	  , aFunction          = __webpack_require__(258)
	  , anInstance         = __webpack_require__(451)
	  , forOf              = __webpack_require__(452)
	  , setProto           = __webpack_require__(406).set
	  , speciesConstructor = __webpack_require__(456)
	  , task               = __webpack_require__(457).set
	  , microtask          = __webpack_require__(459)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(382)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(460)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(381)($Promise, PROMISE);
	__webpack_require__(461)(PROMISE);
	Wrapper = __webpack_require__(256)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(462)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(275)
	  , TAG = __webpack_require__(382)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },

/***/ 451:
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(257)
	  , call        = __webpack_require__(453)
	  , isArrayIter = __webpack_require__(454)
	  , anObject    = __webpack_require__(261)
	  , toLength    = __webpack_require__(278)
	  , getIterFn   = __webpack_require__(455);
	module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(261);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(376)
	  , ITERATOR   = __webpack_require__(382)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(450)
	  , ITERATOR  = __webpack_require__(382)('iterator')
	  , Iterators = __webpack_require__(376);
	module.exports = __webpack_require__(256).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(261)
	  , aFunction = __webpack_require__(258)
	  , SPECIES   = __webpack_require__(382)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(257)
	  , invoke             = __webpack_require__(458)
	  , html               = __webpack_require__(380)
	  , cel                = __webpack_require__(266)
	  , global             = __webpack_require__(255)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(275)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },

/***/ 458:
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(255)
	  , macrotask = __webpack_require__(457).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(275)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(259);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(255)
	  , core        = __webpack_require__(256)
	  , dP          = __webpack_require__(260)
	  , DESCRIPTORS = __webpack_require__(264)
	  , SPECIES     = __webpack_require__(382)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(382)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SignUp = undefined;
	
	var _getPrototypeOf = __webpack_require__(357);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(362);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(363);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(367);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(402);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SignUp = __webpack_require__(532);
	
	var _SignUp2 = _interopRequireDefault(_SignUp);
	
	var _reactRedux = __webpack_require__(289);
	
	var _reduxForm = __webpack_require__(288);
	
	var _reactFontawesome = __webpack_require__(412);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	var _signUp = __webpack_require__(534);
	
	var _UserSignUpForm = __webpack_require__(535);
	
	var _UserSignUpForm2 = _interopRequireDefault(_UserSignUpForm);
	
	var _reactRouter = __webpack_require__(185);
	
	var _reactModal = __webpack_require__(413);
	
	var _reactModal2 = _interopRequireDefault(_reactModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var modalStyles = {
	  overlay: {
	    position: 'fixed',
	    backgroundColor: 'rgba(0, 0, 0, 0.4)'
	  },
	  content: {
	    position: 'absolute',
	    margin: '0px auto',
	    top: '100px',
	    height: '425px',
	    width: '500px',
	    border: '1px solid #ccc',
	    background: '#fff',
	    borderRadius: '20px',
	    padding: '30px'
	  }
	};
	
	var SignUp = exports.SignUp = function (_React$Component) {
	  (0, _inherits3.default)(SignUp, _React$Component);
	
	  function SignUp(props) {
	    (0, _classCallCheck3.default)(this, SignUp);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SignUp).call(this, props));
	
	    _this.state = {
	      modalIsOpen: false
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(SignUp, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(data) {
	      (0, _signUp.submitUserSignUp)(data);
	      this.openModal();
	    }
	  }, {
	    key: 'openModal',
	    value: function openModal() {
	      this.setState({ modalIsOpen: true });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      this.setState({ modalIsOpen: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _SignUp2.default.userSignUpContainer },
	        _react2.default.createElement(
	          'div',
	          { className: _SignUp2.default.header },
	          'That\'s great! Now we can help you do it!'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _SignUp2.default.banner },
	          _react2.default.createElement(
	            'div',
	            { className: _SignUp2.default.bannerImage },
	            _react2.default.createElement(_reactFontawesome2.default, { className: _SignUp2.default.userIcon, name: 'user' })
	          ),
	          _react2.default.createElement('div', { className: _SignUp2.default.bannerImageLine }),
	          _react2.default.createElement(
	            'div',
	            { className: _SignUp2.default.bannerImage },
	            _react2.default.createElement(_reactFontawesome2.default, { className: _SignUp2.default.circleArrowIcon, name: 'arrow-circle-o-up' })
	          ),
	          _react2.default.createElement('div', { className: _SignUp2.default.bannerImageLine }),
	          _react2.default.createElement(
	            'div',
	            { className: _SignUp2.default.bannerImage },
	            _react2.default.createElement(_reactFontawesome2.default, { className: _SignUp2.default.handRightIcon, name: 'hand-o-right' })
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: _SignUp2.default.content },
	          'Get Professional Guidance and Special Access to Resources & Ex-Lawyer Mentors to Help You Make Your Career Change'
	        ),
	        _react2.default.createElement(_UserSignUpForm2.default, { onSubmit: this.handleSubmit.bind(this) }),
	        _react2.default.createElement(
	          _reactModal2.default,
	          { isOpen: this.state.modalIsOpen,
	            onRequestClose: this.closeModal.bind(this),
	            style: modalStyles },
	          _react2.default.createElement(
	            'div',
	            { className: _SignUp2.default.modalBanner },
	            'Thank you for signing up!'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _SignUp2.default.modalMessage },
	            _react2.default.createElement(
	              'p',
	              null,
	              'We will contact you soon to learn more about you.  From there, we\'ll tailor a plan that will result in you transitioning to a new, fulfilling career.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'In the meantime, if you\'re curious you can take a look at other potential careers.'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _SignUp2.default.modalRedirectButtons },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { className: _SignUp2.default.modalRedirectButton, to: '/career_search' },
	              'Explore Careers'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _SignUp2.default.modalFooter },
	            _react2.default.createElement(_reactFontawesome2.default, { className: _SignUp2.default.envelopeIcon, name: 'envelope-square' }),
	            _react2.default.createElement(
	              'div',
	              { className: _SignUp2.default.modalFooterMessage },
	              'Have a question or comment? Leave us a message!'
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return SignUp;
	}(_react2.default.Component);
	
	var mapActionCreators = {
	  submitUserSignUp: _signUp.submitUserSignUp
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapActionCreators)(SignUp);

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(533);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(350)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(533, function() {
				var newContent = __webpack_require__(533);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(349)();
	// imports
	
	
	// module
	exports.push([module.id, ".SignUp__rc-slider___2OU9o{position:relative;height:4px;width:100%;border-radius:6px;background-color:#e9e9e9}.SignUp__rc-slider___2OU9o,.SignUp__rc-slider___2OU9o *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}.SignUp__rc-slider-track___TGAip{position:absolute;left:0;height:4px;border-radius:6px;background-color:#abe2fb;z-index:1}.SignUp__rc-slider-handle___26EpI{position:absolute;margin-left:-7px;margin-top:-5px;width:14px;height:14px;cursor:pointer;border-radius:50%;border:2px solid #96dbfa;background-color:#fff;z-index:2}.SignUp__rc-slider-handle___26EpI:hover{border-color:#57c5f7}.SignUp__rc-slider-handle-active___16SP_:active{border-color:#57c5f7;box-shadow:0 0 5px #57c5f7}.SignUp__rc-slider-mark___2O5dT{position:absolute;top:10px;left:0;width:100%;font-size:12px;z-index:3}.SignUp__rc-slider-mark-text___1DMqI{position:absolute;display:inline-block;vertical-align:middle;text-align:center;cursor:pointer;color:#999}.SignUp__rc-slider-mark-text-active___3DZ4S{color:#666}.SignUp__rc-slider-step___1hxAc{position:absolute;width:100%;height:4px;background:transparent;z-index:1}.SignUp__rc-slider-dot___12nz8{position:absolute;bottom:-2px;width:8px;height:8px;border:2px solid #e9e9e9;background-color:#fff;cursor:pointer;border-radius:50%;vertical-align:middle}.SignUp__rc-slider-dot___12nz8,.SignUp__rc-slider-dot___12nz8:first-child,.SignUp__rc-slider-dot___12nz8:last-child{margin-left:-4px}.SignUp__rc-slider-dot-active___31lGB{border-color:#96dbfa}.SignUp__rc-slider-disabled___2b_c3{background-color:#e9e9e9}.SignUp__rc-slider-disabled___2b_c3 .SignUp__rc-slider-track___TGAip{background-color:#ccc}.SignUp__rc-slider-disabled___2b_c3 .SignUp__rc-slider-dot___12nz8,.SignUp__rc-slider-disabled___2b_c3 .SignUp__rc-slider-handle___26EpI{border-color:#ccc;background-color:#fff;cursor:default}.SignUp__rc-slider-disabled___2b_c3 .SignUp__rc-slider-dot___12nz8,.SignUp__rc-slider-disabled___2b_c3 .SignUp__rc-slider-mark-text___1DMqI{cursor:default!important}.SignUp__rc-slider-vertical___2_R2b{width:4px;height:100%}.SignUp__rc-slider-vertical___2_R2b .SignUp__rc-slider-track___TGAip{bottom:0;width:4px}.SignUp__rc-slider-vertical___2_R2b .SignUp__rc-slider-handle___26EpI{position:absolute;margin-left:-5px;margin-bottom:-7px}.SignUp__rc-slider-vertical___2_R2b .SignUp__rc-slider-mark___2O5dT{top:0;left:10px;height:100%}.SignUp__rc-slider-vertical___2_R2b .SignUp__rc-slider-step___1hxAc{height:100%;width:4px}.SignUp__rc-slider-vertical___2_R2b .SignUp__rc-slider-dot___12nz8{left:2px;margin-bottom:-4px}.SignUp__rc-slider-vertical___2_R2b .SignUp__rc-slider-dot___12nz8:first-child,.SignUp__rc-slider-vertical___2_R2b .SignUp__rc-slider-dot___12nz8:last-child{margin-bottom:-4px}.SignUp__rc-slider-tooltip-zoom-down-appear___3Hf_b,.SignUp__rc-slider-tooltip-zoom-down-enter___1LEFF,.SignUp__rc-slider-tooltip-zoom-down-leave___2Eugl{-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:block!important;-webkit-animation-play-state:paused;animation-play-state:paused}.SignUp__rc-slider-tooltip-zoom-down-appear___3Hf_b.SignUp__rc-slider-tooltip-zoom-down-appear-active___2j2S3,.SignUp__rc-slider-tooltip-zoom-down-enter___1LEFF.SignUp__rc-slider-tooltip-zoom-down-enter-active___2hURm{-webkit-animation-name:SignUp__rcSliderTooltipZoomDownIn___2B3Me;animation-name:SignUp__rcSliderTooltipZoomDownIn___2B3Me;-webkit-animation-play-state:running;animation-play-state:running}.SignUp__rc-slider-tooltip-zoom-down-leave___2Eugl.SignUp__rc-slider-tooltip-zoom-down-leave-active___q3tGn{-webkit-animation-name:SignUp__rcSliderTooltipZoomDownOut___3Kzjr;animation-name:SignUp__rcSliderTooltipZoomDownOut___3Kzjr;-webkit-animation-play-state:running;animation-play-state:running}.SignUp__rc-slider-tooltip-zoom-down-appear___3Hf_b,.SignUp__rc-slider-tooltip-zoom-down-enter___1LEFF{-webkit-transform:scale(0);transform:scale(0);-webkit-animation-timing-function:cubic-bezier(.23,1,.32,1);animation-timing-function:cubic-bezier(.23,1,.32,1)}.SignUp__rc-slider-tooltip-zoom-down-leave___2Eugl{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06)}@-webkit-keyframes SignUp__rcSliderTooltipZoomDownIn___2B3Me{0%{opacity:0;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1);transform:scale(1)}}@keyframes SignUp__rcSliderTooltipZoomDownIn___2B3Me{0%{opacity:0;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes SignUp__rcSliderTooltipZoomDownOut___3Kzjr{0%{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0);transform:scale(0)}}@keyframes SignUp__rcSliderTooltipZoomDownOut___3Kzjr{0%{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0);transform:scale(0)}}.SignUp__rc-tooltip___uHYle{position:absolute;left:-9999px;top:-9999px;z-index:4;visibility:visible}.SignUp__rc-tooltip___uHYle,.SignUp__rc-tooltip___uHYle *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}.SignUp__rc-tooltip-hidden___2wVLk{display:none}.SignUp__rc-tooltip-placement-top___2t7kp{padding:4px 0 8px}.SignUp__rc-tooltip-inner___3Pstl{padding:6px 2px;min-width:24px;height:24px;font-size:12px;line-height:1;color:#fff;text-align:center;text-decoration:none;background-color:#6c6c6c;border-radius:6px;box-shadow:0 0 4px #d9d9d9}.SignUp__rc-tooltip-arrow___1UUva{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.SignUp__rc-tooltip-placement-top___2t7kp .SignUp__rc-tooltip-arrow___1UUva{bottom:4px;left:50%;margin-left:-4px;border-width:4px 4px 0;border-top-color:#6c6c6c}.SignUp__userSignUpContainer___3Lrdh{margin:0 auto;text-align:center;width:75%}.SignUp__header___3NHbW{margin-bottom:20px;font-size:30px}.SignUp__banner___LVELY{display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;margin-bottom:20px;width:80%}.SignUp__bannerImage___2yN-z{font-size:100px;width:auto}.SignUp__bannerImageLine___Etac_{border:2px solid grey;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:1px;margin:auto 10px}.SignUp__userIcon___RJhnT{color:#ff4500}.SignUp__circleArrowIcon___2mqd1{color:#8fbc8f}.SignUp__handRightIcon___1_lgP{color:navy}.SignUp__content___3VngQ{font-size:20px;margin:0 auto;margin-bottom:50px;text-align:center;width:80%}.SignUp__modalBanner___2Awnp{margin-top:10px;font-size:30px;text-align:center}.SignUp__modalMessage___1buOT{margin-top:20px;font-size:18px;text-align:center}.SignUp__modalRedirectButtons___1DXzm{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap}.SignUp__modalRedirectButton___1orAg{background-color:#66cdaa;border-radius:15px;color:#fff;font-size:18px;height:35px;margin:0 auto;margin-top:20px;padding:5px;width:175px;text-align:center}a.SignUp__modalRedirectButton___1orAg{text-decoration:none;color:#fff}.SignUp__modalFooter___3rzm2{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;margin-top:50px;text-align:center}.SignUp__envelopeIcon___1-ygg{cursor:pointer;font-size:40px}.SignUp__envelopeIcon___1-ygg:hover{-webkit-animation:SignUp__highlight___30OQM linear .25s;animation:SignUp__highlight___30OQM linear .25s;color:#1e90ff}.SignUp__modalFooterMessage___1OT9r{font-size:16px;font-style:italic;margin:5px 15px}@-webkit-keyframes SignUp__highlight___30OQM{0%{color:#000}to{color:#1e90ff}}@keyframes SignUp__highlight___30OQM{0%{color:#000}to{color:#1e90ff}}", "", {"version":3,"sources":["/./src/routes/SignUp/src/styles/packages/_rc-slider.scss","/./src/routes/SignUp/src/routes/SignUp/containers/SignUp.scss"],"names":[],"mappings":"AAAA,2BACE,kBAAmB,WACP,WACA,kBACO,wBACO,CAG3B,wDAFC,sBAAuB,uCACU,CAKlC,iCAEC,kBAAmB,OACX,WACI,kBACO,yBACO,SACf,CACZ,kCAEC,kBAAmB,iBACD,gBACD,WACL,YACC,eACG,kBACG,yBACO,sBACH,SACZ,CACZ,wCAEC,oBAAsB,CACvB,gDAEC,qBAAsB,0BACM,CAC7B,gCAEC,kBAAmB,SACT,OACF,WACI,eACI,SACL,CACZ,qCAEC,kBAAmB,qBACG,sBACC,kBACJ,eACH,UACJ,CACb,4CAEC,UAAY,CACb,gCAEC,kBAAmB,WACP,WACA,uBACY,SACb,CACZ,+BAEC,kBAAmB,YACN,UAEF,WACC,yBACc,sBACH,eACP,kBACG,qBACI,CACxB,oHAKC,gBAAkB,CACnB,sCAEC,oBAAsB,CACvB,oCAEC,wBAA0B,CAC3B,qEAEC,qBAAuB,CACxB,yIAGC,kBAAmB,sBACI,cACP,CACjB,4IAGC,wBAA2B,CAC5B,oCAEC,UAAW,WACE,CACd,qEAEC,SAAU,SACC,CACZ,sEAEC,kBAAmB,iBACD,kBACE,CACrB,oEAEC,MAAO,UACI,WACE,CACd,oEAEC,YAAa,SACF,CACZ,mEAEC,SAAU,kBACU,CACrB,6JAKC,kBAAoB,CACrB,0JAYC,+BAAgC,uBACA,iCACE,yBACA,wBACR,oCACW,2BACA,CACtC,0NAGC,iEAAkD,yDACA,qCACZ,4BACA,CACvC,4GAEC,kEAAmD,0DACA,qCACb,4BACA,CACvC,uGAGC,2BAAwB,mBACA,4DACuB,mDACA,CAChD,mDAEC,kEAA+C,yDACA,CAChD,6DAEC,GACE,UAAW,kCACwB,0BACA,2BACX,kBACA,CAAA,GAGxB,kCAAmC,0BACA,2BACX,kBACA,CAAA,CAAA,qDAI1B,GACE,UAAW,kCACwB,0BACA,2BACX,kBACA,CAAA,GAGxB,kCAAmC,0BACA,2BACX,kBACA,CAAA,CAAA,8DAI1B,GACE,kCAAmC,0BACA,2BACX,kBACA,CAAA,GAGxB,UAAW,kCACwB,0BACA,2BACX,kBACA,CAAA,CAAA,sDAI1B,GACE,kCAAmC,0BACA,2BACX,kBACA,CAAA,GAGxB,UAAW,kCACwB,0BACA,2BACX,kBACA,CAAA,CAAA,4BAI1B,kBAAmB,aACL,YACD,UACF,kBACS,CAGrB,0DAFC,sBAAuB,uCACU,CAKlC,mCAEC,YAAc,CACf,0CAEC,iBAAqB,CACtB,kCAEC,gBAAiB,eACD,YACH,eACG,cACD,WACH,kBACO,qBACG,yBACI,kBACP,0BACS,CAC7B,kCAEC,kBAAmB,QACV,SACC,yBACgB,kBACN,CACrB,4EAEC,WAAY,SACF,iBACQ,uBACM,wBACE,CAC3B,qCCvRC,cAAiB,kBACE,SACR,CACZ,wBAIC,mBAAoB,cACJ,CACjB,wBAIC,qBAAA,oBAAA,aAAc,cACG,mBACG,SACT,CACZ,6BAGC,gBAAiB,UACL,CACb,iCAGC,sBAAuB,oBACvB,oBAAA,YAAa,WACD,gBACM,CACnB,0BAGC,aAAiB,CAClB,iCAGC,aAAoB,CACrB,+BAGC,UAAY,CACb,yBAIC,eAAgB,cACC,mBACG,kBACD,SACR,CACZ,6BAIC,gBAAiB,eACD,iBACG,CACpB,8BAGC,gBAAiB,eACD,iBACG,CACpB,sCAGC,qBAAA,oBAAA,aAAc,2BACd,uBAAA,kBAAoB,CACrB,qCAGC,yBAAmC,mBACf,WACP,eACG,YACH,cACI,gBACA,YACJ,YACA,iBACM,CACpB,sCAGC,qBAAsB,UACT,CACd,6BAGC,qBAAA,oBAAA,aAAc,sBACd,kBAAA,cAAe,gBACE,iBACE,CACpB,8BAGC,eAAgB,cACA,CACjB,oCAGC,wDAAA,gDAAkC,aAChB,CACnB,oCAGC,eAAgB,kBACG,eACF,CAClB,6CAGC,GAAM,UAAa,CAAA,GACb,aAAkB,CAAA,CAF1B,qCACE,GAAM,UAAa,CAAA,GACb,aAAkB,CAAA,CAAA","file":"SignUp.scss","sourcesContent":[".rc-slider {\n  position: relative;\n  height: 4px;\n  width: 100%;\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n  z-index: 1;\n}\n.rc-slider-handle {\n  position: absolute;\n  margin-left: -7px;\n  margin-top: -5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  z-index: 2;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle-active:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n  z-index: 3;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n  z-index: 1;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot:first-child {\n  margin-left: -4px;\n}\n.rc-slider-dot:last-child {\n  margin-left: -4px;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  background-color: #fff;\n  cursor: default;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: default !important;\n}\n.rc-slider-vertical {\n  width: 4px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-track {\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  position: absolute;\n  margin-left: -5px;\n  margin-bottom: -7px;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 10px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownIn;\n          animation-name: rcSliderTooltipZoomDownIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownOut;\n          animation-name: rcSliderTooltipZoomDownOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@-webkit-keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n.rc-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  z-index: 4;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-tooltip-hidden {\n  display: none;\n}\n.rc-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-tooltip-placement-top .rc-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n","@import '../../../styles/base';\n\n// FOR EMPLOYERS PAGE CONTAINER\n.userSignUpContainer {\n  margin: 0px auto;\n  text-align: center;\n  width: 75%;\n}\n\n// HEADER\n.header {\n  margin-bottom: 20px;\n  font-size: 30px;\n}\n\n// BANNER\n.banner {\n  display: flex;\n  margin: 0px auto;\n  margin-bottom: 20px;\n  width: 80%;\n}\n\n.bannerImage {\n  font-size: 100px;\n  width: auto;\n}\n\n.bannerImageLine {\n  border: 2px solid grey;\n  flex-grow: 1;\n  height: 1px;\n  margin: auto 10px;\n}\n\n.userIcon {\n  color: orangered;\n}\n\n.circleArrowIcon {\n  color: darkseagreen;\n}\n\n.handRightIcon {\n  color: navy;\n}\n\n// TEXT CONTENT\n.content {\n  font-size: 20px;\n  margin: 0px auto;\n  margin-bottom: 50px;\n  text-align: center;\n  width: 80%;\n}\n\n// MODAL\n.modalBanner {\n  margin-top: 10px;\n  font-size: 30px;\n  text-align: center;\n}\n\n.modalMessage {\n  margin-top: 20px;\n  font-size: 18px;\n  text-align: center;\n}\n\n.modalRedirectButtons {\n  display: flex;\n  flex-flow: row wrap;\n}\n\n.modalRedirectButton {\n  background-color: mediumaquamarine;\n  border-radius: 15px;\n  color: white;\n  font-size: 18px;\n  height: 35px;\n  margin: 0px auto;\n  margin-top: 20px;\n  padding: 5px;\n  width: 175px;\n  text-align: center;\n}\n\na.modalRedirectButton {\n  text-decoration: none;\n  color: white;\n}\n\n.modalFooter {\n  display: flex;\n  flex-flow: row;\n  margin-top: 50px;\n  text-align: center;\n}\n\n.envelopeIcon {\n  cursor: pointer;\n  font-size: 40px;\n}\n\n.envelopeIcon:hover {\n  animation: highlight linear 0.25s;\n  color: dodgerblue;\n}\n\n.modalFooterMessage {\n  font-size: 16px;\n  font-style: italic;\n  margin: 5px 15px;\n}\n\n@keyframes highlight {\n  0%   {color: black;}\n  100% {color: dodgerblue;}\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"rc-slider": "SignUp__rc-slider___2OU9o",
		"rc-slider-track": "SignUp__rc-slider-track___TGAip",
		"rc-slider-handle": "SignUp__rc-slider-handle___26EpI",
		"rc-slider-handle-active": "SignUp__rc-slider-handle-active___16SP_",
		"rc-slider-mark": "SignUp__rc-slider-mark___2O5dT",
		"rc-slider-mark-text": "SignUp__rc-slider-mark-text___1DMqI",
		"rc-slider-mark-text-active": "SignUp__rc-slider-mark-text-active___3DZ4S",
		"rc-slider-step": "SignUp__rc-slider-step___1hxAc",
		"rc-slider-dot": "SignUp__rc-slider-dot___12nz8",
		"rc-slider-dot-active": "SignUp__rc-slider-dot-active___31lGB",
		"rc-slider-disabled": "SignUp__rc-slider-disabled___2b_c3",
		"rc-slider-vertical": "SignUp__rc-slider-vertical___2_R2b",
		"rc-slider-tooltip-zoom-down-appear": "SignUp__rc-slider-tooltip-zoom-down-appear___3Hf_b",
		"rc-slider-tooltip-zoom-down-enter": "SignUp__rc-slider-tooltip-zoom-down-enter___1LEFF",
		"rc-slider-tooltip-zoom-down-leave": "SignUp__rc-slider-tooltip-zoom-down-leave___2Eugl",
		"rc-slider-tooltip-zoom-down-appear-active": "SignUp__rc-slider-tooltip-zoom-down-appear-active___2j2S3",
		"rc-slider-tooltip-zoom-down-enter-active": "SignUp__rc-slider-tooltip-zoom-down-enter-active___2hURm",
		"rcSliderTooltipZoomDownIn": "SignUp__rcSliderTooltipZoomDownIn___2B3Me",
		"rc-slider-tooltip-zoom-down-leave-active": "SignUp__rc-slider-tooltip-zoom-down-leave-active___q3tGn",
		"rcSliderTooltipZoomDownOut": "SignUp__rcSliderTooltipZoomDownOut___3Kzjr",
		"rc-tooltip": "SignUp__rc-tooltip___uHYle",
		"rc-tooltip-hidden": "SignUp__rc-tooltip-hidden___2wVLk",
		"rc-tooltip-placement-top": "SignUp__rc-tooltip-placement-top___2t7kp",
		"rc-tooltip-inner": "SignUp__rc-tooltip-inner___3Pstl",
		"rc-tooltip-arrow": "SignUp__rc-tooltip-arrow___1UUva",
		"userSignUpContainer": "SignUp__userSignUpContainer___3Lrdh",
		"header": "SignUp__header___3NHbW",
		"banner": "SignUp__banner___LVELY",
		"bannerImage": "SignUp__bannerImage___2yN-z",
		"bannerImageLine": "SignUp__bannerImageLine___Etac_",
		"userIcon": "SignUp__userIcon___RJhnT",
		"circleArrowIcon": "SignUp__circleArrowIcon___2mqd1",
		"handRightIcon": "SignUp__handRightIcon___1_lgP",
		"content": "SignUp__content___3VngQ",
		"modalBanner": "SignUp__modalBanner___2Awnp",
		"modalMessage": "SignUp__modalMessage___1buOT",
		"modalRedirectButtons": "SignUp__modalRedirectButtons___1DXzm",
		"modalRedirectButton": "SignUp__modalRedirectButton___1orAg",
		"modalFooter": "SignUp__modalFooter___3rzm2",
		"envelopeIcon": "SignUp__envelopeIcon___1-ygg",
		"highlight": "SignUp__highlight___30OQM",
		"modalFooterMessage": "SignUp__modalFooterMessage___1OT9r"
	};

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.submitUserSignUp = exports.USER_SIGN_UP_FAILURE = exports.USER_SIGN_UP_SUCCESS = undefined;
	
	var _defineProperty2 = __webpack_require__(446);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _promise = __webpack_require__(447);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _ACTION_HANDLERS;
	
	exports.userSignUpSuccess = userSignUpSuccess;
	exports.userSignUpFailure = userSignUpFailure;
	exports.default = signUpReducer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var USER_SIGN_UP_SUCCESS = exports.USER_SIGN_UP_SUCCESS = 'USER_SIGN_UP_SUCCESS';
	var USER_SIGN_UP_FAILURE = exports.USER_SIGN_UP_FAILURE = 'USER_SIGN_UP_FAILURE';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	
	/*  This is a thunk, meaning it is a function that immediately
	 returns a function for lazy evaluation. It is incredibly useful for
	 creating async actions, especially when combined with redux-thunk!
	
	 NOTE: This is solely for demonstration purposes. In a real application,
	 you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
	 reducer take care of this logic.  */
	
	function userSignUpSuccess() {
	  console.log('success');
	  return {
	    type: USER_SIGN_UP_SUCCESS,
	    success: true
	  };
	}
	
	function userSignUpFailure() {
	  return {
	    type: USER_SIGN_UP_FAILURE,
	    success: false
	  };
	}
	
	var submitUserSignUp = exports.submitUserSignUp = function submitUserSignUp(formData) {
	  return function (dispatch, getState) {
	    return new _promise2.default(function (resolve) {
	      setTimeout(function () {
	        dispatch(userSignUpSuccess);
	        resolve();
	      }, 200);
	    });
	  };
	};
	
	var actions = exports.actions = {
	  submitUserSignUp: submitUserSignUp,
	  userSignUpSuccess: userSignUpSuccess,
	  userSignUpFailure: userSignUpFailure
	};
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, USER_SIGN_UP_SUCCESS, function (state, action) {
	  return action.success;
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, USER_SIGN_UP_FAILURE, function (state, action) {
	  return action.failure;
	}), _ACTION_HANDLERS);
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = false;
	function signUpReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserSignUpForm = exports.fields = undefined;
	
	var _extends2 = __webpack_require__(250);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(357);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(362);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(363);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(367);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(402);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _UserSignUpForm = __webpack_require__(536);
	
	var _UserSignUpForm2 = _interopRequireDefault(_UserSignUpForm);
	
	var _reduxForm = __webpack_require__(288);
	
	var _validateUserSignUpForm = __webpack_require__(538);
	
	var _validateUserSignUpForm2 = _interopRequireDefault(_validateUserSignUpForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var fields = exports.fields = ['firstName', 'lastName', 'emailAddress'];
	
	var UserSignUpForm = exports.UserSignUpForm = function (_React$Component) {
	  (0, _inherits3.default)(UserSignUpForm, _React$Component);
	
	  function UserSignUpForm() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, UserSignUpForm);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(UserSignUpForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.defaultProps = {
	      fields: { firstName: '', lastName: '', emailAddress: '' },
	      submitting: false,
	      success: false
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(UserSignUpForm, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var fields = _props.fields;
	      var handleSubmit = _props.handleSubmit;
	      var submitting = _props.submitting;
	      var success = _props.success;
	
	
	      return _react2.default.createElement(
	        'form',
	        { className: _UserSignUpForm2.default.userSignUpFormContainer, onSubmit: handleSubmit },
	        _react2.default.createElement(
	          'div',
	          { className: _UserSignUpForm2.default.formRow },
	          _react2.default.createElement(
	            'label',
	            null,
	            'First Name:'
	          ),
	          _react2.default.createElement('input', (0, _extends3.default)({ type: 'text', placeholder: 'First Name' }, fields['firstName'])),
	          fields['firstName'].error && fields['firstName'].touched && _react2.default.createElement(
	            'div',
	            { className: _UserSignUpForm2.default.errorMessage },
	            fields['firstName'].error
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _UserSignUpForm2.default.formRow },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Last Name:'
	          ),
	          _react2.default.createElement('input', (0, _extends3.default)({ type: 'text', placeholder: 'Last Name' }, fields['lastName'])),
	          fields['lastName'].error && fields['lastName'].touched && _react2.default.createElement(
	            'div',
	            { className: _UserSignUpForm2.default.errorMessage },
	            fields['lastName'].error
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _UserSignUpForm2.default.formRow },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Email Address:'
	          ),
	          _react2.default.createElement('input', (0, _extends3.default)({ type: 'email', placeholder: 'Email Address' }, fields['emailAddress'])),
	          fields['emailAddress'].error && fields['emailAddress'].touched && _react2.default.createElement(
	            'div',
	            { className: _UserSignUpForm2.default.errorMessage },
	            fields['emailAddress'].error
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _UserSignUpForm2.default.formRow },
	          _react2.default.createElement('input', { type: 'checkbox' }),
	          _react2.default.createElement(
	            'label',
	            { className: _UserSignUpForm2.default.termsAndPolicyAgreement },
	            'I agree to the Course Correct Terms & Privacy Policy'
	          )
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: _UserSignUpForm2.default.submitButton, type: 'submit' },
	          'Submit'
	        )
	      );
	    }
	  }]);
	  return UserSignUpForm;
	}(_react2.default.Component);
	
	UserSignUpForm.propTypes = {
	  fields: _react2.default.PropTypes.object.isRequired,
	  handleSubmit: _react2.default.PropTypes.func.isRequired,
	  submitting: _react2.default.PropTypes.bool.isRequired
	
	  // The success prop has been commented out from propTypes because it raises a warning message; to be fixed later
	  // success: React.PropTypes.bool.isRequired
	};
	
	exports.UserSignUpForm = UserSignUpForm = (0, _reduxForm.reduxForm)({
	  form: 'userSignUp',
	  fields: fields,
	  validate: _validateUserSignUpForm2.default
	})(UserSignUpForm);
	
	exports.default = UserSignUpForm;

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(537);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(350)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(537, function() {
				var newContent = __webpack_require__(537);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(349)();
	// imports
	
	
	// module
	exports.push([module.id, ".UserSignUpForm__rc-slider___151V4{position:relative;height:4px;width:100%;border-radius:6px;background-color:#e9e9e9}.UserSignUpForm__rc-slider___151V4,.UserSignUpForm__rc-slider___151V4 *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}.UserSignUpForm__rc-slider-track___3IWs9{position:absolute;left:0;height:4px;border-radius:6px;background-color:#abe2fb;z-index:1}.UserSignUpForm__rc-slider-handle___1rp41{position:absolute;margin-left:-7px;margin-top:-5px;width:14px;height:14px;cursor:pointer;border-radius:50%;border:2px solid #96dbfa;background-color:#fff;z-index:2}.UserSignUpForm__rc-slider-handle___1rp41:hover{border-color:#57c5f7}.UserSignUpForm__rc-slider-handle-active___J3DG1:active{border-color:#57c5f7;box-shadow:0 0 5px #57c5f7}.UserSignUpForm__rc-slider-mark___fQ8Yz{position:absolute;top:10px;left:0;width:100%;font-size:12px;z-index:3}.UserSignUpForm__rc-slider-mark-text___2KZcT{position:absolute;display:inline-block;vertical-align:middle;text-align:center;cursor:pointer;color:#999}.UserSignUpForm__rc-slider-mark-text-active___3UwkN{color:#666}.UserSignUpForm__rc-slider-step___2dpok{position:absolute;width:100%;height:4px;background:transparent;z-index:1}.UserSignUpForm__rc-slider-dot___13pez{position:absolute;bottom:-2px;width:8px;height:8px;border:2px solid #e9e9e9;background-color:#fff;cursor:pointer;border-radius:50%;vertical-align:middle}.UserSignUpForm__rc-slider-dot___13pez,.UserSignUpForm__rc-slider-dot___13pez:first-child,.UserSignUpForm__rc-slider-dot___13pez:last-child{margin-left:-4px}.UserSignUpForm__rc-slider-dot-active___s9sms{border-color:#96dbfa}.UserSignUpForm__rc-slider-disabled___1rN6j{background-color:#e9e9e9}.UserSignUpForm__rc-slider-disabled___1rN6j .UserSignUpForm__rc-slider-track___3IWs9{background-color:#ccc}.UserSignUpForm__rc-slider-disabled___1rN6j .UserSignUpForm__rc-slider-dot___13pez,.UserSignUpForm__rc-slider-disabled___1rN6j .UserSignUpForm__rc-slider-handle___1rp41{border-color:#ccc;background-color:#fff;cursor:default}.UserSignUpForm__rc-slider-disabled___1rN6j .UserSignUpForm__rc-slider-dot___13pez,.UserSignUpForm__rc-slider-disabled___1rN6j .UserSignUpForm__rc-slider-mark-text___2KZcT{cursor:default!important}.UserSignUpForm__rc-slider-vertical___f8Ybk{width:4px;height:100%}.UserSignUpForm__rc-slider-vertical___f8Ybk .UserSignUpForm__rc-slider-track___3IWs9{bottom:0;width:4px}.UserSignUpForm__rc-slider-vertical___f8Ybk .UserSignUpForm__rc-slider-handle___1rp41{position:absolute;margin-left:-5px;margin-bottom:-7px}.UserSignUpForm__rc-slider-vertical___f8Ybk .UserSignUpForm__rc-slider-mark___fQ8Yz{top:0;left:10px;height:100%}.UserSignUpForm__rc-slider-vertical___f8Ybk .UserSignUpForm__rc-slider-step___2dpok{height:100%;width:4px}.UserSignUpForm__rc-slider-vertical___f8Ybk .UserSignUpForm__rc-slider-dot___13pez{left:2px;margin-bottom:-4px}.UserSignUpForm__rc-slider-vertical___f8Ybk .UserSignUpForm__rc-slider-dot___13pez:first-child,.UserSignUpForm__rc-slider-vertical___f8Ybk .UserSignUpForm__rc-slider-dot___13pez:last-child{margin-bottom:-4px}.UserSignUpForm__rc-slider-tooltip-zoom-down-appear___Eu8rH,.UserSignUpForm__rc-slider-tooltip-zoom-down-enter___3_5Qy,.UserSignUpForm__rc-slider-tooltip-zoom-down-leave___Zywwh{-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:block!important;-webkit-animation-play-state:paused;animation-play-state:paused}.UserSignUpForm__rc-slider-tooltip-zoom-down-appear___Eu8rH.UserSignUpForm__rc-slider-tooltip-zoom-down-appear-active___1F00a,.UserSignUpForm__rc-slider-tooltip-zoom-down-enter___3_5Qy.UserSignUpForm__rc-slider-tooltip-zoom-down-enter-active___mDSL1{-webkit-animation-name:UserSignUpForm__rcSliderTooltipZoomDownIn___3maWl;animation-name:UserSignUpForm__rcSliderTooltipZoomDownIn___3maWl;-webkit-animation-play-state:running;animation-play-state:running}.UserSignUpForm__rc-slider-tooltip-zoom-down-leave___Zywwh.UserSignUpForm__rc-slider-tooltip-zoom-down-leave-active___3eRH9{-webkit-animation-name:UserSignUpForm__rcSliderTooltipZoomDownOut___1cBJd;animation-name:UserSignUpForm__rcSliderTooltipZoomDownOut___1cBJd;-webkit-animation-play-state:running;animation-play-state:running}.UserSignUpForm__rc-slider-tooltip-zoom-down-appear___Eu8rH,.UserSignUpForm__rc-slider-tooltip-zoom-down-enter___3_5Qy{-webkit-transform:scale(0);transform:scale(0);-webkit-animation-timing-function:cubic-bezier(.23,1,.32,1);animation-timing-function:cubic-bezier(.23,1,.32,1)}.UserSignUpForm__rc-slider-tooltip-zoom-down-leave___Zywwh{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06)}@-webkit-keyframes UserSignUpForm__rcSliderTooltipZoomDownIn___3maWl{0%{opacity:0;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1);transform:scale(1)}}@keyframes UserSignUpForm__rcSliderTooltipZoomDownIn___3maWl{0%{opacity:0;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes UserSignUpForm__rcSliderTooltipZoomDownOut___1cBJd{0%{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0);transform:scale(0)}}@keyframes UserSignUpForm__rcSliderTooltipZoomDownOut___1cBJd{0%{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0);transform:scale(0)}}.UserSignUpForm__rc-tooltip___p89FB{position:absolute;left:-9999px;top:-9999px;z-index:4;visibility:visible}.UserSignUpForm__rc-tooltip___p89FB,.UserSignUpForm__rc-tooltip___p89FB *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}.UserSignUpForm__rc-tooltip-hidden___3QfcX{display:none}.UserSignUpForm__rc-tooltip-placement-top___1c1Rb{padding:4px 0 8px}.UserSignUpForm__rc-tooltip-inner___1xklq{padding:6px 2px;min-width:24px;height:24px;font-size:12px;line-height:1;color:#fff;text-align:center;text-decoration:none;background-color:#6c6c6c;border-radius:6px;box-shadow:0 0 4px #d9d9d9}.UserSignUpForm__rc-tooltip-arrow___2_9Wl{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.UserSignUpForm__rc-tooltip-placement-top___1c1Rb .UserSignUpForm__rc-tooltip-arrow___2_9Wl{bottom:4px;left:50%;margin-left:-4px;border-width:4px 4px 0;border-top-color:#6c6c6c}.UserSignUpForm__userSignUpFormContainer___31Giu{font-size:18px;width:100%}.UserSignUpForm__formRow___CxV79{margin-bottom:5px}label{width:175px;text-align:left}input,label{font-family:Helvetica Neue}input{font-style:normal;padding:0 5px;width:250px}.UserSignUpForm__errorMessage___1Vv51{-webkit-animation:UserSignUpForm__slideDown___2nzUb linear .05s;animation:UserSignUpForm__slideDown___2nzUb linear .05s;color:red;font-style:italic;margin-left:180px}.UserSignUpForm__submitButton___2FhDM{background-color:#66cdaa;border:none;border-radius:25px;color:#fff;margin-top:10px;padding:10px 50px}input[type=checkbox]{width:auto}.UserSignUpForm__termsAndPolicyAgreement___1yrog{font-size:14px;margin-left:10px;margin-top:30px;width:auto;text-align:left}@-webkit-keyframes UserSignUpForm__slideDown___2nzUb{0%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes UserSignUpForm__slideDown___2nzUb{0%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}", "", {"version":3,"sources":["/./src/forms/src/styles/packages/_rc-slider.scss","/./src/forms/src/forms/UserSignUpForm/UserSignUpForm.scss","/./src/forms/src/styles/variables/_fonts.scss"],"names":[],"mappings":"AAAA,mCACE,kBAAmB,WACP,WACA,kBACO,wBACO,CAG3B,wEAFC,sBAAuB,uCACU,CAKlC,yCAEC,kBAAmB,OACX,WACI,kBACO,yBACO,SACf,CACZ,0CAEC,kBAAmB,iBACD,gBACD,WACL,YACC,eACG,kBACG,yBACO,sBACH,SACZ,CACZ,gDAEC,oBAAsB,CACvB,wDAEC,qBAAsB,0BACM,CAC7B,wCAEC,kBAAmB,SACT,OACF,WACI,eACI,SACL,CACZ,6CAEC,kBAAmB,qBACG,sBACC,kBACJ,eACH,UACJ,CACb,oDAEC,UAAY,CACb,wCAEC,kBAAmB,WACP,WACA,uBACY,SACb,CACZ,uCAEC,kBAAmB,YACN,UAEF,WACC,yBACc,sBACH,eACP,kBACG,qBACI,CACxB,4IAKC,gBAAkB,CACnB,8CAEC,oBAAsB,CACvB,4CAEC,wBAA0B,CAC3B,qFAEC,qBAAuB,CACxB,yKAGC,kBAAmB,sBACI,cACP,CACjB,4KAGC,wBAA2B,CAC5B,4CAEC,UAAW,WACE,CACd,qFAEC,SAAU,SACC,CACZ,sFAEC,kBAAmB,iBACD,kBACE,CACrB,oFAEC,MAAO,UACI,WACE,CACd,oFAEC,YAAa,SACF,CACZ,mFAEC,SAAU,kBACU,CACrB,6LAKC,kBAAoB,CACrB,kLAYC,+BAAgC,uBACA,iCACE,yBACA,wBACR,oCACW,2BACA,CACtC,0PAGC,yEAAkD,iEACA,qCACZ,4BACA,CACvC,4HAEC,0EAAmD,kEACA,qCACb,4BACA,CACvC,uHAGC,2BAAwB,mBACA,4DACuB,mDACA,CAChD,2DAEC,kEAA+C,yDACA,CAChD,qEAEC,GACE,UAAW,kCACwB,0BACA,2BACX,kBACA,CAAA,GAGxB,kCAAmC,0BACA,2BACX,kBACA,CAAA,CAAA,6DAI1B,GACE,UAAW,kCACwB,0BACA,2BACX,kBACA,CAAA,GAGxB,kCAAmC,0BACA,2BACX,kBACA,CAAA,CAAA,sEAI1B,GACE,kCAAmC,0BACA,2BACX,kBACA,CAAA,GAGxB,UAAW,kCACwB,0BACA,2BACX,kBACA,CAAA,CAAA,8DAI1B,GACE,kCAAmC,0BACA,2BACX,kBACA,CAAA,GAGxB,UAAW,kCACwB,0BACA,2BACX,kBACA,CAAA,CAAA,oCAI1B,kBAAmB,aACL,YACD,UACF,kBACS,CAGrB,0EAFC,sBAAuB,uCACU,CAKlC,2CAEC,YAAc,CACf,kDAEC,iBAAqB,CACtB,0CAEC,gBAAiB,eACD,YACH,eACG,cACD,WACH,kBACO,qBACG,yBACI,kBACP,0BACS,CAC7B,0CAEC,kBAAmB,QACV,SACC,yBACgB,kBACN,CACrB,4FAEC,WAAY,SACF,iBACQ,uBACM,wBACE,CAC3B,iDCvRC,eAAgB,UACJ,CACb,iCAGC,iBAAmB,CACpB,MAKC,YAAa,eACI,CAClB,YAHC,0BCTyC,CDc3C,MAEE,kBAAmB,cACF,WACJ,CACd,sCAGC,gEAAA,wDAAkC,UACvB,kBACQ,iBACA,CACpB,sCAIC,yBAAmC,YACtB,mBACO,WACP,gBACI,iBACE,CACpB,qBAIC,UAAY,CACb,iDAGC,eAAgB,iBACE,gBACD,WACL,eACK,CAClB,qDAIC,GAAM,UAAW,oCAAE,2BAAoB,CAAA,GACjC,UAAW,+BAAE,sBAAoB,CAAA,CAFzC,6CACE,GAAM,UAAW,oCAAE,2BAAoB,CAAA,GACjC,UAAW,+BAAE,sBAAoB,CAAA,CAAA","file":"UserSignUpForm.scss","sourcesContent":[".rc-slider {\n  position: relative;\n  height: 4px;\n  width: 100%;\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n  z-index: 1;\n}\n.rc-slider-handle {\n  position: absolute;\n  margin-left: -7px;\n  margin-top: -5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  z-index: 2;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle-active:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n  z-index: 3;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n  z-index: 1;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot:first-child {\n  margin-left: -4px;\n}\n.rc-slider-dot:last-child {\n  margin-left: -4px;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  background-color: #fff;\n  cursor: default;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: default !important;\n}\n.rc-slider-vertical {\n  width: 4px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-track {\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  position: absolute;\n  margin-left: -5px;\n  margin-bottom: -7px;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 10px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownIn;\n          animation-name: rcSliderTooltipZoomDownIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownOut;\n          animation-name: rcSliderTooltipZoomDownOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@-webkit-keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n.rc-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  z-index: 4;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-tooltip-hidden {\n  display: none;\n}\n.rc-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-tooltip-placement-top .rc-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n","@import '../../styles/base';\n\n// FORM CONTAINER\n.userSignUpFormContainer {\n  font-size: 18px;\n  width: 100%;\n}\n\n.formRow {\n  margin-bottom: 5px;\n}\n\n// LABELS\nlabel {\n  font-family: $content-text-font-family;\n  width: 175px;\n  text-align: left;\n}\n\ninput {\n  font-family: $content-text-font-family;\n  font-style: normal;\n  padding: 0px 5px;\n  width: 250px;\n}\n\n.errorMessage {\n  animation: slideDown linear 0.05s;\n  color: red;\n  font-style: italic;\n  margin-left: 180px;\n}\n\n// BUTTONS\n.submitButton {\n  background-color: mediumaquamarine;\n  border: none;\n  border-radius: 25px;\n  color: white;\n  margin-top: 10px;\n  padding: 10px 50px;\n}\n\n// CHECKBOX\ninput[type='checkbox'] {\n  width: auto;\n}\n\n.termsAndPolicyAgreement {\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 30px;\n  width: auto;\n  text-align: left;\n}\n\n// ANIMATIONS\n@keyframes slideDown {\n  0%   {opacity: 0; transform: translate(0px, -10px)}\n  100% {opacity: 1; transform: translate(0px, 0px)}\n}\n","//Navigation Components\n$header-font-family: 'Helvetica Neue';\n$sidebar-font-family: 'Helvetica Neue';\n\n//Page Content\n$content-text-font-family: 'Helvetica Neue';\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"rc-slider": "UserSignUpForm__rc-slider___151V4",
		"rc-slider-track": "UserSignUpForm__rc-slider-track___3IWs9",
		"rc-slider-handle": "UserSignUpForm__rc-slider-handle___1rp41",
		"rc-slider-handle-active": "UserSignUpForm__rc-slider-handle-active___J3DG1",
		"rc-slider-mark": "UserSignUpForm__rc-slider-mark___fQ8Yz",
		"rc-slider-mark-text": "UserSignUpForm__rc-slider-mark-text___2KZcT",
		"rc-slider-mark-text-active": "UserSignUpForm__rc-slider-mark-text-active___3UwkN",
		"rc-slider-step": "UserSignUpForm__rc-slider-step___2dpok",
		"rc-slider-dot": "UserSignUpForm__rc-slider-dot___13pez",
		"rc-slider-dot-active": "UserSignUpForm__rc-slider-dot-active___s9sms",
		"rc-slider-disabled": "UserSignUpForm__rc-slider-disabled___1rN6j",
		"rc-slider-vertical": "UserSignUpForm__rc-slider-vertical___f8Ybk",
		"rc-slider-tooltip-zoom-down-appear": "UserSignUpForm__rc-slider-tooltip-zoom-down-appear___Eu8rH",
		"rc-slider-tooltip-zoom-down-enter": "UserSignUpForm__rc-slider-tooltip-zoom-down-enter___3_5Qy",
		"rc-slider-tooltip-zoom-down-leave": "UserSignUpForm__rc-slider-tooltip-zoom-down-leave___Zywwh",
		"rc-slider-tooltip-zoom-down-appear-active": "UserSignUpForm__rc-slider-tooltip-zoom-down-appear-active___1F00a",
		"rc-slider-tooltip-zoom-down-enter-active": "UserSignUpForm__rc-slider-tooltip-zoom-down-enter-active___mDSL1",
		"rcSliderTooltipZoomDownIn": "UserSignUpForm__rcSliderTooltipZoomDownIn___3maWl",
		"rc-slider-tooltip-zoom-down-leave-active": "UserSignUpForm__rc-slider-tooltip-zoom-down-leave-active___3eRH9",
		"rcSliderTooltipZoomDownOut": "UserSignUpForm__rcSliderTooltipZoomDownOut___1cBJd",
		"rc-tooltip": "UserSignUpForm__rc-tooltip___p89FB",
		"rc-tooltip-hidden": "UserSignUpForm__rc-tooltip-hidden___3QfcX",
		"rc-tooltip-placement-top": "UserSignUpForm__rc-tooltip-placement-top___1c1Rb",
		"rc-tooltip-inner": "UserSignUpForm__rc-tooltip-inner___1xklq",
		"rc-tooltip-arrow": "UserSignUpForm__rc-tooltip-arrow___2_9Wl",
		"userSignUpFormContainer": "UserSignUpForm__userSignUpFormContainer___31Giu",
		"formRow": "UserSignUpForm__formRow___CxV79",
		"errorMessage": "UserSignUpForm__errorMessage___1Vv51",
		"slideDown": "UserSignUpForm__slideDown___2nzUb",
		"submitButton": "UserSignUpForm__submitButton___2FhDM",
		"termsAndPolicyAgreement": "UserSignUpForm__termsAndPolicyAgreement___1yrog"
	};

/***/ },

/***/ 538:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateContact;
	function validateContact(data, props) {
	  var errors = {};
	  if (!data.firstName) {
	    errors.firstName = 'Your first name is required!';
	  }
	
	  if (!data.lastName) {
	    errors.lastName = 'Your last name is required!';
	  }
	
	  if (!data.emailAddress) {
	    errors.emailAddress = 'Your email address is required!';
	  }
	
	  return errors;
	}

/***/ }

});
//# sourceMappingURL=5.signup.9a561549b17033daaac0.js.map