goog.provide('app.components.todo_item');
if((typeof app !== 'undefined') && (typeof app.components !== 'undefined') && (typeof app.components.todo_item !== 'undefined') && (typeof app.components.todo_item.TodoItem !== 'undefined')){
} else {
app.components.todo_item.TodoItem = (function app$components$todo_item$TodoItem(js_props__43763__auto__){
var render__43764__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(app.components.todo_item.TodoItem) : com.fulcrologic.fulcro.components.component_options.call(null,app.components.todo_item.TodoItem)));
var vec__69022 = com.fulcrologic.fulcro.components.use_fulcro(js_props__43763__auto__,app.components.todo_item.TodoItem);
var this__43765__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69022,(0),null);
var props__43766__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69022,(1),null);
return (render__43764__auto__.cljs$core$IFn$_invoke$arity$2 ? render__43764__auto__.cljs$core$IFn$_invoke$arity$2(this__43765__auto__,props__43766__auto__) : render__43764__auto__.call(null,this__43765__auto__,props__43766__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(app.components.todo_item.TodoItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("app.components.todo-item","TodoItem","app.components.todo-item/TodoItem",1659619352),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$components$todo_item$render_TodoItem(this$,p__69025){
var map__69026 = p__69025;
var map__69026__$1 = cljs.core.__destructure_map(map__69026);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69026__$1,new cljs.core.Keyword("todo","status","todo/status",-2085495639));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69026__$1,new cljs.core.Keyword("todo","description","todo/description",-1431540266));
var on_change_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69026__$1,new cljs.core.Keyword("todo","on-change-status","todo/on-change-status",-1379077987));
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__69027 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__69028 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__69029 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__69030 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__69031 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__69035 = this$;
var G__69036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__69035,G__69036) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__69035,G__69036));
}
})();
var _STAR_depth_STAR__temp_val__69032 = ((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__69037 = this$;
var G__69038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$depth"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__69037,G__69038) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__69037,G__69038));
}
})() + (1));
var _STAR_shared_STAR__temp_val__69033 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__69039 = this$;
var G__69040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__69039,G__69040) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__69039,G__69040));
}
})());
var _STAR_parent_STAR__temp_val__69034 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__69031);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__69032);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__69033);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__69034);

try{return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["li",({"style": ({"display": "flex", "flex-direction": "row", "gap": "1ch"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_change_status], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"DONE"))?"Done":"Pending")], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)], null),null))]);
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__69030);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__69029);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__69028);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__69027);
}}));
})], null));
app.components.todo_item.ui_todo_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.components.todo_item.TodoItem);
goog.exportSymbol('app.components.todo_item.ui_todo_item', app.components.todo_item.ui_todo_item);

//# sourceMappingURL=app.components.todo_item.js.map
