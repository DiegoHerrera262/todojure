goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57332 = (function (f,blockable,meta57333){
this.f = f;
this.blockable = blockable;
this.meta57333 = meta57333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57334,meta57333__$1){
var self__ = this;
var _57334__$1 = this;
return (new cljs.core.async.t_cljs$core$async57332(self__.f,self__.blockable,meta57333__$1));
}));

(cljs.core.async.t_cljs$core$async57332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57334){
var self__ = this;
var _57334__$1 = this;
return self__.meta57333;
}));

(cljs.core.async.t_cljs$core$async57332.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57332.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async57332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async57332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta57333","meta57333",-228285869,null)], null);
}));

(cljs.core.async.t_cljs$core$async57332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57332");

(cljs.core.async.t_cljs$core$async57332.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async57332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57332.
 */
cljs.core.async.__GT_t_cljs$core$async57332 = (function cljs$core$async$__GT_t_cljs$core$async57332(f,blockable,meta57333){
return (new cljs.core.async.t_cljs$core$async57332(f,blockable,meta57333));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__57325 = arguments.length;
switch (G__57325) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async57332(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__57356 = arguments.length;
switch (G__57356) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__57363 = arguments.length;
switch (G__57363) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__57365 = arguments.length;
switch (G__57365) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_59647 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59647) : fn1.call(null,val_59647));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59647) : fn1.call(null,val_59647));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__57372 = arguments.length;
switch (G__57372) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___59655 = n;
var x_59656 = (0);
while(true){
if((x_59656 < n__5636__auto___59655)){
(a[x_59656] = x_59656);

var G__59657 = (x_59656 + (1));
x_59656 = G__59657;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57382 = (function (flag,meta57383){
this.flag = flag;
this.meta57383 = meta57383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57384,meta57383__$1){
var self__ = this;
var _57384__$1 = this;
return (new cljs.core.async.t_cljs$core$async57382(self__.flag,meta57383__$1));
}));

(cljs.core.async.t_cljs$core$async57382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57384){
var self__ = this;
var _57384__$1 = this;
return self__.meta57383;
}));

(cljs.core.async.t_cljs$core$async57382.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async57382.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async57382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta57383","meta57383",1015801909,null)], null);
}));

(cljs.core.async.t_cljs$core$async57382.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57382");

(cljs.core.async.t_cljs$core$async57382.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async57382");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57382.
 */
cljs.core.async.__GT_t_cljs$core$async57382 = (function cljs$core$async$__GT_t_cljs$core$async57382(flag,meta57383){
return (new cljs.core.async.t_cljs$core$async57382(flag,meta57383));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async57382(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57392 = (function (flag,cb,meta57393){
this.flag = flag;
this.cb = cb;
this.meta57393 = meta57393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57394,meta57393__$1){
var self__ = this;
var _57394__$1 = this;
return (new cljs.core.async.t_cljs$core$async57392(self__.flag,self__.cb,meta57393__$1));
}));

(cljs.core.async.t_cljs$core$async57392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57394){
var self__ = this;
var _57394__$1 = this;
return self__.meta57393;
}));

(cljs.core.async.t_cljs$core$async57392.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async57392.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async57392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta57393","meta57393",-415964842,null)], null);
}));

