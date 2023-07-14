goog.provide('app.client');
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined')){
} else {
app.client.app = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Root !== 'undefined')){
} else {
app.client.Root = (function app$client$Root(js_props__43763__auto__){
var render__43764__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(app.client.Root) : com.fulcrologic.fulcro.components.component_options.call(null,app.client.Root)));
var vec__69004 = com.fulcrologic.fulcro.components.use_fulcro(js_props__43763__auto__,app.client.Root);
var this__43765__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69004,(0),null);
var props__43766__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69004,(1),null);
return (render__43764__auto__.cljs$core$IFn$_invoke$arity$2 ? render__43764__auto__.cljs$core$IFn$_invoke$arity$2(this__43765__auto__,props__43766__auto__) : render__43764__auto__.call(null,this__43765__auto__,props__43766__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(app.client.Root,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("app.client","Root","app.client/Root",1677331554),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Root(this$,props){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__69007 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__69008 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__69009 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__69010 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__69011 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__69015 = this$;
var G__69016 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__69015,G__69016) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__69015,G__69016));
}
})();
var _STAR_depth_STAR__temp_val__69012 = ((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__69017 = this$;
var G__69018 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$depth"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__69017,G__69018) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__69017,G__69018));
}
})() + (1));
var _STAR_shared_STAR__temp_val__69013 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__69019 = this$;
var G__69020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__69019,G__69020) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__69019,G__69020));
}
})());
var _STAR_parent_STAR__temp_val__69014 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__69011);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__69012);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__69013);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__69014);

try{return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({}),"Todojure"]),(function (){var G__69021 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo-list","items","todo-list/items",35585877),test.mockups.todo_list.test_todo_list], null);
return (app.components.todo_list.ui_todo_list.cljs$core$IFn$_invoke$arity$1 ? app.components.todo_list.ui_todo_list.cljs$core$IFn$_invoke$arity$1(G__69021) : app.components.todo_list.ui_todo_list.call(null,G__69021));
})()], 0));
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__69010);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__69009);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__69008);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__69007);
}}));
})], null));
/**
 * Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build.
 */
app.client.init = (function app$client$init(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app,app.client.Root,"app");

return console.log("Loaded");
});
goog.exportSymbol('app.client.init', app.client.init);
/**
 * During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn
 */
app.client.refresh = (function app$client$refresh(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app,app.client.Root,"app");

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1(app.client.app);

return console.log("Hot reload");
});
goog.exportSymbol('app.client.refresh', app.client.refresh);

//# sourceMappingURL=app.client.js.map
