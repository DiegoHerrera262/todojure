goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__62844,p__62845){
var map__62848 = p__62844;
var map__62848__$1 = cljs.core.__destructure_map(map__62848);
var svc = map__62848__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62848__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62848__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62848__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__62849 = p__62845;
var map__62849__$1 = cljs.core.__destructure_map(map__62849);
var msg = map__62849__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62849__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62849__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62849__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62849__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__62853,p__62854){
var map__62859 = p__62853;
var map__62859__$1 = cljs.core.__destructure_map(map__62859);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62859__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__62860 = p__62854;
var map__62860__$1 = cljs.core.__destructure_map(map__62860);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62860__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__62862,p__62863){
var map__62864 = p__62862;
var map__62864__$1 = cljs.core.__destructure_map(map__62864);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62864__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62864__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__62865 = p__62863;
var map__62865__$1 = cljs.core.__destructure_map(map__62865);
var msg = map__62865__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62865__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__62866,tid){
var map__62867 = p__62866;
var map__62867__$1 = cljs.core.__destructure_map(map__62867);
var svc = map__62867__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__62877 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__62878 = null;
var count__62879 = (0);
var i__62880 = (0);
while(true){
if((i__62880 < count__62879)){
var vec__62890 = chunk__62878.cljs$core$IIndexed$_nth$arity$2(null,i__62880);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62890,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62890,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__62927 = seq__62877;
var G__62928 = chunk__62878;
var G__62929 = count__62879;
var G__62930 = (i__62880 + (1));
seq__62877 = G__62927;
chunk__62878 = G__62928;
count__62879 = G__62929;
i__62880 = G__62930;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62877);
if(temp__5753__auto__){
var seq__62877__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62877__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62877__$1);
var G__62931 = cljs.core.chunk_rest(seq__62877__$1);
var G__62932 = c__5568__auto__;
var G__62933 = cljs.core.count(c__5568__auto__);
var G__62934 = (0);
seq__62877 = G__62931;
chunk__62878 = G__62932;
count__62879 = G__62933;
i__62880 = G__62934;
continue;
} else {
var vec__62895 = cljs.core.first(seq__62877__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62895,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62895,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__62935 = cljs.core.next(seq__62877__$1);
var G__62936 = null;
var G__62937 = (0);
var G__62938 = (0);
seq__62877 = G__62935;
chunk__62878 = G__62936;
count__62879 = G__62937;
i__62880 = G__62938;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__62870_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__62870_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__62871_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__62871_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__62872_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__62872_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__62873_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__62873_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__62923){
var map__62924 = p__62923;
var map__62924__$1 = cljs.core.__destructure_map(map__62924);
var svc = map__62924__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62924__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62924__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
