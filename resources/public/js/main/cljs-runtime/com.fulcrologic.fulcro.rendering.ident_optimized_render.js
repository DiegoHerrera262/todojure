goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__5043__auto__ = c;
if(cljs.core.truth_(and__5043__auto__)){
return ident;
} else {
return and__5043__auto__;
}
})())){
var map__64047 = app__$1;
var map__64047__$1 = cljs.core.__destructure_map(map__64047);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64047__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__64050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__64051 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__64050,G__64051) : com.fulcrologic.fulcro.components.computed.call(null,G__64050,G__64051));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,608362140,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__64064 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__64064) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__64064));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,27554015,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__64072 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__64073 = null;
var count__64074 = (0);
var i__64075 = (0);
while(true){
if((i__64075 < count__64074)){
var c = chunk__64073.cljs$core$IIndexed$_nth$arity$2(null,i__64075);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__64344 = seq__64072;
var G__64345 = chunk__64073;
var G__64346 = count__64074;
var G__64347 = (i__64075 + (1));
seq__64072 = G__64344;
chunk__64073 = G__64345;
count__64074 = G__64346;
i__64075 = G__64347;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64072);
if(temp__5753__auto__){
var seq__64072__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64072__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64072__$1);
var G__64352 = cljs.core.chunk_rest(seq__64072__$1);
var G__64353 = c__5568__auto__;
var G__64354 = cljs.core.count(c__5568__auto__);
var G__64355 = (0);
seq__64072 = G__64352;
chunk__64073 = G__64353;
count__64074 = G__64354;
i__64075 = G__64355;
continue;
} else {
var c = cljs.core.first(seq__64072__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__64357 = cljs.core.next(seq__64072__$1);
var G__64358 = null;
var G__64359 = (0);
var G__64360 = (0);
seq__64072 = G__64357;
chunk__64073 = G__64358;
count__64074 = G__64359;
i__64075 = G__64360;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__64098 = app__$1;
var map__64098__$1 = cljs.core.__destructure_map(map__64098);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64098__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__64099 = cljs.core.deref(runtime_atom);
var map__64099__$1 = cljs.core.__destructure_map(map__64099);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64099__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__64100 = indexes;
var map__64100__$1 = cljs.core.__destructure_map(map__64100);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64100__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64100__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64100__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__64103 = cljs.core.seq(classes);
var chunk__64105 = null;
var count__64106 = (0);
var i__64107 = (0);
while(true){
if((i__64107 < count__64106)){
var class$ = chunk__64105.cljs$core$IIndexed$_nth$arity$2(null,i__64107);
var seq__64148_64363 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__64150_64364 = null;
var count__64151_64365 = (0);
var i__64152_64366 = (0);
while(true){
if((i__64152_64366 < count__64151_64365)){
var component_64367 = chunk__64150_64364.cljs$core$IIndexed$_nth$arity$2(null,i__64152_64366);
var component_ident_64368 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_64367) : com.fulcrologic.fulcro.components.get_ident.call(null,component_64367));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_64368,component_64367);


var G__64370 = seq__64148_64363;
var G__64371 = chunk__64150_64364;
var G__64372 = count__64151_64365;
var G__64373 = (i__64152_64366 + (1));
seq__64148_64363 = G__64370;
chunk__64150_64364 = G__64371;
count__64151_64365 = G__64372;
i__64152_64366 = G__64373;
continue;
} else {
var temp__5753__auto___64374 = cljs.core.seq(seq__64148_64363);
if(temp__5753__auto___64374){
var seq__64148_64375__$1 = temp__5753__auto___64374;
if(cljs.core.chunked_seq_QMARK_(seq__64148_64375__$1)){
var c__5568__auto___64376 = cljs.core.chunk_first(seq__64148_64375__$1);
var G__64377 = cljs.core.chunk_rest(seq__64148_64375__$1);
var G__64378 = c__5568__auto___64376;
var G__64379 = cljs.core.count(c__5568__auto___64376);
var G__64380 = (0);
seq__64148_64363 = G__64377;
chunk__64150_64364 = G__64378;
count__64151_64365 = G__64379;
i__64152_64366 = G__64380;
continue;
} else {
var component_64381 = cljs.core.first(seq__64148_64375__$1);
var component_ident_64383 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_64381) : com.fulcrologic.fulcro.components.get_ident.call(null,component_64381));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_64383,component_64381);


var G__64384 = cljs.core.next(seq__64148_64375__$1);
var G__64385 = null;
var G__64386 = (0);
var G__64387 = (0);
seq__64148_64363 = G__64384;
chunk__64150_64364 = G__64385;
count__64151_64365 = G__64386;
i__64152_64366 = G__64387;
continue;
}
} else {
}
}
break;
}


