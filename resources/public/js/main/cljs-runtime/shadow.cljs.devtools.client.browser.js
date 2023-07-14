goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64509 = arguments.length;
var i__5770__auto___64511 = (0);
while(true){
if((i__5770__auto___64511 < len__5769__auto___64509)){
args__5775__auto__.push((arguments[i__5770__auto___64511]));

var G__64512 = (i__5770__auto___64511 + (1));
i__5770__auto___64511 = G__64512;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63759){
var G__63760 = cljs.core.first(seq63759);
var seq63759__$1 = cljs.core.next(seq63759);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63760,seq63759__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__63772 = cljs.core.seq(sources);
var chunk__63773 = null;
var count__63774 = (0);
var i__63775 = (0);
while(true){
if((i__63775 < count__63774)){
var map__63784 = chunk__63773.cljs$core$IIndexed$_nth$arity$2(null,i__63775);
var map__63784__$1 = cljs.core.__destructure_map(map__63784);
var src = map__63784__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63784__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63784__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63784__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63784__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63788){var e_64515 = e63788;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64515);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64515.message)].join('')));
}

var G__64517 = seq__63772;
var G__64518 = chunk__63773;
var G__64519 = count__63774;
var G__64520 = (i__63775 + (1));
seq__63772 = G__64517;
chunk__63773 = G__64518;
count__63774 = G__64519;
i__63775 = G__64520;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63772);
if(temp__5753__auto__){
var seq__63772__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63772__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__63772__$1);
var G__64522 = cljs.core.chunk_rest(seq__63772__$1);
var G__64523 = c__5568__auto__;
var G__64524 = cljs.core.count(c__5568__auto__);
var G__64525 = (0);
seq__63772 = G__64522;
chunk__63773 = G__64523;
count__63774 = G__64524;
i__63775 = G__64525;
continue;
} else {
var map__63789 = cljs.core.first(seq__63772__$1);
var map__63789__$1 = cljs.core.__destructure_map(map__63789);
var src = map__63789__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63789__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63789__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63789__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63789__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63790){var e_64526 = e63790;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64526);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64526.message)].join('')));
}

var G__64527 = cljs.core.next(seq__63772__$1);
var G__64528 = null;
var G__64529 = (0);
var G__64530 = (0);
seq__63772 = G__64527;
chunk__63773 = G__64528;
count__63774 = G__64529;
i__63775 = G__64530;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__63794 = cljs.core.seq(js_requires);
var chunk__63795 = null;
var count__63796 = (0);
var i__63797 = (0);
while(true){
if((i__63797 < count__63796)){
var js_ns = chunk__63795.cljs$core$IIndexed$_nth$arity$2(null,i__63797);
var require_str_64531 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64531);


var G__64532 = seq__63794;
var G__64533 = chunk__63795;
var G__64534 = count__63796;
var G__64535 = (i__63797 + (1));
seq__63794 = G__64532;
chunk__63795 = G__64533;
count__63796 = G__64534;
i__63797 = G__64535;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63794);
if(temp__5753__auto__){
var seq__63794__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63794__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__63794__$1);
var G__64536 = cljs.core.chunk_rest(seq__63794__$1);
var G__64537 = c__5568__auto__;
var G__64538 = cljs.core.count(c__5568__auto__);
var G__64539 = (0);
seq__63794 = G__64536;
chunk__63795 = G__64537;
count__63796 = G__64538;
i__63797 = G__64539;
continue;
} else {
var js_ns = cljs.core.first(seq__63794__$1);
var require_str_64540 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64540);


