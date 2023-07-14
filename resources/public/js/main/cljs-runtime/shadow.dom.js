goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_62230 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_62230(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_62237 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_62237(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__61271 = coll;
var G__61272 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__61271,G__61272) : shadow.dom.lazy_native_coll_seq.call(null,G__61271,G__61272));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__61302 = arguments.length;
switch (G__61302) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__61311 = arguments.length;
switch (G__61311) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__61321 = arguments.length;
switch (G__61321) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__61348 = arguments.length;
switch (G__61348) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__61376 = arguments.length;
switch (G__61376) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__61411 = arguments.length;
switch (G__61411) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e61429){if((e61429 instanceof Object)){
var e = e61429;
return console.log("didnt support attachEvent",el,e);
} else {
throw e61429;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__61443 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__61444 = null;
var count__61445 = (0);
var i__61446 = (0);
while(true){
if((i__61446 < count__61445)){
var el = chunk__61444.cljs$core$IIndexed$_nth$arity$2(null,i__61446);
var handler_62260__$1 = ((function (seq__61443,chunk__61444,count__61445,i__61446,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61443,chunk__61444,count__61445,i__61446,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_62260__$1);


var G__62261 = seq__61443;
var G__62262 = chunk__61444;
var G__62263 = count__61445;
var G__62264 = (i__61446 + (1));
seq__61443 = G__62261;
chunk__61444 = G__62262;
count__61445 = G__62263;
i__61446 = G__62264;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61443);
if(temp__5753__auto__){
var seq__61443__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61443__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61443__$1);
var G__62265 = cljs.core.chunk_rest(seq__61443__$1);
var G__62266 = c__5568__auto__;
var G__62267 = cljs.core.count(c__5568__auto__);
var G__62268 = (0);
seq__61443 = G__62265;
chunk__61444 = G__62266;
count__61445 = G__62267;
i__61446 = G__62268;
continue;
} else {
var el = cljs.core.first(seq__61443__$1);
var handler_62269__$1 = ((function (seq__61443,chunk__61444,count__61445,i__61446,el,seq__61443__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61443,chunk__61444,count__61445,i__61446,el,seq__61443__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_62269__$1);


var G__62270 = cljs.core.next(seq__61443__$1);
var G__62271 = null;
var G__62272 = (0);
var G__62273 = (0);
seq__61443 = G__62270;
chunk__61444 = G__62271;
count__61445 = G__62272;
i__61446 = G__62273;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__61474 = arguments.length;
switch (G__61474) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__61481 = cljs.core.seq(events);
var chunk__61482 = null;
var count__61483 = (0);
var i__61484 = (0);
while(true){
if((i__61484 < count__61483)){
var vec__61500 = chunk__61482.cljs$core$IIndexed$_nth$arity$2(null,i__61484);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61500,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__62280 = seq__61481;
var G__62281 = chunk__61482;
var G__62282 = count__61483;
var G__62283 = (i__61484 + (1));
seq__61481 = G__62280;
chunk__61482 = G__62281;
count__61483 = G__62282;
i__61484 = G__62283;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61481);
if(temp__5753__auto__){
var seq__61481__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61481__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61481__$1);
var G__62284 = cljs.core.chunk_rest(seq__61481__$1);
var G__62285 = c__5568__auto__;
var G__62286 = cljs.core.count(c__5568__auto__);
var G__62287 = (0);
seq__61481 = G__62284;
chunk__61482 = G__62285;
count__61483 = G__62286;
i__61484 = G__62287;
continue;
} else {
var vec__61506 = cljs.core.first(seq__61481__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61506,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61506,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__62288 = cljs.core.next(seq__61481__$1);
var G__62289 = null;
var G__62290 = (0);
var G__62291 = (0);
seq__61481 = G__62288;
chunk__61482 = G__62289;
count__61483 = G__62290;
i__61484 = G__62291;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__61509 = cljs.core.seq(styles);
var chunk__61510 = null;
var count__61511 = (0);
var i__61512 = (0);
while(true){
if((i__61512 < count__61511)){
var vec__61520 = chunk__61510.cljs$core$IIndexed$_nth$arity$2(null,i__61512);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61520,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61520,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__62292 = seq__61509;
var G__62293 = chunk__61510;
var G__62294 = count__61511;
var G__62295 = (i__61512 + (1));
seq__61509 = G__62292;
chunk__61510 = G__62293;
count__61511 = G__62294;
i__61512 = G__62295;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61509);
if(temp__5753__auto__){
var seq__61509__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61509__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61509__$1);
var G__62296 = cljs.core.chunk_rest(seq__61509__$1);
var G__62297 = c__5568__auto__;
var G__62298 = cljs.core.count(c__5568__auto__);
var G__62299 = (0);
seq__61509 = G__62296;
chunk__61510 = G__62297;
count__61511 = G__62298;
i__61512 = G__62299;
continue;
} else {
var vec__61523 = cljs.core.first(seq__61509__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61523,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61523,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__62304 = cljs.core.next(seq__61509__$1);
var G__62305 = null;
var G__62306 = (0);
var G__62307 = (0);
seq__61509 = G__62304;
chunk__61510 = G__62305;
count__61511 = G__62306;
i__61512 = G__62307;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__61527_62308 = key;
var G__61527_62309__$1 = (((G__61527_62308 instanceof cljs.core.Keyword))?G__61527_62308.fqn:null);
switch (G__61527_62309__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_62311 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_62311,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_62311,"aria-");
}
})())){
el.setAttribute(ks_62311,value);
} else {
(el[ks_62311] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__61540){
var map__61541 = p__61540;
var map__61541__$1 = cljs.core.__destructure_map(map__61541);
var props = map__61541__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61541__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__61542 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61542,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61542,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61542,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__61546 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__61546,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__61546;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__61549 = arguments.length;
switch (G__61549) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__61555){
var vec__61556 = p__61555;
var seq__61557 = cljs.core.seq(vec__61556);
var first__61558 = cljs.core.first(seq__61557);
var seq__61557__$1 = cljs.core.next(seq__61557);
var nn = first__61558;
var first__61558__$1 = cljs.core.first(seq__61557__$1);
var seq__61557__$2 = cljs.core.next(seq__61557__$1);
var np = first__61558__$1;
var nc = seq__61557__$2;
var node = vec__61556;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61560 = nn;
var G__61561 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61560,G__61561) : create_fn.call(null,G__61560,G__61561));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61563 = nn;
var G__61564 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61563,G__61564) : create_fn.call(null,G__61563,G__61564));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__61566 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61566,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61566,(1),null);
var seq__61569_62317 = cljs.core.seq(node_children);
var chunk__61570_62318 = null;
var count__61571_62319 = (0);
var i__61572_62320 = (0);
while(true){
if((i__61572_62320 < count__61571_62319)){
var child_struct_62322 = chunk__61570_62318.cljs$core$IIndexed$_nth$arity$2(null,i__61572_62320);
var children_62323 = shadow.dom.dom_node(child_struct_62322);
if(cljs.core.seq_QMARK_(children_62323)){
var seq__61610_62324 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_62323));
var chunk__61612_62325 = null;
var count__61613_62326 = (0);
var i__61614_62327 = (0);
while(true){
if((i__61614_62327 < count__61613_62326)){
var child_62328 = chunk__61612_62325.cljs$core$IIndexed$_nth$arity$2(null,i__61614_62327);
if(cljs.core.truth_(child_62328)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62328);


var G__62329 = seq__61610_62324;
var G__62330 = chunk__61612_62325;
var G__62331 = count__61613_62326;
var G__62332 = (i__61614_62327 + (1));
seq__61610_62324 = G__62329;
chunk__61612_62325 = G__62330;
count__61613_62326 = G__62331;
i__61614_62327 = G__62332;
continue;
} else {
var G__62333 = seq__61610_62324;
var G__62334 = chunk__61612_62325;
var G__62335 = count__61613_62326;
var G__62336 = (i__61614_62327 + (1));
seq__61610_62324 = G__62333;
chunk__61612_62325 = G__62334;
count__61613_62326 = G__62335;
i__61614_62327 = G__62336;
continue;
}
} else {
var temp__5753__auto___62337 = cljs.core.seq(seq__61610_62324);
if(temp__5753__auto___62337){
var seq__61610_62338__$1 = temp__5753__auto___62337;
if(cljs.core.chunked_seq_QMARK_(seq__61610_62338__$1)){
var c__5568__auto___62339 = cljs.core.chunk_first(seq__61610_62338__$1);
var G__62340 = cljs.core.chunk_rest(seq__61610_62338__$1);
var G__62341 = c__5568__auto___62339;
var G__62342 = cljs.core.count(c__5568__auto___62339);
var G__62343 = (0);
seq__61610_62324 = G__62340;
chunk__61612_62325 = G__62341;
count__61613_62326 = G__62342;
i__61614_62327 = G__62343;
continue;
} else {
var child_62344 = cljs.core.first(seq__61610_62338__$1);
if(cljs.core.truth_(child_62344)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62344);


var G__62345 = cljs.core.next(seq__61610_62338__$1);
var G__62346 = null;
var G__62347 = (0);
var G__62348 = (0);
seq__61610_62324 = G__62345;
chunk__61612_62325 = G__62346;
count__61613_62326 = G__62347;
i__61614_62327 = G__62348;
continue;
} else {
var G__62349 = cljs.core.next(seq__61610_62338__$1);
var G__62350 = null;
var G__62351 = (0);
var G__62352 = (0);
seq__61610_62324 = G__62349;
chunk__61612_62325 = G__62350;
count__61613_62326 = G__62351;
i__61614_62327 = G__62352;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_62323);
}


var G__62353 = seq__61569_62317;
var G__62354 = chunk__61570_62318;
var G__62355 = count__61571_62319;
var G__62356 = (i__61572_62320 + (1));
seq__61569_62317 = G__62353;
chunk__61570_62318 = G__62354;
count__61571_62319 = G__62355;
i__61572_62320 = G__62356;
continue;
} else {
var temp__5753__auto___62357 = cljs.core.seq(seq__61569_62317);
if(temp__5753__auto___62357){
var seq__61569_62358__$1 = temp__5753__auto___62357;
if(cljs.core.chunked_seq_QMARK_(seq__61569_62358__$1)){
var c__5568__auto___62359 = cljs.core.chunk_first(seq__61569_62358__$1);
var G__62360 = cljs.core.chunk_rest(seq__61569_62358__$1);
var G__62361 = c__5568__auto___62359;
var G__62362 = cljs.core.count(c__5568__auto___62359);
var G__62363 = (0);
seq__61569_62317 = G__62360;
chunk__61570_62318 = G__62361;
count__61571_62319 = G__62362;
i__61572_62320 = G__62363;
continue;
} else {
var child_struct_62364 = cljs.core.first(seq__61569_62358__$1);
var children_62365 = shadow.dom.dom_node(child_struct_62364);
if(cljs.core.seq_QMARK_(children_62365)){
var seq__61631_62366 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_62365));
var chunk__61633_62367 = null;
var count__61634_62368 = (0);
var i__61635_62369 = (0);
while(true){
if((i__61635_62369 < count__61634_62368)){
var child_62370 = chunk__61633_62367.cljs$core$IIndexed$_nth$arity$2(null,i__61635_62369);
if(cljs.core.truth_(child_62370)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62370);


var G__62371 = seq__61631_62366;
var G__62372 = chunk__61633_62367;
var G__62373 = count__61634_62368;
var G__62374 = (i__61635_62369 + (1));
seq__61631_62366 = G__62371;
chunk__61633_62367 = G__62372;
count__61634_62368 = G__62373;
i__61635_62369 = G__62374;
continue;
} else {
var G__62375 = seq__61631_62366;
var G__62376 = chunk__61633_62367;
var G__62377 = count__61634_62368;
var G__62378 = (i__61635_62369 + (1));
seq__61631_62366 = G__62375;
chunk__61633_62367 = G__62376;
count__61634_62368 = G__62377;
i__61635_62369 = G__62378;
continue;
}
} else {
var temp__5753__auto___62379__$1 = cljs.core.seq(seq__61631_62366);
if(temp__5753__auto___62379__$1){
var seq__61631_62380__$1 = temp__5753__auto___62379__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61631_62380__$1)){
var c__5568__auto___62381 = cljs.core.chunk_first(seq__61631_62380__$1);
var G__62382 = cljs.core.chunk_rest(seq__61631_62380__$1);
var G__62383 = c__5568__auto___62381;
var G__62384 = cljs.core.count(c__5568__auto___62381);
var G__62385 = (0);
seq__61631_62366 = G__62382;
chunk__61633_62367 = G__62383;
count__61634_62368 = G__62384;
i__61635_62369 = G__62385;
continue;
} else {
var child_62386 = cljs.core.first(seq__61631_62380__$1);
if(cljs.core.truth_(child_62386)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62386);


var G__62387 = cljs.core.next(seq__61631_62380__$1);
var G__62388 = null;
var G__62389 = (0);
var G__62390 = (0);
seq__61631_62366 = G__62387;
chunk__61633_62367 = G__62388;
count__61634_62368 = G__62389;
i__61635_62369 = G__62390;
continue;
} else {
var G__62391 = cljs.core.next(seq__61631_62380__$1);
var G__62392 = null;
var G__62393 = (0);
var G__62394 = (0);
seq__61631_62366 = G__62391;
chunk__61633_62367 = G__62392;
count__61634_62368 = G__62393;
i__61635_62369 = G__62394;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_62365);
}


var G__62395 = cljs.core.next(seq__61569_62358__$1);
var G__62396 = null;
var G__62397 = (0);
var G__62398 = (0);
seq__61569_62317 = G__62395;
chunk__61570_62318 = G__62396;
count__61571_62319 = G__62397;
i__61572_62320 = G__62398;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__61652 = cljs.core.seq(node);
var chunk__61653 = null;
var count__61654 = (0);
var i__61655 = (0);
while(true){
if((i__61655 < count__61654)){
var n = chunk__61653.cljs$core$IIndexed$_nth$arity$2(null,i__61655);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__62399 = seq__61652;
var G__62400 = chunk__61653;
var G__62401 = count__61654;
var G__62402 = (i__61655 + (1));
seq__61652 = G__62399;
chunk__61653 = G__62400;
count__61654 = G__62401;
i__61655 = G__62402;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61652);
if(temp__5753__auto__){
var seq__61652__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61652__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61652__$1);
var G__62403 = cljs.core.chunk_rest(seq__61652__$1);
var G__62404 = c__5568__auto__;
var G__62405 = cljs.core.count(c__5568__auto__);
var G__62406 = (0);
seq__61652 = G__62403;
chunk__61653 = G__62404;
count__61654 = G__62405;
i__61655 = G__62406;
continue;
} else {
var n = cljs.core.first(seq__61652__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__62407 = cljs.core.next(seq__61652__$1);
var G__62408 = null;
var G__62409 = (0);
var G__62410 = (0);
seq__61652 = G__62407;
chunk__61653 = G__62408;
count__61654 = G__62409;
i__61655 = G__62410;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__61660 = arguments.length;
switch (G__61660) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__61668 = arguments.length;
switch (G__61668) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__61680 = arguments.length;
switch (G__61680) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62419 = arguments.length;
var i__5770__auto___62420 = (0);
while(true){
if((i__5770__auto___62420 < len__5769__auto___62419)){
args__5775__auto__.push((arguments[i__5770__auto___62420]));

var G__62421 = (i__5770__auto___62420 + (1));
i__5770__auto___62420 = G__62421;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__61705_62422 = cljs.core.seq(nodes);
var chunk__61706_62423 = null;
var count__61707_62424 = (0);
var i__61708_62425 = (0);
while(true){
if((i__61708_62425 < count__61707_62424)){
var node_62426 = chunk__61706_62423.cljs$core$IIndexed$_nth$arity$2(null,i__61708_62425);
fragment.appendChild(shadow.dom._to_dom(node_62426));


var G__62427 = seq__61705_62422;
var G__62428 = chunk__61706_62423;
var G__62429 = count__61707_62424;
var G__62430 = (i__61708_62425 + (1));
seq__61705_62422 = G__62427;
chunk__61706_62423 = G__62428;
count__61707_62424 = G__62429;
i__61708_62425 = G__62430;
continue;
} else {
var temp__5753__auto___62431 = cljs.core.seq(seq__61705_62422);
if(temp__5753__auto___62431){
var seq__61705_62432__$1 = temp__5753__auto___62431;
if(cljs.core.chunked_seq_QMARK_(seq__61705_62432__$1)){
var c__5568__auto___62433 = cljs.core.chunk_first(seq__61705_62432__$1);
var G__62434 = cljs.core.chunk_rest(seq__61705_62432__$1);
var G__62435 = c__5568__auto___62433;
var G__62436 = cljs.core.count(c__5568__auto___62433);
var G__62437 = (0);
seq__61705_62422 = G__62434;
chunk__61706_62423 = G__62435;
count__61707_62424 = G__62436;
i__61708_62425 = G__62437;
continue;
} else {
var node_62438 = cljs.core.first(seq__61705_62432__$1);
fragment.appendChild(shadow.dom._to_dom(node_62438));


var G__62439 = cljs.core.next(seq__61705_62432__$1);
var G__62440 = null;
var G__62441 = (0);
var G__62442 = (0);
seq__61705_62422 = G__62439;
chunk__61706_62423 = G__62440;
count__61707_62424 = G__62441;
i__61708_62425 = G__62442;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq61697){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61697));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__61723_62443 = cljs.core.seq(scripts);
var chunk__61724_62444 = null;
var count__61725_62445 = (0);
var i__61726_62446 = (0);
while(true){
if((i__61726_62446 < count__61725_62445)){
var vec__61733_62447 = chunk__61724_62444.cljs$core$IIndexed$_nth$arity$2(null,i__61726_62446);
var script_tag_62448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61733_62447,(0),null);
var script_body_62449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61733_62447,(1),null);
eval(script_body_62449);


var G__62450 = seq__61723_62443;
var G__62451 = chunk__61724_62444;
var G__62452 = count__61725_62445;
var G__62453 = (i__61726_62446 + (1));
seq__61723_62443 = G__62450;
chunk__61724_62444 = G__62451;
count__61725_62445 = G__62452;
i__61726_62446 = G__62453;
continue;
} else {
var temp__5753__auto___62454 = cljs.core.seq(seq__61723_62443);
if(temp__5753__auto___62454){
var seq__61723_62455__$1 = temp__5753__auto___62454;
if(cljs.core.chunked_seq_QMARK_(seq__61723_62455__$1)){
var c__5568__auto___62456 = cljs.core.chunk_first(seq__61723_62455__$1);
var G__62457 = cljs.core.chunk_rest(seq__61723_62455__$1);
var G__62458 = c__5568__auto___62456;
var G__62459 = cljs.core.count(c__5568__auto___62456);
var G__62460 = (0);
seq__61723_62443 = G__62457;
chunk__61724_62444 = G__62458;
count__61725_62445 = G__62459;
i__61726_62446 = G__62460;
continue;
} else {
var vec__61739_62461 = cljs.core.first(seq__61723_62455__$1);
var script_tag_62462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61739_62461,(0),null);
var script_body_62463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61739_62461,(1),null);
eval(script_body_62463);


var G__62464 = cljs.core.next(seq__61723_62455__$1);
var G__62465 = null;
var G__62466 = (0);
var G__62467 = (0);
seq__61723_62443 = G__62464;
chunk__61724_62444 = G__62465;
count__61725_62445 = G__62466;
i__61726_62446 = G__62467;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__61742){
var vec__61746 = p__61742;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61746,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61746,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__61775 = arguments.length;
switch (G__61775) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__61789 = cljs.core.seq(style_keys);
var chunk__61790 = null;
var count__61791 = (0);
var i__61792 = (0);
while(true){
if((i__61792 < count__61791)){
var it = chunk__61790.cljs$core$IIndexed$_nth$arity$2(null,i__61792);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62476 = seq__61789;
var G__62477 = chunk__61790;
var G__62478 = count__61791;
var G__62479 = (i__61792 + (1));
seq__61789 = G__62476;
chunk__61790 = G__62477;
count__61791 = G__62478;
i__61792 = G__62479;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61789);
if(temp__5753__auto__){
var seq__61789__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61789__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61789__$1);
var G__62480 = cljs.core.chunk_rest(seq__61789__$1);
var G__62481 = c__5568__auto__;
var G__62482 = cljs.core.count(c__5568__auto__);
var G__62483 = (0);
seq__61789 = G__62480;
chunk__61790 = G__62481;
count__61791 = G__62482;
i__61792 = G__62483;
continue;
} else {
var it = cljs.core.first(seq__61789__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62484 = cljs.core.next(seq__61789__$1);
var G__62485 = null;
var G__62486 = (0);
var G__62487 = (0);
seq__61789 = G__62484;
chunk__61790 = G__62485;
count__61791 = G__62486;
i__61792 = G__62487;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k61808,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__61814 = k61808;
var G__61814__$1 = (((G__61814 instanceof cljs.core.Keyword))?G__61814.fqn:null);
switch (G__61814__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61808,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__61818){
var vec__61819 = p__61818;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61819,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61819,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61807){
var self__ = this;
var G__61807__$1 = this;
return (new cljs.core.RecordIter((0),G__61807__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61809,other61810){
var self__ = this;
var this61809__$1 = this;
return (((!((other61810 == null)))) && ((((this61809__$1.constructor === other61810.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61809__$1.x,other61810.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61809__$1.y,other61810.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61809__$1.__extmap,other61810.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k61808){
var self__ = this;
var this__5350__auto____$1 = this;
var G__61828 = k61808;
var G__61828__$1 = (((G__61828 instanceof cljs.core.Keyword))?G__61828.fqn:null);
switch (G__61828__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61808);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__61807){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__61829 = cljs.core.keyword_identical_QMARK_;
var expr__61830 = k__5352__auto__;
if(cljs.core.truth_((pred__61829.cljs$core$IFn$_invoke$arity$2 ? pred__61829.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__61830) : pred__61829.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__61830)))){
return (new shadow.dom.Coordinate(G__61807,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61829.cljs$core$IFn$_invoke$arity$2 ? pred__61829.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__61830) : pred__61829.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__61830)))){
return (new shadow.dom.Coordinate(self__.x,G__61807,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__61807),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__61807){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__61807,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__61811){
var extmap__5385__auto__ = (function (){var G__61835 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61811,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__61811)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61835);
} else {
return G__61835;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__61811),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__61811),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k61841,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__61854 = k61841;
var G__61854__$1 = (((G__61854 instanceof cljs.core.Keyword))?G__61854.fqn:null);
switch (G__61854__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61841,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__61855){
var vec__61856 = p__61855;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61856,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61856,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61840){
var self__ = this;
var G__61840__$1 = this;
return (new cljs.core.RecordIter((0),G__61840__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61842,other61843){
var self__ = this;
var this61842__$1 = this;
return (((!((other61843 == null)))) && ((((this61842__$1.constructor === other61843.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61842__$1.w,other61843.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61842__$1.h,other61843.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61842__$1.__extmap,other61843.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k61841){
var self__ = this;
var this__5350__auto____$1 = this;
var G__61863 = k61841;
var G__61863__$1 = (((G__61863 instanceof cljs.core.Keyword))?G__61863.fqn:null);
switch (G__61863__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61841);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__61840){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__61864 = cljs.core.keyword_identical_QMARK_;
var expr__61865 = k__5352__auto__;
if(cljs.core.truth_((pred__61864.cljs$core$IFn$_invoke$arity$2 ? pred__61864.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__61865) : pred__61864.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__61865)))){
return (new shadow.dom.Size(G__61840,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61864.cljs$core$IFn$_invoke$arity$2 ? pred__61864.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__61865) : pred__61864.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__61865)))){
return (new shadow.dom.Size(self__.w,G__61840,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__61840),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__61840){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__61840,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__61844){
var extmap__5385__auto__ = (function (){var G__61868 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61844,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__61844)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61868);
} else {
return G__61868;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__61844),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__61844),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__62549 = (i + (1));
var G__62550 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__62549;
ret = G__62550;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61888){
var vec__61889 = p__61888;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61889,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61889,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__61893 = arguments.length;
switch (G__61893) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__62558 = ps;
var G__62559 = (i + (1));
el__$1 = G__62558;
i = G__62559;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__61897 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61897,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61897,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61897,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__61900_62569 = cljs.core.seq(props);
var chunk__61901_62570 = null;
var count__61902_62571 = (0);
var i__61903_62572 = (0);
while(true){
if((i__61903_62572 < count__61902_62571)){
var vec__61911_62573 = chunk__61901_62570.cljs$core$IIndexed$_nth$arity$2(null,i__61903_62572);
var k_62574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61911_62573,(0),null);
var v_62575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61911_62573,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_62574);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62574),v_62575);


var G__62578 = seq__61900_62569;
var G__62579 = chunk__61901_62570;
var G__62580 = count__61902_62571;
var G__62581 = (i__61903_62572 + (1));
seq__61900_62569 = G__62578;
chunk__61901_62570 = G__62579;
count__61902_62571 = G__62580;
i__61903_62572 = G__62581;
continue;
} else {
var temp__5753__auto___62586 = cljs.core.seq(seq__61900_62569);
if(temp__5753__auto___62586){
var seq__61900_62587__$1 = temp__5753__auto___62586;
if(cljs.core.chunked_seq_QMARK_(seq__61900_62587__$1)){
var c__5568__auto___62588 = cljs.core.chunk_first(seq__61900_62587__$1);
var G__62589 = cljs.core.chunk_rest(seq__61900_62587__$1);
var G__62590 = c__5568__auto___62588;
var G__62591 = cljs.core.count(c__5568__auto___62588);
var G__62592 = (0);
seq__61900_62569 = G__62589;
chunk__61901_62570 = G__62590;
count__61902_62571 = G__62591;
i__61903_62572 = G__62592;
continue;
} else {
var vec__61914_62593 = cljs.core.first(seq__61900_62587__$1);
var k_62594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61914_62593,(0),null);
var v_62595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61914_62593,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_62594);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62594),v_62595);


var G__62598 = cljs.core.next(seq__61900_62587__$1);
var G__62599 = null;
var G__62600 = (0);
var G__62601 = (0);
seq__61900_62569 = G__62598;
chunk__61901_62570 = G__62599;
count__61902_62571 = G__62600;
i__61903_62572 = G__62601;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__61921 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61921,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61921,(1),null);
var seq__61927_62602 = cljs.core.seq(node_children);
var chunk__61929_62603 = null;
var count__61930_62604 = (0);
var i__61931_62605 = (0);
while(true){
if((i__61931_62605 < count__61930_62604)){
var child_struct_62606 = chunk__61929_62603.cljs$core$IIndexed$_nth$arity$2(null,i__61931_62605);
if((!((child_struct_62606 == null)))){
if(typeof child_struct_62606 === 'string'){
var text_62609 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62609),child_struct_62606].join(''));
} else {
var children_62610 = shadow.dom.svg_node(child_struct_62606);
if(cljs.core.seq_QMARK_(children_62610)){
var seq__61980_62611 = cljs.core.seq(children_62610);
var chunk__61982_62612 = null;
var count__61983_62613 = (0);
var i__61984_62614 = (0);
while(true){
if((i__61984_62614 < count__61983_62613)){
var child_62617 = chunk__61982_62612.cljs$core$IIndexed$_nth$arity$2(null,i__61984_62614);
if(cljs.core.truth_(child_62617)){
node.appendChild(child_62617);


var G__62618 = seq__61980_62611;
var G__62619 = chunk__61982_62612;
var G__62620 = count__61983_62613;
var G__62621 = (i__61984_62614 + (1));
seq__61980_62611 = G__62618;
chunk__61982_62612 = G__62619;
count__61983_62613 = G__62620;
i__61984_62614 = G__62621;
continue;
} else {
var G__62622 = seq__61980_62611;
var G__62623 = chunk__61982_62612;
var G__62624 = count__61983_62613;
var G__62625 = (i__61984_62614 + (1));
seq__61980_62611 = G__62622;
chunk__61982_62612 = G__62623;
count__61983_62613 = G__62624;
i__61984_62614 = G__62625;
continue;
}
} else {
var temp__5753__auto___62626 = cljs.core.seq(seq__61980_62611);
if(temp__5753__auto___62626){
var seq__61980_62627__$1 = temp__5753__auto___62626;
if(cljs.core.chunked_seq_QMARK_(seq__61980_62627__$1)){
var c__5568__auto___62628 = cljs.core.chunk_first(seq__61980_62627__$1);
var G__62629 = cljs.core.chunk_rest(seq__61980_62627__$1);
var G__62630 = c__5568__auto___62628;
var G__62631 = cljs.core.count(c__5568__auto___62628);
var G__62632 = (0);
seq__61980_62611 = G__62629;
chunk__61982_62612 = G__62630;
count__61983_62613 = G__62631;
i__61984_62614 = G__62632;
continue;
} else {
var child_62636 = cljs.core.first(seq__61980_62627__$1);
if(cljs.core.truth_(child_62636)){
node.appendChild(child_62636);


var G__62637 = cljs.core.next(seq__61980_62627__$1);
var G__62638 = null;
var G__62639 = (0);
var G__62640 = (0);
seq__61980_62611 = G__62637;
chunk__61982_62612 = G__62638;
count__61983_62613 = G__62639;
i__61984_62614 = G__62640;
continue;
} else {
var G__62641 = cljs.core.next(seq__61980_62627__$1);
var G__62642 = null;
var G__62643 = (0);
var G__62644 = (0);
seq__61980_62611 = G__62641;
chunk__61982_62612 = G__62642;
count__61983_62613 = G__62643;
i__61984_62614 = G__62644;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62610);
}
}


var G__62645 = seq__61927_62602;
var G__62646 = chunk__61929_62603;
var G__62647 = count__61930_62604;
var G__62648 = (i__61931_62605 + (1));
seq__61927_62602 = G__62645;
chunk__61929_62603 = G__62646;
count__61930_62604 = G__62647;
i__61931_62605 = G__62648;
continue;
} else {
var G__62649 = seq__61927_62602;
var G__62650 = chunk__61929_62603;
var G__62651 = count__61930_62604;
var G__62652 = (i__61931_62605 + (1));
seq__61927_62602 = G__62649;
chunk__61929_62603 = G__62650;
count__61930_62604 = G__62651;
i__61931_62605 = G__62652;
continue;
}
} else {
var temp__5753__auto___62653 = cljs.core.seq(seq__61927_62602);
if(temp__5753__auto___62653){
var seq__61927_62654__$1 = temp__5753__auto___62653;
if(cljs.core.chunked_seq_QMARK_(seq__61927_62654__$1)){
var c__5568__auto___62655 = cljs.core.chunk_first(seq__61927_62654__$1);
var G__62656 = cljs.core.chunk_rest(seq__61927_62654__$1);
var G__62657 = c__5568__auto___62655;
var G__62658 = cljs.core.count(c__5568__auto___62655);
var G__62659 = (0);
seq__61927_62602 = G__62656;
chunk__61929_62603 = G__62657;
count__61930_62604 = G__62658;
i__61931_62605 = G__62659;
continue;
} else {
var child_struct_62660 = cljs.core.first(seq__61927_62654__$1);
if((!((child_struct_62660 == null)))){
if(typeof child_struct_62660 === 'string'){
var text_62661 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62661),child_struct_62660].join(''));
} else {
var children_62662 = shadow.dom.svg_node(child_struct_62660);
if(cljs.core.seq_QMARK_(children_62662)){
var seq__62011_62663 = cljs.core.seq(children_62662);
var chunk__62013_62664 = null;
var count__62014_62665 = (0);
var i__62015_62666 = (0);
while(true){
if((i__62015_62666 < count__62014_62665)){
var child_62667 = chunk__62013_62664.cljs$core$IIndexed$_nth$arity$2(null,i__62015_62666);
if(cljs.core.truth_(child_62667)){
node.appendChild(child_62667);


var G__62668 = seq__62011_62663;
var G__62669 = chunk__62013_62664;
var G__62670 = count__62014_62665;
var G__62671 = (i__62015_62666 + (1));
seq__62011_62663 = G__62668;
chunk__62013_62664 = G__62669;
count__62014_62665 = G__62670;
i__62015_62666 = G__62671;
continue;
} else {
var G__62672 = seq__62011_62663;
var G__62673 = chunk__62013_62664;
var G__62674 = count__62014_62665;
var G__62675 = (i__62015_62666 + (1));
seq__62011_62663 = G__62672;
chunk__62013_62664 = G__62673;
count__62014_62665 = G__62674;
i__62015_62666 = G__62675;
continue;
}
} else {
var temp__5753__auto___62676__$1 = cljs.core.seq(seq__62011_62663);
if(temp__5753__auto___62676__$1){
var seq__62011_62677__$1 = temp__5753__auto___62676__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62011_62677__$1)){
var c__5568__auto___62678 = cljs.core.chunk_first(seq__62011_62677__$1);
var G__62679 = cljs.core.chunk_rest(seq__62011_62677__$1);
var G__62680 = c__5568__auto___62678;
var G__62681 = cljs.core.count(c__5568__auto___62678);
var G__62682 = (0);
seq__62011_62663 = G__62679;
chunk__62013_62664 = G__62680;
count__62014_62665 = G__62681;
i__62015_62666 = G__62682;
continue;
} else {
var child_62683 = cljs.core.first(seq__62011_62677__$1);
if(cljs.core.truth_(child_62683)){
node.appendChild(child_62683);


var G__62684 = cljs.core.next(seq__62011_62677__$1);
var G__62685 = null;
var G__62686 = (0);
var G__62687 = (0);
seq__62011_62663 = G__62684;
chunk__62013_62664 = G__62685;
count__62014_62665 = G__62686;
i__62015_62666 = G__62687;
continue;
} else {
var G__62688 = cljs.core.next(seq__62011_62677__$1);
var G__62689 = null;
var G__62690 = (0);
var G__62691 = (0);
seq__62011_62663 = G__62688;
chunk__62013_62664 = G__62689;
count__62014_62665 = G__62690;
i__62015_62666 = G__62691;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62662);
}
}


var G__62692 = cljs.core.next(seq__61927_62654__$1);
var G__62693 = null;
var G__62694 = (0);
var G__62695 = (0);
seq__61927_62602 = G__62692;
chunk__61929_62603 = G__62693;
count__61930_62604 = G__62694;
i__61931_62605 = G__62695;
continue;
} else {
var G__62696 = cljs.core.next(seq__61927_62654__$1);
var G__62697 = null;
var G__62698 = (0);
var G__62699 = (0);
seq__61927_62602 = G__62696;
chunk__61929_62603 = G__62697;
count__61930_62604 = G__62698;
i__61931_62605 = G__62699;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62700 = arguments.length;
var i__5770__auto___62701 = (0);
while(true){
if((i__5770__auto___62701 < len__5769__auto___62700)){
args__5775__auto__.push((arguments[i__5770__auto___62701]));

var G__62702 = (i__5770__auto___62701 + (1));
i__5770__auto___62701 = G__62702;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq62031){
var G__62032 = cljs.core.first(seq62031);
var seq62031__$1 = cljs.core.next(seq62031);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62032,seq62031__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__62073 = arguments.length;
switch (G__62073) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__35016__auto___62704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_62095){
var state_val_62096 = (state_62095[(1)]);
if((state_val_62096 === (1))){
var state_62095__$1 = state_62095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62095__$1,(2),once_or_cleanup);
} else {
if((state_val_62096 === (2))){
var inst_62089 = (state_62095[(2)]);
var inst_62092 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_62095__$1 = (function (){var statearr_62119 = state_62095;
(statearr_62119[(7)] = inst_62089);

return statearr_62119;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62095__$1,inst_62092);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34930__auto__ = null;
var shadow$dom$state_machine__34930__auto____0 = (function (){
var statearr_62136 = [null,null,null,null,null,null,null,null];
(statearr_62136[(0)] = shadow$dom$state_machine__34930__auto__);

(statearr_62136[(1)] = (1));

return statearr_62136;
});
var shadow$dom$state_machine__34930__auto____1 = (function (state_62095){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_62095);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e62142){var ex__34933__auto__ = e62142;
var statearr_62145_62705 = state_62095;
(statearr_62145_62705[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_62095[(4)]))){
var statearr_62146_62706 = state_62095;
(statearr_62146_62706[(1)] = cljs.core.first((state_62095[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62707 = state_62095;
state_62095 = G__62707;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
shadow$dom$state_machine__34930__auto__ = function(state_62095){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34930__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34930__auto____1.call(this,state_62095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34930__auto____0;
shadow$dom$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34930__auto____1;
return shadow$dom$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_62155 = f__35017__auto__();
(statearr_62155[(6)] = c__35016__auto___62704);

return statearr_62155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