var G__64388 = seq__64103;
var G__64389 = chunk__64105;
var G__64390 = count__64106;
var G__64391 = (i__64107 + (1));
seq__64103 = G__64388;
chunk__64105 = G__64389;
count__64106 = G__64390;
i__64107 = G__64391;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64103);
if(temp__5753__auto__){
var seq__64103__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64103__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64103__$1);
var G__64392 = cljs.core.chunk_rest(seq__64103__$1);
var G__64393 = c__5568__auto__;
var G__64394 = cljs.core.count(c__5568__auto__);
var G__64395 = (0);
seq__64103 = G__64392;
chunk__64105 = G__64393;
count__64106 = G__64394;
i__64107 = G__64395;
continue;
} else {
var class$ = cljs.core.first(seq__64103__$1);
var seq__64171_64396 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__64173_64397 = null;
var count__64174_64398 = (0);
var i__64175_64399 = (0);
while(true){
if((i__64175_64399 < count__64174_64398)){
var component_64401 = chunk__64173_64397.cljs$core$IIndexed$_nth$arity$2(null,i__64175_64399);
var component_ident_64403 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_64401) : com.fulcrologic.fulcro.components.get_ident.call(null,component_64401));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_64403,component_64401);


var G__64404 = seq__64171_64396;
var G__64405 = chunk__64173_64397;
var G__64406 = count__64174_64398;
var G__64407 = (i__64175_64399 + (1));
seq__64171_64396 = G__64404;
chunk__64173_64397 = G__64405;
count__64174_64398 = G__64406;
i__64175_64399 = G__64407;
continue;
} else {
var temp__5753__auto___64409__$1 = cljs.core.seq(seq__64171_64396);
if(temp__5753__auto___64409__$1){
var seq__64171_64410__$1 = temp__5753__auto___64409__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64171_64410__$1)){
var c__5568__auto___64411 = cljs.core.chunk_first(seq__64171_64410__$1);
var G__64412 = cljs.core.chunk_rest(seq__64171_64410__$1);
var G__64413 = c__5568__auto___64411;
var G__64414 = cljs.core.count(c__5568__auto___64411);
var G__64415 = (0);
seq__64171_64396 = G__64412;
chunk__64173_64397 = G__64413;
count__64174_64398 = G__64414;
i__64175_64399 = G__64415;
continue;
} else {
var component_64417 = cljs.core.first(seq__64171_64410__$1);
var component_ident_64418 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_64417) : com.fulcrologic.fulcro.components.get_ident.call(null,component_64417));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_64418,component_64417);


var G__64419 = cljs.core.next(seq__64171_64410__$1);
var G__64420 = null;
var G__64421 = (0);
var G__64422 = (0);
seq__64171_64396 = G__64419;
chunk__64173_64397 = G__64420;
count__64174_64398 = G__64421;
i__64175_64399 = G__64422;
continue;
}
} else {
}
}
break;
}