var G__64542 = cljs.core.next(seq__63794__$1);
var G__64543 = null;
var G__64544 = (0);
var G__64545 = (0);
seq__63794 = G__64542;
chunk__63795 = G__64543;
count__63796 = G__64544;
i__63797 = G__64545;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__63799){
var map__63800 = p__63799;
var map__63800__$1 = cljs.core.__destructure_map(map__63800);
var msg = map__63800__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63800__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63800__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63801(s__63802){
return (new cljs.core.LazySeq(null,(function (){
var s__63802__$1 = s__63802;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63802__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__63807 = cljs.core.first(xs__6308__auto__);
var map__63807__$1 = cljs.core.__destructure_map(map__63807);
var src = map__63807__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63807__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63807__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__63802__$1,map__63807,map__63807__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63800,map__63800__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63801_$_iter__63803(s__63804){
return (new cljs.core.LazySeq(null,((function (s__63802__$1,map__63807,map__63807__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63800,map__63800__$1,msg,info,reload_info){
return (function (){
var s__63804__$1 = s__63804;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__63804__$1);
if(temp__5753__auto____$1){
var s__63804__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63804__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__63804__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__63806 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__63805 = (0);
while(true){
if((i__63805 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__63805);
cljs.core.chunk_append(b__63806,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__64551 = (i__63805 + (1));
i__63805 = G__64551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63806),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63801_$_iter__63803(cljs.core.chunk_rest(s__63804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63806),null);
}
} else {
var warning = cljs.core.first(s__63804__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63801_$_iter__63803(cljs.core.rest(s__63804__$2)));
}
} else {
return null;
}
break;
}
});})(s__63802__$1,map__63807,map__63807__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63800,map__63800__$1,msg,info,reload_info))
,null,null));
});})(s__63802__$1,map__63807,map__63807__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63800,map__63800__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63801(cljs.core.rest(s__63802__$1)));
} else {
var G__64552 = cljs.core.rest(s__63802__$1);
s__63802__$1 = G__64552;
continue;
}
} else {
var G__64553 = cljs.core.rest(s__63802__$1);
s__63802__$1 = G__64553;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__63813_64554 = cljs.core.seq(warnings);
var chunk__63814_64555 = null;
var count__63815_64556 = (0);
var i__63816_64557 = (0);
while(true){
if((i__63816_64557 < count__63815_64556)){
var map__63822_64558 = chunk__63814_64555.cljs$core$IIndexed$_nth$arity$2(null,i__63816_64557);
var map__63822_64559__$1 = cljs.core.__destructure_map(map__63822_64558);
var w_64560 = map__63822_64559__$1;
var msg_64561__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63822_64559__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63822_64559__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63822_64559__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63822_64559__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64564)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64562),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64563),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64561__$1)].join(''));


var G__64566 = seq__63813_64554;
var G__64567 = chunk__63814_64555;
var G__64568 = count__63815_64556;
var G__64569 = (i__63816_64557 + (1));
seq__63813_64554 = G__64566;
chunk__63814_64555 = G__64567;
count__63815_64556 = G__64568;
i__63816_64557 = G__64569;
continue;
} else {
var temp__5753__auto___64570 = cljs.core.seq(seq__63813_64554);
if(temp__5753__auto___64570){
var seq__63813_64571__$1 = temp__5753__auto___64570;
if(cljs.core.chunked_seq_QMARK_(seq__63813_64571__$1)){
var c__5568__auto___64572 = cljs.core.chunk_first(seq__63813_64571__$1);
var G__64573 = cljs.core.chunk_rest(seq__63813_64571__$1);
var G__64574 = c__5568__auto___64572;
var G__64575 = cljs.core.count(c__5568__auto___64572);
var G__64576 = (0);
seq__63813_64554 = G__64573;
chunk__63814_64555 = G__64574;
count__63815_64556 = G__64575;
i__63816_64557 = G__64576;
continue;
} else {
var map__63825_64578 = cljs.core.first(seq__63813_64571__$1);
var map__63825_64579__$1 = cljs.core.__destructure_map(map__63825_64578);
var w_64580 = map__63825_64579__$1;
var msg_64581__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63825_64579__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63825_64579__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63825_64579__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63825_64579__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64584)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64582),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64583),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64581__$1)].join(''));


