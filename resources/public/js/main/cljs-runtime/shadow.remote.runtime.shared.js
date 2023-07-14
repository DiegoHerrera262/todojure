goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__61588){
var map__61589 = p__61588;
var map__61589__$1 = cljs.core.__destructure_map(map__61589);
var runtime = map__61589__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61589__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_61737 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_61737)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__61593 = runtime;
var G__61594 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_61737);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__61593,G__61594) : shadow.remote.runtime.shared.process.call(null,G__61593,G__61594));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__61596,res){
var map__61597 = p__61596;
var map__61597__$1 = cljs.core.__destructure_map(map__61597);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61597__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61597__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__61598 = res;
var G__61598__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61598,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__61598);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61598__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__61598__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__61607 = arguments.length;
switch (G__61607) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__61608,msg,handlers,timeout_after_ms){
var map__61609 = p__61608;
var map__61609__$1 = cljs.core.__destructure_map(map__61609);
var runtime = map__61609__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61609__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61751 = arguments.length;
var i__5770__auto___61752 = (0);
while(true){
if((i__5770__auto___61752 < len__5769__auto___61751)){
args__5775__auto__.push((arguments[i__5770__auto___61752]));

var G__61753 = (i__5770__auto___61752 + (1));
i__5770__auto___61752 = G__61753;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__61620,ev,args){
var map__61621 = p__61620;
var map__61621__$1 = cljs.core.__destructure_map(map__61621);
var runtime = map__61621__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61621__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__61622 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61625 = null;
var count__61626 = (0);
var i__61627 = (0);
while(true){
if((i__61627 < count__61626)){
var ext = chunk__61625.cljs$core$IIndexed$_nth$arity$2(null,i__61627);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__61754 = seq__61622;
var G__61755 = chunk__61625;
var G__61756 = count__61626;
var G__61757 = (i__61627 + (1));
seq__61622 = G__61754;
chunk__61625 = G__61755;
count__61626 = G__61756;
i__61627 = G__61757;
continue;
} else {
var G__61758 = seq__61622;
var G__61759 = chunk__61625;
var G__61760 = count__61626;
var G__61761 = (i__61627 + (1));
seq__61622 = G__61758;
chunk__61625 = G__61759;
count__61626 = G__61760;
i__61627 = G__61761;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61622);
if(temp__5753__auto__){
var seq__61622__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61622__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61622__$1);
var G__61762 = cljs.core.chunk_rest(seq__61622__$1);
var G__61763 = c__5568__auto__;
var G__61764 = cljs.core.count(c__5568__auto__);
var G__61765 = (0);
seq__61622 = G__61762;
chunk__61625 = G__61763;
count__61626 = G__61764;
i__61627 = G__61765;
continue;
} else {
var ext = cljs.core.first(seq__61622__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__61766 = cljs.core.next(seq__61622__$1);
var G__61767 = null;
var G__61768 = (0);
var G__61769 = (0);
seq__61622 = G__61766;
chunk__61625 = G__61767;
count__61626 = G__61768;
i__61627 = G__61769;
continue;
} else {
var G__61770 = cljs.core.next(seq__61622__$1);
var G__61771 = null;
var G__61772 = (0);
var G__61773 = (0);
seq__61622 = G__61770;
chunk__61625 = G__61771;
count__61626 = G__61772;
i__61627 = G__61773;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq61617){
var G__61618 = cljs.core.first(seq61617);
var seq61617__$1 = cljs.core.next(seq61617);
var G__61619 = cljs.core.first(seq61617__$1);
var seq61617__$2 = cljs.core.next(seq61617__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61618,G__61619,seq61617__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61641,p__61642){
var map__61643 = p__61641;
var map__61643__$1 = cljs.core.__destructure_map(map__61643);
var runtime = map__61643__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61643__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61644 = p__61642;
var map__61644__$1 = cljs.core.__destructure_map(map__61644);
var msg = map__61644__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61644__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__61645 = cljs.core.deref(state_ref);
var map__61645__$1 = cljs.core.__destructure_map(map__61645);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61645__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61645__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61656,msg){
var map__61657 = p__61656;
var map__61657__$1 = cljs.core.__destructure_map(map__61657);
var runtime = map__61657__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61657__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61661,key,p__61662){
var map__61663 = p__61661;
var map__61663__$1 = cljs.core.__destructure_map(map__61663);
var state = map__61663__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61663__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61664 = p__61662;
var map__61664__$1 = cljs.core.__destructure_map(map__61664);
var spec = map__61664__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61664__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61669,key,spec){
var map__61670 = p__61669;
var map__61670__$1 = cljs.core.__destructure_map(map__61670);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61670__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61671_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61671_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61672_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61672_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61673_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61673_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__61674_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__61674_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61675_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61675_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61677,key){
var map__61678 = p__61677;
var map__61678__$1 = cljs.core.__destructure_map(map__61678);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61678__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__61685,msg){
var map__61686 = p__61685;
var map__61686__$1 = cljs.core.__destructure_map(map__61686);
var runtime = map__61686__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61686__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61688,p__61689){
var map__61692 = p__61688;
var map__61692__$1 = cljs.core.__destructure_map(map__61692);
var runtime = map__61692__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61692__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61693 = p__61689;
var map__61693__$1 = cljs.core.__destructure_map(map__61693);
var msg = map__61693__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61693__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61693__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61698 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61700 = null;
var count__61701 = (0);
var i__61702 = (0);
while(true){
if((i__61702 < count__61701)){
var map__61710 = chunk__61700.cljs$core$IIndexed$_nth$arity$2(null,i__61702);
var map__61710__$1 = cljs.core.__destructure_map(map__61710);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61710__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61781 = seq__61698;
var G__61782 = chunk__61700;
var G__61783 = count__61701;
var G__61784 = (i__61702 + (1));
seq__61698 = G__61781;
chunk__61700 = G__61782;
count__61701 = G__61783;
i__61702 = G__61784;
continue;
} else {
var G__61785 = seq__61698;
var G__61786 = chunk__61700;
var G__61787 = count__61701;
var G__61788 = (i__61702 + (1));
seq__61698 = G__61785;
chunk__61700 = G__61786;
count__61701 = G__61787;
i__61702 = G__61788;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61698);
if(temp__5753__auto__){
var seq__61698__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61698__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61698__$1);
var G__61793 = cljs.core.chunk_rest(seq__61698__$1);
var G__61794 = c__5568__auto__;
var G__61795 = cljs.core.count(c__5568__auto__);
var G__61796 = (0);
seq__61698 = G__61793;
chunk__61700 = G__61794;
count__61701 = G__61795;
i__61702 = G__61796;
continue;
} else {
var map__61722 = cljs.core.first(seq__61698__$1);
var map__61722__$1 = cljs.core.__destructure_map(map__61722);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61722__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61797 = cljs.core.next(seq__61698__$1);
var G__61798 = null;
var G__61799 = (0);
var G__61800 = (0);
seq__61698 = G__61797;
chunk__61700 = G__61798;
count__61701 = G__61799;
i__61702 = G__61800;
continue;
} else {
var G__61801 = cljs.core.next(seq__61698__$1);
var G__61802 = null;
var G__61803 = (0);
var G__61804 = (0);
seq__61698 = G__61801;
chunk__61700 = G__61802;
count__61701 = G__61803;
i__61702 = G__61804;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