var G__64423 = cljs.core.next(seq__64103__$1);
var G__64424 = null;
var G__64425 = (0);
var G__64426 = (0);
seq__64103 = G__64423;
chunk__64105 = G__64424;
count__64106 = G__64425;
i__64107 = G__64426;
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
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__64237 = app__$1;
var map__64237__$1 = cljs.core.__destructure_map(map__64237);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64237__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__64238 = cljs.core.deref(runtime_atom);
var map__64238__$1 = cljs.core.__destructure_map(map__64238);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64238__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__64239 = indexes;
var map__64239__$1 = cljs.core.__destructure_map(map__64239);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64239__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64239__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__64230_SHARP_,p2__64232_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__64230_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__64232_SHARP_) : class__GT_components.call(null,p2__64232_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__64263 = app__$1;
var map__64263__$1 = cljs.core.__destructure_map(map__64263);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64263__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64263__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__64264 = cljs.core.deref(runtime_atom);
var map__64264__$1 = cljs.core.__destructure_map(map__64264);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64264__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64264__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64264__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64264__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__64265 = indexes;
var map__64265__$1 = cljs.core.__destructure_map(map__64265);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64265__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64265__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64265__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64265__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__64267 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__64267__$1 = cljs.core.__destructure_map(map__64267);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64267__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64267__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__64268_64432 = cljs.core.seq(limited_to_render);
var chunk__64270_64433 = null;
var count__64271_64434 = (0);
var i__64272_64435 = (0);
while(true){
if((i__64272_64435 < count__64271_64434)){
var c_64436 = chunk__64270_64433.cljs$core$IIndexed$_nth$arity$2(null,i__64272_64435);
var ident_64437 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_64436) : com.fulcrologic.fulcro.components.get_ident.call(null,c_64436));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_64437,c_64436);


var G__64438 = seq__64268_64432;
var G__64439 = chunk__64270_64433;
var G__64440 = count__64271_64434;
var G__64441 = (i__64272_64435 + (1));
seq__64268_64432 = G__64438;
chunk__64270_64433 = G__64439;
count__64271_64434 = G__64440;
i__64272_64435 = G__64441;
continue;
} else {
var temp__5753__auto___64443 = cljs.core.seq(seq__64268_64432);
if(temp__5753__auto___64443){
var seq__64268_64445__$1 = temp__5753__auto___64443;
if(cljs.core.chunked_seq_QMARK_(seq__64268_64445__$1)){
var c__5568__auto___64447 = cljs.core.chunk_first(seq__64268_64445__$1);
var G__64448 = cljs.core.chunk_rest(seq__64268_64445__$1);
var G__64449 = c__5568__auto___64447;
var G__64450 = cljs.core.count(c__5568__auto___64447);
var G__64451 = (0);
seq__64268_64432 = G__64448;
chunk__64270_64433 = G__64449;
count__64271_64434 = G__64450;
i__64272_64435 = G__64451;
continue;
} else {
var c_64453 = cljs.core.first(seq__64268_64445__$1);
var ident_64454 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_64453) : com.fulcrologic.fulcro.components.get_ident.call(null,c_64453));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_64454,c_64453);


var G__64455 = cljs.core.next(seq__64268_64445__$1);
var G__64456 = null;
var G__64457 = (0);
var G__64458 = (0);
seq__64268_64432 = G__64455;
chunk__64270_64433 = G__64456;
count__64271_64434 = G__64457;
i__64272_64435 = G__64458;
continue;
}
} else {
}
}
break;
}