var G__64585 = cljs.core.next(seq__63813_64571__$1);
var G__64586 = null;
var G__64587 = (0);
var G__64588 = (0);
seq__63813_64554 = G__64585;
chunk__63814_64555 = G__64586;
count__63815_64556 = G__64587;
i__63816_64557 = G__64588;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__63798_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__63798_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__63832){
var map__63833 = p__63832;
var map__63833__$1 = cljs.core.__destructure_map(map__63833);
var msg = map__63833__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63833__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63833__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__63834 = cljs.core.seq(updates);
var chunk__63836 = null;
var count__63837 = (0);
var i__63838 = (0);
while(true){
if((i__63838 < count__63837)){
var path = chunk__63836.cljs$core$IIndexed$_nth$arity$2(null,i__63838);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64017_64595 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64021_64596 = null;
var count__64022_64597 = (0);
var i__64023_64598 = (0);
while(true){
if((i__64023_64598 < count__64022_64597)){
var node_64599 = chunk__64021_64596.cljs$core$IIndexed$_nth$arity$2(null,i__64023_64598);
if(cljs.core.not(node_64599.shadow$old)){
var path_match_64600 = shadow.cljs.devtools.client.browser.match_paths(node_64599.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64600)){
var new_link_64601 = (function (){var G__64087 = node_64599.cloneNode(true);
G__64087.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64600),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64087;
})();
(node_64599.shadow$old = true);

(new_link_64601.onload = ((function (seq__64017_64595,chunk__64021_64596,count__64022_64597,i__64023_64598,seq__63834,chunk__63836,count__63837,i__63838,new_link_64601,path_match_64600,node_64599,path,map__63833,map__63833__$1,msg,updates,reload_info){
return (function (e){
var seq__64088_64605 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64090_64606 = null;
var count__64091_64607 = (0);
var i__64092_64608 = (0);
while(true){
if((i__64092_64608 < count__64091_64607)){
var map__64115_64609 = chunk__64090_64606.cljs$core$IIndexed$_nth$arity$2(null,i__64092_64608);
var map__64115_64610__$1 = cljs.core.__destructure_map(map__64115_64609);
var task_64611 = map__64115_64610__$1;
var fn_str_64612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64115_64610__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64115_64610__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64616 = goog.getObjectByName(fn_str_64612,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64613)].join(''));

(fn_obj_64616.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64616.cljs$core$IFn$_invoke$arity$2(path,new_link_64601) : fn_obj_64616.call(null,path,new_link_64601));


var G__64618 = seq__64088_64605;
var G__64619 = chunk__64090_64606;
var G__64620 = count__64091_64607;
var G__64621 = (i__64092_64608 + (1));
seq__64088_64605 = G__64618;
chunk__64090_64606 = G__64619;
count__64091_64607 = G__64620;
i__64092_64608 = G__64621;
continue;
} else {
var temp__5753__auto___64622 = cljs.core.seq(seq__64088_64605);
if(temp__5753__auto___64622){
var seq__64088_64623__$1 = temp__5753__auto___64622;
if(cljs.core.chunked_seq_QMARK_(seq__64088_64623__$1)){
var c__5568__auto___64624 = cljs.core.chunk_first(seq__64088_64623__$1);
var G__64625 = cljs.core.chunk_rest(seq__64088_64623__$1);
var G__64626 = c__5568__auto___64624;
var G__64627 = cljs.core.count(c__5568__auto___64624);
var G__64628 = (0);
seq__64088_64605 = G__64625;
chunk__64090_64606 = G__64626;
count__64091_64607 = G__64627;
i__64092_64608 = G__64628;
continue;
} else {
var map__64120_64629 = cljs.core.first(seq__64088_64623__$1);
var map__64120_64630__$1 = cljs.core.__destructure_map(map__64120_64629);
var task_64631 = map__64120_64630__$1;
var fn_str_64632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64120_64630__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64120_64630__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64634 = goog.getObjectByName(fn_str_64632,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64633)].join(''));

(fn_obj_64634.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64634.cljs$core$IFn$_invoke$arity$2(path,new_link_64601) : fn_obj_64634.call(null,path,new_link_64601));


var G__64636 = cljs.core.next(seq__64088_64623__$1);
var G__64637 = null;
var G__64638 = (0);
var G__64639 = (0);
seq__64088_64605 = G__64636;
chunk__64090_64606 = G__64637;
count__64091_64607 = G__64638;
i__64092_64608 = G__64639;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64599);
});})(seq__64017_64595,chunk__64021_64596,count__64022_64597,i__64023_64598,seq__63834,chunk__63836,count__63837,i__63838,new_link_64601,path_match_64600,node_64599,path,map__63833,map__63833__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64600], 0));

goog.dom.insertSiblingAfter(new_link_64601,node_64599);


var G__64641 = seq__64017_64595;
var G__64642 = chunk__64021_64596;
var G__64643 = count__64022_64597;
var G__64644 = (i__64023_64598 + (1));
seq__64017_64595 = G__64641;
chunk__64021_64596 = G__64642;
count__64022_64597 = G__64643;
i__64023_64598 = G__64644;
continue;
} else {
var G__64645 = seq__64017_64595;
var G__64646 = chunk__64021_64596;
var G__64647 = count__64022_64597;
var G__64648 = (i__64023_64598 + (1));
seq__64017_64595 = G__64645;
chunk__64021_64596 = G__64646;
count__64022_64597 = G__64647;
i__64023_64598 = G__64648;
continue;
}
} else {
var G__64650 = seq__64017_64595;
var G__64651 = chunk__64021_64596;
var G__64652 = count__64022_64597;
var G__64653 = (i__64023_64598 + (1));
seq__64017_64595 = G__64650;
chunk__64021_64596 = G__64651;
count__64022_64597 = G__64652;
i__64023_64598 = G__64653;
continue;
}
} else {
var temp__5753__auto___64654 = cljs.core.seq(seq__64017_64595);
if(temp__5753__auto___64654){
var seq__64017_64655__$1 = temp__5753__auto___64654;
if(cljs.core.chunked_seq_QMARK_(seq__64017_64655__$1)){
var c__5568__auto___64656 = cljs.core.chunk_first(seq__64017_64655__$1);
var G__64658 = cljs.core.chunk_rest(seq__64017_64655__$1);
var G__64659 = c__5568__auto___64656;
var G__64660 = cljs.core.count(c__5568__auto___64656);
var G__64661 = (0);
seq__64017_64595 = G__64658;
chunk__64021_64596 = G__64659;
count__64022_64597 = G__64660;
i__64023_64598 = G__64661;
continue;
} else {
var node_64663 = cljs.core.first(seq__64017_64655__$1);
if(cljs.core.not(node_64663.shadow$old)){
var path_match_64664 = shadow.cljs.devtools.client.browser.match_paths(node_64663.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64664)){
var new_link_64665 = (function (){var G__64136 = node_64663.cloneNode(true);
G__64136.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64664),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64136;
})();
(node_64663.shadow$old = true);

(new_link_64665.onload = ((function (seq__64017_64595,chunk__64021_64596,count__64022_64597,i__64023_64598,seq__63834,chunk__63836,count__63837,i__63838,new_link_64665,path_match_64664,node_64663,seq__64017_64655__$1,temp__5753__auto___64654,path,map__63833,map__63833__$1,msg,updates,reload_info){
return (function (e){
var seq__64138_64670 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64140_64671 = null;
var count__64141_64672 = (0);
var i__64142_64673 = (0);
while(true){
if((i__64142_64673 < count__64141_64672)){
var map__64154_64674 = chunk__64140_64671.cljs$core$IIndexed$_nth$arity$2(null,i__64142_64673);
var map__64154_64675__$1 = cljs.core.__destructure_map(map__64154_64674);
var task_64676 = map__64154_64675__$1;
var fn_str_64677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64154_64675__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64154_64675__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64679 = goog.getObjectByName(fn_str_64677,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64678)].join(''));

(fn_obj_64679.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64679.cljs$core$IFn$_invoke$arity$2(path,new_link_64665) : fn_obj_64679.call(null,path,new_link_64665));


var G__64680 = seq__64138_64670;
var G__64681 = chunk__64140_64671;
var G__64682 = count__64141_64672;
var G__64683 = (i__64142_64673 + (1));
seq__64138_64670 = G__64680;
chunk__64140_64671 = G__64681;
count__64141_64672 = G__64682;
i__64142_64673 = G__64683;
continue;
} else {
var temp__5753__auto___64684__$1 = cljs.core.seq(seq__64138_64670);
if(temp__5753__auto___64684__$1){
var seq__64138_64685__$1 = temp__5753__auto___64684__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64138_64685__$1)){
var c__5568__auto___64686 = cljs.core.chunk_first(seq__64138_64685__$1);
var G__64687 = cljs.core.chunk_rest(seq__64138_64685__$1);
var G__64688 = c__5568__auto___64686;
var G__64689 = cljs.core.count(c__5568__auto___64686);
var G__64690 = (0);
seq__64138_64670 = G__64687;
chunk__64140_64671 = G__64688;
count__64141_64672 = G__64689;
i__64142_64673 = G__64690;
continue;
} else {
var map__64157_64692 = cljs.core.first(seq__64138_64685__$1);
var map__64157_64693__$1 = cljs.core.__destructure_map(map__64157_64692);
var task_64694 = map__64157_64693__$1;
var fn_str_64695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64157_64693__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64157_64693__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64698 = goog.getObjectByName(fn_str_64695,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64696)].join(''));

(fn_obj_64698.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64698.cljs$core$IFn$_invoke$arity$2(path,new_link_64665) : fn_obj_64698.call(null,path,new_link_64665));


var G__64700 = cljs.core.next(seq__64138_64685__$1);
var G__64701 = null;
var G__64702 = (0);
var G__64703 = (0);
seq__64138_64670 = G__64700;
chunk__64140_64671 = G__64701;
count__64141_64672 = G__64702;
i__64142_64673 = G__64703;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64663);
});})(seq__64017_64595,chunk__64021_64596,count__64022_64597,i__64023_64598,seq__63834,chunk__63836,count__63837,i__63838,new_link_64665,path_match_64664,node_64663,seq__64017_64655__$1,temp__5753__auto___64654,path,map__63833,map__63833__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64664], 0));

goog.dom.insertSiblingAfter(new_link_64665,node_64663);


var G__64704 = cljs.core.next(seq__64017_64655__$1);
var G__64705 = null;
var G__64706 = (0);
var G__64707 = (0);
seq__64017_64595 = G__64704;
chunk__64021_64596 = G__64705;
count__64022_64597 = G__64706;
i__64023_64598 = G__64707;
continue;
} else {
var G__64710 = cljs.core.next(seq__64017_64655__$1);
var G__64711 = null;
var G__64712 = (0);
var G__64713 = (0);
seq__64017_64595 = G__64710;
chunk__64021_64596 = G__64711;
count__64022_64597 = G__64712;
i__64023_64598 = G__64713;
continue;
}
} else {
var G__64715 = cljs.core.next(seq__64017_64655__$1);
var G__64716 = null;
var G__64717 = (0);
var G__64718 = (0);
seq__64017_64595 = G__64715;
chunk__64021_64596 = G__64716;
count__64022_64597 = G__64717;
i__64023_64598 = G__64718;
continue;
}
}
} else {
}
}
break;
}


