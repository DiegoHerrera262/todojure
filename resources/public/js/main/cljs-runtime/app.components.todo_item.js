goog.provide('app.components.todo_item');
if((typeof app !== 'undefined') && (typeof app.components !== 'undefined') && (typeof app.components.todo_item !== 'undefined') && (typeof app.components.todo_item.TodoItem !== 'undefined')){
} else {
app.components.todo_item.TodoItem = (function app$components$todo_item$TodoItem(js_props__43763__auto__){
var render__43764__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(app.components.todo_item.TodoItem) : com.fulcrologic.fulcro.components.component_options.call(null,app.components.todo_item.TodoItem)));
var vec__68655 = com.fulcrologic.fulcro.components.use_fulcro(js_props__43763__auto__,app.components.todo_item.TodoItem);
var this__43765__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68655,(0),null);
var props__43766__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68655,(1),null);
return (render__43764__auto__.cljs$core$IFn$_invoke$arity$2 ? render__43764__auto__.cljs$core$IFn$_invoke$arity$2(this__43765__auto__,props__43766__auto__) : render__43764__auto__.call(null,this__43765__auto__,props__43766__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(app.components.todo_item.TodoItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("app.components.todo-item","TodoItem","app.components.todo-item/TodoItem",1659619352),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$components$todo_item$render_TodoItem(this$,p__68658){
var map__68659 = p__68658;
var map__68659__$1 = cljs.core.__destructure_map(map__68659);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68659__$1,new cljs.core.Keyword("todo","status","todo/status",-2085495639));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68659__$1,new cljs.core.Keyword("todo","description","todo/description",-1431540266));
var on_change_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68659__$1,new cljs.core.Keyword("todo","on-change-status","todo/on-change-status",-1379077987));
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__68660 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__68661 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__68662 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__68663 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__68664 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__68668 = this$;
var G__68669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__68668,G__68669) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__68668,G__68669));
}
})();
var _STAR_depth_STAR__temp_val__68665 = ((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__68670 = this$;
var G__68671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$depth"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__68670,G__68671) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__68670,G__68671));
}
})() + (1));
var _STAR_shared_STAR__temp_val__68666 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__68672 = this$;
var G__68673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__68672,G__68673) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__68672,G__68673));
}
})());
var _STAR_parent_STAR__temp_val__68667 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__68664);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__68665);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__68666);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__68667);

try{return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["li",({"style": ({"display": "flex", "flex-direction": "row", "gap": "1ch"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_change_status], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"DONE"))?"Done":"Pending")], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)], null),null))]);
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__68663);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__68662);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__68661);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__68660);
}}));
})], null));
app.components.todo_item.ui_todo_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.components.todo_item.TodoItem);
goog.exportSymbol('app.components.todo_item.ui_todo_item', app.components.todo_item.ui_todo_item);

//# sourceMappingURL=app.components.todo_item.js.map