var seq__64287 = cljs.core.seq(limited_idents);
var chunk__64288 = null;
var count__64289 = (0);
var i__64290 = (0);
while(true){
if((i__64290 < count__64289)){
var i = chunk__64288.cljs$core$IIndexed$_nth$arity$2(null,i__64290);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__64461 = seq__64287;
var G__64462 = chunk__64288;
var G__64463 = count__64289;
var G__64464 = (i__64290 + (1));
seq__64287 = G__64461;
chunk__64288 = G__64462;
count__64289 = G__64463;
i__64290 = G__64464;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64287);
if(temp__5753__auto__){
var seq__64287__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64287__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64287__$1);
var G__64466 = cljs.core.chunk_rest(seq__64287__$1);
var G__64467 = c__5568__auto__;
var G__64468 = cljs.core.count(c__5568__auto__);
var G__64469 = (0);
seq__64287 = G__64466;
chunk__64288 = G__64467;
count__64289 = G__64468;
i__64290 = G__64469;
continue;
} else {
var i = cljs.core.first(seq__64287__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__64470 = cljs.core.next(seq__64287__$1);
var G__64471 = null;
var G__64472 = (0);
var G__64473 = (0);
seq__64287 = G__64470;
chunk__64288 = G__64471;
count__64289 = G__64472;
i__64290 = G__64473;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__64300 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__64300__$1 = cljs.core.__destructure_map(map__64300);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64300__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64300__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__64309_64474 = cljs.core.seq(all_idents);
var chunk__64310_64475 = null;
var count__64311_64476 = (0);
var i__64312_64477 = (0);
while(true){
if((i__64312_64477 < count__64311_64476)){
var i_64478 = chunk__64310_64475.cljs$core$IIndexed$_nth$arity$2(null,i__64312_64477);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_64478);


var G__64479 = seq__64309_64474;
var G__64480 = chunk__64310_64475;
var G__64481 = count__64311_64476;
var G__64482 = (i__64312_64477 + (1));
seq__64309_64474 = G__64479;
chunk__64310_64475 = G__64480;
count__64311_64476 = G__64481;
i__64312_64477 = G__64482;
continue;
} else {
var temp__5753__auto___64483 = cljs.core.seq(seq__64309_64474);
if(temp__5753__auto___64483){
var seq__64309_64485__$1 = temp__5753__auto___64483;
if(cljs.core.chunked_seq_QMARK_(seq__64309_64485__$1)){
var c__5568__auto___64486 = cljs.core.chunk_first(seq__64309_64485__$1);
var G__64487 = cljs.core.chunk_rest(seq__64309_64485__$1);
var G__64488 = c__5568__auto___64486;
var G__64489 = cljs.core.count(c__5568__auto___64486);
var G__64490 = (0);
seq__64309_64474 = G__64487;
chunk__64310_64475 = G__64488;
count__64311_64476 = G__64489;
i__64312_64477 = G__64490;
continue;
} else {
var i_64492 = cljs.core.first(seq__64309_64485__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_64492);


var G__64493 = cljs.core.next(seq__64309_64485__$1);
var G__64494 = null;
var G__64495 = (0);
var G__64496 = (0);
seq__64309_64474 = G__64493;
chunk__64310_64475 = G__64494;
count__64311_64476 = G__64495;
i__64312_64477 = G__64496;
continue;
}
} else {
}
}
break;
}

var seq__64313 = cljs.core.seq(extra_to_force);
var chunk__64314 = null;
var count__64315 = (0);
var i__64316 = (0);
while(true){
if((i__64316 < count__64315)){
var c = chunk__64314.cljs$core$IIndexed$_nth$arity$2(null,i__64316);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__64497 = seq__64313;
var G__64498 = chunk__64314;
var G__64499 = count__64315;
var G__64500 = (i__64316 + (1));
seq__64313 = G__64497;
chunk__64314 = G__64498;
count__64315 = G__64499;
i__64316 = G__64500;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64313);
if(temp__5753__auto__){
var seq__64313__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64313__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64313__$1);
var G__64501 = cljs.core.chunk_rest(seq__64313__$1);
var G__64502 = c__5568__auto__;
var G__64503 = cljs.core.count(c__5568__auto__);
var G__64504 = (0);
seq__64313 = G__64501;
chunk__64314 = G__64502;
count__64315 = G__64503;
i__64316 = G__64504;
continue;
} else {
var c = cljs.core.first(seq__64313__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__64505 = cljs.core.next(seq__64313__$1);
var G__64506 = null;
var G__64507 = (0);
var G__64508 = (0);
seq__64313 = G__64505;
chunk__64314 = G__64506;
count__64315 = G__64507;
i__64316 = G__64508;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__64323 = arguments.length;
switch (G__64323) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__64326){
var map__64327 = p__64326;
var map__64327__$1 = cljs.core.__destructure_map(map__64327);
var options = map__64327__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64327__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64327__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e64328){var e = e64328;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-382862421,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