var G__64719 = seq__63834;
var G__64720 = chunk__63836;
var G__64721 = count__63837;
var G__64722 = (i__63838 + (1));
seq__63834 = G__64719;
chunk__63836 = G__64720;
count__63837 = G__64721;
i__63838 = G__64722;
continue;
} else {
var G__64723 = seq__63834;
var G__64724 = chunk__63836;
var G__64725 = count__63837;
var G__64726 = (i__63838 + (1));
seq__63834 = G__64723;
chunk__63836 = G__64724;
count__63837 = G__64725;
i__63838 = G__64726;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63834);
if(temp__5753__auto__){
var seq__63834__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63834__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__63834__$1);
var G__64728 = cljs.core.chunk_rest(seq__63834__$1);
var G__64729 = c__5568__auto__;
var G__64730 = cljs.core.count(c__5568__auto__);
var G__64731 = (0);
seq__63834 = G__64728;
chunk__63836 = G__64729;
count__63837 = G__64730;
i__63838 = G__64731;
continue;
} else {
var path = cljs.core.first(seq__63834__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64161_64732 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64165_64733 = null;
var count__64166_64734 = (0);
var i__64167_64735 = (0);
while(true){
if((i__64167_64735 < count__64166_64734)){
var node_64742 = chunk__64165_64733.cljs$core$IIndexed$_nth$arity$2(null,i__64167_64735);
if(cljs.core.not(node_64742.shadow$old)){
var path_match_64743 = shadow.cljs.devtools.client.browser.match_paths(node_64742.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64743)){
var new_link_64744 = (function (){var G__64245 = node_64742.cloneNode(true);
G__64245.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64743),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64245;
})();
(node_64742.shadow$old = true);

(new_link_64744.onload = ((function (seq__64161_64732,chunk__64165_64733,count__64166_64734,i__64167_64735,seq__63834,chunk__63836,count__63837,i__63838,new_link_64744,path_match_64743,node_64742,path,seq__63834__$1,temp__5753__auto__,map__63833,map__63833__$1,msg,updates,reload_info){
return (function (e){
var seq__64246_64750 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64248_64751 = null;
var count__64249_64752 = (0);
var i__64250_64753 = (0);
while(true){
if((i__64250_64753 < count__64249_64752)){
var map__64262_64755 = chunk__64248_64751.cljs$core$IIndexed$_nth$arity$2(null,i__64250_64753);
var map__64262_64756__$1 = cljs.core.__destructure_map(map__64262_64755);
var task_64757 = map__64262_64756__$1;
var fn_str_64758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64262_64756__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64262_64756__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64760 = goog.getObjectByName(fn_str_64758,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64759)].join(''));

(fn_obj_64760.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64760.cljs$core$IFn$_invoke$arity$2(path,new_link_64744) : fn_obj_64760.call(null,path,new_link_64744));


var G__64761 = seq__64246_64750;
var G__64762 = chunk__64248_64751;
var G__64763 = count__64249_64752;
var G__64764 = (i__64250_64753 + (1));
seq__64246_64750 = G__64761;
chunk__64248_64751 = G__64762;
count__64249_64752 = G__64763;
i__64250_64753 = G__64764;
continue;
} else {
var temp__5753__auto___64765__$1 = cljs.core.seq(seq__64246_64750);
if(temp__5753__auto___64765__$1){
var seq__64246_64766__$1 = temp__5753__auto___64765__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64246_64766__$1)){
var c__5568__auto___64767 = cljs.core.chunk_first(seq__64246_64766__$1);
var G__64768 = cljs.core.chunk_rest(seq__64246_64766__$1);
var G__64769 = c__5568__auto___64767;
var G__64770 = cljs.core.count(c__5568__auto___64767);
var G__64771 = (0);
seq__64246_64750 = G__64768;
chunk__64248_64751 = G__64769;
count__64249_64752 = G__64770;
i__64250_64753 = G__64771;
continue;
} else {
var map__64266_64773 = cljs.core.first(seq__64246_64766__$1);
var map__64266_64774__$1 = cljs.core.__destructure_map(map__64266_64773);
var task_64775 = map__64266_64774__$1;
var fn_str_64776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64266_64774__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64266_64774__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64779 = goog.getObjectByName(fn_str_64776,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64777)].join(''));

(fn_obj_64779.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64779.cljs$core$IFn$_invoke$arity$2(path,new_link_64744) : fn_obj_64779.call(null,path,new_link_64744));


var G__64780 = cljs.core.next(seq__64246_64766__$1);
var G__64781 = null;
var G__64782 = (0);
var G__64783 = (0);
seq__64246_64750 = G__64780;
chunk__64248_64751 = G__64781;
count__64249_64752 = G__64782;
i__64250_64753 = G__64783;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64742);
});})(seq__64161_64732,chunk__64165_64733,count__64166_64734,i__64167_64735,seq__63834,chunk__63836,count__63837,i__63838,new_link_64744,path_match_64743,node_64742,path,seq__63834__$1,temp__5753__auto__,map__63833,map__63833__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64743], 0));

goog.dom.insertSiblingAfter(new_link_64744,node_64742);


var G__64786 = seq__64161_64732;
var G__64787 = chunk__64165_64733;
var G__64788 = count__64166_64734;
var G__64789 = (i__64167_64735 + (1));
seq__64161_64732 = G__64786;
chunk__64165_64733 = G__64787;
count__64166_64734 = G__64788;
i__64167_64735 = G__64789;
continue;
} else {
var G__64790 = seq__64161_64732;
var G__64791 = chunk__64165_64733;
var G__64792 = count__64166_64734;
var G__64793 = (i__64167_64735 + (1));
seq__64161_64732 = G__64790;
chunk__64165_64733 = G__64791;
count__64166_64734 = G__64792;
i__64167_64735 = G__64793;
continue;
}
} else {
var G__64794 = seq__64161_64732;
var G__64795 = chunk__64165_64733;
var G__64796 = count__64166_64734;
var G__64797 = (i__64167_64735 + (1));
seq__64161_64732 = G__64794;
chunk__64165_64733 = G__64795;
count__64166_64734 = G__64796;
i__64167_64735 = G__64797;
continue;
}
} else {
var temp__5753__auto___64798__$1 = cljs.core.seq(seq__64161_64732);
if(temp__5753__auto___64798__$1){
var seq__64161_64799__$1 = temp__5753__auto___64798__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64161_64799__$1)){
var c__5568__auto___64800 = cljs.core.chunk_first(seq__64161_64799__$1);
var G__64801 = cljs.core.chunk_rest(seq__64161_64799__$1);
var G__64802 = c__5568__auto___64800;
var G__64803 = cljs.core.count(c__5568__auto___64800);
var G__64804 = (0);
seq__64161_64732 = G__64801;
chunk__64165_64733 = G__64802;
count__64166_64734 = G__64803;
i__64167_64735 = G__64804;
continue;
} else {
var node_64805 = cljs.core.first(seq__64161_64799__$1);
if(cljs.core.not(node_64805.shadow$old)){
var path_match_64806 = shadow.cljs.devtools.client.browser.match_paths(node_64805.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64806)){
var new_link_64807 = (function (){var G__64277 = node_64805.cloneNode(true);
G__64277.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64806),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64277;
})();
(node_64805.shadow$old = true);

(new_link_64807.onload = ((function (seq__64161_64732,chunk__64165_64733,count__64166_64734,i__64167_64735,seq__63834,chunk__63836,count__63837,i__63838,new_link_64807,path_match_64806,node_64805,seq__64161_64799__$1,temp__5753__auto___64798__$1,path,seq__63834__$1,temp__5753__auto__,map__63833,map__63833__$1,msg,updates,reload_info){
return (function (e){
var seq__64280_64812 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64282_64813 = null;
var count__64283_64814 = (0);
var i__64284_64815 = (0);
while(true){
if((i__64284_64815 < count__64283_64814)){
var map__64299_64816 = chunk__64282_64813.cljs$core$IIndexed$_nth$arity$2(null,i__64284_64815);
var map__64299_64817__$1 = cljs.core.__destructure_map(map__64299_64816);
var task_64818 = map__64299_64817__$1;
var fn_str_64819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64299_64817__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64299_64817__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64821 = goog.getObjectByName(fn_str_64819,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64820)].join(''));

(fn_obj_64821.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64821.cljs$core$IFn$_invoke$arity$2(path,new_link_64807) : fn_obj_64821.call(null,path,new_link_64807));


var G__64822 = seq__64280_64812;
var G__64823 = chunk__64282_64813;
var G__64824 = count__64283_64814;
var G__64825 = (i__64284_64815 + (1));
seq__64280_64812 = G__64822;
chunk__64282_64813 = G__64823;
count__64283_64814 = G__64824;
i__64284_64815 = G__64825;
continue;
} else {
var temp__5753__auto___64826__$2 = cljs.core.seq(seq__64280_64812);
if(temp__5753__auto___64826__$2){
var seq__64280_64827__$1 = temp__5753__auto___64826__$2;
if(cljs.core.chunked_seq_QMARK_(seq__64280_64827__$1)){
var c__5568__auto___64828 = cljs.core.chunk_first(seq__64280_64827__$1);
var G__64829 = cljs.core.chunk_rest(seq__64280_64827__$1);
var G__64830 = c__5568__auto___64828;
var G__64831 = cljs.core.count(c__5568__auto___64828);
var G__64832 = (0);
seq__64280_64812 = G__64829;
chunk__64282_64813 = G__64830;
count__64283_64814 = G__64831;
i__64284_64815 = G__64832;
continue;
} else {
var map__64308_64833 = cljs.core.first(seq__64280_64827__$1);
var map__64308_64834__$1 = cljs.core.__destructure_map(map__64308_64833);
var task_64835 = map__64308_64834__$1;
var fn_str_64836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64308_64834__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64308_64834__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64838 = goog.getObjectByName(fn_str_64836,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64837)].join(''));

(fn_obj_64838.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64838.cljs$core$IFn$_invoke$arity$2(path,new_link_64807) : fn_obj_64838.call(null,path,new_link_64807));


var G__64840 = cljs.core.next(seq__64280_64827__$1);
var G__64841 = null;
var G__64842 = (0);
var G__64843 = (0);
seq__64280_64812 = G__64840;
chunk__64282_64813 = G__64841;
count__64283_64814 = G__64842;
i__64284_64815 = G__64843;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64805);
});})(seq__64161_64732,chunk__64165_64733,count__64166_64734,i__64167_64735,seq__63834,chunk__63836,count__63837,i__63838,new_link_64807,path_match_64806,node_64805,seq__64161_64799__$1,temp__5753__auto___64798__$1,path,seq__63834__$1,temp__5753__auto__,map__63833,map__63833__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64806], 0));

