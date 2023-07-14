goog.provide('app.components.todo_list');
if((typeof app !== 'undefined') && (typeof app.components !== 'undefined') && (typeof app.components.todo_list !== 'undefined') && (typeof app.components.todo_list.TodoList !== 'undefined')){
} else {
app.components.todo_list.TodoList = (function app$components$todo_list$TodoList(js_props__43763__auto__){
var render__43764__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(app.components.todo_list.TodoList) : com.fulcrologic.fulcro.components.component_options.call(null,app.components.todo_list.TodoList)));
var vec__68674 = com.fulcrologic.fulcro.components.use_fulcro(js_props__43763__auto__,app.components.todo_list.TodoList);
var this__43765__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68674,(0),null);
var props__43766__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68674,(1),null);
return (render__43764__auto__.cljs$core$IFn$_invoke$arity$2 ? render__43764__auto__.cljs$core$IFn$_invoke$arity$2(this__43765__auto__,props__43766__auto__) : render__43764__auto__.call(null,this__43765__auto__,props__43766__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(app.components.todo_list.TodoList,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("app.components.todo-list","TodoList","app.components.todo-list/TodoList",-726383952),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$components$todo_list$render_TodoList(this$,p__68677){
var map__68678 = p__68677;
var map__68678__$1 = cljs.core.__destructure_map(map__68678);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68678__$1,new cljs.core.Keyword("todo-list","items","todo-list/items",35585877));
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__68679 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__68680 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__68681 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__68682 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__68683 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__68687 = this$;
var G__68688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__68687,G__68688) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__68687,G__68688));
}
})();
var _STAR_depth_STAR__temp_val__68684 = ((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__68689 = this$;
var G__68690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$depth"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__68689,G__68690) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__68689,G__68690));
}
})() + (1));
var _STAR_shared_STAR__temp_val__68685 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__68691 = this$;
var G__68692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__68691,G__68692) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__68691,G__68692));
}
})());
var _STAR_parent_STAR__temp_val__68686 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__68683);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__68684);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__68685);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__68686);

try{return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["ul",({"style": ({"display": "flex", "flex-direction": "column", "gap": "0.5em"})}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.components.todo_item.ui_todo_item,items))]);
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__68682);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__68681);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__68680);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__68679);
}}));
})], null));
app.components.todo_list.ui_todo_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.components.todo_list.TodoList);
goog.exportSymbol('app.components.todo_list.ui_todo_list', app.components.todo_list.ui_todo_list);

//# sourceMappingURL=app.components.todo_list.js.map