(cljs.core.async.t_cljs$core$async57392.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57392");

(cljs.core.async.t_cljs$core$async57392.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async57392");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57392.
 */
cljs.core.async.__GT_t_cljs$core$async57392 = (function cljs$core$async$__GT_t_cljs$core$async57392(flag,cb,meta57393){
return (new cljs.core.async.t_cljs$core$async57392(flag,cb,meta57393));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async57392(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57400_SHARP_){
var G__57402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57400_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__57402) : fret.call(null,G__57402));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57401_SHARP_){
var G__57404 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57401_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__57404) : fret.call(null,G__57404));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__59660 = (i + (1));
i = G__59660;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59661 = arguments.length;
var i__5770__auto___59662 = (0);
while(true){
if((i__5770__auto___59662 < len__5769__auto___59661)){
args__5775__auto__.push((arguments[i__5770__auto___59662]));

var G__59663 = (i__5770__auto___59662 + (1));
i__5770__auto___59662 = G__59663;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__57408){
var map__57409 = p__57408;
var map__57409__$1 = cljs.core.__destructure_map(map__57409);
var opts = map__57409__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq57405){
var G__57406 = cljs.core.first(seq57405);
var seq57405__$1 = cljs.core.next(seq57405);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57406,seq57405__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__57419 = arguments.length;
switch (G__57419) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35016__auto___59671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_57453){
var state_val_57457 = (state_57453[(1)]);
if((state_val_57457 === (7))){
var inst_57449 = (state_57453[(2)]);
var state_57453__$1 = state_57453;
var statearr_57461_59673 = state_57453__$1;
(statearr_57461_59673[(2)] = inst_57449);

(statearr_57461_59673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (1))){
var state_57453__$1 = state_57453;
var statearr_57466_59675 = state_57453__$1;
(statearr_57466_59675[(2)] = null);

(statearr_57466_59675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (4))){
var inst_57426 = (state_57453[(7)]);
var inst_57426__$1 = (state_57453[(2)]);
var inst_57429 = (inst_57426__$1 == null);
var state_57453__$1 = (function (){var statearr_57469 = state_57453;
(statearr_57469[(7)] = inst_57426__$1);

return statearr_57469;
})();
if(cljs.core.truth_(inst_57429)){
var statearr_57470_59677 = state_57453__$1;
(statearr_57470_59677[(1)] = (5));

} else {
var statearr_57471_59678 = state_57453__$1;
(statearr_57471_59678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (13))){
var state_57453__$1 = state_57453;
var statearr_57477_59679 = state_57453__$1;
(statearr_57477_59679[(2)] = null);

(statearr_57477_59679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (6))){
var inst_57426 = (state_57453[(7)]);
var state_57453__$1 = state_57453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57453__$1,(11),to,inst_57426);
} else {
if((state_val_57457 === (3))){
var inst_57451 = (state_57453[(2)]);
var state_57453__$1 = state_57453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57453__$1,inst_57451);
} else {
if((state_val_57457 === (12))){
var state_57453__$1 = state_57453;
var statearr_57482_59681 = state_57453__$1;
(statearr_57482_59681[(2)] = null);

(statearr_57482_59681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (2))){
var state_57453__$1 = state_57453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57453__$1,(4),from);
} else {
if((state_val_57457 === (11))){
var inst_57442 = (state_57453[(2)]);
var state_57453__$1 = state_57453;
if(cljs.core.truth_(inst_57442)){
var statearr_57487_59682 = state_57453__$1;
(statearr_57487_59682[(1)] = (12));

} else {
var statearr_57488_59683 = state_57453__$1;
(statearr_57488_59683[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (9))){
var state_57453__$1 = state_57453;
var statearr_57489_59684 = state_57453__$1;
(statearr_57489_59684[(2)] = null);

(statearr_57489_59684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (5))){
var state_57453__$1 = state_57453;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57490_59686 = state_57453__$1;
(statearr_57490_59686[(1)] = (8));

} else {
var statearr_57491_59687 = state_57453__$1;
(statearr_57491_59687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (14))){
var inst_57447 = (state_57453[(2)]);
var state_57453__$1 = state_57453;
var statearr_57496_59688 = state_57453__$1;
(statearr_57496_59688[(2)] = inst_57447);

(statearr_57496_59688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (10))){
var inst_57439 = (state_57453[(2)]);
var state_57453__$1 = state_57453;
var statearr_57504_59689 = state_57453__$1;
(statearr_57504_59689[(2)] = inst_57439);

(statearr_57504_59689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (8))){
var inst_57436 = cljs.core.async.close_BANG_(to);
var state_57453__$1 = state_57453;
var statearr_57508_59692 = state_57453__$1;
(statearr_57508_59692[(2)] = inst_57436);

(statearr_57508_59692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34930__auto__ = null;
var cljs$core$async$state_machine__34930__auto____0 = (function (){
var statearr_57515 = [null,null,null,null,null,null,null,null];
(statearr_57515[(0)] = cljs$core$async$state_machine__34930__auto__);

(statearr_57515[(1)] = (1));

return statearr_57515;
});
var cljs$core$async$state_machine__34930__auto____1 = (function (state_57453){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_57453);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e57520){var ex__34933__auto__ = e57520;
var statearr_57521_59697 = state_57453;
(statearr_57521_59697[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_57453[(4)]))){
var statearr_57522_59698 = state_57453;
(statearr_57522_59698[(1)] = cljs.core.first((state_57453[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59699 = state_57453;
state_57453 = G__59699;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$state_machine__34930__auto__ = function(state_57453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34930__auto____1.call(this,state_57453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34930__auto____0;
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34930__auto____1;
return cljs$core$async$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_57526 = f__35017__auto__();
(statearr_57526[(6)] = c__35016__auto___59671);

return statearr_57526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__57533){
var vec__57538 = p__57533;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57538,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57538,(1),null);
var job = vec__57538;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35016__auto___59702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_57548){
var state_val_57549 = (state_57548[(1)]);
if((state_val_57549 === (1))){
var state_57548__$1 = state_57548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57548__$1,(2),res,v);
} else {
if((state_val_57549 === (2))){
var inst_57544 = (state_57548[(2)]);
var inst_57545 = cljs.core.async.close_BANG_(res);
var state_57548__$1 = (function (){var statearr_57561 = state_57548;
(statearr_57561[(7)] = inst_57544);

return statearr_57561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57548__$1,inst_57545);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0 = (function (){
var statearr_57564 = [null,null,null,null,null,null,null,null];
(statearr_57564[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__);

(statearr_57564[(1)] = (1));

return statearr_57564;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1 = (function (state_57548){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_57548);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e57565){var ex__34933__auto__ = e57565;
var statearr_57566_59705 = state_57548;
(statearr_57566_59705[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_57548[(4)]))){
var statearr_57567_59706 = state_57548;
(statearr_57567_59706[(1)] = cljs.core.first((state_57548[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59707 = state_57548;
state_57548 = G__59707;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__ = function(state_57548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1.call(this,state_57548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_57571 = f__35017__auto__();
(statearr_57571[(6)] = c__35016__auto___59702);

return statearr_57571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__57574){
var vec__57575 = p__57574;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57575,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57575,(1),null);
var job = vec__57575;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___59709 = n;
var __59710 = (0);
while(true){
if((__59710 < n__5636__auto___59709)){
var G__57578_59711 = type;
var G__57578_59712__$1 = (((G__57578_59711 instanceof cljs.core.Keyword))?G__57578_59711.fqn:null);
switch (G__57578_59712__$1) {
case "compute":
var c__35016__auto___59714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59710,c__35016__auto___59714,G__57578_59711,G__57578_59712__$1,n__5636__auto___59709,jobs,results,process__$1,async){
return (function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = ((function (__59710,c__35016__auto___59714,G__57578_59711,G__57578_59712__$1,n__5636__auto___59709,jobs,results,process__$1,async){
return (function (state_57593){
var state_val_57594 = (state_57593[(1)]);
if((state_val_57594 === (1))){
var state_57593__$1 = state_57593;
var statearr_57598_59722 = state_57593__$1;
(statearr_57598_59722[(2)] = null);

(statearr_57598_59722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57594 === (2))){
var state_57593__$1 = state_57593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57593__$1,(4),jobs);
} else {
if((state_val_57594 === (3))){
var inst_57591 = (state_57593[(2)]);
var state_57593__$1 = state_57593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57593__$1,inst_57591);
} else {
if((state_val_57594 === (4))){
var inst_57583 = (state_57593[(2)]);
var inst_57584 = process__$1(inst_57583);
var state_57593__$1 = state_57593;
if(cljs.core.truth_(inst_57584)){
var statearr_57601_59724 = state_57593__$1;
(statearr_57601_59724[(1)] = (5));

} else {
var statearr_57602_59725 = state_57593__$1;
(statearr_57602_59725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57594 === (5))){
var state_57593__$1 = state_57593;
var statearr_57603_59727 = state_57593__$1;
(statearr_57603_59727[(2)] = null);

(statearr_57603_59727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57594 === (6))){
var state_57593__$1 = state_57593;
var statearr_57604_59728 = state_57593__$1;
(statearr_57604_59728[(2)] = null);

(statearr_57604_59728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57594 === (7))){
var inst_57589 = (state_57593[(2)]);
var state_57593__$1 = state_57593;
var statearr_57605_59732 = state_57593__$1;
(statearr_57605_59732[(2)] = inst_57589);

(statearr_57605_59732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__59710,c__35016__auto___59714,G__57578_59711,G__57578_59712__$1,n__5636__auto___59709,jobs,results,process__$1,async))
;
return ((function (__59710,switch__34929__auto__,c__35016__auto___59714,G__57578_59711,G__57578_59712__$1,n__5636__auto___59709,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0 = (function (){
var statearr_57607 = [null,null,null,null,null,null,null];
(statearr_57607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__);

(statearr_57607[(1)] = (1));

return statearr_57607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1 = (function (state_57593){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_57593);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e57608){var ex__34933__auto__ = e57608;
var statearr_57610_59734 = state_57593;
(statearr_57610_59734[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_57593[(4)]))){
var statearr_57611_59735 = state_57593;
(statearr_57611_59735[(1)] = cljs.core.first((state_57593[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59736 = state_57593;
state_57593 = G__59736;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__ = function(state_57593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1.call(this,state_57593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__;
})()
;})(__59710,switch__34929__auto__,c__35016__auto___59714,G__57578_59711,G__57578_59712__$1,n__5636__auto___59709,jobs,results,process__$1,async))
})();
var state__35018__auto__ = (function (){var statearr_57612 = f__35017__auto__();
(statearr_57612[(6)] = c__35016__auto___59714);

return statearr_57612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
});})(__59710,c__35016__auto___59714,G__57578_59711,G__57578_59712__$1,n__5636__auto___59709,jobs,results,process__$1,async))
);


break;
case "async":
var c__35016__auto___59737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59710,c__35016__auto___59737,G__57578_59711,G__57578_59712__$1,n__5636__auto___59709,jobs,results,process__$1,async){
return (function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = ((function (__59710,c__35016__auto___59737,G__57578_59711,G__57578_59712__$1,n__5636__auto___59709,jobs,results,process__$1,async){
return (function (state_57627){
var state_val_57628 = (state_57627[(1)]);
if((state_val_57628 === (1))){
var state_57627__$1 = state_57627;
var statearr_57630_59738 = state_57627__$1;
(statearr_57630_59738[(2)] = null);

(statearr_57630_59738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57628 === (2))){
var state_57627__$1 = state_57627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57627__$1,(4),jobs);
} else {
if((state_val_57628 === (3))){
var inst_57625 = (state_57627[(2)]);
var state_57627__$1 = state_57627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57627__$1,inst_57625);
} else {
if((state_val_57628 === (4))){
var inst_57617 = (state_57627[(2)]);
var inst_57618 = async(inst_57617);
var state_57627__$1 = state_57627;
if(cljs.core.truth_(inst_57618)){
var statearr_57631_59739 = state_57627__$1;
(statearr_57631_59739[(1)] = (5));

} else {
var statearr_57632_59740 = state_57627__$1;
(statearr_57632_59740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57628 === (5))){
var state_57627__$1 = state_57627;
var statearr_57633_59741 = state_57627__$1;
(statearr_57633_59741[(2)] = null);

(statearr_57633_59741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57628 === (6))){
var state_57627__$1 = state_57627;
var statearr_57636_59742 = state_57627__$1;
(statearr_57636_59742[(2)] = null);

(statearr_57636_59742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57628 === (7))){
var inst_57623 = (state_57627[(2)]);
var state_57627__$1 = state_57627;
var statearr_57637_59743 = state_57627__$1;
(statearr_57637_59743[(2)] = inst_57623);

(statearr_57637_59743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__59710,c__35016__auto___59737,G__57578_59711,G__57578_59712__$1,n__5636__auto___59709,jobs,results,process__$1,async))
;
return ((function (__59710,switch__34929__auto__,c__35016__auto___59737,G__57578_59711,G__57578_59712__$1,n__5636__auto___59709,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0 = (function (){
var statearr_57640 = [null,null,null,null,null,null,null];
(statearr_57640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__);

(statearr_57640[(1)] = (1));

return statearr_57640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1 = (function (state_57627){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_57627);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e57641){var ex__34933__auto__ = e57641;
var statearr_57642_59745 = state_57627;
(statearr_57642_59745[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_57627[(4)]))){
var statearr_57643_59746 = state_57627;
(statearr_57643_59746[(1)] = cljs.core.first((state_57627[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59747 = state_57627;
state_57627 = G__59747;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__ = function(state_57627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1.call(this,state_57627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__;
})()
;})(__59710,switch__34929__auto__,c__35016__auto___59737,G__57578_59711,G__57578_59712__$1,n__5636__auto___59709,jobs,results,process__$1,async))
})();
var state__35018__auto__ = (function (){var statearr_57646 = f__35017__auto__();
(statearr_57646[(6)] = c__35016__auto___59737);

return statearr_57646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
});})(__59710,c__35016__auto___59737,G__57578_59711,G__57578_59712__$1,n__5636__auto___59709,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57578_59712__$1)].join('')));

}

var G__59751 = (__59710 + (1));
__59710 = G__59751;
continue;
} else {
}
break;
}

var c__35016__auto___59752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_57668){
var state_val_57669 = (state_57668[(1)]);
if((state_val_57669 === (7))){
var inst_57664 = (state_57668[(2)]);
var state_57668__$1 = state_57668;
var statearr_57670_59754 = state_57668__$1;
(statearr_57670_59754[(2)] = inst_57664);

(statearr_57670_59754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57669 === (1))){
var state_57668__$1 = state_57668;
var statearr_57671_59756 = state_57668__$1;
(statearr_57671_59756[(2)] = null);

(statearr_57671_59756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57669 === (4))){
var inst_57649 = (state_57668[(7)]);
var inst_57649__$1 = (state_57668[(2)]);
var inst_57650 = (inst_57649__$1 == null);
var state_57668__$1 = (function (){var statearr_57672 = state_57668;
(statearr_57672[(7)] = inst_57649__$1);

return statearr_57672;
})();
if(cljs.core.truth_(inst_57650)){
var statearr_57673_59759 = state_57668__$1;
(statearr_57673_59759[(1)] = (5));

} else {
var statearr_57675_59760 = state_57668__$1;
(statearr_57675_59760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57669 === (6))){
var inst_57654 = (state_57668[(8)]);
var inst_57649 = (state_57668[(7)]);
var inst_57654__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_57655 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57656 = [inst_57649,inst_57654__$1];
var inst_57657 = (new cljs.core.PersistentVector(null,2,(5),inst_57655,inst_57656,null));
var state_57668__$1 = (function (){var statearr_57676 = state_57668;
(statearr_57676[(8)] = inst_57654__$1);

return statearr_57676;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57668__$1,(8),jobs,inst_57657);
} else {
if((state_val_57669 === (3))){
var inst_57666 = (state_57668[(2)]);
var state_57668__$1 = state_57668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57668__$1,inst_57666);
} else {
if((state_val_57669 === (2))){
var state_57668__$1 = state_57668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57668__$1,(4),from);
} else {
if((state_val_57669 === (9))){
var inst_57661 = (state_57668[(2)]);
var state_57668__$1 = (function (){var statearr_57679 = state_57668;
(statearr_57679[(9)] = inst_57661);

return statearr_57679;
})();
var statearr_57680_59765 = state_57668__$1;
(statearr_57680_59765[(2)] = null);

(statearr_57680_59765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57669 === (5))){
var inst_57652 = cljs.core.async.close_BANG_(jobs);
var state_57668__$1 = state_57668;
var statearr_57681_59769 = state_57668__$1;
(statearr_57681_59769[(2)] = inst_57652);

(statearr_57681_59769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57669 === (8))){
var inst_57654 = (state_57668[(8)]);
var inst_57659 = (state_57668[(2)]);
var state_57668__$1 = (function (){var statearr_57688 = state_57668;
(statearr_57688[(10)] = inst_57659);

return statearr_57688;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57668__$1,(9),results,inst_57654);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0 = (function (){
var statearr_57691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__);

(statearr_57691[(1)] = (1));

return statearr_57691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1 = (function (state_57668){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_57668);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e57692){var ex__34933__auto__ = e57692;
var statearr_57693_59776 = state_57668;
(statearr_57693_59776[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_57668[(4)]))){
var statearr_57694_59778 = state_57668;
(statearr_57694_59778[(1)] = cljs.core.first((state_57668[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59779 = state_57668;
state_57668 = G__59779;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__ = function(state_57668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1.call(this,state_57668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_57695 = f__35017__auto__();
(statearr_57695[(6)] = c__35016__auto___59752);

return statearr_57695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


var c__35016__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_57735){
var state_val_57736 = (state_57735[(1)]);
if((state_val_57736 === (7))){
var inst_57731 = (state_57735[(2)]);
var state_57735__$1 = state_57735;
var statearr_57737_59786 = state_57735__$1;
(statearr_57737_59786[(2)] = inst_57731);

(statearr_57737_59786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (20))){
var state_57735__$1 = state_57735;
var statearr_57738_59787 = state_57735__$1;
(statearr_57738_59787[(2)] = null);

(statearr_57738_59787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (1))){
var state_57735__$1 = state_57735;
var statearr_57741_59790 = state_57735__$1;
(statearr_57741_59790[(2)] = null);

(statearr_57741_59790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (4))){
var inst_57699 = (state_57735[(7)]);
var inst_57699__$1 = (state_57735[(2)]);
var inst_57700 = (inst_57699__$1 == null);
var state_57735__$1 = (function (){var statearr_57742 = state_57735;
(statearr_57742[(7)] = inst_57699__$1);

return statearr_57742;
})();
if(cljs.core.truth_(inst_57700)){
var statearr_57743_59791 = state_57735__$1;
(statearr_57743_59791[(1)] = (5));

} else {
var statearr_57744_59792 = state_57735__$1;
(statearr_57744_59792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (15))){
var inst_57712 = (state_57735[(8)]);
var state_57735__$1 = state_57735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57735__$1,(18),to,inst_57712);
} else {
if((state_val_57736 === (21))){
var inst_57726 = (state_57735[(2)]);
var state_57735__$1 = state_57735;
var statearr_57745_59794 = state_57735__$1;
(statearr_57745_59794[(2)] = inst_57726);

(statearr_57745_59794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (13))){
var inst_57728 = (state_57735[(2)]);
var state_57735__$1 = (function (){var statearr_57746 = state_57735;
(statearr_57746[(9)] = inst_57728);

return statearr_57746;
})();
var statearr_57747_59800 = state_57735__$1;
(statearr_57747_59800[(2)] = null);

(statearr_57747_59800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (6))){
var inst_57699 = (state_57735[(7)]);
var state_57735__$1 = state_57735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57735__$1,(11),inst_57699);
} else {
if((state_val_57736 === (17))){
var inst_57721 = (state_57735[(2)]);
var state_57735__$1 = state_57735;
if(cljs.core.truth_(inst_57721)){
var statearr_57752_59801 = state_57735__$1;
(statearr_57752_59801[(1)] = (19));

} else {
var statearr_57753_59802 = state_57735__$1;
(statearr_57753_59802[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (3))){
var inst_57733 = (state_57735[(2)]);
var state_57735__$1 = state_57735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57735__$1,inst_57733);
} else {
if((state_val_57736 === (12))){
var inst_57709 = (state_57735[(10)]);
var state_57735__$1 = state_57735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57735__$1,(14),inst_57709);
} else {
if((state_val_57736 === (2))){
var state_57735__$1 = state_57735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57735__$1,(4),results);
} else {
if((state_val_57736 === (19))){
var state_57735__$1 = state_57735;
var statearr_57765_59807 = state_57735__$1;
(statearr_57765_59807[(2)] = null);

(statearr_57765_59807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (11))){
var inst_57709 = (state_57735[(2)]);
var state_57735__$1 = (function (){var statearr_57766 = state_57735;
(statearr_57766[(10)] = inst_57709);

return statearr_57766;
})();
var statearr_57768_59808 = state_57735__$1;
(statearr_57768_59808[(2)] = null);

(statearr_57768_59808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (9))){
var state_57735__$1 = state_57735;
var statearr_57773_59809 = state_57735__$1;
(statearr_57773_59809[(2)] = null);

(statearr_57773_59809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (5))){
var state_57735__$1 = state_57735;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57774_59813 = state_57735__$1;
(statearr_57774_59813[(1)] = (8));

} else {
var statearr_57775_59814 = state_57735__$1;
(statearr_57775_59814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (14))){
var inst_57714 = (state_57735[(11)]);
var inst_57712 = (state_57735[(8)]);
var inst_57712__$1 = (state_57735[(2)]);
var inst_57713 = (inst_57712__$1 == null);
var inst_57714__$1 = cljs.core.not(inst_57713);
var state_57735__$1 = (function (){var statearr_57776 = state_57735;
(statearr_57776[(11)] = inst_57714__$1);

(statearr_57776[(8)] = inst_57712__$1);

return statearr_57776;
})();
if(inst_57714__$1){
var statearr_57777_59816 = state_57735__$1;
(statearr_57777_59816[(1)] = (15));

} else {
var statearr_57778_59817 = state_57735__$1;
(statearr_57778_59817[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (16))){
var inst_57714 = (state_57735[(11)]);
var state_57735__$1 = state_57735;
var statearr_57780_59818 = state_57735__$1;
(statearr_57780_59818[(2)] = inst_57714);

(statearr_57780_59818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (10))){
var inst_57706 = (state_57735[(2)]);
var state_57735__$1 = state_57735;
var statearr_57782_59820 = state_57735__$1;
(statearr_57782_59820[(2)] = inst_57706);

(statearr_57782_59820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (18))){
var inst_57718 = (state_57735[(2)]);
var state_57735__$1 = state_57735;
var statearr_57783_59821 = state_57735__$1;
(statearr_57783_59821[(2)] = inst_57718);

(statearr_57783_59821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57736 === (8))){
var inst_57703 = cljs.core.async.close_BANG_(to);
var state_57735__$1 = state_57735;
var statearr_57784_59822 = state_57735__$1;
(statearr_57784_59822[(2)] = inst_57703);

(statearr_57784_59822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0 = (function (){
var statearr_57785 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__);

(statearr_57785[(1)] = (1));

return statearr_57785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1 = (function (state_57735){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_57735);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e57786){var ex__34933__auto__ = e57786;
var statearr_57787_59823 = state_57735;
(statearr_57787_59823[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_57735[(4)]))){
var statearr_57788_59824 = state_57735;
(statearr_57788_59824[(1)] = cljs.core.first((state_57735[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59825 = state_57735;
state_57735 = G__59825;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__ = function(state_57735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1.call(this,state_57735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_57789 = f__35017__auto__();
(statearr_57789[(6)] = c__35016__auto__);

return statearr_57789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));

return c__35016__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__57794 = arguments.length;
switch (G__57794) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__57797 = arguments.length;
switch (G__57797) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__57802 = arguments.length;
switch (G__57802) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__35016__auto___59832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_57831){
var state_val_57832 = (state_57831[(1)]);
if((state_val_57832 === (7))){
var inst_57827 = (state_57831[(2)]);
var state_57831__$1 = state_57831;
var statearr_57848_59833 = state_57831__$1;
(statearr_57848_59833[(2)] = inst_57827);

(statearr_57848_59833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57832 === (1))){
var state_57831__$1 = state_57831;
var statearr_57849_59834 = state_57831__$1;
(statearr_57849_59834[(2)] = null);

(statearr_57849_59834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57832 === (4))){
var inst_57808 = (state_57831[(7)]);
var inst_57808__$1 = (state_57831[(2)]);
var inst_57809 = (inst_57808__$1 == null);
var state_57831__$1 = (function (){var statearr_57855 = state_57831;
(statearr_57855[(7)] = inst_57808__$1);

return statearr_57855;
})();
if(cljs.core.truth_(inst_57809)){
var statearr_57859_59835 = state_57831__$1;
(statearr_57859_59835[(1)] = (5));

} else {
var statearr_57861_59836 = state_57831__$1;
(statearr_57861_59836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57832 === (13))){
var state_57831__$1 = state_57831;
var statearr_57862_59837 = state_57831__$1;
(statearr_57862_59837[(2)] = null);

(statearr_57862_59837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57832 === (6))){
var inst_57808 = (state_57831[(7)]);
var inst_57814 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57808) : p.call(null,inst_57808));
var state_57831__$1 = state_57831;
if(cljs.core.truth_(inst_57814)){
var statearr_57863_59838 = state_57831__$1;
(statearr_57863_59838[(1)] = (9));

} else {
var statearr_57864_59839 = state_57831__$1;
(statearr_57864_59839[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57832 === (3))){
var inst_57829 = (state_57831[(2)]);
var state_57831__$1 = state_57831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57831__$1,inst_57829);
} else {
if((state_val_57832 === (12))){
var state_57831__$1 = state_57831;
var statearr_57865_59842 = state_57831__$1;
(statearr_57865_59842[(2)] = null);

(statearr_57865_59842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57832 === (2))){
var state_57831__$1 = state_57831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57831__$1,(4),ch);
} else {
if((state_val_57832 === (11))){
var inst_57808 = (state_57831[(7)]);
var inst_57818 = (state_57831[(2)]);
var state_57831__$1 = state_57831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57831__$1,(8),inst_57818,inst_57808);
} else {
if((state_val_57832 === (9))){
var state_57831__$1 = state_57831;
var statearr_57868_59843 = state_57831__$1;
(statearr_57868_59843[(2)] = tc);

(statearr_57868_59843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57832 === (5))){
var inst_57811 = cljs.core.async.close_BANG_(tc);
var inst_57812 = cljs.core.async.close_BANG_(fc);
var state_57831__$1 = (function (){var statearr_57869 = state_57831;
(statearr_57869[(8)] = inst_57811);

return statearr_57869;
})();
var statearr_57870_59844 = state_57831__$1;
(statearr_57870_59844[(2)] = inst_57812);

(statearr_57870_59844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57832 === (14))){
var inst_57825 = (state_57831[(2)]);
var state_57831__$1 = state_57831;
var statearr_57871_59845 = state_57831__$1;
(statearr_57871_59845[(2)] = inst_57825);

(statearr_57871_59845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57832 === (10))){
var state_57831__$1 = state_57831;
var statearr_57872_59846 = state_57831__$1;
(statearr_57872_59846[(2)] = fc);

(statearr_57872_59846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57832 === (8))){
var inst_57820 = (state_57831[(2)]);
var state_57831__$1 = state_57831;
if(cljs.core.truth_(inst_57820)){
var statearr_57876_59847 = state_57831__$1;
(statearr_57876_59847[(1)] = (12));

} else {
var statearr_57877_59848 = state_57831__$1;
(statearr_57877_59848[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34930__auto__ = null;
var cljs$core$async$state_machine__34930__auto____0 = (function (){
var statearr_57878 = [null,null,null,null,null,null,null,null,null];
(statearr_57878[(0)] = cljs$core$async$state_machine__34930__auto__);

(statearr_57878[(1)] = (1));

return statearr_57878;
});
var cljs$core$async$state_machine__34930__auto____1 = (function (state_57831){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_57831);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e57879){var ex__34933__auto__ = e57879;
var statearr_57880_59849 = state_57831;
(statearr_57880_59849[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_57831[(4)]))){
var statearr_57881_59850 = state_57831;
(statearr_57881_59850[(1)] = cljs.core.first((state_57831[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59851 = state_57831;
state_57831 = G__59851;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$state_machine__34930__auto__ = function(state_57831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34930__auto____1.call(this,state_57831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34930__auto____0;
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34930__auto____1;
return cljs$core$async$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_57883 = f__35017__auto__();
(statearr_57883[(6)] = c__35016__auto___59832);

return statearr_57883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35016__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_57914){
var state_val_57915 = (state_57914[(1)]);
if((state_val_57915 === (7))){
var inst_57908 = (state_57914[(2)]);
var state_57914__$1 = state_57914;
var statearr_57916_59853 = state_57914__$1;
(statearr_57916_59853[(2)] = inst_57908);

(statearr_57916_59853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57915 === (1))){
var inst_57887 = init;
var inst_57888 = inst_57887;
var state_57914__$1 = (function (){var statearr_57917 = state_57914;
(statearr_57917[(7)] = inst_57888);

return statearr_57917;
})();
var statearr_57918_59854 = state_57914__$1;
(statearr_57918_59854[(2)] = null);

(statearr_57918_59854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57915 === (4))){
var inst_57891 = (state_57914[(8)]);
var inst_57891__$1 = (state_57914[(2)]);
var inst_57892 = (inst_57891__$1 == null);
var state_57914__$1 = (function (){var statearr_57919 = state_57914;
(statearr_57919[(8)] = inst_57891__$1);

return statearr_57919;
})();
if(cljs.core.truth_(inst_57892)){
var statearr_57920_59855 = state_57914__$1;
(statearr_57920_59855[(1)] = (5));

} else {
var statearr_57921_59856 = state_57914__$1;
(statearr_57921_59856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57915 === (6))){
var inst_57891 = (state_57914[(8)]);
var inst_57895 = (state_57914[(9)]);
var inst_57888 = (state_57914[(7)]);
var inst_57895__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_57888,inst_57891) : f.call(null,inst_57888,inst_57891));
var inst_57896 = cljs.core.reduced_QMARK_(inst_57895__$1);
var state_57914__$1 = (function (){var statearr_57924 = state_57914;
(statearr_57924[(9)] = inst_57895__$1);

return statearr_57924;
})();
if(inst_57896){
var statearr_57925_59857 = state_57914__$1;
(statearr_57925_59857[(1)] = (8));

} else {
var statearr_57926_59858 = state_57914__$1;
(statearr_57926_59858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57915 === (3))){
var inst_57910 = (state_57914[(2)]);
var state_57914__$1 = state_57914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57914__$1,inst_57910);
} else {
if((state_val_57915 === (2))){
var state_57914__$1 = state_57914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57914__$1,(4),ch);
} else {
if((state_val_57915 === (9))){
var inst_57895 = (state_57914[(9)]);
var inst_57888 = inst_57895;
var state_57914__$1 = (function (){var statearr_57927 = state_57914;
(statearr_57927[(7)] = inst_57888);

return statearr_57927;
})();
var statearr_57928_59859 = state_57914__$1;
(statearr_57928_59859[(2)] = null);

(statearr_57928_59859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57915 === (5))){
var inst_57888 = (state_57914[(7)]);
var state_57914__$1 = state_57914;
var statearr_57929_59860 = state_57914__$1;
(statearr_57929_59860[(2)] = inst_57888);

(statearr_57929_59860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57915 === (10))){
var inst_57906 = (state_57914[(2)]);
var state_57914__$1 = state_57914;
var statearr_57930_59861 = state_57914__$1;
(statearr_57930_59861[(2)] = inst_57906);

(statearr_57930_59861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57915 === (8))){
var inst_57895 = (state_57914[(9)]);
var inst_57902 = cljs.core.deref(inst_57895);
var state_57914__$1 = state_57914;
var statearr_57931_59862 = state_57914__$1;
(statearr_57931_59862[(2)] = inst_57902);

(statearr_57931_59862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34930__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34930__auto____0 = (function (){
var statearr_57935 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57935[(0)] = cljs$core$async$reduce_$_state_machine__34930__auto__);

(statearr_57935[(1)] = (1));

return statearr_57935;
});
var cljs$core$async$reduce_$_state_machine__34930__auto____1 = (function (state_57914){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_57914);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e57938){var ex__34933__auto__ = e57938;
var statearr_57939_59863 = state_57914;
(statearr_57939_59863[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_57914[(4)]))){
var statearr_57940_59864 = state_57914;
(statearr_57940_59864[(1)] = cljs.core.first((state_57914[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59866 = state_57914;
state_57914 = G__59866;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34930__auto__ = function(state_57914){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34930__auto____1.call(this,state_57914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34930__auto____0;
cljs$core$async$reduce_$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34930__auto____1;
return cljs$core$async$reduce_$_state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_57941 = f__35017__auto__();
(statearr_57941[(6)] = c__35016__auto__);

return statearr_57941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));

return c__35016__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35016__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_57950){
var state_val_57951 = (state_57950[(1)]);
if((state_val_57951 === (1))){
var inst_57945 = cljs.core.async.reduce(f__$1,init,ch);
var state_57950__$1 = state_57950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57950__$1,(2),inst_57945);
} else {
if((state_val_57951 === (2))){
var inst_57947 = (state_57950[(2)]);
var inst_57948 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_57947) : f__$1.call(null,inst_57947));
var state_57950__$1 = state_57950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57950__$1,inst_57948);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34930__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34930__auto____0 = (function (){
var statearr_57952 = [null,null,null,null,null,null,null];
(statearr_57952[(0)] = cljs$core$async$transduce_$_state_machine__34930__auto__);

(statearr_57952[(1)] = (1));

return statearr_57952;
});
var cljs$core$async$transduce_$_state_machine__34930__auto____1 = (function (state_57950){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_57950);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e57954){var ex__34933__auto__ = e57954;
var statearr_57955_59869 = state_57950;
(statearr_57955_59869[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_57950[(4)]))){
var statearr_57956_59870 = state_57950;
(statearr_57956_59870[(1)] = cljs.core.first((state_57950[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59871 = state_57950;
state_57950 = G__59871;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34930__auto__ = function(state_57950){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34930__auto____1.call(this,state_57950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34930__auto____0;
cljs$core$async$transduce_$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34930__auto____1;
return cljs$core$async$transduce_$_state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_57957 = f__35017__auto__();
(statearr_57957[(6)] = c__35016__auto__);

return statearr_57957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));

return c__35016__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__57959 = arguments.length;
switch (G__57959) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35016__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_57992){
var state_val_57993 = (state_57992[(1)]);
if((state_val_57993 === (7))){
var inst_57971 = (state_57992[(2)]);
var state_57992__$1 = state_57992;
var statearr_57997_59876 = state_57992__$1;
(statearr_57997_59876[(2)] = inst_57971);

(statearr_57997_59876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (1))){
var inst_57965 = cljs.core.seq(coll);
var inst_57966 = inst_57965;
var state_57992__$1 = (function (){var statearr_57998 = state_57992;
(statearr_57998[(7)] = inst_57966);

return statearr_57998;
})();
var statearr_57999_59877 = state_57992__$1;
(statearr_57999_59877[(2)] = null);

(statearr_57999_59877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (4))){
var inst_57966 = (state_57992[(7)]);
var inst_57969 = cljs.core.first(inst_57966);
var state_57992__$1 = state_57992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57992__$1,(7),ch,inst_57969);
} else {
if((state_val_57993 === (13))){
var inst_57986 = (state_57992[(2)]);
var state_57992__$1 = state_57992;
var statearr_58003_59878 = state_57992__$1;
(statearr_58003_59878[(2)] = inst_57986);

(statearr_58003_59878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (6))){
var inst_57974 = (state_57992[(2)]);
var state_57992__$1 = state_57992;
if(cljs.core.truth_(inst_57974)){
var statearr_58007_59879 = state_57992__$1;
(statearr_58007_59879[(1)] = (8));

} else {
var statearr_58009_59880 = state_57992__$1;
(statearr_58009_59880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (3))){
var inst_57990 = (state_57992[(2)]);
var state_57992__$1 = state_57992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57992__$1,inst_57990);
} else {
if((state_val_57993 === (12))){
var state_57992__$1 = state_57992;
var statearr_58011_59882 = state_57992__$1;
(statearr_58011_59882[(2)] = null);

(statearr_58011_59882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (2))){
var inst_57966 = (state_57992[(7)]);
var state_57992__$1 = state_57992;
if(cljs.core.truth_(inst_57966)){
var statearr_58015_59883 = state_57992__$1;
(statearr_58015_59883[(1)] = (4));

} else {
var statearr_58016_59884 = state_57992__$1;
(statearr_58016_59884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (11))){
var inst_57983 = cljs.core.async.close_BANG_(ch);
var state_57992__$1 = state_57992;
var statearr_58020_59887 = state_57992__$1;
(statearr_58020_59887[(2)] = inst_57983);

(statearr_58020_59887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (9))){
var state_57992__$1 = state_57992;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58021_59888 = state_57992__$1;
(statearr_58021_59888[(1)] = (11));

} else {
var statearr_58022_59889 = state_57992__$1;
(statearr_58022_59889[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (5))){
var inst_57966 = (state_57992[(7)]);
var state_57992__$1 = state_57992;
var statearr_58023_59891 = state_57992__$1;
(statearr_58023_59891[(2)] = inst_57966);

(statearr_58023_59891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (10))){
var inst_57988 = (state_57992[(2)]);
var state_57992__$1 = state_57992;
var statearr_58025_59894 = state_57992__$1;
(statearr_58025_59894[(2)] = inst_57988);

(statearr_58025_59894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (8))){
var inst_57966 = (state_57992[(7)]);
var inst_57976 = cljs.core.next(inst_57966);
var inst_57966__$1 = inst_57976;
var state_57992__$1 = (function (){var statearr_58026 = state_57992;
(statearr_58026[(7)] = inst_57966__$1);

return statearr_58026;
})();
var statearr_58027_59895 = state_57992__$1;
(statearr_58027_59895[(2)] = null);

(statearr_58027_59895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34930__auto__ = null;
var cljs$core$async$state_machine__34930__auto____0 = (function (){
var statearr_58028 = [null,null,null,null,null,null,null,null];
(statearr_58028[(0)] = cljs$core$async$state_machine__34930__auto__);

(statearr_58028[(1)] = (1));

return statearr_58028;
});
var cljs$core$async$state_machine__34930__auto____1 = (function (state_57992){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_57992);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e58029){var ex__34933__auto__ = e58029;
var statearr_58030_59896 = state_57992;
(statearr_58030_59896[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_57992[(4)]))){
var statearr_58031_59897 = state_57992;
(statearr_58031_59897[(1)] = cljs.core.first((state_57992[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59898 = state_57992;
state_57992 = G__59898;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$state_machine__34930__auto__ = function(state_57992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34930__auto____1.call(this,state_57992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34930__auto____0;
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34930__auto____1;
return cljs$core$async$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_58032 = f__35017__auto__();
(statearr_58032[(6)] = c__35016__auto__);

return statearr_58032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));

return c__35016__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__58043 = arguments.length;
switch (G__58043) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_59902 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_59902(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_59904 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_59904(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_59906 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_59906(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_59907 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_59907(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58053 = (function (ch,cs,meta58054){
this.ch = ch;
this.cs = cs;
this.meta58054 = meta58054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58055,meta58054__$1){
var self__ = this;
var _58055__$1 = this;
return (new cljs.core.async.t_cljs$core$async58053(self__.ch,self__.cs,meta58054__$1));
}));

(cljs.core.async.t_cljs$core$async58053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58055){
var self__ = this;
var _58055__$1 = this;
return self__.meta58054;
}));

(cljs.core.async.t_cljs$core$async58053.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58053.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58053.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async58053.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async58053.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async58053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta58054","meta58054",62458993,null)], null);
}));

(cljs.core.async.t_cljs$core$async58053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58053");

(cljs.core.async.t_cljs$core$async58053.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async58053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58053.
 */
cljs.core.async.__GT_t_cljs$core$async58053 = (function cljs$core$async$__GT_t_cljs$core$async58053(ch,cs,meta58054){
return (new cljs.core.async.t_cljs$core$async58053(ch,cs,meta58054));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async58053(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__35016__auto___59908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_58220){
var state_val_58222 = (state_58220[(1)]);
if((state_val_58222 === (7))){
var inst_58216 = (state_58220[(2)]);
var state_58220__$1 = state_58220;
var statearr_58225_59910 = state_58220__$1;
(statearr_58225_59910[(2)] = inst_58216);

(statearr_58225_59910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (20))){
var inst_58096 = (state_58220[(7)]);
var inst_58109 = cljs.core.first(inst_58096);
var inst_58110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58109,(0),null);
var inst_58111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58109,(1),null);
var state_58220__$1 = (function (){var statearr_58227 = state_58220;
(statearr_58227[(8)] = inst_58110);

return statearr_58227;
})();
if(cljs.core.truth_(inst_58111)){
var statearr_58230_59911 = state_58220__$1;
(statearr_58230_59911[(1)] = (22));

} else {
var statearr_58231_59912 = state_58220__$1;
(statearr_58231_59912[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (27))){
var inst_58139 = (state_58220[(9)]);
var inst_58141 = (state_58220[(10)]);
var inst_58062 = (state_58220[(11)]);
var inst_58147 = (state_58220[(12)]);
var inst_58147__$1 = cljs.core._nth(inst_58139,inst_58141);
var inst_58148 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58147__$1,inst_58062,done);
var state_58220__$1 = (function (){var statearr_58232 = state_58220;
(statearr_58232[(12)] = inst_58147__$1);

return statearr_58232;
})();
if(cljs.core.truth_(inst_58148)){
var statearr_58233_59914 = state_58220__$1;
(statearr_58233_59914[(1)] = (30));

} else {
var statearr_58234_59915 = state_58220__$1;
(statearr_58234_59915[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (1))){
var state_58220__$1 = state_58220;
var statearr_58235_59916 = state_58220__$1;
(statearr_58235_59916[(2)] = null);

(statearr_58235_59916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (24))){
var inst_58096 = (state_58220[(7)]);
var inst_58116 = (state_58220[(2)]);
var inst_58117 = cljs.core.next(inst_58096);
var inst_58072 = inst_58117;
var inst_58073 = null;
var inst_58074 = (0);
var inst_58075 = (0);
var state_58220__$1 = (function (){var statearr_58236 = state_58220;
(statearr_58236[(13)] = inst_58072);

(statearr_58236[(14)] = inst_58074);

(statearr_58236[(15)] = inst_58075);

(statearr_58236[(16)] = inst_58073);

(statearr_58236[(17)] = inst_58116);

return statearr_58236;
})();
var statearr_58237_59922 = state_58220__$1;
(statearr_58237_59922[(2)] = null);

(statearr_58237_59922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (39))){
var state_58220__$1 = state_58220;
var statearr_58241_59923 = state_58220__$1;
(statearr_58241_59923[(2)] = null);

(statearr_58241_59923[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (4))){
var inst_58062 = (state_58220[(11)]);
var inst_58062__$1 = (state_58220[(2)]);
var inst_58064 = (inst_58062__$1 == null);
var state_58220__$1 = (function (){var statearr_58242 = state_58220;
(statearr_58242[(11)] = inst_58062__$1);

return statearr_58242;
})();
if(cljs.core.truth_(inst_58064)){
var statearr_58243_59924 = state_58220__$1;
(statearr_58243_59924[(1)] = (5));

} else {
var statearr_58244_59925 = state_58220__$1;
(statearr_58244_59925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (15))){
var inst_58072 = (state_58220[(13)]);
var inst_58074 = (state_58220[(14)]);
var inst_58075 = (state_58220[(15)]);
var inst_58073 = (state_58220[(16)]);
var inst_58092 = (state_58220[(2)]);
var inst_58093 = (inst_58075 + (1));
var tmp58238 = inst_58072;
var tmp58239 = inst_58074;
var tmp58240 = inst_58073;
var inst_58072__$1 = tmp58238;
var inst_58073__$1 = tmp58240;
var inst_58074__$1 = tmp58239;
var inst_58075__$1 = inst_58093;
var state_58220__$1 = (function (){var statearr_58247 = state_58220;
(statearr_58247[(13)] = inst_58072__$1);

(statearr_58247[(14)] = inst_58074__$1);

(statearr_58247[(15)] = inst_58075__$1);

(statearr_58247[(16)] = inst_58073__$1);

(statearr_58247[(18)] = inst_58092);

return statearr_58247;
})();
var statearr_58248_59928 = state_58220__$1;
(statearr_58248_59928[(2)] = null);

(statearr_58248_59928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (21))){
var inst_58120 = (state_58220[(2)]);
var state_58220__$1 = state_58220;
var statearr_58252_59929 = state_58220__$1;
(statearr_58252_59929[(2)] = inst_58120);

(statearr_58252_59929[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (31))){
var inst_58147 = (state_58220[(12)]);
var inst_58151 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58147);
var state_58220__$1 = state_58220;
var statearr_58254_59930 = state_58220__$1;
(statearr_58254_59930[(2)] = inst_58151);

(statearr_58254_59930[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (32))){
var inst_58139 = (state_58220[(9)]);
var inst_58141 = (state_58220[(10)]);
var inst_58138 = (state_58220[(19)]);
var inst_58140 = (state_58220[(20)]);
var inst_58153 = (state_58220[(2)]);
var inst_58154 = (inst_58141 + (1));
var tmp58249 = inst_58139;
var tmp58250 = inst_58138;
var tmp58251 = inst_58140;
var inst_58138__$1 = tmp58250;
var inst_58139__$1 = tmp58249;
var inst_58140__$1 = tmp58251;
var inst_58141__$1 = inst_58154;
var state_58220__$1 = (function (){var statearr_58255 = state_58220;
(statearr_58255[(9)] = inst_58139__$1);

(statearr_58255[(21)] = inst_58153);

(statearr_58255[(10)] = inst_58141__$1);

(statearr_58255[(19)] = inst_58138__$1);

(statearr_58255[(20)] = inst_58140__$1);

return statearr_58255;
})();
var statearr_58256_59933 = state_58220__$1;
(statearr_58256_59933[(2)] = null);

(statearr_58256_59933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (40))){
var inst_58184 = (state_58220[(22)]);
var inst_58189 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58184);
var state_58220__$1 = state_58220;
var statearr_58257_59934 = state_58220__$1;
(statearr_58257_59934[(2)] = inst_58189);

(statearr_58257_59934[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (33))){
var inst_58157 = (state_58220[(23)]);
var inst_58159 = cljs.core.chunked_seq_QMARK_(inst_58157);
var state_58220__$1 = state_58220;
if(inst_58159){
var statearr_58258_59936 = state_58220__$1;
(statearr_58258_59936[(1)] = (36));

} else {
var statearr_58259_59937 = state_58220__$1;
(statearr_58259_59937[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (13))){
var inst_58086 = (state_58220[(24)]);
var inst_58089 = cljs.core.async.close_BANG_(inst_58086);
var state_58220__$1 = state_58220;
var statearr_58260_59938 = state_58220__$1;
(statearr_58260_59938[(2)] = inst_58089);

(statearr_58260_59938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (22))){
var inst_58110 = (state_58220[(8)]);
var inst_58113 = cljs.core.async.close_BANG_(inst_58110);
var state_58220__$1 = state_58220;
var statearr_58261_59939 = state_58220__$1;
(statearr_58261_59939[(2)] = inst_58113);

(statearr_58261_59939[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (36))){
var inst_58157 = (state_58220[(23)]);
var inst_58173 = cljs.core.chunk_first(inst_58157);
var inst_58175 = cljs.core.chunk_rest(inst_58157);
var inst_58176 = cljs.core.count(inst_58173);
var inst_58138 = inst_58175;
var inst_58139 = inst_58173;
var inst_58140 = inst_58176;
var inst_58141 = (0);
var state_58220__$1 = (function (){var statearr_58268 = state_58220;
(statearr_58268[(9)] = inst_58139);

(statearr_58268[(10)] = inst_58141);

(statearr_58268[(19)] = inst_58138);

(statearr_58268[(20)] = inst_58140);

return statearr_58268;
})();
var statearr_58269_59941 = state_58220__$1;
(statearr_58269_59941[(2)] = null);

(statearr_58269_59941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (41))){
var inst_58157 = (state_58220[(23)]);
var inst_58191 = (state_58220[(2)]);
var inst_58196 = cljs.core.next(inst_58157);
var inst_58138 = inst_58196;
var inst_58139 = null;
var inst_58140 = (0);
var inst_58141 = (0);
var state_58220__$1 = (function (){var statearr_58271 = state_58220;
(statearr_58271[(9)] = inst_58139);

(statearr_58271[(10)] = inst_58141);

(statearr_58271[(19)] = inst_58138);

(statearr_58271[(25)] = inst_58191);

(statearr_58271[(20)] = inst_58140);

return statearr_58271;
})();
var statearr_58272_59944 = state_58220__$1;
(statearr_58272_59944[(2)] = null);

(statearr_58272_59944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (43))){
var state_58220__$1 = state_58220;
var statearr_58273_59945 = state_58220__$1;
(statearr_58273_59945[(2)] = null);

(statearr_58273_59945[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (29))){
var inst_58204 = (state_58220[(2)]);
var state_58220__$1 = state_58220;
var statearr_58276_59946 = state_58220__$1;
(statearr_58276_59946[(2)] = inst_58204);

(statearr_58276_59946[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (44))){
var inst_58213 = (state_58220[(2)]);
var state_58220__$1 = (function (){var statearr_58277 = state_58220;
(statearr_58277[(26)] = inst_58213);

return statearr_58277;
})();
var statearr_58278_59948 = state_58220__$1;
(statearr_58278_59948[(2)] = null);

(statearr_58278_59948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (6))){
var inst_58130 = (state_58220[(27)]);
var inst_58129 = cljs.core.deref(cs);
var inst_58130__$1 = cljs.core.keys(inst_58129);
var inst_58131 = cljs.core.count(inst_58130__$1);
var inst_58132 = cljs.core.reset_BANG_(dctr,inst_58131);
var inst_58137 = cljs.core.seq(inst_58130__$1);
var inst_58138 = inst_58137;
var inst_58139 = null;
var inst_58140 = (0);
var inst_58141 = (0);
var state_58220__$1 = (function (){var statearr_58280 = state_58220;
(statearr_58280[(9)] = inst_58139);

(statearr_58280[(28)] = inst_58132);

(statearr_58280[(10)] = inst_58141);

(statearr_58280[(19)] = inst_58138);

(statearr_58280[(27)] = inst_58130__$1);

(statearr_58280[(20)] = inst_58140);

return statearr_58280;
})();
var statearr_58282_59949 = state_58220__$1;
(statearr_58282_59949[(2)] = null);

(statearr_58282_59949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (28))){
var inst_58157 = (state_58220[(23)]);
var inst_58138 = (state_58220[(19)]);
var inst_58157__$1 = cljs.core.seq(inst_58138);
var state_58220__$1 = (function (){var statearr_58283 = state_58220;
(statearr_58283[(23)] = inst_58157__$1);

return statearr_58283;
})();
if(inst_58157__$1){
var statearr_58284_59951 = state_58220__$1;
(statearr_58284_59951[(1)] = (33));

} else {
var statearr_58285_59952 = state_58220__$1;
(statearr_58285_59952[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (25))){
var inst_58141 = (state_58220[(10)]);
var inst_58140 = (state_58220[(20)]);
var inst_58143 = (inst_58141 < inst_58140);
var inst_58144 = inst_58143;
var state_58220__$1 = state_58220;
if(cljs.core.truth_(inst_58144)){
var statearr_58287_59956 = state_58220__$1;
(statearr_58287_59956[(1)] = (27));

} else {
var statearr_58288_59957 = state_58220__$1;
(statearr_58288_59957[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (34))){
var state_58220__$1 = state_58220;
var statearr_58290_59958 = state_58220__$1;
(statearr_58290_59958[(2)] = null);

(statearr_58290_59958[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (17))){
var state_58220__$1 = state_58220;
var statearr_58292_59959 = state_58220__$1;
(statearr_58292_59959[(2)] = null);

(statearr_58292_59959[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (3))){
var inst_58218 = (state_58220[(2)]);
var state_58220__$1 = state_58220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58220__$1,inst_58218);
} else {
if((state_val_58222 === (12))){
var inst_58125 = (state_58220[(2)]);
var state_58220__$1 = state_58220;
var statearr_58293_59962 = state_58220__$1;
(statearr_58293_59962[(2)] = inst_58125);

(statearr_58293_59962[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (2))){
var state_58220__$1 = state_58220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58220__$1,(4),ch);
} else {
if((state_val_58222 === (23))){
var state_58220__$1 = state_58220;
var statearr_58296_59963 = state_58220__$1;
(statearr_58296_59963[(2)] = null);

(statearr_58296_59963[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (35))){
var inst_58202 = (state_58220[(2)]);
var state_58220__$1 = state_58220;
var statearr_58298_59964 = state_58220__$1;
(statearr_58298_59964[(2)] = inst_58202);

(statearr_58298_59964[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (19))){
var inst_58096 = (state_58220[(7)]);
var inst_58101 = cljs.core.chunk_first(inst_58096);
var inst_58102 = cljs.core.chunk_rest(inst_58096);
var inst_58103 = cljs.core.count(inst_58101);
var inst_58072 = inst_58102;
var inst_58073 = inst_58101;
var inst_58074 = inst_58103;
var inst_58075 = (0);
var state_58220__$1 = (function (){var statearr_58299 = state_58220;
(statearr_58299[(13)] = inst_58072);

(statearr_58299[(14)] = inst_58074);

(statearr_58299[(15)] = inst_58075);

(statearr_58299[(16)] = inst_58073);

return statearr_58299;
})();
var statearr_58300_59966 = state_58220__$1;
(statearr_58300_59966[(2)] = null);

(statearr_58300_59966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (11))){
var inst_58096 = (state_58220[(7)]);
var inst_58072 = (state_58220[(13)]);
var inst_58096__$1 = cljs.core.seq(inst_58072);
var state_58220__$1 = (function (){var statearr_58303 = state_58220;
(statearr_58303[(7)] = inst_58096__$1);

return statearr_58303;
})();
if(inst_58096__$1){
var statearr_58305_59968 = state_58220__$1;
(statearr_58305_59968[(1)] = (16));

} else {
var statearr_58306_59969 = state_58220__$1;
(statearr_58306_59969[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (9))){
var inst_58127 = (state_58220[(2)]);
var state_58220__$1 = state_58220;
var statearr_58307_59970 = state_58220__$1;
(statearr_58307_59970[(2)] = inst_58127);

(statearr_58307_59970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (5))){
var inst_58070 = cljs.core.deref(cs);
var inst_58071 = cljs.core.seq(inst_58070);
var inst_58072 = inst_58071;
var inst_58073 = null;
var inst_58074 = (0);
var inst_58075 = (0);
var state_58220__$1 = (function (){var statearr_58312 = state_58220;
(statearr_58312[(13)] = inst_58072);

(statearr_58312[(14)] = inst_58074);

(statearr_58312[(15)] = inst_58075);

(statearr_58312[(16)] = inst_58073);

return statearr_58312;
})();
var statearr_58313_59971 = state_58220__$1;
(statearr_58313_59971[(2)] = null);

(statearr_58313_59971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (14))){
var state_58220__$1 = state_58220;
var statearr_58315_59972 = state_58220__$1;
(statearr_58315_59972[(2)] = null);

(statearr_58315_59972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (45))){
var inst_58210 = (state_58220[(2)]);
var state_58220__$1 = state_58220;
var statearr_58317_59973 = state_58220__$1;
(statearr_58317_59973[(2)] = inst_58210);

(statearr_58317_59973[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (26))){
var inst_58130 = (state_58220[(27)]);
var inst_58206 = (state_58220[(2)]);
var inst_58207 = cljs.core.seq(inst_58130);
var state_58220__$1 = (function (){var statearr_58318 = state_58220;
(statearr_58318[(29)] = inst_58206);

return statearr_58318;
})();
if(inst_58207){
var statearr_58319_59974 = state_58220__$1;
(statearr_58319_59974[(1)] = (42));

} else {
var statearr_58320_59976 = state_58220__$1;
(statearr_58320_59976[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (16))){
var inst_58096 = (state_58220[(7)]);
var inst_58099 = cljs.core.chunked_seq_QMARK_(inst_58096);
var state_58220__$1 = state_58220;
if(inst_58099){
var statearr_58321_59977 = state_58220__$1;
(statearr_58321_59977[(1)] = (19));

} else {
var statearr_58322_59978 = state_58220__$1;
(statearr_58322_59978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (38))){
var inst_58199 = (state_58220[(2)]);
var state_58220__$1 = state_58220;
var statearr_58323_59979 = state_58220__$1;
(statearr_58323_59979[(2)] = inst_58199);

(statearr_58323_59979[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (30))){
var state_58220__$1 = state_58220;
var statearr_58324_59980 = state_58220__$1;
(statearr_58324_59980[(2)] = null);

(statearr_58324_59980[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (10))){
var inst_58075 = (state_58220[(15)]);
var inst_58073 = (state_58220[(16)]);
var inst_58085 = cljs.core._nth(inst_58073,inst_58075);
var inst_58086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58085,(0),null);
var inst_58087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58085,(1),null);
var state_58220__$1 = (function (){var statearr_58326 = state_58220;
(statearr_58326[(24)] = inst_58086);

return statearr_58326;
})();
if(cljs.core.truth_(inst_58087)){
var statearr_58328_59981 = state_58220__$1;
(statearr_58328_59981[(1)] = (13));

} else {
var statearr_58329_59982 = state_58220__$1;
(statearr_58329_59982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (18))){
var inst_58123 = (state_58220[(2)]);
var state_58220__$1 = state_58220;
var statearr_58332_59983 = state_58220__$1;
(statearr_58332_59983[(2)] = inst_58123);

(statearr_58332_59983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (42))){
var state_58220__$1 = state_58220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58220__$1,(45),dchan);
} else {
if((state_val_58222 === (37))){
var inst_58157 = (state_58220[(23)]);
var inst_58062 = (state_58220[(11)]);
var inst_58184 = (state_58220[(22)]);
var inst_58184__$1 = cljs.core.first(inst_58157);
var inst_58186 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58184__$1,inst_58062,done);
var state_58220__$1 = (function (){var statearr_58333 = state_58220;
(statearr_58333[(22)] = inst_58184__$1);

return statearr_58333;
})();
if(cljs.core.truth_(inst_58186)){
var statearr_58334_59989 = state_58220__$1;
(statearr_58334_59989[(1)] = (39));

} else {
var statearr_58335_59991 = state_58220__$1;
(statearr_58335_59991[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (8))){
var inst_58074 = (state_58220[(14)]);
var inst_58075 = (state_58220[(15)]);
var inst_58077 = (inst_58075 < inst_58074);
var inst_58078 = inst_58077;
var state_58220__$1 = state_58220;
if(cljs.core.truth_(inst_58078)){
var statearr_58336_59996 = state_58220__$1;
(statearr_58336_59996[(1)] = (10));

} else {
var statearr_58337_59997 = state_58220__$1;
(statearr_58337_59997[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__34930__auto__ = null;
var cljs$core$async$mult_$_state_machine__34930__auto____0 = (function (){
var statearr_58339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58339[(0)] = cljs$core$async$mult_$_state_machine__34930__auto__);

(statearr_58339[(1)] = (1));

return statearr_58339;
});
var cljs$core$async$mult_$_state_machine__34930__auto____1 = (function (state_58220){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_58220);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e58341){var ex__34933__auto__ = e58341;
var statearr_58342_59998 = state_58220;
(statearr_58342_59998[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_58220[(4)]))){
var statearr_58343_60000 = state_58220;
(statearr_58343_60000[(1)] = cljs.core.first((state_58220[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60005 = state_58220;
state_58220 = G__60005;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34930__auto__ = function(state_58220){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34930__auto____1.call(this,state_58220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34930__auto____0;
cljs$core$async$mult_$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34930__auto____1;
return cljs$core$async$mult_$_state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_58347 = f__35017__auto__();
(statearr_58347[(6)] = c__35016__auto___59908);

return statearr_58347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__58350 = arguments.length;
switch (G__58350) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_60009 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_60009(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_60011 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_60011(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_60012 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_60012(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_60013 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_60013(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_60015 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_60015(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60021 = arguments.length;
var i__5770__auto___60022 = (0);
while(true){
if((i__5770__auto___60022 < len__5769__auto___60021)){
args__5775__auto__.push((arguments[i__5770__auto___60022]));

var G__60023 = (i__5770__auto___60022 + (1));
i__5770__auto___60022 = G__60023;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__58385){
var map__58386 = p__58385;
var map__58386__$1 = cljs.core.__destructure_map(map__58386);
var opts = map__58386__$1;
var statearr_58387_60024 = state;
(statearr_58387_60024[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_58391_60026 = state;
(statearr_58391_60026[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_58392_60027 = state;
(statearr_58392_60027[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq58378){
var G__58379 = cljs.core.first(seq58378);
var seq58378__$1 = cljs.core.next(seq58378);
var G__58380 = cljs.core.first(seq58378__$1);
var seq58378__$2 = cljs.core.next(seq58378__$1);
var G__58381 = cljs.core.first(seq58378__$2);
var seq58378__$3 = cljs.core.next(seq58378__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58379,G__58380,G__58381,seq58378__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58396 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta58397){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta58397 = meta58397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58398,meta58397__$1){
var self__ = this;
var _58398__$1 = this;
return (new cljs.core.async.t_cljs$core$async58396(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta58397__$1));
}));

(cljs.core.async.t_cljs$core$async58396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58398){
var self__ = this;
var _58398__$1 = this;
return self__.meta58397;
}));

(cljs.core.async.t_cljs$core$async58396.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async58396.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58396.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58396.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58396.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58396.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58396.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta58397","meta58397",-1773582441,null)], null);
}));

(cljs.core.async.t_cljs$core$async58396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58396");

(cljs.core.async.t_cljs$core$async58396.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async58396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58396.
 */
cljs.core.async.__GT_t_cljs$core$async58396 = (function cljs$core$async$__GT_t_cljs$core$async58396(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta58397){
return (new cljs.core.async.t_cljs$core$async58396(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta58397));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async58396(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__35016__auto___60050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_58479){
var state_val_58480 = (state_58479[(1)]);
if((state_val_58480 === (7))){
var inst_58439 = (state_58479[(2)]);
var state_58479__$1 = state_58479;
if(cljs.core.truth_(inst_58439)){
var statearr_58482_60051 = state_58479__$1;
(statearr_58482_60051[(1)] = (8));

} else {
var statearr_58483_60052 = state_58479__$1;
(statearr_58483_60052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (20))){
var inst_58432 = (state_58479[(7)]);
var state_58479__$1 = state_58479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58479__$1,(23),out,inst_58432);
} else {
if((state_val_58480 === (1))){
var inst_58412 = calc_state();
var inst_58413 = cljs.core.__destructure_map(inst_58412);
var inst_58414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58413,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58413,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58413,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_58417 = inst_58412;
var state_58479__$1 = (function (){var statearr_58485 = state_58479;
(statearr_58485[(8)] = inst_58416);

(statearr_58485[(9)] = inst_58415);

(statearr_58485[(10)] = inst_58417);

(statearr_58485[(11)] = inst_58414);

return statearr_58485;
})();
var statearr_58486_60057 = state_58479__$1;
(statearr_58486_60057[(2)] = null);

(statearr_58486_60057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (24))){
var inst_58421 = (state_58479[(12)]);
var inst_58417 = inst_58421;
var state_58479__$1 = (function (){var statearr_58491 = state_58479;
(statearr_58491[(10)] = inst_58417);

return statearr_58491;
})();
var statearr_58494_60058 = state_58479__$1;
(statearr_58494_60058[(2)] = null);

(statearr_58494_60058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (4))){
var inst_58434 = (state_58479[(13)]);
var inst_58432 = (state_58479[(7)]);
var inst_58431 = (state_58479[(2)]);
var inst_58432__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58431,(0),null);
var inst_58433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58431,(1),null);
var inst_58434__$1 = (inst_58432__$1 == null);
var state_58479__$1 = (function (){var statearr_58504 = state_58479;
(statearr_58504[(14)] = inst_58433);

(statearr_58504[(13)] = inst_58434__$1);

(statearr_58504[(7)] = inst_58432__$1);

return statearr_58504;
})();
if(cljs.core.truth_(inst_58434__$1)){
var statearr_58505_60059 = state_58479__$1;
(statearr_58505_60059[(1)] = (5));

} else {
var statearr_58506_60060 = state_58479__$1;
(statearr_58506_60060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (15))){
var inst_58423 = (state_58479[(15)]);
var inst_58453 = (state_58479[(16)]);
var inst_58453__$1 = cljs.core.empty_QMARK_(inst_58423);
var state_58479__$1 = (function (){var statearr_58510 = state_58479;
(statearr_58510[(16)] = inst_58453__$1);

return statearr_58510;
})();
if(inst_58453__$1){
var statearr_58512_60063 = state_58479__$1;
(statearr_58512_60063[(1)] = (17));

} else {
var statearr_58513_60064 = state_58479__$1;
(statearr_58513_60064[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (21))){
var inst_58421 = (state_58479[(12)]);
var inst_58417 = inst_58421;
var state_58479__$1 = (function (){var statearr_58514 = state_58479;
(statearr_58514[(10)] = inst_58417);

return statearr_58514;
})();
var statearr_58518_60069 = state_58479__$1;
(statearr_58518_60069[(2)] = null);

(statearr_58518_60069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (13))){
var inst_58446 = (state_58479[(2)]);
var inst_58447 = calc_state();
var inst_58417 = inst_58447;
var state_58479__$1 = (function (){var statearr_58519 = state_58479;
(statearr_58519[(17)] = inst_58446);

(statearr_58519[(10)] = inst_58417);

return statearr_58519;
})();
var statearr_58520_60070 = state_58479__$1;
(statearr_58520_60070[(2)] = null);

(statearr_58520_60070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (22))){
var inst_58473 = (state_58479[(2)]);
var state_58479__$1 = state_58479;
var statearr_58521_60071 = state_58479__$1;
(statearr_58521_60071[(2)] = inst_58473);

(statearr_58521_60071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (6))){
var inst_58433 = (state_58479[(14)]);
var inst_58437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58433,change);
var state_58479__$1 = state_58479;
var statearr_58525_60072 = state_58479__$1;
(statearr_58525_60072[(2)] = inst_58437);

(statearr_58525_60072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (25))){
var state_58479__$1 = state_58479;
var statearr_58526_60074 = state_58479__$1;
(statearr_58526_60074[(2)] = null);

(statearr_58526_60074[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (17))){
var inst_58424 = (state_58479[(18)]);
var inst_58433 = (state_58479[(14)]);
var inst_58455 = (inst_58424.cljs$core$IFn$_invoke$arity$1 ? inst_58424.cljs$core$IFn$_invoke$arity$1(inst_58433) : inst_58424.call(null,inst_58433));
var inst_58456 = cljs.core.not(inst_58455);
var state_58479__$1 = state_58479;
var statearr_58527_60076 = state_58479__$1;
(statearr_58527_60076[(2)] = inst_58456);

(statearr_58527_60076[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (3))){
var inst_58477 = (state_58479[(2)]);
var state_58479__$1 = state_58479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58479__$1,inst_58477);
} else {
if((state_val_58480 === (12))){
var state_58479__$1 = state_58479;
var statearr_58529_60080 = state_58479__$1;
(statearr_58529_60080[(2)] = null);

(statearr_58529_60080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (2))){
var inst_58421 = (state_58479[(12)]);
var inst_58417 = (state_58479[(10)]);
var inst_58421__$1 = cljs.core.__destructure_map(inst_58417);
var inst_58423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58421__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58421__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58421__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58479__$1 = (function (){var statearr_58536 = state_58479;
(statearr_58536[(15)] = inst_58423);

(statearr_58536[(18)] = inst_58424);

(statearr_58536[(12)] = inst_58421__$1);

return statearr_58536;
})();
return cljs.core.async.ioc_alts_BANG_(state_58479__$1,(4),inst_58425);
} else {
if((state_val_58480 === (23))){
var inst_58464 = (state_58479[(2)]);
var state_58479__$1 = state_58479;
if(cljs.core.truth_(inst_58464)){
var statearr_58543_60081 = state_58479__$1;
(statearr_58543_60081[(1)] = (24));

} else {
var statearr_58544_60082 = state_58479__$1;
(statearr_58544_60082[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (19))){
var inst_58459 = (state_58479[(2)]);
var state_58479__$1 = state_58479;
var statearr_58548_60083 = state_58479__$1;
(statearr_58548_60083[(2)] = inst_58459);

(statearr_58548_60083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (11))){
var inst_58433 = (state_58479[(14)]);
var inst_58443 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_58433);
var state_58479__$1 = state_58479;
var statearr_58554_60084 = state_58479__$1;
(statearr_58554_60084[(2)] = inst_58443);

(statearr_58554_60084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (9))){
var inst_58423 = (state_58479[(15)]);
var inst_58433 = (state_58479[(14)]);
var inst_58450 = (state_58479[(19)]);
var inst_58450__$1 = (inst_58423.cljs$core$IFn$_invoke$arity$1 ? inst_58423.cljs$core$IFn$_invoke$arity$1(inst_58433) : inst_58423.call(null,inst_58433));
var state_58479__$1 = (function (){var statearr_58555 = state_58479;
(statearr_58555[(19)] = inst_58450__$1);

return statearr_58555;
})();
if(cljs.core.truth_(inst_58450__$1)){
var statearr_58558_60086 = state_58479__$1;
(statearr_58558_60086[(1)] = (14));

} else {
var statearr_58559_60087 = state_58479__$1;
(statearr_58559_60087[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (5))){
var inst_58434 = (state_58479[(13)]);
var state_58479__$1 = state_58479;
var statearr_58560_60088 = state_58479__$1;
(statearr_58560_60088[(2)] = inst_58434);

(statearr_58560_60088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (14))){
var inst_58450 = (state_58479[(19)]);
var state_58479__$1 = state_58479;
var statearr_58563_60089 = state_58479__$1;
(statearr_58563_60089[(2)] = inst_58450);

(statearr_58563_60089[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (26))){
var inst_58469 = (state_58479[(2)]);
var state_58479__$1 = state_58479;
var statearr_58566_60091 = state_58479__$1;
(statearr_58566_60091[(2)] = inst_58469);

(statearr_58566_60091[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (16))){
var inst_58461 = (state_58479[(2)]);
var state_58479__$1 = state_58479;
if(cljs.core.truth_(inst_58461)){
var statearr_58567_60092 = state_58479__$1;
(statearr_58567_60092[(1)] = (20));

} else {
var statearr_58569_60093 = state_58479__$1;
(statearr_58569_60093[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (10))){
var inst_58475 = (state_58479[(2)]);
var state_58479__$1 = state_58479;
var statearr_58570_60094 = state_58479__$1;
(statearr_58570_60094[(2)] = inst_58475);

(statearr_58570_60094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (18))){
var inst_58453 = (state_58479[(16)]);
var state_58479__$1 = state_58479;
var statearr_58571_60095 = state_58479__$1;
(statearr_58571_60095[(2)] = inst_58453);

(statearr_58571_60095[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58480 === (8))){
var inst_58432 = (state_58479[(7)]);
var inst_58441 = (inst_58432 == null);
var state_58479__$1 = state_58479;
if(cljs.core.truth_(inst_58441)){
var statearr_58572_60096 = state_58479__$1;
(statearr_58572_60096[(1)] = (11));

} else {
var statearr_58573_60097 = state_58479__$1;
(statearr_58573_60097[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__34930__auto__ = null;
var cljs$core$async$mix_$_state_machine__34930__auto____0 = (function (){
var statearr_58579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58579[(0)] = cljs$core$async$mix_$_state_machine__34930__auto__);

(statearr_58579[(1)] = (1));

return statearr_58579;
});
var cljs$core$async$mix_$_state_machine__34930__auto____1 = (function (state_58479){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_58479);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e58581){var ex__34933__auto__ = e58581;
var statearr_58582_60100 = state_58479;
(statearr_58582_60100[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_58479[(4)]))){
var statearr_58583_60101 = state_58479;
(statearr_58583_60101[(1)] = cljs.core.first((state_58479[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60102 = state_58479;
state_58479 = G__60102;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34930__auto__ = function(state_58479){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34930__auto____1.call(this,state_58479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34930__auto____0;
cljs$core$async$mix_$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34930__auto____1;
return cljs$core$async$mix_$_state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_58584 = f__35017__auto__();
(statearr_58584[(6)] = c__35016__auto___60050);

return statearr_58584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_60107 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_60107(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_60111 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_60111(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_60118 = (function() {
var G__60119 = null;
var G__60119__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__60119__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__60119 = function(p,v){
switch(arguments.length){
case 1:
return G__60119__1.call(this,p);
case 2:
return G__60119__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60119.cljs$core$IFn$_invoke$arity$1 = G__60119__1;
G__60119.cljs$core$IFn$_invoke$arity$2 = G__60119__2;
return G__60119;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__58599 = arguments.length;
switch (G__58599) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60118(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60118(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58615 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58616){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58616 = meta58616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58617,meta58616__$1){
var self__ = this;
var _58617__$1 = this;
return (new cljs.core.async.t_cljs$core$async58615(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58616__$1));
}));

(cljs.core.async.t_cljs$core$async58615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58617){
var self__ = this;
var _58617__$1 = this;
return self__.meta58616;
}));

(cljs.core.async.t_cljs$core$async58615.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58615.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58615.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58615.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async58615.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async58615.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async58615.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async58615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58616","meta58616",-1455910795,null)], null);
}));

(cljs.core.async.t_cljs$core$async58615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58615");

(cljs.core.async.t_cljs$core$async58615.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async58615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58615.
 */
cljs.core.async.__GT_t_cljs$core$async58615 = (function cljs$core$async$__GT_t_cljs$core$async58615(ch,topic_fn,buf_fn,mults,ensure_mult,meta58616){
return (new cljs.core.async.t_cljs$core$async58615(ch,topic_fn,buf_fn,mults,ensure_mult,meta58616));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__58614 = arguments.length;
switch (G__58614) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__58612_SHARP_){
if(cljs.core.truth_((p1__58612_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__58612_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__58612_SHARP_.call(null,topic)))){
return p1__58612_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58612_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async58615(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__35016__auto___60132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_58708){
var state_val_58709 = (state_58708[(1)]);
if((state_val_58709 === (7))){
var inst_58701 = (state_58708[(2)]);
var state_58708__$1 = state_58708;
var statearr_58716_60133 = state_58708__$1;
(statearr_58716_60133[(2)] = inst_58701);

(statearr_58716_60133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (20))){
var state_58708__$1 = state_58708;
var statearr_58717_60134 = state_58708__$1;
(statearr_58717_60134[(2)] = null);

(statearr_58717_60134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (1))){
var state_58708__$1 = state_58708;
var statearr_58718_60135 = state_58708__$1;
(statearr_58718_60135[(2)] = null);

(statearr_58718_60135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (24))){
var inst_58684 = (state_58708[(7)]);
var inst_58693 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_58684);
var state_58708__$1 = state_58708;
var statearr_58719_60136 = state_58708__$1;
(statearr_58719_60136[(2)] = inst_58693);

(statearr_58719_60136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (4))){
var inst_58630 = (state_58708[(8)]);
var inst_58630__$1 = (state_58708[(2)]);
var inst_58633 = (inst_58630__$1 == null);
var state_58708__$1 = (function (){var statearr_58720 = state_58708;
(statearr_58720[(8)] = inst_58630__$1);

return statearr_58720;
})();
if(cljs.core.truth_(inst_58633)){
var statearr_58721_60142 = state_58708__$1;
(statearr_58721_60142[(1)] = (5));

} else {
var statearr_58722_60143 = state_58708__$1;
(statearr_58722_60143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (15))){
var inst_58678 = (state_58708[(2)]);
var state_58708__$1 = state_58708;
var statearr_58724_60144 = state_58708__$1;
(statearr_58724_60144[(2)] = inst_58678);

(statearr_58724_60144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (21))){
var inst_58698 = (state_58708[(2)]);
var state_58708__$1 = (function (){var statearr_58725 = state_58708;
(statearr_58725[(9)] = inst_58698);

return statearr_58725;
})();
var statearr_58726_60145 = state_58708__$1;
(statearr_58726_60145[(2)] = null);

(statearr_58726_60145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (13))){
var inst_58656 = (state_58708[(10)]);
var inst_58662 = cljs.core.chunked_seq_QMARK_(inst_58656);
var state_58708__$1 = state_58708;
if(inst_58662){
var statearr_58727_60146 = state_58708__$1;
(statearr_58727_60146[(1)] = (16));

} else {
var statearr_58728_60147 = state_58708__$1;
(statearr_58728_60147[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (22))){
var inst_58690 = (state_58708[(2)]);
var state_58708__$1 = state_58708;
if(cljs.core.truth_(inst_58690)){
var statearr_58730_60149 = state_58708__$1;
(statearr_58730_60149[(1)] = (23));

} else {
var statearr_58731_60150 = state_58708__$1;
(statearr_58731_60150[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (6))){
var inst_58686 = (state_58708[(11)]);
var inst_58684 = (state_58708[(7)]);
var inst_58630 = (state_58708[(8)]);
var inst_58684__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_58630) : topic_fn.call(null,inst_58630));
var inst_58685 = cljs.core.deref(mults);
var inst_58686__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58685,inst_58684__$1);
var state_58708__$1 = (function (){var statearr_58732 = state_58708;
(statearr_58732[(11)] = inst_58686__$1);

(statearr_58732[(7)] = inst_58684__$1);

return statearr_58732;
})();
if(cljs.core.truth_(inst_58686__$1)){
var statearr_58736_60152 = state_58708__$1;
(statearr_58736_60152[(1)] = (19));

} else {
var statearr_58738_60154 = state_58708__$1;
(statearr_58738_60154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (25))){
var inst_58695 = (state_58708[(2)]);
var state_58708__$1 = state_58708;
var statearr_58740_60160 = state_58708__$1;
(statearr_58740_60160[(2)] = inst_58695);

(statearr_58740_60160[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (17))){
var inst_58656 = (state_58708[(10)]);
var inst_58669 = cljs.core.first(inst_58656);
var inst_58670 = cljs.core.async.muxch_STAR_(inst_58669);
var inst_58671 = cljs.core.async.close_BANG_(inst_58670);
var inst_58672 = cljs.core.next(inst_58656);
var inst_58642 = inst_58672;
var inst_58643 = null;
var inst_58644 = (0);
var inst_58645 = (0);
var state_58708__$1 = (function (){var statearr_58744 = state_58708;
(statearr_58744[(12)] = inst_58671);

(statearr_58744[(13)] = inst_58644);

(statearr_58744[(14)] = inst_58642);

(statearr_58744[(15)] = inst_58643);

(statearr_58744[(16)] = inst_58645);

return statearr_58744;
})();
var statearr_58746_60161 = state_58708__$1;
(statearr_58746_60161[(2)] = null);

(statearr_58746_60161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (3))){
var inst_58703 = (state_58708[(2)]);
var state_58708__$1 = state_58708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58708__$1,inst_58703);
} else {
if((state_val_58709 === (12))){
var inst_58680 = (state_58708[(2)]);
var state_58708__$1 = state_58708;
var statearr_58747_60163 = state_58708__$1;
(statearr_58747_60163[(2)] = inst_58680);

(statearr_58747_60163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (2))){
var state_58708__$1 = state_58708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58708__$1,(4),ch);
} else {
if((state_val_58709 === (23))){
var state_58708__$1 = state_58708;
var statearr_58749_60164 = state_58708__$1;
(statearr_58749_60164[(2)] = null);

(statearr_58749_60164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (19))){
var inst_58686 = (state_58708[(11)]);
var inst_58630 = (state_58708[(8)]);
var inst_58688 = cljs.core.async.muxch_STAR_(inst_58686);
var state_58708__$1 = state_58708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58708__$1,(22),inst_58688,inst_58630);
} else {
if((state_val_58709 === (11))){
var inst_58642 = (state_58708[(14)]);
var inst_58656 = (state_58708[(10)]);
var inst_58656__$1 = cljs.core.seq(inst_58642);
var state_58708__$1 = (function (){var statearr_58759 = state_58708;
(statearr_58759[(10)] = inst_58656__$1);

return statearr_58759;
})();
if(inst_58656__$1){
var statearr_58760_60165 = state_58708__$1;
(statearr_58760_60165[(1)] = (13));

} else {
var statearr_58761_60166 = state_58708__$1;
(statearr_58761_60166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (9))){
var inst_58682 = (state_58708[(2)]);
var state_58708__$1 = state_58708;
var statearr_58762_60169 = state_58708__$1;
(statearr_58762_60169[(2)] = inst_58682);

(statearr_58762_60169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (5))){
var inst_58639 = cljs.core.deref(mults);
var inst_58640 = cljs.core.vals(inst_58639);
var inst_58641 = cljs.core.seq(inst_58640);
var inst_58642 = inst_58641;
var inst_58643 = null;
var inst_58644 = (0);
var inst_58645 = (0);
var state_58708__$1 = (function (){var statearr_58763 = state_58708;
(statearr_58763[(13)] = inst_58644);

(statearr_58763[(14)] = inst_58642);

(statearr_58763[(15)] = inst_58643);

(statearr_58763[(16)] = inst_58645);

return statearr_58763;
})();
var statearr_58765_60174 = state_58708__$1;
(statearr_58765_60174[(2)] = null);

(statearr_58765_60174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (14))){
var state_58708__$1 = state_58708;
var statearr_58769_60175 = state_58708__$1;
(statearr_58769_60175[(2)] = null);

(statearr_58769_60175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (16))){
var inst_58656 = (state_58708[(10)]);
var inst_58664 = cljs.core.chunk_first(inst_58656);
var inst_58665 = cljs.core.chunk_rest(inst_58656);
var inst_58666 = cljs.core.count(inst_58664);
var inst_58642 = inst_58665;
var inst_58643 = inst_58664;
var inst_58644 = inst_58666;
var inst_58645 = (0);
var state_58708__$1 = (function (){var statearr_58774 = state_58708;
(statearr_58774[(13)] = inst_58644);

(statearr_58774[(14)] = inst_58642);

(statearr_58774[(15)] = inst_58643);

(statearr_58774[(16)] = inst_58645);

return statearr_58774;
})();
var statearr_58775_60176 = state_58708__$1;
(statearr_58775_60176[(2)] = null);

(statearr_58775_60176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (10))){
var inst_58644 = (state_58708[(13)]);
var inst_58642 = (state_58708[(14)]);
var inst_58643 = (state_58708[(15)]);
var inst_58645 = (state_58708[(16)]);
var inst_58650 = cljs.core._nth(inst_58643,inst_58645);
var inst_58651 = cljs.core.async.muxch_STAR_(inst_58650);
var inst_58652 = cljs.core.async.close_BANG_(inst_58651);
var inst_58653 = (inst_58645 + (1));
var tmp58766 = inst_58644;
var tmp58767 = inst_58642;
var tmp58768 = inst_58643;
var inst_58642__$1 = tmp58767;
var inst_58643__$1 = tmp58768;
var inst_58644__$1 = tmp58766;
var inst_58645__$1 = inst_58653;
var state_58708__$1 = (function (){var statearr_58776 = state_58708;
(statearr_58776[(17)] = inst_58652);

(statearr_58776[(13)] = inst_58644__$1);

(statearr_58776[(14)] = inst_58642__$1);

(statearr_58776[(15)] = inst_58643__$1);

(statearr_58776[(16)] = inst_58645__$1);

return statearr_58776;
})();
var statearr_58778_60181 = state_58708__$1;
(statearr_58778_60181[(2)] = null);

(statearr_58778_60181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (18))){
var inst_58675 = (state_58708[(2)]);
var state_58708__$1 = state_58708;
var statearr_58780_60182 = state_58708__$1;
(statearr_58780_60182[(2)] = inst_58675);

(statearr_58780_60182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58709 === (8))){
var inst_58644 = (state_58708[(13)]);
var inst_58645 = (state_58708[(16)]);
var inst_58647 = (inst_58645 < inst_58644);
var inst_58648 = inst_58647;
var state_58708__$1 = state_58708;
if(cljs.core.truth_(inst_58648)){
var statearr_58781_60183 = state_58708__$1;
(statearr_58781_60183[(1)] = (10));

} else {
var statearr_58782_60184 = state_58708__$1;
(statearr_58782_60184[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34930__auto__ = null;
var cljs$core$async$state_machine__34930__auto____0 = (function (){
var statearr_58783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58783[(0)] = cljs$core$async$state_machine__34930__auto__);

(statearr_58783[(1)] = (1));

return statearr_58783;
});
var cljs$core$async$state_machine__34930__auto____1 = (function (state_58708){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_58708);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e58784){var ex__34933__auto__ = e58784;
var statearr_58785_60188 = state_58708;
(statearr_58785_60188[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_58708[(4)]))){
var statearr_58786_60189 = state_58708;
(statearr_58786_60189[(1)] = cljs.core.first((state_58708[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60190 = state_58708;
state_58708 = G__60190;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$state_machine__34930__auto__ = function(state_58708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34930__auto____1.call(this,state_58708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34930__auto____0;
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34930__auto____1;
return cljs$core$async$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_58791 = f__35017__auto__();
(statearr_58791[(6)] = c__35016__auto___60132);

return statearr_58791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__58793 = arguments.length;
switch (G__58793) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__58799 = arguments.length;
switch (G__58799) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__58802 = arguments.length;
switch (G__58802) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__35016__auto___60204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_58847){
var state_val_58848 = (state_58847[(1)]);
if((state_val_58848 === (7))){
var state_58847__$1 = state_58847;
var statearr_58849_60205 = state_58847__$1;
(statearr_58849_60205[(2)] = null);

(statearr_58849_60205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (1))){
var state_58847__$1 = state_58847;
var statearr_58850_60206 = state_58847__$1;
(statearr_58850_60206[(2)] = null);

(statearr_58850_60206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (4))){
var inst_58807 = (state_58847[(7)]);
var inst_58808 = (state_58847[(8)]);
var inst_58810 = (inst_58808 < inst_58807);
var state_58847__$1 = state_58847;
if(cljs.core.truth_(inst_58810)){
var statearr_58855_60207 = state_58847__$1;
(statearr_58855_60207[(1)] = (6));

} else {
var statearr_58856_60208 = state_58847__$1;
(statearr_58856_60208[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (15))){
var inst_58833 = (state_58847[(9)]);
var inst_58838 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_58833);
var state_58847__$1 = state_58847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58847__$1,(17),out,inst_58838);
} else {
if((state_val_58848 === (13))){
var inst_58833 = (state_58847[(9)]);
var inst_58833__$1 = (state_58847[(2)]);
var inst_58834 = cljs.core.some(cljs.core.nil_QMARK_,inst_58833__$1);
var state_58847__$1 = (function (){var statearr_58857 = state_58847;
(statearr_58857[(9)] = inst_58833__$1);

return statearr_58857;
})();
if(cljs.core.truth_(inst_58834)){
var statearr_58858_60209 = state_58847__$1;
(statearr_58858_60209[(1)] = (14));

} else {
var statearr_58859_60210 = state_58847__$1;
(statearr_58859_60210[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (6))){
var state_58847__$1 = state_58847;
var statearr_58860_60211 = state_58847__$1;
(statearr_58860_60211[(2)] = null);

(statearr_58860_60211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (17))){
var inst_58840 = (state_58847[(2)]);
var state_58847__$1 = (function (){var statearr_58862 = state_58847;
(statearr_58862[(10)] = inst_58840);

return statearr_58862;
})();
var statearr_58863_60213 = state_58847__$1;
(statearr_58863_60213[(2)] = null);

(statearr_58863_60213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (3))){
var inst_58845 = (state_58847[(2)]);
var state_58847__$1 = state_58847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58847__$1,inst_58845);
} else {
if((state_val_58848 === (12))){
var _ = (function (){var statearr_58874 = state_58847;
(statearr_58874[(4)] = cljs.core.rest((state_58847[(4)])));

return statearr_58874;
})();
var state_58847__$1 = state_58847;
var ex58861 = (state_58847__$1[(2)]);
var statearr_58875_60217 = state_58847__$1;
(statearr_58875_60217[(5)] = ex58861);


if((ex58861 instanceof Object)){
var statearr_58876_60218 = state_58847__$1;
(statearr_58876_60218[(1)] = (11));

(statearr_58876_60218[(5)] = null);

} else {
throw ex58861;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (2))){
var inst_58806 = cljs.core.reset_BANG_(dctr,cnt);
var inst_58807 = cnt;
var inst_58808 = (0);
var state_58847__$1 = (function (){var statearr_58877 = state_58847;
(statearr_58877[(11)] = inst_58806);

(statearr_58877[(7)] = inst_58807);

(statearr_58877[(8)] = inst_58808);

return statearr_58877;
})();
var statearr_58878_60222 = state_58847__$1;
(statearr_58878_60222[(2)] = null);

(statearr_58878_60222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (11))){
var inst_58812 = (state_58847[(2)]);
var inst_58813 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_58847__$1 = (function (){var statearr_58879 = state_58847;
(statearr_58879[(12)] = inst_58812);

return statearr_58879;
})();
var statearr_58880_60223 = state_58847__$1;
(statearr_58880_60223[(2)] = inst_58813);

(statearr_58880_60223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (9))){
var inst_58808 = (state_58847[(8)]);
var _ = (function (){var statearr_58881 = state_58847;
(statearr_58881[(4)] = cljs.core.cons((12),(state_58847[(4)])));

return statearr_58881;
})();
var inst_58819 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_58808) : chs__$1.call(null,inst_58808));
var inst_58820 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_58808) : done.call(null,inst_58808));
var inst_58821 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58819,inst_58820);
var ___$1 = (function (){var statearr_58882 = state_58847;
(statearr_58882[(4)] = cljs.core.rest((state_58847[(4)])));

return statearr_58882;
})();
var state_58847__$1 = state_58847;
var statearr_58883_60232 = state_58847__$1;
(statearr_58883_60232[(2)] = inst_58821);

(statearr_58883_60232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (5))){
var inst_58831 = (state_58847[(2)]);
var state_58847__$1 = (function (){var statearr_58885 = state_58847;
(statearr_58885[(13)] = inst_58831);

return statearr_58885;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58847__$1,(13),dchan);
} else {
if((state_val_58848 === (14))){
var inst_58836 = cljs.core.async.close_BANG_(out);
var state_58847__$1 = state_58847;
var statearr_58888_60235 = state_58847__$1;
(statearr_58888_60235[(2)] = inst_58836);

(statearr_58888_60235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (16))){
var inst_58843 = (state_58847[(2)]);
var state_58847__$1 = state_58847;
var statearr_58889_60238 = state_58847__$1;
(statearr_58889_60238[(2)] = inst_58843);

(statearr_58889_60238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (10))){
var inst_58808 = (state_58847[(8)]);
var inst_58824 = (state_58847[(2)]);
var inst_58825 = (inst_58808 + (1));
var inst_58808__$1 = inst_58825;
var state_58847__$1 = (function (){var statearr_58890 = state_58847;
(statearr_58890[(14)] = inst_58824);

(statearr_58890[(8)] = inst_58808__$1);

return statearr_58890;
})();
var statearr_58891_60243 = state_58847__$1;
(statearr_58891_60243[(2)] = null);

(statearr_58891_60243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58848 === (8))){
var inst_58829 = (state_58847[(2)]);
var state_58847__$1 = state_58847;
var statearr_58892_60245 = state_58847__$1;
(statearr_58892_60245[(2)] = inst_58829);

(statearr_58892_60245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34930__auto__ = null;
var cljs$core$async$state_machine__34930__auto____0 = (function (){
var statearr_58893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58893[(0)] = cljs$core$async$state_machine__34930__auto__);

(statearr_58893[(1)] = (1));

return statearr_58893;
});
var cljs$core$async$state_machine__34930__auto____1 = (function (state_58847){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_58847);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e58894){var ex__34933__auto__ = e58894;
var statearr_58895_60254 = state_58847;
(statearr_58895_60254[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_58847[(4)]))){
var statearr_58896_60255 = state_58847;
(statearr_58896_60255[(1)] = cljs.core.first((state_58847[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60256 = state_58847;
state_58847 = G__60256;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$state_machine__34930__auto__ = function(state_58847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34930__auto____1.call(this,state_58847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34930__auto____0;
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34930__auto____1;
return cljs$core$async$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_58897 = f__35017__auto__();
(statearr_58897[(6)] = c__35016__auto___60204);

return statearr_58897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__58902 = arguments.length;
switch (G__58902) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35016__auto___60261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_58935){
var state_val_58936 = (state_58935[(1)]);
if((state_val_58936 === (7))){
var inst_58915 = (state_58935[(7)]);
var inst_58914 = (state_58935[(8)]);
var inst_58914__$1 = (state_58935[(2)]);
var inst_58915__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58914__$1,(0),null);
var inst_58916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58914__$1,(1),null);
var inst_58917 = (inst_58915__$1 == null);
var state_58935__$1 = (function (){var statearr_58937 = state_58935;
(statearr_58937[(7)] = inst_58915__$1);

(statearr_58937[(8)] = inst_58914__$1);

(statearr_58937[(9)] = inst_58916);

return statearr_58937;
})();
if(cljs.core.truth_(inst_58917)){
var statearr_58938_60264 = state_58935__$1;
(statearr_58938_60264[(1)] = (8));

} else {
var statearr_58939_60265 = state_58935__$1;
(statearr_58939_60265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58936 === (1))){
var inst_58904 = cljs.core.vec(chs);
var inst_58905 = inst_58904;
var state_58935__$1 = (function (){var statearr_58940 = state_58935;
(statearr_58940[(10)] = inst_58905);

return statearr_58940;
})();
var statearr_58942_60268 = state_58935__$1;
(statearr_58942_60268[(2)] = null);

(statearr_58942_60268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58936 === (4))){
var inst_58905 = (state_58935[(10)]);
var state_58935__$1 = state_58935;
return cljs.core.async.ioc_alts_BANG_(state_58935__$1,(7),inst_58905);
} else {
if((state_val_58936 === (6))){
var inst_58931 = (state_58935[(2)]);
var state_58935__$1 = state_58935;
var statearr_58943_60270 = state_58935__$1;
(statearr_58943_60270[(2)] = inst_58931);

(statearr_58943_60270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58936 === (3))){
var inst_58933 = (state_58935[(2)]);
var state_58935__$1 = state_58935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58935__$1,inst_58933);
} else {
if((state_val_58936 === (2))){
var inst_58905 = (state_58935[(10)]);
var inst_58907 = cljs.core.count(inst_58905);
var inst_58908 = (inst_58907 > (0));
var state_58935__$1 = state_58935;
if(cljs.core.truth_(inst_58908)){
var statearr_58946_60273 = state_58935__$1;
(statearr_58946_60273[(1)] = (4));

} else {
var statearr_58947_60274 = state_58935__$1;
(statearr_58947_60274[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58936 === (11))){
var inst_58905 = (state_58935[(10)]);
var inst_58924 = (state_58935[(2)]);
var tmp58945 = inst_58905;
var inst_58905__$1 = tmp58945;
var state_58935__$1 = (function (){var statearr_58948 = state_58935;
(statearr_58948[(10)] = inst_58905__$1);

(statearr_58948[(11)] = inst_58924);

return statearr_58948;
})();
var statearr_58949_60275 = state_58935__$1;
(statearr_58949_60275[(2)] = null);

(statearr_58949_60275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58936 === (9))){
var inst_58915 = (state_58935[(7)]);
var state_58935__$1 = state_58935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58935__$1,(11),out,inst_58915);
} else {
if((state_val_58936 === (5))){
var inst_58929 = cljs.core.async.close_BANG_(out);
var state_58935__$1 = state_58935;
var statearr_58954_60278 = state_58935__$1;
(statearr_58954_60278[(2)] = inst_58929);

(statearr_58954_60278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58936 === (10))){
var inst_58927 = (state_58935[(2)]);
var state_58935__$1 = state_58935;
var statearr_58955_60280 = state_58935__$1;
(statearr_58955_60280[(2)] = inst_58927);

(statearr_58955_60280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58936 === (8))){
var inst_58915 = (state_58935[(7)]);
var inst_58914 = (state_58935[(8)]);
var inst_58916 = (state_58935[(9)]);
var inst_58905 = (state_58935[(10)]);
var inst_58919 = (function (){var cs = inst_58905;
var vec__58910 = inst_58914;
var v = inst_58915;
var c = inst_58916;
return (function (p1__58898_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__58898_SHARP_);
});
})();
var inst_58920 = cljs.core.filterv(inst_58919,inst_58905);
var inst_58905__$1 = inst_58920;
var state_58935__$1 = (function (){var statearr_58957 = state_58935;
(statearr_58957[(10)] = inst_58905__$1);

return statearr_58957;
})();
var statearr_58958_60281 = state_58935__$1;
(statearr_58958_60281[(2)] = null);

(statearr_58958_60281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34930__auto__ = null;
var cljs$core$async$state_machine__34930__auto____0 = (function (){
var statearr_58959 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58959[(0)] = cljs$core$async$state_machine__34930__auto__);

(statearr_58959[(1)] = (1));

return statearr_58959;
});
var cljs$core$async$state_machine__34930__auto____1 = (function (state_58935){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_58935);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e58960){var ex__34933__auto__ = e58960;
var statearr_58961_60292 = state_58935;
(statearr_58961_60292[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_58935[(4)]))){
var statearr_58962_60293 = state_58935;
(statearr_58962_60293[(1)] = cljs.core.first((state_58935[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60295 = state_58935;
state_58935 = G__60295;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$state_machine__34930__auto__ = function(state_58935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34930__auto____1.call(this,state_58935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34930__auto____0;
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34930__auto____1;
return cljs$core$async$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_58963 = f__35017__auto__();
(statearr_58963[(6)] = c__35016__auto___60261);

return statearr_58963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__58965 = arguments.length;
switch (G__58965) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35016__auto___60308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_58991){
var state_val_58992 = (state_58991[(1)]);
if((state_val_58992 === (7))){
var inst_58972 = (state_58991[(7)]);
var inst_58972__$1 = (state_58991[(2)]);
var inst_58974 = (inst_58972__$1 == null);
var inst_58975 = cljs.core.not(inst_58974);
var state_58991__$1 = (function (){var statearr_58993 = state_58991;
(statearr_58993[(7)] = inst_58972__$1);

return statearr_58993;
})();
if(inst_58975){
var statearr_58994_60309 = state_58991__$1;
(statearr_58994_60309[(1)] = (8));

} else {
var statearr_59001_60311 = state_58991__$1;
(statearr_59001_60311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58992 === (1))){
var inst_58966 = (0);
var state_58991__$1 = (function (){var statearr_59005 = state_58991;
(statearr_59005[(8)] = inst_58966);

return statearr_59005;
})();
var statearr_59007_60314 = state_58991__$1;
(statearr_59007_60314[(2)] = null);

(statearr_59007_60314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58992 === (4))){
var state_58991__$1 = state_58991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58991__$1,(7),ch);
} else {
if((state_val_58992 === (6))){
var inst_58986 = (state_58991[(2)]);
var state_58991__$1 = state_58991;
var statearr_59008_60315 = state_58991__$1;
(statearr_59008_60315[(2)] = inst_58986);

(statearr_59008_60315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58992 === (3))){
var inst_58988 = (state_58991[(2)]);
var inst_58989 = cljs.core.async.close_BANG_(out);
var state_58991__$1 = (function (){var statearr_59009 = state_58991;
(statearr_59009[(9)] = inst_58988);

return statearr_59009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58991__$1,inst_58989);
} else {
if((state_val_58992 === (2))){
var inst_58966 = (state_58991[(8)]);
var inst_58969 = (inst_58966 < n);
var state_58991__$1 = state_58991;
if(cljs.core.truth_(inst_58969)){
var statearr_59010_60318 = state_58991__$1;
(statearr_59010_60318[(1)] = (4));

} else {
var statearr_59011_60319 = state_58991__$1;
(statearr_59011_60319[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58992 === (11))){
var inst_58966 = (state_58991[(8)]);
var inst_58978 = (state_58991[(2)]);
var inst_58979 = (inst_58966 + (1));
var inst_58966__$1 = inst_58979;
var state_58991__$1 = (function (){var statearr_59015 = state_58991;
(statearr_59015[(10)] = inst_58978);

(statearr_59015[(8)] = inst_58966__$1);

return statearr_59015;
})();
var statearr_59016_60320 = state_58991__$1;
(statearr_59016_60320[(2)] = null);

(statearr_59016_60320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58992 === (9))){
var state_58991__$1 = state_58991;
var statearr_59017_60321 = state_58991__$1;
(statearr_59017_60321[(2)] = null);

(statearr_59017_60321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58992 === (5))){
var state_58991__$1 = state_58991;
var statearr_59018_60323 = state_58991__$1;
(statearr_59018_60323[(2)] = null);

(statearr_59018_60323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58992 === (10))){
var inst_58983 = (state_58991[(2)]);
var state_58991__$1 = state_58991;
var statearr_59019_60324 = state_58991__$1;
(statearr_59019_60324[(2)] = inst_58983);

(statearr_59019_60324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58992 === (8))){
var inst_58972 = (state_58991[(7)]);
var state_58991__$1 = state_58991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58991__$1,(11),out,inst_58972);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34930__auto__ = null;
var cljs$core$async$state_machine__34930__auto____0 = (function (){
var statearr_59020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59020[(0)] = cljs$core$async$state_machine__34930__auto__);

(statearr_59020[(1)] = (1));

return statearr_59020;
});
var cljs$core$async$state_machine__34930__auto____1 = (function (state_58991){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_58991);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e59021){var ex__34933__auto__ = e59021;
var statearr_59022_60327 = state_58991;
(statearr_59022_60327[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_58991[(4)]))){
var statearr_59026_60328 = state_58991;
(statearr_59026_60328[(1)] = cljs.core.first((state_58991[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60330 = state_58991;
state_58991 = G__60330;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$state_machine__34930__auto__ = function(state_58991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34930__auto____1.call(this,state_58991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34930__auto____0;
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34930__auto____1;
return cljs$core$async$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_59027 = f__35017__auto__();
(statearr_59027[(6)] = c__35016__auto___60308);

return statearr_59027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59035 = (function (f,ch,meta59030,_,fn1,meta59036){
this.f = f;
this.ch = ch;
this.meta59030 = meta59030;
this._ = _;
this.fn1 = fn1;
this.meta59036 = meta59036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59037,meta59036__$1){
var self__ = this;
var _59037__$1 = this;
return (new cljs.core.async.t_cljs$core$async59035(self__.f,self__.ch,self__.meta59030,self__._,self__.fn1,meta59036__$1));
}));

(cljs.core.async.t_cljs$core$async59035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59037){
var self__ = this;
var _59037__$1 = this;
return self__.meta59036;
}));

(cljs.core.async.t_cljs$core$async59035.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async59035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__59028_SHARP_){
var G__59041 = (((p1__59028_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__59028_SHARP_) : self__.f.call(null,p1__59028_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__59041) : f1.call(null,G__59041));
});
}));

(cljs.core.async.t_cljs$core$async59035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59030","meta59030",-1556249282,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async59029","cljs.core.async/t_cljs$core$async59029",1687225644,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta59036","meta59036",-1705453398,null)], null);
}));

(cljs.core.async.t_cljs$core$async59035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59035");

(cljs.core.async.t_cljs$core$async59035.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async59035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59035.
 */
cljs.core.async.__GT_t_cljs$core$async59035 = (function cljs$core$async$__GT_t_cljs$core$async59035(f,ch,meta59030,_,fn1,meta59036){
return (new cljs.core.async.t_cljs$core$async59035(f,ch,meta59030,_,fn1,meta59036));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59029 = (function (f,ch,meta59030){
this.f = f;
this.ch = ch;
this.meta59030 = meta59030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59031,meta59030__$1){
var self__ = this;
var _59031__$1 = this;
return (new cljs.core.async.t_cljs$core$async59029(self__.f,self__.ch,meta59030__$1));
}));

(cljs.core.async.t_cljs$core$async59029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59031){
var self__ = this;
var _59031__$1 = this;
return self__.meta59030;
}));

(cljs.core.async.t_cljs$core$async59029.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59029.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59029.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59029.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59029.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async59035(self__.f,self__.ch,self__.meta59030,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__59048 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__59048) : self__.f.call(null,G__59048));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async59029.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59029.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async59029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59030","meta59030",-1556249282,null)], null);
}));

(cljs.core.async.t_cljs$core$async59029.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59029");

(cljs.core.async.t_cljs$core$async59029.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async59029");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59029.
 */
cljs.core.async.__GT_t_cljs$core$async59029 = (function cljs$core$async$__GT_t_cljs$core$async59029(f,ch,meta59030){
return (new cljs.core.async.t_cljs$core$async59029(f,ch,meta59030));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async59029(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59053 = (function (f,ch,meta59054){
this.f = f;
this.ch = ch;
this.meta59054 = meta59054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59055,meta59054__$1){
var self__ = this;
var _59055__$1 = this;
return (new cljs.core.async.t_cljs$core$async59053(self__.f,self__.ch,meta59054__$1));
}));

(cljs.core.async.t_cljs$core$async59053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59055){
var self__ = this;
var _59055__$1 = this;
return self__.meta59054;
}));

(cljs.core.async.t_cljs$core$async59053.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59053.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59053.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59053.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59053.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59053.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async59053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59054","meta59054",-821972661,null)], null);
}));

(cljs.core.async.t_cljs$core$async59053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59053");

(cljs.core.async.t_cljs$core$async59053.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async59053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59053.
 */
cljs.core.async.__GT_t_cljs$core$async59053 = (function cljs$core$async$__GT_t_cljs$core$async59053(f,ch,meta59054){
return (new cljs.core.async.t_cljs$core$async59053(f,ch,meta59054));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async59053(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59064 = (function (p,ch,meta59065){
this.p = p;
this.ch = ch;
this.meta59065 = meta59065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59066,meta59065__$1){
var self__ = this;
var _59066__$1 = this;
return (new cljs.core.async.t_cljs$core$async59064(self__.p,self__.ch,meta59065__$1));
}));

(cljs.core.async.t_cljs$core$async59064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59066){
var self__ = this;
var _59066__$1 = this;
return self__.meta59065;
}));

(cljs.core.async.t_cljs$core$async59064.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59064.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59064.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59064.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async59064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59065","meta59065",-694906912,null)], null);
}));

(cljs.core.async.t_cljs$core$async59064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59064");

(cljs.core.async.t_cljs$core$async59064.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async59064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59064.
 */
cljs.core.async.__GT_t_cljs$core$async59064 = (function cljs$core$async$__GT_t_cljs$core$async59064(p,ch,meta59065){
return (new cljs.core.async.t_cljs$core$async59064(p,ch,meta59065));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async59064(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__59074 = arguments.length;
switch (G__59074) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35016__auto___60368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_59099){
var state_val_59100 = (state_59099[(1)]);
if((state_val_59100 === (7))){
var inst_59095 = (state_59099[(2)]);
var state_59099__$1 = state_59099;
var statearr_59104_60370 = state_59099__$1;
(statearr_59104_60370[(2)] = inst_59095);

(statearr_59104_60370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59100 === (1))){
var state_59099__$1 = state_59099;
var statearr_59106_60371 = state_59099__$1;
(statearr_59106_60371[(2)] = null);

(statearr_59106_60371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59100 === (4))){
var inst_59081 = (state_59099[(7)]);
var inst_59081__$1 = (state_59099[(2)]);
var inst_59082 = (inst_59081__$1 == null);
var state_59099__$1 = (function (){var statearr_59107 = state_59099;
(statearr_59107[(7)] = inst_59081__$1);

return statearr_59107;
})();
if(cljs.core.truth_(inst_59082)){
var statearr_59108_60373 = state_59099__$1;
(statearr_59108_60373[(1)] = (5));

} else {
var statearr_59109_60374 = state_59099__$1;
(statearr_59109_60374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59100 === (6))){
var inst_59081 = (state_59099[(7)]);
var inst_59086 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59081) : p.call(null,inst_59081));
var state_59099__$1 = state_59099;
if(cljs.core.truth_(inst_59086)){
var statearr_59114_60376 = state_59099__$1;
(statearr_59114_60376[(1)] = (8));

} else {
var statearr_59115_60377 = state_59099__$1;
(statearr_59115_60377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59100 === (3))){
var inst_59097 = (state_59099[(2)]);
var state_59099__$1 = state_59099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59099__$1,inst_59097);
} else {
if((state_val_59100 === (2))){
var state_59099__$1 = state_59099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59099__$1,(4),ch);
} else {
if((state_val_59100 === (11))){
var inst_59089 = (state_59099[(2)]);
var state_59099__$1 = state_59099;
var statearr_59119_60378 = state_59099__$1;
(statearr_59119_60378[(2)] = inst_59089);

(statearr_59119_60378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59100 === (9))){
var state_59099__$1 = state_59099;
var statearr_59120_60379 = state_59099__$1;
(statearr_59120_60379[(2)] = null);

(statearr_59120_60379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59100 === (5))){
var inst_59084 = cljs.core.async.close_BANG_(out);
var state_59099__$1 = state_59099;
var statearr_59121_60380 = state_59099__$1;
(statearr_59121_60380[(2)] = inst_59084);

(statearr_59121_60380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59100 === (10))){
var inst_59092 = (state_59099[(2)]);
var state_59099__$1 = (function (){var statearr_59122 = state_59099;
(statearr_59122[(8)] = inst_59092);

return statearr_59122;
})();
var statearr_59123_60381 = state_59099__$1;
(statearr_59123_60381[(2)] = null);

(statearr_59123_60381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59100 === (8))){
var inst_59081 = (state_59099[(7)]);
var state_59099__$1 = state_59099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59099__$1,(11),out,inst_59081);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34930__auto__ = null;
var cljs$core$async$state_machine__34930__auto____0 = (function (){
var statearr_59124 = [null,null,null,null,null,null,null,null,null];
(statearr_59124[(0)] = cljs$core$async$state_machine__34930__auto__);

(statearr_59124[(1)] = (1));

return statearr_59124;
});
var cljs$core$async$state_machine__34930__auto____1 = (function (state_59099){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_59099);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e59125){var ex__34933__auto__ = e59125;
var statearr_59126_60382 = state_59099;
(statearr_59126_60382[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_59099[(4)]))){
var statearr_59127_60383 = state_59099;
(statearr_59127_60383[(1)] = cljs.core.first((state_59099[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60384 = state_59099;
state_59099 = G__60384;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$state_machine__34930__auto__ = function(state_59099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34930__auto____1.call(this,state_59099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34930__auto____0;
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34930__auto____1;
return cljs$core$async$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_59128 = f__35017__auto__();
(statearr_59128[(6)] = c__35016__auto___60368);

return statearr_59128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__59131 = arguments.length;
switch (G__59131) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35016__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_59202){
var state_val_59203 = (state_59202[(1)]);
if((state_val_59203 === (7))){
var inst_59198 = (state_59202[(2)]);
var state_59202__$1 = state_59202;
var statearr_59206_60386 = state_59202__$1;
(statearr_59206_60386[(2)] = inst_59198);

(statearr_59206_60386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (20))){
var inst_59168 = (state_59202[(7)]);
var inst_59179 = (state_59202[(2)]);
var inst_59180 = cljs.core.next(inst_59168);
var inst_59154 = inst_59180;
var inst_59155 = null;
var inst_59156 = (0);
var inst_59157 = (0);
var state_59202__$1 = (function (){var statearr_59211 = state_59202;
(statearr_59211[(8)] = inst_59154);

(statearr_59211[(9)] = inst_59157);

(statearr_59211[(10)] = inst_59155);

(statearr_59211[(11)] = inst_59179);

(statearr_59211[(12)] = inst_59156);

return statearr_59211;
})();
var statearr_59212_60387 = state_59202__$1;
(statearr_59212_60387[(2)] = null);

(statearr_59212_60387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (1))){
var state_59202__$1 = state_59202;
var statearr_59213_60388 = state_59202__$1;
(statearr_59213_60388[(2)] = null);

(statearr_59213_60388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (4))){
var inst_59143 = (state_59202[(13)]);
var inst_59143__$1 = (state_59202[(2)]);
var inst_59144 = (inst_59143__$1 == null);
var state_59202__$1 = (function (){var statearr_59214 = state_59202;
(statearr_59214[(13)] = inst_59143__$1);

return statearr_59214;
})();
if(cljs.core.truth_(inst_59144)){
var statearr_59215_60389 = state_59202__$1;
(statearr_59215_60389[(1)] = (5));

} else {
var statearr_59217_60390 = state_59202__$1;
(statearr_59217_60390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (15))){
var state_59202__$1 = state_59202;
var statearr_59222_60391 = state_59202__$1;
(statearr_59222_60391[(2)] = null);

(statearr_59222_60391[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (21))){
var state_59202__$1 = state_59202;
var statearr_59223_60392 = state_59202__$1;
(statearr_59223_60392[(2)] = null);

(statearr_59223_60392[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (13))){
var inst_59154 = (state_59202[(8)]);
var inst_59157 = (state_59202[(9)]);
var inst_59155 = (state_59202[(10)]);
var inst_59156 = (state_59202[(12)]);
var inst_59164 = (state_59202[(2)]);
var inst_59165 = (inst_59157 + (1));
var tmp59219 = inst_59154;
var tmp59220 = inst_59155;
var tmp59221 = inst_59156;
var inst_59154__$1 = tmp59219;
var inst_59155__$1 = tmp59220;
var inst_59156__$1 = tmp59221;
var inst_59157__$1 = inst_59165;
var state_59202__$1 = (function (){var statearr_59224 = state_59202;
(statearr_59224[(8)] = inst_59154__$1);

(statearr_59224[(9)] = inst_59157__$1);

(statearr_59224[(14)] = inst_59164);

(statearr_59224[(10)] = inst_59155__$1);

(statearr_59224[(12)] = inst_59156__$1);

return statearr_59224;
})();
var statearr_59227_60393 = state_59202__$1;
(statearr_59227_60393[(2)] = null);

(statearr_59227_60393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (22))){
var state_59202__$1 = state_59202;
var statearr_59228_60394 = state_59202__$1;
(statearr_59228_60394[(2)] = null);

(statearr_59228_60394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (6))){
var inst_59143 = (state_59202[(13)]);
var inst_59152 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59143) : f.call(null,inst_59143));
var inst_59153 = cljs.core.seq(inst_59152);
var inst_59154 = inst_59153;
var inst_59155 = null;
var inst_59156 = (0);
var inst_59157 = (0);
var state_59202__$1 = (function (){var statearr_59229 = state_59202;
(statearr_59229[(8)] = inst_59154);

(statearr_59229[(9)] = inst_59157);

(statearr_59229[(10)] = inst_59155);

(statearr_59229[(12)] = inst_59156);

return statearr_59229;
})();
var statearr_59230_60396 = state_59202__$1;
(statearr_59230_60396[(2)] = null);

(statearr_59230_60396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (17))){
var inst_59168 = (state_59202[(7)]);
var inst_59172 = cljs.core.chunk_first(inst_59168);
var inst_59173 = cljs.core.chunk_rest(inst_59168);
var inst_59174 = cljs.core.count(inst_59172);
var inst_59154 = inst_59173;
var inst_59155 = inst_59172;
var inst_59156 = inst_59174;
var inst_59157 = (0);
var state_59202__$1 = (function (){var statearr_59231 = state_59202;
(statearr_59231[(8)] = inst_59154);

(statearr_59231[(9)] = inst_59157);

(statearr_59231[(10)] = inst_59155);

(statearr_59231[(12)] = inst_59156);

return statearr_59231;
})();
var statearr_59236_60397 = state_59202__$1;
(statearr_59236_60397[(2)] = null);

(statearr_59236_60397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (3))){
var inst_59200 = (state_59202[(2)]);
var state_59202__$1 = state_59202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59202__$1,inst_59200);
} else {
if((state_val_59203 === (12))){
var inst_59188 = (state_59202[(2)]);
var state_59202__$1 = state_59202;
var statearr_59237_60398 = state_59202__$1;
(statearr_59237_60398[(2)] = inst_59188);

(statearr_59237_60398[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (2))){
var state_59202__$1 = state_59202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59202__$1,(4),in$);
} else {
if((state_val_59203 === (23))){
var inst_59196 = (state_59202[(2)]);
var state_59202__$1 = state_59202;
var statearr_59238_60400 = state_59202__$1;
(statearr_59238_60400[(2)] = inst_59196);

(statearr_59238_60400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (19))){
var inst_59183 = (state_59202[(2)]);
var state_59202__$1 = state_59202;
var statearr_59239_60402 = state_59202__$1;
(statearr_59239_60402[(2)] = inst_59183);

(statearr_59239_60402[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (11))){
var inst_59154 = (state_59202[(8)]);
var inst_59168 = (state_59202[(7)]);
var inst_59168__$1 = cljs.core.seq(inst_59154);
var state_59202__$1 = (function (){var statearr_59240 = state_59202;
(statearr_59240[(7)] = inst_59168__$1);

return statearr_59240;
})();
if(inst_59168__$1){
var statearr_59241_60404 = state_59202__$1;
(statearr_59241_60404[(1)] = (14));

} else {
var statearr_59242_60405 = state_59202__$1;
(statearr_59242_60405[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (9))){
var inst_59190 = (state_59202[(2)]);
var inst_59191 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_59202__$1 = (function (){var statearr_59243 = state_59202;
(statearr_59243[(15)] = inst_59190);

return statearr_59243;
})();
if(cljs.core.truth_(inst_59191)){
var statearr_59244_60406 = state_59202__$1;
(statearr_59244_60406[(1)] = (21));

} else {
var statearr_59250_60407 = state_59202__$1;
(statearr_59250_60407[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (5))){
var inst_59146 = cljs.core.async.close_BANG_(out);
var state_59202__$1 = state_59202;
var statearr_59251_60409 = state_59202__$1;
(statearr_59251_60409[(2)] = inst_59146);

(statearr_59251_60409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (14))){
var inst_59168 = (state_59202[(7)]);
var inst_59170 = cljs.core.chunked_seq_QMARK_(inst_59168);
var state_59202__$1 = state_59202;
if(inst_59170){
var statearr_59252_60410 = state_59202__$1;
(statearr_59252_60410[(1)] = (17));

} else {
var statearr_59253_60411 = state_59202__$1;
(statearr_59253_60411[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (16))){
var inst_59186 = (state_59202[(2)]);
var state_59202__$1 = state_59202;
var statearr_59254_60414 = state_59202__$1;
(statearr_59254_60414[(2)] = inst_59186);

(statearr_59254_60414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59203 === (10))){
var inst_59157 = (state_59202[(9)]);
var inst_59155 = (state_59202[(10)]);
var inst_59162 = cljs.core._nth(inst_59155,inst_59157);
var state_59202__$1 = state_59202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59202__$1,(13),out,inst_59162);
} else {
if((state_val_59203 === (18))){
var inst_59168 = (state_59202[(7)]);
var inst_59177 = cljs.core.first(inst_59168);
var state_59202__$1 = state_59202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59202__$1,(20),out,inst_59177);
} else {
if((state_val_59203 === (8))){
var inst_59157 = (state_59202[(9)]);
var inst_59156 = (state_59202[(12)]);
var inst_59159 = (inst_59157 < inst_59156);
var inst_59160 = inst_59159;
var state_59202__$1 = state_59202;
if(cljs.core.truth_(inst_59160)){
var statearr_59257_60417 = state_59202__$1;
(statearr_59257_60417[(1)] = (10));

} else {
var statearr_59258_60418 = state_59202__$1;
(statearr_59258_60418[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34930__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34930__auto____0 = (function (){
var statearr_59259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59259[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34930__auto__);

(statearr_59259[(1)] = (1));

return statearr_59259;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34930__auto____1 = (function (state_59202){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_59202);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e59260){var ex__34933__auto__ = e59260;
var statearr_59261_60423 = state_59202;
(statearr_59261_60423[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_59202[(4)]))){
var statearr_59262_60424 = state_59202;
(statearr_59262_60424[(1)] = cljs.core.first((state_59202[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60425 = state_59202;
state_59202 = G__60425;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34930__auto__ = function(state_59202){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34930__auto____1.call(this,state_59202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34930__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34930__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_59263 = f__35017__auto__();
(statearr_59263[(6)] = c__35016__auto__);

return statearr_59263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));

return c__35016__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__59265 = arguments.length;
switch (G__59265) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__59274 = arguments.length;
switch (G__59274) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__59276 = arguments.length;
switch (G__59276) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35016__auto___60437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_59303){
var state_val_59304 = (state_59303[(1)]);
if((state_val_59304 === (7))){
var inst_59298 = (state_59303[(2)]);
var state_59303__$1 = state_59303;
var statearr_59310_60439 = state_59303__$1;
(statearr_59310_60439[(2)] = inst_59298);

(statearr_59310_60439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59304 === (1))){
var inst_59280 = null;
var state_59303__$1 = (function (){var statearr_59311 = state_59303;
(statearr_59311[(7)] = inst_59280);

return statearr_59311;
})();
var statearr_59312_60440 = state_59303__$1;
(statearr_59312_60440[(2)] = null);

(statearr_59312_60440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59304 === (4))){
var inst_59283 = (state_59303[(8)]);
var inst_59283__$1 = (state_59303[(2)]);
var inst_59284 = (inst_59283__$1 == null);
var inst_59285 = cljs.core.not(inst_59284);
var state_59303__$1 = (function (){var statearr_59313 = state_59303;
(statearr_59313[(8)] = inst_59283__$1);

return statearr_59313;
})();
if(inst_59285){
var statearr_59314_60444 = state_59303__$1;
(statearr_59314_60444[(1)] = (5));

} else {
var statearr_59317_60445 = state_59303__$1;
(statearr_59317_60445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59304 === (6))){
var state_59303__$1 = state_59303;
var statearr_59318_60446 = state_59303__$1;
(statearr_59318_60446[(2)] = null);

(statearr_59318_60446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59304 === (3))){
var inst_59300 = (state_59303[(2)]);
var inst_59301 = cljs.core.async.close_BANG_(out);
var state_59303__$1 = (function (){var statearr_59319 = state_59303;
(statearr_59319[(9)] = inst_59300);

return statearr_59319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59303__$1,inst_59301);
} else {
if((state_val_59304 === (2))){
var state_59303__$1 = state_59303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59303__$1,(4),ch);
} else {
if((state_val_59304 === (11))){
var inst_59283 = (state_59303[(8)]);
var inst_59292 = (state_59303[(2)]);
var inst_59280 = inst_59283;
var state_59303__$1 = (function (){var statearr_59320 = state_59303;
(statearr_59320[(10)] = inst_59292);

(statearr_59320[(7)] = inst_59280);

return statearr_59320;
})();
var statearr_59321_60451 = state_59303__$1;
(statearr_59321_60451[(2)] = null);

(statearr_59321_60451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59304 === (9))){
var inst_59283 = (state_59303[(8)]);
var state_59303__$1 = state_59303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59303__$1,(11),out,inst_59283);
} else {
if((state_val_59304 === (5))){
var inst_59280 = (state_59303[(7)]);
var inst_59283 = (state_59303[(8)]);
var inst_59287 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59283,inst_59280);
var state_59303__$1 = state_59303;
if(inst_59287){
var statearr_59325_60452 = state_59303__$1;
(statearr_59325_60452[(1)] = (8));

} else {
var statearr_59326_60453 = state_59303__$1;
(statearr_59326_60453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59304 === (10))){
var inst_59295 = (state_59303[(2)]);
var state_59303__$1 = state_59303;
var statearr_59327_60455 = state_59303__$1;
(statearr_59327_60455[(2)] = inst_59295);

(statearr_59327_60455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59304 === (8))){
var inst_59280 = (state_59303[(7)]);
var tmp59322 = inst_59280;
var inst_59280__$1 = tmp59322;
var state_59303__$1 = (function (){var statearr_59329 = state_59303;
(statearr_59329[(7)] = inst_59280__$1);

return statearr_59329;
})();
var statearr_59331_60456 = state_59303__$1;
(statearr_59331_60456[(2)] = null);

(statearr_59331_60456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34930__auto__ = null;
var cljs$core$async$state_machine__34930__auto____0 = (function (){
var statearr_59333 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59333[(0)] = cljs$core$async$state_machine__34930__auto__);

(statearr_59333[(1)] = (1));

return statearr_59333;
});
var cljs$core$async$state_machine__34930__auto____1 = (function (state_59303){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_59303);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e59334){var ex__34933__auto__ = e59334;
var statearr_59335_60457 = state_59303;
(statearr_59335_60457[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_59303[(4)]))){
var statearr_59338_60458 = state_59303;
(statearr_59338_60458[(1)] = cljs.core.first((state_59303[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60460 = state_59303;
state_59303 = G__60460;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$state_machine__34930__auto__ = function(state_59303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34930__auto____1.call(this,state_59303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34930__auto____0;
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34930__auto____1;
return cljs$core$async$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_59339 = f__35017__auto__();
(statearr_59339[(6)] = c__35016__auto___60437);

return statearr_59339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__59341 = arguments.length;
switch (G__59341) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35016__auto___60463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_59383){
var state_val_59384 = (state_59383[(1)]);
if((state_val_59384 === (7))){
var inst_59379 = (state_59383[(2)]);
var state_59383__$1 = state_59383;
var statearr_59385_60464 = state_59383__$1;
(statearr_59385_60464[(2)] = inst_59379);

(statearr_59385_60464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59384 === (1))){
var inst_59344 = (new Array(n));
var inst_59345 = inst_59344;
var inst_59346 = (0);
var state_59383__$1 = (function (){var statearr_59386 = state_59383;
(statearr_59386[(7)] = inst_59346);

(statearr_59386[(8)] = inst_59345);

return statearr_59386;
})();
var statearr_59387_60466 = state_59383__$1;
(statearr_59387_60466[(2)] = null);

(statearr_59387_60466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59384 === (4))){
var inst_59349 = (state_59383[(9)]);
var inst_59349__$1 = (state_59383[(2)]);
var inst_59350 = (inst_59349__$1 == null);
var inst_59351 = cljs.core.not(inst_59350);
var state_59383__$1 = (function (){var statearr_59390 = state_59383;
(statearr_59390[(9)] = inst_59349__$1);

return statearr_59390;
})();
if(inst_59351){
var statearr_59391_60469 = state_59383__$1;
(statearr_59391_60469[(1)] = (5));

} else {
var statearr_59392_60470 = state_59383__$1;
(statearr_59392_60470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59384 === (15))){
var inst_59373 = (state_59383[(2)]);
var state_59383__$1 = state_59383;
var statearr_59393_60471 = state_59383__$1;
(statearr_59393_60471[(2)] = inst_59373);

(statearr_59393_60471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59384 === (13))){
var state_59383__$1 = state_59383;
var statearr_59394_60474 = state_59383__$1;
(statearr_59394_60474[(2)] = null);

(statearr_59394_60474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59384 === (6))){
var inst_59346 = (state_59383[(7)]);
var inst_59367 = (inst_59346 > (0));
var state_59383__$1 = state_59383;
if(cljs.core.truth_(inst_59367)){
var statearr_59395_60478 = state_59383__$1;
(statearr_59395_60478[(1)] = (12));

} else {
var statearr_59397_60479 = state_59383__$1;
(statearr_59397_60479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59384 === (3))){
var inst_59381 = (state_59383[(2)]);
var state_59383__$1 = state_59383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59383__$1,inst_59381);
} else {
if((state_val_59384 === (12))){
var inst_59345 = (state_59383[(8)]);
var inst_59371 = cljs.core.vec(inst_59345);
var state_59383__$1 = state_59383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59383__$1,(15),out,inst_59371);
} else {
if((state_val_59384 === (2))){
var state_59383__$1 = state_59383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59383__$1,(4),ch);
} else {
if((state_val_59384 === (11))){
var inst_59361 = (state_59383[(2)]);
var inst_59362 = (new Array(n));
var inst_59345 = inst_59362;
var inst_59346 = (0);
var state_59383__$1 = (function (){var statearr_59400 = state_59383;
(statearr_59400[(7)] = inst_59346);

(statearr_59400[(8)] = inst_59345);

(statearr_59400[(10)] = inst_59361);

return statearr_59400;
})();
var statearr_59401_60482 = state_59383__$1;
(statearr_59401_60482[(2)] = null);

(statearr_59401_60482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59384 === (9))){
var inst_59345 = (state_59383[(8)]);
var inst_59359 = cljs.core.vec(inst_59345);
var state_59383__$1 = state_59383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59383__$1,(11),out,inst_59359);
} else {
if((state_val_59384 === (5))){
var inst_59349 = (state_59383[(9)]);
var inst_59346 = (state_59383[(7)]);
var inst_59345 = (state_59383[(8)]);
var inst_59354 = (state_59383[(11)]);
var inst_59353 = (inst_59345[inst_59346] = inst_59349);
var inst_59354__$1 = (inst_59346 + (1));
var inst_59355 = (inst_59354__$1 < n);
var state_59383__$1 = (function (){var statearr_59402 = state_59383;
(statearr_59402[(11)] = inst_59354__$1);

(statearr_59402[(12)] = inst_59353);

return statearr_59402;
})();
if(cljs.core.truth_(inst_59355)){
var statearr_59405_60483 = state_59383__$1;
(statearr_59405_60483[(1)] = (8));

} else {
var statearr_59406_60485 = state_59383__$1;
(statearr_59406_60485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59384 === (14))){
var inst_59376 = (state_59383[(2)]);
var inst_59377 = cljs.core.async.close_BANG_(out);
var state_59383__$1 = (function (){var statearr_59408 = state_59383;
(statearr_59408[(13)] = inst_59376);

return statearr_59408;
})();
var statearr_59409_60488 = state_59383__$1;
(statearr_59409_60488[(2)] = inst_59377);

(statearr_59409_60488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59384 === (10))){
var inst_59365 = (state_59383[(2)]);
var state_59383__$1 = state_59383;
var statearr_59410_60489 = state_59383__$1;
(statearr_59410_60489[(2)] = inst_59365);

(statearr_59410_60489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59384 === (8))){
var inst_59345 = (state_59383[(8)]);
var inst_59354 = (state_59383[(11)]);
var tmp59407 = inst_59345;
var inst_59345__$1 = tmp59407;
var inst_59346 = inst_59354;
var state_59383__$1 = (function (){var statearr_59415 = state_59383;
(statearr_59415[(7)] = inst_59346);

(statearr_59415[(8)] = inst_59345__$1);

return statearr_59415;
})();
var statearr_59416_60491 = state_59383__$1;
(statearr_59416_60491[(2)] = null);

(statearr_59416_60491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34930__auto__ = null;
var cljs$core$async$state_machine__34930__auto____0 = (function (){
var statearr_59417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59417[(0)] = cljs$core$async$state_machine__34930__auto__);

(statearr_59417[(1)] = (1));

return statearr_59417;
});
var cljs$core$async$state_machine__34930__auto____1 = (function (state_59383){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_59383);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e59418){var ex__34933__auto__ = e59418;
var statearr_59419_60494 = state_59383;
(statearr_59419_60494[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_59383[(4)]))){
var statearr_59422_60495 = state_59383;
(statearr_59422_60495[(1)] = cljs.core.first((state_59383[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60496 = state_59383;
state_59383 = G__60496;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$state_machine__34930__auto__ = function(state_59383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34930__auto____1.call(this,state_59383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34930__auto____0;
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34930__auto____1;
return cljs$core$async$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_59423 = f__35017__auto__();
(statearr_59423[(6)] = c__35016__auto___60463);

return statearr_59423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__59429 = arguments.length;
switch (G__59429) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35016__auto___60502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_59478){
var state_val_59479 = (state_59478[(1)]);
if((state_val_59479 === (7))){
var inst_59474 = (state_59478[(2)]);
var state_59478__$1 = state_59478;
var statearr_59482_60503 = state_59478__$1;
(statearr_59482_60503[(2)] = inst_59474);

(statearr_59482_60503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (1))){
var inst_59430 = [];
var inst_59431 = inst_59430;
var inst_59432 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59478__$1 = (function (){var statearr_59483 = state_59478;
(statearr_59483[(7)] = inst_59431);

(statearr_59483[(8)] = inst_59432);

return statearr_59483;
})();
var statearr_59484_60504 = state_59478__$1;
(statearr_59484_60504[(2)] = null);

(statearr_59484_60504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (4))){
var inst_59435 = (state_59478[(9)]);
var inst_59435__$1 = (state_59478[(2)]);
var inst_59436 = (inst_59435__$1 == null);
var inst_59437 = cljs.core.not(inst_59436);
var state_59478__$1 = (function (){var statearr_59485 = state_59478;
(statearr_59485[(9)] = inst_59435__$1);

return statearr_59485;
})();
if(inst_59437){
var statearr_59486_60507 = state_59478__$1;
(statearr_59486_60507[(1)] = (5));

} else {
var statearr_59488_60508 = state_59478__$1;
(statearr_59488_60508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (15))){
var inst_59431 = (state_59478[(7)]);
var inst_59466 = cljs.core.vec(inst_59431);
var state_59478__$1 = state_59478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59478__$1,(18),out,inst_59466);
} else {
if((state_val_59479 === (13))){
var inst_59461 = (state_59478[(2)]);
var state_59478__$1 = state_59478;
var statearr_59493_60509 = state_59478__$1;
(statearr_59493_60509[(2)] = inst_59461);

(statearr_59493_60509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (6))){
var inst_59431 = (state_59478[(7)]);
var inst_59463 = inst_59431.length;
var inst_59464 = (inst_59463 > (0));
var state_59478__$1 = state_59478;
if(cljs.core.truth_(inst_59464)){
var statearr_59494_60510 = state_59478__$1;
(statearr_59494_60510[(1)] = (15));

} else {
var statearr_59495_60511 = state_59478__$1;
(statearr_59495_60511[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (17))){
var inst_59471 = (state_59478[(2)]);
var inst_59472 = cljs.core.async.close_BANG_(out);
var state_59478__$1 = (function (){var statearr_59496 = state_59478;
(statearr_59496[(10)] = inst_59471);

return statearr_59496;
})();
var statearr_59497_60513 = state_59478__$1;
(statearr_59497_60513[(2)] = inst_59472);

(statearr_59497_60513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (3))){
var inst_59476 = (state_59478[(2)]);
var state_59478__$1 = state_59478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59478__$1,inst_59476);
} else {
if((state_val_59479 === (12))){
var inst_59431 = (state_59478[(7)]);
var inst_59454 = cljs.core.vec(inst_59431);
var state_59478__$1 = state_59478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59478__$1,(14),out,inst_59454);
} else {
if((state_val_59479 === (2))){
var state_59478__$1 = state_59478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59478__$1,(4),ch);
} else {
if((state_val_59479 === (11))){
var inst_59431 = (state_59478[(7)]);
var inst_59435 = (state_59478[(9)]);
var inst_59439 = (state_59478[(11)]);
var inst_59451 = inst_59431.push(inst_59435);
var tmp59498 = inst_59431;
var inst_59431__$1 = tmp59498;
var inst_59432 = inst_59439;
var state_59478__$1 = (function (){var statearr_59499 = state_59478;
(statearr_59499[(7)] = inst_59431__$1);

(statearr_59499[(8)] = inst_59432);

(statearr_59499[(12)] = inst_59451);

return statearr_59499;
})();
var statearr_59500_60516 = state_59478__$1;
(statearr_59500_60516[(2)] = null);

(statearr_59500_60516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (9))){
var inst_59432 = (state_59478[(8)]);
var inst_59444 = cljs.core.keyword_identical_QMARK_(inst_59432,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_59478__$1 = state_59478;
var statearr_59505_60519 = state_59478__$1;
(statearr_59505_60519[(2)] = inst_59444);

(statearr_59505_60519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (5))){
var inst_59432 = (state_59478[(8)]);
var inst_59435 = (state_59478[(9)]);
var inst_59440 = (state_59478[(13)]);
var inst_59439 = (state_59478[(11)]);
var inst_59439__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59435) : f.call(null,inst_59435));
var inst_59440__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59439__$1,inst_59432);
var state_59478__$1 = (function (){var statearr_59506 = state_59478;
(statearr_59506[(13)] = inst_59440__$1);

(statearr_59506[(11)] = inst_59439__$1);

return statearr_59506;
})();
if(inst_59440__$1){
var statearr_59507_60521 = state_59478__$1;
(statearr_59507_60521[(1)] = (8));

} else {
var statearr_59508_60522 = state_59478__$1;
(statearr_59508_60522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (14))){
var inst_59435 = (state_59478[(9)]);
var inst_59439 = (state_59478[(11)]);
var inst_59456 = (state_59478[(2)]);
var inst_59457 = [];
var inst_59458 = inst_59457.push(inst_59435);
var inst_59431 = inst_59457;
var inst_59432 = inst_59439;
var state_59478__$1 = (function (){var statearr_59509 = state_59478;
(statearr_59509[(14)] = inst_59456);

(statearr_59509[(7)] = inst_59431);

(statearr_59509[(8)] = inst_59432);

(statearr_59509[(15)] = inst_59458);

return statearr_59509;
})();
var statearr_59510_60524 = state_59478__$1;
(statearr_59510_60524[(2)] = null);

(statearr_59510_60524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (16))){
var state_59478__$1 = state_59478;
var statearr_59513_60526 = state_59478__$1;
(statearr_59513_60526[(2)] = null);

(statearr_59513_60526[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (10))){
var inst_59446 = (state_59478[(2)]);
var state_59478__$1 = state_59478;
if(cljs.core.truth_(inst_59446)){
var statearr_59514_60529 = state_59478__$1;
(statearr_59514_60529[(1)] = (11));

} else {
var statearr_59515_60530 = state_59478__$1;
(statearr_59515_60530[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (18))){
var inst_59468 = (state_59478[(2)]);
var state_59478__$1 = state_59478;
var statearr_59516_60531 = state_59478__$1;
(statearr_59516_60531[(2)] = inst_59468);

(statearr_59516_60531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (8))){
var inst_59440 = (state_59478[(13)]);
var state_59478__$1 = state_59478;
var statearr_59517_60532 = state_59478__$1;
(statearr_59517_60532[(2)] = inst_59440);

(statearr_59517_60532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34930__auto__ = null;
var cljs$core$async$state_machine__34930__auto____0 = (function (){
var statearr_59523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59523[(0)] = cljs$core$async$state_machine__34930__auto__);

(statearr_59523[(1)] = (1));

return statearr_59523;
});
var cljs$core$async$state_machine__34930__auto____1 = (function (state_59478){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_59478);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e59524){var ex__34933__auto__ = e59524;
var statearr_59525_60539 = state_59478;
(statearr_59525_60539[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_59478[(4)]))){
var statearr_59526_60540 = state_59478;
(statearr_59526_60540[(1)] = cljs.core.first((state_59478[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60541 = state_59478;
state_59478 = G__60541;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
cljs$core$async$state_machine__34930__auto__ = function(state_59478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34930__auto____1.call(this,state_59478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34930__auto____0;
cljs$core$async$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34930__auto____1;
return cljs$core$async$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_59527 = f__35017__auto__();
(statearr_59527[(6)] = c__35016__auto___60502);

return statearr_59527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