goog.dom.insertSiblingAfter(new_link_64807,node_64805);


var G__64844 = cljs.core.next(seq__64161_64799__$1);
var G__64845 = null;
var G__64846 = (0);
var G__64847 = (0);
seq__64161_64732 = G__64844;
chunk__64165_64733 = G__64845;
count__64166_64734 = G__64846;
i__64167_64735 = G__64847;
continue;
} else {
var G__64848 = cljs.core.next(seq__64161_64799__$1);
var G__64849 = null;
var G__64850 = (0);
var G__64851 = (0);
seq__64161_64732 = G__64848;
chunk__64165_64733 = G__64849;
count__64166_64734 = G__64850;
i__64167_64735 = G__64851;
continue;
}
} else {
var G__64852 = cljs.core.next(seq__64161_64799__$1);
var G__64853 = null;
var G__64854 = (0);
var G__64855 = (0);
seq__64161_64732 = G__64852;
chunk__64165_64733 = G__64853;
count__64166_64734 = G__64854;
i__64167_64735 = G__64855;
continue;
}
}
} else {
}
}
break;
}


var G__64856 = cljs.core.next(seq__63834__$1);
var G__64857 = null;
var G__64858 = (0);
var G__64859 = (0);
seq__63834 = G__64856;
chunk__63836 = G__64857;
count__63837 = G__64858;
i__63838 = G__64859;
continue;
} else {
var G__64860 = cljs.core.next(seq__63834__$1);
var G__64861 = null;
var G__64862 = (0);
var G__64863 = (0);
seq__63834 = G__64860;
chunk__63836 = G__64861;
count__63837 = G__64862;
i__63838 = G__64863;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__64329){
var map__64330 = p__64329;
var map__64330__$1 = cljs.core.__destructure_map(map__64330);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64330__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__64331,done,error){
var map__64332 = p__64331;
var map__64332__$1 = cljs.core.__destructure_map(map__64332);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64332__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__64335,done,error){
var map__64336 = p__64335;
var map__64336__$1 = cljs.core.__destructure_map(map__64336);
var msg = map__64336__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64336__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64336__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64336__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__64339){
var map__64340 = p__64339;
var map__64340__$1 = cljs.core.__destructure_map(map__64340);
var src = map__64340__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64340__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__64343 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__64343) : done.call(null,G__64343));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__64348){
var map__64350 = p__64348;
var map__64350__$1 = cljs.core.__destructure_map(map__64350);
var msg__$1 = map__64350__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64350__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e64356){var ex = e64356;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__64361){
var map__64362 = p__64361;
var map__64362__$1 = cljs.core.__destructure_map(map__64362);
var env = map__64362__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64362__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__64429){
var map__64431 = p__64429;
var map__64431__$1 = cljs.core.__destructure_map(map__64431);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64431__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64431__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__64442){
var map__64444 = p__64442;
var map__64444__$1 = cljs.core.__destructure_map(map__64444);
var svc = map__64444__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64444__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
