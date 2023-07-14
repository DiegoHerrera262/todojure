goog.provide('com.fulcrologic.fulcro.components');
goog.scope(function(){
  com.fulcrologic.fulcro.components.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
com.fulcrologic.fulcro.components._STAR_app_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_parent_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_depth_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_shared_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = false;
/**
 * 
 *   [obj kvs]
 *   [obj kvs default]
 * 
 *   Like get-in, but for js objects, and in CLJC. In clj, it is just get-in. In cljs it is
 *   gobj/getValueByKeys.
 */
com.fulcrologic.fulcro.components.isoget_in = com.fulcrologic.fulcro.raw.components.isoget_in;
/**
 * 
 *   [obj k]
 *   [obj k default]
 * 
 *   Like get, but for js objects, and in CLJC. In clj, it is just `get`. In cljs it is
 *   `gobj/get`.
 */
com.fulcrologic.fulcro.components.isoget = com.fulcrologic.fulcro.raw.components.isoget;
/**
 * 
 *   [k component-class]
 * 
 *   Add a component to Fulcro's component registry.  This is used by defsc to ensure that all Fulcro classes
 *   that have been compiled (transitively required) will be accessible for lookup by fully-qualified symbol/keyword.
 *   Not meant for public use, unless you're creating your own component macro that doesn't directly leverage defsc.
 */
com.fulcrologic.fulcro.components.register_component_BANG_ = com.fulcrologic.fulcro.raw.components.register_component_BANG_;
/**
 * Utility function that will force a lazy sequence of children (recursively) into realized
 *   vectors (React cannot deal with lazy seqs in production mode)
 */
com.fulcrologic.fulcro.components.force_children = (function com$fulcrologic$fulcro$components$force_children(x){
var G__61352 = x;
if(cljs.core.seq_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.force_children),G__61352);
} else {
return G__61352;
}
});
/**
 * 
 *   [props-a props-b]
 * 
 *   Returns whichever of the given Fulcro props were most recently generated according to `denormalization-time`. This
 *   is part of props 'tunnelling', an optimization to get updated props to instances without going through the root.
 */
com.fulcrologic.fulcro.components.newer_props = com.fulcrologic.fulcro.raw.components.newer_props;
/**
 * [x]
 * 
 * Returns true if the argument is a component. A component is defined as a *mounted component*.
 * This function returns false for component classes, and also returns false for the output of a Fulcro component factory.
 */
com.fulcrologic.fulcro.components.component_instance_QMARK_ = (function com$fulcrologic$fulcro$components$component_instance_QMARK_(x){
return com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(x);
});
/**
 * [x]
 * 
 * Returns true if the argument is a component instance.
 * 
 * DEPRECATED for terminology clarity. Use `component-instance?` instead.
 */
com.fulcrologic.fulcro.components.component_QMARK_ = com.fulcrologic.fulcro.components.component_instance_QMARK_;
/**
 * Returns true if the argument is a component class.
 */
com.fulcrologic.fulcro.components.component_class_QMARK_ = (function com$fulcrologic$fulcro$components$component_class_QMARK_(x){
return com.fulcrologic.fulcro.raw.components.component_class_QMARK_(x);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),com.fulcrologic.fulcro.components.component_class_QMARK_);
/**
 * [class]
 * 
 * Returns a string version of the given react component's name. Works on component instances and classes.
 */
com.fulcrologic.fulcro.components.component_name = com.fulcrologic.fulcro.raw.components.component_name;
/**
 * [class]
 * 
 * Returns the registry key for the given component class.
 */
com.fulcrologic.fulcro.components.class__GT_registry_key = com.fulcrologic.fulcro.raw.components.class__GT_registry_key;
/**
 * [classname]
 * 
 *   Look up the given component in Fulcro's global component registry. Will only be able to find components that have
 *   been (transitively) required by your application.
 * 
 *   `classname` can be a fully-qualified keyword or symbol.
 */
com.fulcrologic.fulcro.components.registry_key__GT_class = com.fulcrologic.fulcro.raw.components.registry_key__GT_class;
/**
 * 
 *   [props computed-map]
 * 
 *   Add computed properties to props. This will *replace* any pre-existing computed properties. Computed props are
 *   necessary when a parent component wishes to pass callbacks or other data to children that *have a query*. This
 *   is not necessary for "stateless" components, though it will work properly for both.
 * 
 *   Computed props are "remembered" so that a targeted update (which can only happen on a component with a query
 *   and ident) can use new props from the database without "losing" the computed props that were originally passed
 *   from the parent. If you pass things like callbacks through normal props, then targeted updates will seem to "lose
 *   track of" them.
 *   
 */
com.fulcrologic.fulcro.components.computed = com.fulcrologic.fulcro.raw.components.computed;
/**
 * [this-or-props]
 * [this-or-props k-or-ks]
 * 
 * Return the computed properties on a component or its props. Note that it requires that the normal properties are not nil.
 */
com.fulcrologic.fulcro.components.get_computed = com.fulcrologic.fulcro.raw.components.get_computed;
/**
 * Get any data (as a map) that props extensions have associated with the given Fulcro component. Extra props will
 *   be empty unless you've installed props-middleware (on your app) that sets them.
 */
com.fulcrologic.fulcro.components.get_extra_props = (function com$fulcrologic$fulcro$components$get_extra_props(this$){
var G__61405 = this$;
var G__61406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$extra_props","fulcro$extra_props",-499585470)], null);
var G__61407 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$3(G__61405,G__61406,G__61407) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__61405,G__61406,G__61407));
});
/**
 * [this]
 * 
 * Return a component's props.
 */
com.fulcrologic.fulcro.components.props = com.fulcrologic.fulcro.raw.components.props;
/**
 * [this]
 * 
 * Get the sequence of react children of the given component.
 */
com.fulcrologic.fulcro.components.children = (function com$fulcrologic$fulcro$components$children(component){
var cs = com.fulcrologic.fulcro.components.goog$module$goog$object.getValueByKeys(component,"props","children");
if(((cljs.core.coll_QMARK_(cs)) || (cljs.core.array_QMARK_(cs)))){
return cs;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs], null);
}
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
com.fulcrologic.fulcro.components.react_type = (function com$fulcrologic$fulcro$components$react_type(x){
return com.fulcrologic.fulcro.raw.components.component_type(x);
});
/**
 * [instance]
 * 
 * Returns the react type (component class) of the given React element (instance). Is identity if used on a class.
 */
com.fulcrologic.fulcro.components.get_class = com.fulcrologic.fulcro.raw.components.get_class;
/**
 * [component & ks]
 * 
 * Returns the map of options that was specified (via `defsc`) for the component class.
 */
com.fulcrologic.fulcro.components.component_options = com.fulcrologic.fulcro.raw.components.component_options;
/**
 * Returns true if the component has `option-key` declared in the component options map.
 */
com.fulcrologic.fulcro.components.has_feature_QMARK_ = (function com$fulcrologic$fulcro$components$has_feature_QMARK_(component,option_key){
return cljs.core.contains_QMARK_((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_options.call(null,component)),option_key);
});
/**
 * Returns true if the component has initial app state.
 */
com.fulcrologic.fulcro.components.has_initial_app_state_QMARK_ = (function com$fulcrologic$fulcro$components$has_initial_app_state_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
});
/**
 * Returns true if the component has an ident
 */
com.fulcrologic.fulcro.components.has_ident_QMARK_ = (function com$fulcrologic$fulcro$components$has_ident_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"ident","ident",-742346));
});
/**
 * Returns true if the component has a query
 */
com.fulcrologic.fulcro.components.has_query_QMARK_ = (function com$fulcrologic$fulcro$components$has_query_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"query","query",-1288509510));
});
/**
 * Returns true if the component has a pre-merge
 */
com.fulcrologic.fulcro.components.has_pre_merge_QMARK_ = (function com$fulcrologic$fulcro$components$has_pre_merge_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148));
});
/**
 * Returns the ident that would be generated by the given component instance or class IF it was supplied props
 */
com.fulcrologic.fulcro.components.ident = (function com$fulcrologic$fulcro$components$ident(this$,props){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"ident","ident",-742346))){
var fexpr__61456 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"ident","ident",-742346)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword(null,"ident","ident",-742346)));
return (fexpr__61456.cljs$core$IFn$_invoke$arity$2 ? fexpr__61456.cljs$core$IFn$_invoke$arity$2(this$,props) : fexpr__61456.call(null,this$,props));
} else {
return null;
}
});
/**
 * Returns the STATIC query of the fgiven component
 */
com.fulcrologic.fulcro.components.query = (function com$fulcrologic$fulcro$components$query(this$){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"query","query",-1288509510))){
var fexpr__61460 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"query","query",-1288509510)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword(null,"query","query",-1288509510)));
return (fexpr__61460.cljs$core$IFn$_invoke$arity$1 ? fexpr__61460.cljs$core$IFn$_invoke$arity$1(this$) : fexpr__61460.call(null,this$));
} else {
return null;
}
});
/**
 * Returns the initial state of component clz if it was passed the given params
 */
com.fulcrologic.fulcro.components.initial_state = (function com$fulcrologic$fulcro$components$initial_state(clz,params){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(clz,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806))){
var fexpr__61463 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(clz,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806)) : com.fulcrologic.fulcro.components.component_options.call(null,clz,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806)));
return (fexpr__61463.cljs$core$IFn$_invoke$arity$1 ? fexpr__61463.cljs$core$IFn$_invoke$arity$1(params) : fexpr__61463.call(null,params));
} else {
return null;
}
});
com.fulcrologic.fulcro.components.pre_merge = (function com$fulcrologic$fulcro$components$pre_merge(this$,data){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148))){
var fexpr__61472 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148)));
return (fexpr__61472.cljs$core$IFn$_invoke$arity$1 ? fexpr__61472.cljs$core$IFn$_invoke$arity$1(data) : fexpr__61472.call(null,data));
} else {
return null;
}
});
com.fulcrologic.fulcro.components.depth = (function com$fulcrologic$fulcro$components$depth(this$){
var G__61475 = this$;
var G__61476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$depth","fulcro$depth",1963025807)], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__61475,G__61476) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__61475,G__61476));
});
/**
 * GET a RAW react prop. Used internally. Safe in CLJC, but equivalent to `(gobj/getValueByKeys this "props" (name k)`.
 */
com.fulcrologic.fulcro.components.get_raw_react_prop = (function com$fulcrologic$fulcro$components$get_raw_react_prop(c,k){
var G__61478 = c;
var G__61479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),k], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__61478,G__61479) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__61478,G__61479));
});
/**
 * Attempt to coerce `x` to an app.  Legal inputs are a fulcro application, a mounted component,
 *   or an atom holding any of the above.
 */
com.fulcrologic.fulcro.components.any__GT_app = (function com$fulcrologic$fulcro$components$any__GT_app(x){
return com.fulcrologic.fulcro.raw.components.any__GT_app(x);
});
/**
 * Using raw react props/state returns the newest Fulcro props. This is part of "props tunneling", where component
 *   local state is leveraged as a communication mechanism of updated props directly to a component that has an ident.
 *   This function will return the correct version of props based on timestamps.
 */
com.fulcrologic.fulcro.components.raw__GT_newest_props = (function com$fulcrologic$fulcro$components$raw__GT_newest_props(raw_props,raw_state){
var next_props = com.fulcrologic.fulcro.components.goog$module$goog$object.get(raw_props,"fulcro$value");
var opt_props = com.fulcrologic.fulcro.components.goog$module$goog$object.get(raw_state,"fulcro$value");
return (com.fulcrologic.fulcro.components.newer_props.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.newer_props.cljs$core$IFn$_invoke$arity$2(next_props,opt_props) : com.fulcrologic.fulcro.components.newer_props.call(null,next_props,opt_props));
});
/**
 * Return the global shared properties of the root. See :shared and
 * :shared-fn app options. NOTE: Shared props only update on root render and by explicit calls to
 * `app/update-shared!`.
 * 
 * This function attempts to rely on the dynamic var *shared* (first), but will make a best-effort of
 * finding shared props when run within a component's render or lifecycle. Passing your app will
 * ensure this returns the current shared props.
 */
com.fulcrologic.fulcro.components.shared = (function com$fulcrologic$fulcro$components$shared(var_args){
var G__61489 = arguments.length;
switch (G__61489) {
case 0:
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.components._STAR_shared_STAR_;
}));

(com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1 = (function (comp_or_app){
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2(comp_or_app,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2 = (function (comp_or_app,k_or_ks){
var shared = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__61496 = com.fulcrologic.fulcro.components.any__GT_app(comp_or_app);
var G__61496__$1 = (((G__61496 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__61496));
var G__61496__$2 = (((G__61496__$1 == null))?null:cljs.core.deref(G__61496__$1));
if((G__61496__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157).cljs$core$IFn$_invoke$arity$1(G__61496__$2);
}
}
})();
var ks = (function (){var G__61504 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__61504],null));
} else {
return G__61504;
}
})();
var G__61505 = shared;
if((!(cljs.core.empty_QMARK_(ks)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__61505,ks);
} else {
return G__61505;
}
}));

(com.fulcrologic.fulcro.components.shared.cljs$lang$maxFixedArity = 2);

var static_wrap_props_state_handler = (function com$fulcrologic$fulcro$components$static_wrap_props_state_handler(handler){
return (function (raw_props,raw_state){
var props = com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_props,raw_state);
var state = com.fulcrologic.fulcro.components.goog$module$goog$object.get(raw_state,"fulcro$state");
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(props,state) : handler.call(null,props,state));
});
});
var wrap_props_state_handler = (function() {
var com$fulcrologic$fulcro$components$wrap_props_state_handler = null;
var com$fulcrologic$fulcro$components$wrap_props_state_handler__1 = (function (handler){
return com$fulcrologic$fulcro$components$wrap_props_state_handler.cljs$core$IFn$_invoke$arity$2(handler,true);
});
var com$fulcrologic$fulcro$components$wrap_props_state_handler__2 = (function (handler,check_for_fresh_props_in_state_QMARK_){
return (function (raw_props,raw_state){
var this$ = this;
var props = (cljs.core.truth_(check_for_fresh_props_in_state_QMARK_)?com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_props,raw_state):com.fulcrologic.fulcro.components.goog$module$goog$object.get(raw_props,"fulcro$props"));
var state = com.fulcrologic.fulcro.components.goog$module$goog$object.get(raw_state,"fulcro$state");
return (handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(this$,props,state) : handler.call(null,this$,props,state));
});
});
com$fulcrologic$fulcro$components$wrap_props_state_handler = function(handler,check_for_fresh_props_in_state_QMARK_){
switch(arguments.length){
case 1:
return com$fulcrologic$fulcro$components$wrap_props_state_handler__1.call(this,handler);
case 2:
return com$fulcrologic$fulcro$components$wrap_props_state_handler__2.call(this,handler,check_for_fresh_props_in_state_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$components$wrap_props_state_handler.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$components$wrap_props_state_handler__1;
com$fulcrologic$fulcro$components$wrap_props_state_handler.cljs$core$IFn$_invoke$arity$2 = com$fulcrologic$fulcro$components$wrap_props_state_handler__2;
return com$fulcrologic$fulcro$components$wrap_props_state_handler;
})()
;
var component_did_mount = (function com$fulcrologic$fulcro$components$component_did_mount(){
var this$ = this;
com.fulcrologic.fulcro.components.goog$module$goog$object.set(this$,"fulcro$mounted",true);

var map__61550 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.component_options.call(null,this$));
var map__61550__$1 = cljs.core.__destructure_map(map__61550);
var componentDidMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61550__$1,new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936));
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var index_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-component!","index-component!",-1202750708));
(index_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_component_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : index_component_BANG_.call(null,this$));

if(cljs.core.truth_(componentDidMount)){
return (componentDidMount.cljs$core$IFn$_invoke$arity$1 ? componentDidMount.cljs$core$IFn$_invoke$arity$1(this$) : componentDidMount.call(null,this$));
} else {
return null;
}
});
var component_did_update = (function com$fulcrologic$fulcro$components$component_did_update(raw_prev_props,raw_prev_state,snapshot){
var this$ = this;
var map__61551 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.component_options.call(null,this$));
var map__61551__$1 = cljs.core.__destructure_map(map__61551);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61551__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var componentDidUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61551__$1,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981));
var prev_state = com.fulcrologic.fulcro.components.goog$module$goog$object.get(raw_prev_state,"fulcro$state");
var prev_props = com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_prev_props,raw_prev_state);
if(cljs.core.truth_(componentDidUpdate)){
(componentDidUpdate.cljs$core$IFn$_invoke$arity$4 ? componentDidUpdate.cljs$core$IFn$_invoke$arity$4(this$,prev_props,prev_state,snapshot) : componentDidUpdate.call(null,this$,prev_props,prev_state,snapshot));
} else {
}

if(cljs.core.truth_(ident)){
var old_ident = (ident.cljs$core$IFn$_invoke$arity$2 ? ident.cljs$core$IFn$_invoke$arity$2(this$,prev_props) : ident.call(null,this$,prev_props));
var next_ident = (function (){var G__61552 = this$;
var G__61553 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (ident.cljs$core$IFn$_invoke$arity$2 ? ident.cljs$core$IFn$_invoke$arity$2(G__61552,G__61553) : ident.call(null,G__61552,G__61553));
})();
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var drop_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"drop-component!","drop-component!",183893156));
var index_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-component!","index-component!",-1202750708));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_ident,next_ident)){
(drop_component_BANG_.cljs$core$IFn$_invoke$arity$2 ? drop_component_BANG_.cljs$core$IFn$_invoke$arity$2(this$,old_ident) : drop_component_BANG_.call(null,this$,old_ident));

return (index_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_component_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : index_component_BANG_.call(null,this$));
} else {
return null;
}
} else {
return null;
}
});
var should_component_update_QMARK_ = (function com$fulcrologic$fulcro$components$should_component_update_QMARK_(raw_next_props,raw_next_state){
if(cljs.core.truth_(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_)){
return true;
} else {
var this$ = this;
var current_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var next_props = com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_next_props,raw_next_state);
var next_state = com.fulcrologic.fulcro.components.goog$module$goog$object.get(raw_next_state,"fulcro$state");
var current_state = com.fulcrologic.fulcro.components.goog$module$goog$object.getValueByKeys(this$,"state","fulcro$state");
var props_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props,next_props);
var state_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_state,next_state);
var next_children = com.fulcrologic.fulcro.components.goog$module$goog$object.get(raw_next_props,"children");
var children_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.goog$module$goog$object.getValueByKeys(this$,"props","children"),next_children);
return ((props_changed_QMARK_) || (((state_changed_QMARK_) || (children_changed_QMARK_))));
}
});
var wrap_props_handler = (function() {
var com$fulcrologic$fulcro$components$wrap_props_handler = null;
var com$fulcrologic$fulcro$components$wrap_props_handler__1 = (function (handler){
return com$fulcrologic$fulcro$components$wrap_props_handler.cljs$core$IFn$_invoke$arity$2(handler,true);
});
var com$fulcrologic$fulcro$components$wrap_props_handler__2 = (function (handler,check_for_fresh_props_in_state_QMARK_){
return (function (raw_props){
var this$ = this;
var raw_state = this$.state;
var props = (cljs.core.truth_(check_for_fresh_props_in_state_QMARK_)?com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_props,raw_state):com.fulcrologic.fulcro.components.goog$module$goog$object.get(raw_props,"fulcro$props"));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(this$,props) : handler.call(null,this$,props));
});
});
com$fulcrologic$fulcro$components$wrap_props_handler = function(handler,check_for_fresh_props_in_state_QMARK_){
switch(arguments.length){
case 1:
return com$fulcrologic$fulcro$components$wrap_props_handler__1.call(this,handler);
case 2:
return com$fulcrologic$fulcro$components$wrap_props_handler__2.call(this,handler,check_for_fresh_props_in_state_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$components$wrap_props_handler.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$components$wrap_props_handler__1;
com$fulcrologic$fulcro$components$wrap_props_handler.cljs$core$IFn$_invoke$arity$2 = com$fulcrologic$fulcro$components$wrap_props_handler__2;
return com$fulcrologic$fulcro$components$wrap_props_handler;
})()
;
var wrap_this = (function com$fulcrologic$fulcro$components$wrap_this(handler){
return (function() { 
var G__61919__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,this$,args);
};
var G__61919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61924__i = 0, G__61924__a = new Array(arguments.length -  0);
while (G__61924__i < G__61924__a.length) {G__61924__a[G__61924__i] = arguments[G__61924__i + 0]; ++G__61924__i;}
  args = new cljs.core.IndexedSeq(G__61924__a,0,null);
} 
return G__61919__delegate.call(this,args);};
G__61919.cljs$lang$maxFixedArity = 0;
G__61919.cljs$lang$applyTo = (function (arglist__61925){
var args = cljs.core.seq(arglist__61925);
return G__61919__delegate(args);
});
G__61919.cljs$core$IFn$_invoke$arity$variadic = G__61919__delegate;
return G__61919;
})()
;
});
var wrap_base_render = (function com$fulcrologic$fulcro$components$wrap_base_render(render){
return (function() { 
var G__61926__delegate = function (args){
var this$ = this;
var temp__5751__auto__ = com.fulcrologic.fulcro.components.any__GT_app(this$);
if(cljs.core.truth_(temp__5751__auto__)){
var app__$1 = temp__5751__auto__;
var _STAR_app_STAR__orig_val__61573 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__61574 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__61575 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__61576 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__61577 = app__$1;
var _STAR_depth_STAR__temp_val__61578 = (com.fulcrologic.fulcro.components.depth(this$) + (1));
var _STAR_shared_STAR__temp_val__61579 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(this$);
var _STAR_parent_STAR__temp_val__61580 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__61577);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__61578);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__61579);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__61580);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render,this$,args);
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__61576);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__61575);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__61574);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__61573);
}} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.components",null,372,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot find app on component!"], null);
}),null)),null,-858559936,null);
}
};
var G__61926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61934__i = 0, G__61934__a = new Array(arguments.length -  0);
while (G__61934__i < G__61934__a.length) {G__61934__a[G__61934__i] = arguments[G__61934__i + 0]; ++G__61934__i;}
  args = new cljs.core.IndexedSeq(G__61934__a,0,null);
} 
return G__61926__delegate.call(this,args);};
G__61926.cljs$lang$maxFixedArity = 0;
G__61926.cljs$lang$applyTo = (function (arglist__61935){
var args = cljs.core.seq(arglist__61935);
return G__61926__delegate(args);
});
G__61926.cljs$core$IFn$_invoke$arity$variadic = G__61926__delegate;
return G__61926;
})()
;
});
var component_will_unmount = (function com$fulcrologic$fulcro$components$component_will_unmount(){
var this$ = this;
var map__61591 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.component_options.call(null,this$));
var map__61591__$1 = cljs.core.__destructure_map(map__61591);
var componentWillUnmount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61591__$1,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814));
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var drop_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"drop-component!","drop-component!",183893156));
if(cljs.core.truth_(componentWillUnmount)){
(componentWillUnmount.cljs$core$IFn$_invoke$arity$1 ? componentWillUnmount.cljs$core$IFn$_invoke$arity$1(this$) : componentWillUnmount.call(null,this$));
} else {
}

com.fulcrologic.fulcro.components.goog$module$goog$object.set(this$,"fulcro$mounted",false);

return (drop_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? drop_component_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : drop_component_BANG_.call(null,this$));
});
/**
 * Configure the given `cls` (a function) to act as a react component within the Fulcro ecosystem.
 * 
 *  cls - A js function (in clj, this is ignored)
 *  fqkw - A keyword that shares the exact fully-qualified name of the component class
 *  options - A component options map (no magic) containing things like `:query` and `:ident`.
 * 
 * 
 *  NOTE: the `options` map expects proper function signatures for:
 * 
 *  `:query` - (fn [this] ...)
 *  `:ident` - (fn [this props] ...)
 *  `:initial-state` - (fn [cls params] ...)
 * 
 *  Returns (and registers) a new react class.
 *  
 */
com.fulcrologic.fulcro.components.configure_component_BANG_ = (function com$fulcrologic$fulcro$components$configure_component_BANG_(cls,fqkw,options){
var map__61592 = options;
var map__61592__$1 = cljs.core.__destructure_map(map__61592);
var initLocalState = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
var componentWillMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619));
var componentDidCatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733));
var UNSAFE_componentWillMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"UNSAFE_componentWillMount","UNSAFE_componentWillMount",1700079910));
var getSnapshotBeforeUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"getSnapshotBeforeUpdate","getSnapshotBeforeUpdate",861122184));
var UNSAFE_componentWillUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"UNSAFE_componentWillUpdate","UNSAFE_componentWillUpdate",-271932214));
var getDerivedStateFromProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739));
var getDerivedStateFromError = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477));
var componentWillReceiveProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974));
var shouldComponentUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var componentWillUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932));
var UNSAFE_componentWillReceiveProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"UNSAFE_componentWillReceiveProps","UNSAFE_componentWillReceiveProps",349396983));
var name = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(fqkw),cljs.core.name(fqkw)], null));
var js_instance_props = cljs.core.clj__GT_js((function (){var G__61595 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),component_did_mount,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),component_will_unmount,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),component_did_update,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(cljs.core.truth_(shouldComponentUpdate)?wrap_props_state_handler(shouldComponentUpdate):should_component_update_QMARK_),new cljs.core.Keyword(null,"fulcro$isComponent","fulcro$isComponent",2094954844),true,new cljs.core.Keyword(null,"type","type",1174270348),cls,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name], null);
var G__61595__$1 = (cljs.core.truth_(render)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61595,new cljs.core.Keyword(null,"render","render",-1408033454),wrap_base_render(render)):G__61595);
var G__61595__$2 = (cljs.core.truth_(getSnapshotBeforeUpdate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61595__$1,new cljs.core.Keyword(null,"getSnapshotBeforeUpdate","getSnapshotBeforeUpdate",861122184),wrap_props_state_handler(getSnapshotBeforeUpdate)):G__61595__$1);
var G__61595__$3 = (cljs.core.truth_(componentDidCatch)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61595__$2,new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733),wrap_this(componentDidCatch)):G__61595__$2);
var G__61595__$4 = (cljs.core.truth_(UNSAFE_componentWillMount)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61595__$3,new cljs.core.Keyword(null,"UNSAFE_componentWillMount","UNSAFE_componentWillMount",1700079910),wrap_this(UNSAFE_componentWillMount)):G__61595__$3);
var G__61595__$5 = (cljs.core.truth_(UNSAFE_componentWillUpdate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61595__$4,new cljs.core.Keyword(null,"UNSAFE_componentWillUpdate","UNSAFE_componentWillUpdate",-271932214),wrap_props_state_handler(UNSAFE_componentWillUpdate)):G__61595__$4);
var G__61595__$6 = (cljs.core.truth_(UNSAFE_componentWillReceiveProps)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61595__$5,new cljs.core.Keyword(null,"UNSAFE_componentWillReceiveProps","UNSAFE_componentWillReceiveProps",349396983),wrap_props_handler(UNSAFE_componentWillReceiveProps)):G__61595__$5);
var G__61595__$7 = (cljs.core.truth_(componentWillMount)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61595__$6,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),wrap_this(componentWillMount)):G__61595__$6);
var G__61595__$8 = (cljs.core.truth_(componentWillUpdate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61595__$7,new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),wrap_this(componentWillUpdate)):G__61595__$7);
var G__61595__$9 = (cljs.core.truth_(componentWillReceiveProps)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61595__$8,new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),wrap_props_handler(componentWillReceiveProps)):G__61595__$8);
if(cljs.core.truth_(initLocalState)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61595__$9,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),wrap_this(initLocalState));
} else {
return G__61595__$9;
}
})());
var statics = (function (){var G__61605 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"displayName","displayName",-809144601),name,new cljs.core.Keyword(null,"fulcro$class","fulcro$class",-1213203837),cls,new cljs.core.Keyword(null,"cljs$lang$type","cljs$lang$type",2136418717),true,new cljs.core.Keyword(null,"cljs$lang$ctorStr","cljs$lang$ctorStr",1406571315),name,new cljs.core.Keyword(null,"cljs$lang$ctorPrWriter","cljs$lang$ctorPrWriter",-112192216),(function (_,writer,___$1){
return cljs.core._write(writer,name);
})], null);
var G__61605__$1 = (cljs.core.truth_(getDerivedStateFromError)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61605,new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477),(function (error){
var v = (getDerivedStateFromError.cljs$core$IFn$_invoke$arity$1 ? getDerivedStateFromError.cljs$core$IFn$_invoke$arity$1(error) : getDerivedStateFromError.call(null,error));
if(cljs.core.coll_QMARK_(v)){
return ({"fulcro$state": v});
} else {
return v;
}
})):G__61605);
if(cljs.core.truth_(getDerivedStateFromProps)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61605__$1,new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739),static_wrap_props_state_handler(getDerivedStateFromProps));
} else {
return G__61605__$1;
}
})();
com.fulcrologic.fulcro.components.goog$module$goog$object.extend(cls.prototype,module$node_modules$react$index.Component.prototype,js_instance_props,({"fulcro$options": options}));

com.fulcrologic.fulcro.components.goog$module$goog$object.extend(cls,cljs.core.clj__GT_js(statics),({"fulcro$options": options}));

com.fulcrologic.fulcro.components.goog$module$goog$object.set(cls,"fulcro$registryKey",fqkw);

return (com.fulcrologic.fulcro.components.register_component_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.register_component_BANG_.cljs$core$IFn$_invoke$arity$2(fqkw,cls) : com.fulcrologic.fulcro.components.register_component_BANG_.call(null,fqkw,cls));
});
/**
 * Make a given `cls` (a plain fn) act like a a Fulcro component with the given component options map. Registers the
 *   new component in the component-registry. Component options MUST contain :componentName as be a fully-qualified
 *   keyword to name the component in the registry.
 * 
 *   component-options *must* include a unique `:componentName` (keyword) that will be used for registering the given
 *   function as the faux class in the component registry.
 */
com.fulcrologic.fulcro.components.add_hook_options_BANG_ = (function com$fulcrologic$fulcro$components$add_hook_options_BANG_(render_fn,component_options){
return com.fulcrologic.fulcro.raw.components.configure_anonymous_component_BANG_(render_fn,component_options);
});
/**
 * Allows you to use a plain function as a Fulcro-managed React hooks component.
 * 
 *   * `js-props` - The React js props from the parent.
 *   * `faux-class` - A Fulcro faux class, which is a fn that has had `add-options!` called on it.
 * 
 *   Returns a cljs vector containing `this` and fulcro `props`. You should *not* use the returned `this` directly,
 *   as it is a placeholder.
 * 
 *   Prefer `defsc` or `configure-hooks-component! over using this directly.`
 *   
 */
com.fulcrologic.fulcro.components.use_fulcro = (function com$fulcrologic$fulcro$components$use_fulcro(js_props,faux_class){
var app__$1 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,new cljs.core.Keyword(null,"fulcro$app","fulcro$app",-1270465306)) : com.fulcrologic.fulcro.components.isoget.call(null,js_props,new cljs.core.Keyword(null,"fulcro$app","fulcro$app",-1270465306)));
var tunnelled_props_state = module$node_modules$react$index.useState(({}));
var js_set_tunnelled_props_BANG_ = (tunnelled_props_state[(1)]);
var map__61616 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(faux_class,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811)) : com.fulcrologic.fulcro.components.isoget.call(null,faux_class,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811)));
var map__61616__$1 = cljs.core.__destructure_map(map__61616);
var options = map__61616__$1;
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61616__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var faux_component_state = module$node_modules$react$index.useState((function (){
if(cljs.core.truth_(app__$1)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,474,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot create proper fulcro component, as *app* isn't bound.","This happens when something renders a Fulcro component outside of Fulcro's render context.","See `with-parent-context`.","See https://book.fulcrologic.com/#err-comp-app-not-bound"], null);
}),null)),null,1530512093,null);
}

var depth = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,new cljs.core.Keyword(null,"fulcro$depth","fulcro$depth",1963025807)) : com.fulcrologic.fulcro.components.isoget.call(null,js_props,new cljs.core.Keyword(null,"fulcro$depth","fulcro$depth",1963025807)));
}
})();
var set_tunnelled_props_BANG_ = (function (updater){
var new_props = (updater.cljs$core$IFn$_invoke$arity$1 ? updater.cljs$core$IFn$_invoke$arity$1(null) : updater.call(null,null));
return (js_set_tunnelled_props_BANG_.cljs$core$IFn$_invoke$arity$1 ? js_set_tunnelled_props_BANG_.cljs$core$IFn$_invoke$arity$1(new_props) : js_set_tunnelled_props_BANG_.call(null,new_props));
});
return ({"setState": set_tunnelled_props_BANG_, "fulcro$isComponent": true, "fulcro$class": faux_class, "type": faux_class, "fulcro$options": options, "fulcro$mounted": false, "props": ({"fulcro$app": app__$1, "fulcro$depth": (depth + (1))})});
}));
var faux_component = (faux_component_state[(0)]);
var current_state = (tunnelled_props_state[(0)]["fulcro$value"]);
var props = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554)) : com.fulcrologic.fulcro.components.isoget.call(null,js_props,new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554)));
var children = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,new cljs.core.Keyword(null,"children","children",-940561982)) : com.fulcrologic.fulcro.components.isoget.call(null,js_props,new cljs.core.Keyword(null,"children","children",-940561982)));
var current_props = (com.fulcrologic.fulcro.components.newer_props.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.newer_props.cljs$core$IFn$_invoke$arity$2(props,current_state) : com.fulcrologic.fulcro.components.newer_props.call(null,props,current_state));
var current_ident = (cljs.core.truth_(ident)?(ident.cljs$core$IFn$_invoke$arity$2 ? ident.cljs$core$IFn$_invoke$arity$2(faux_class,current_props) : ident.call(null,faux_class,current_props)):null);
var shared_props = (cljs.core.truth_(app__$1)?com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__$1):null);
var G__61630_61990 = com.fulcrologic.fulcro.components.goog$module$goog$object.get(faux_component,"props");
com.fulcrologic.fulcro.components.goog$module$goog$object.set(G__61630_61990,"fulcro$shared",shared_props);

com.fulcrologic.fulcro.components.goog$module$goog$object.set(G__61630_61990,"fulcro$value",current_props);

com.fulcrologic.fulcro.components.goog$module$goog$object.set(G__61630_61990,"children",children);


module$node_modules$react$index.useEffect((function (){
var original_ident = current_ident;
var index_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-component!","index-component!",-1202750708));
var drop_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"drop-component!","drop-component!",183893156));
com.fulcrologic.fulcro.components.goog$module$goog$object.set(faux_component,"fulcro$mounted",true);

(index_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_component_BANG_.cljs$core$IFn$_invoke$arity$1(faux_component) : index_component_BANG_.call(null,faux_component));

return (function (){
com.fulcrologic.fulcro.components.goog$module$goog$object.set(faux_component,"fulcro$mounted",false);

return (drop_component_BANG_.cljs$core$IFn$_invoke$arity$2 ? drop_component_BANG_.cljs$core$IFn$_invoke$arity$2(faux_component,original_ident) : drop_component_BANG_.call(null,faux_component,original_ident));
});
}),[cljs.core.second(current_ident)]);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [faux_component,current_props], null);
});
/**
 * Returns true if the given component instance is mounted on the DOM.
 */
com.fulcrologic.fulcro.components.mounted_QMARK_ = (function com$fulcrologic$fulcro$components$mounted_QMARK_(this$){
return com.fulcrologic.fulcro.components.goog$module$goog$object.get(this$,"fulcro$mounted",false);
});
/**
 * Set React component-local state.  The `new-state` is actually merged with the existing state (as per React docs),
 *   but is wrapped so that cljs maps are used (instead of js objs).  `callback` is an optional callback that will be
 *   called as per the React docs on setState.
 */
com.fulcrologic.fulcro.components.set_state_BANG_ = (function com$fulcrologic$fulcro$components$set_state_BANG_(var_args){
var G__61638 = arguments.length;
switch (G__61638) {
case 3:
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,callback){
if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(component))){
return component.setState((function (prev_state,props){
return ({"fulcro$state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.components.goog$module$goog$object.get(prev_state,"fulcro$state"),new_state], 0))});
}),callback);
} else {
return null;
}
}));

(com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
}));

(com.fulcrologic.fulcro.components.set_state_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state. NOTE: This is Fulcro's wrapped component
 * local state. The low-level React state is as described in the React docs (e.g. `(.-state this)`).
 */
com.fulcrologic.fulcro.components.get_state = (function com$fulcrologic$fulcro$components$get_state(var_args){
var G__61640 = arguments.length;
switch (G__61640) {
case 1:
return com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
var cst = com.fulcrologic.fulcro.components.goog$module$goog$object.getValueByKeys(component,"state","fulcro$state");
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
}));

(com.fulcrologic.fulcro.components.get_state.cljs$lang$maxFixedArity = 2);

var update_fn_62001 = (function (component,f,args){
return component.setState((function (prev_state,props){
return ({"fulcro$state": cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,com.fulcrologic.fulcro.components.goog$module$goog$object.get(prev_state,"fulcro$state"),args)});
}));
});
/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 * 
 *  This function affects a managed cljs map maintained in React state.  If you want to affect the low-level
 *  js state itself use React's own `.setState` directly on the component.
 */
com.fulcrologic.fulcro.components.update_state_BANG_ = (function com$fulcrologic$fulcro$components$update_state_BANG_(var_args){
var G__61650 = arguments.length;
switch (G__61650) {
case 2:
return com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___62004 = arguments.length;
var i__5770__auto___62005 = (0);
while(true){
if((i__5770__auto___62005 < len__5769__auto___62004)){
args_arr__5794__auto__.push((arguments[i__5770__auto___62005]));

var G__62007 = (i__5770__auto___62005 + (1));
i__5770__auto___62005 = G__62007;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return update_fn_62001(component,f,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,args){
return update_fn_62001(component,f,args);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.components.update_state_BANG_.cljs$lang$applyTo = (function (seq61647){
var G__61648 = cljs.core.first(seq61647);
var seq61647__$1 = cljs.core.next(seq61647);
var G__61649 = cljs.core.first(seq61647__$1);
var seq61647__$2 = cljs.core.next(seq61647__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61648,G__61649,seq61647__$2);
}));

(com.fulcrologic.fulcro.components.update_state_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * 
 *   [cls] [cls params]
 * 
 *   Get the declared :initial-state value for a component.
 */
com.fulcrologic.fulcro.components.get_initial_state = com.fulcrologic.fulcro.raw.components.get_initial_state;
/**
 * Returns true if the given initial state was returned from a call to get-initial-state. This is used by internal
 *   algorithms when interpreting initial state shorthand in `defsc`.
 */
com.fulcrologic.fulcro.components.computed_initial_state_QMARK_ = (function com$fulcrologic$fulcro$components$computed_initial_state_QMARK_(s){
var and__5043__auto__ = cljs.core.map_QMARK_(s);
if(and__5043__auto__){
var G__61658 = s;
var G__61658__$1 = (((G__61658 == null))?null:cljs.core.meta(G__61658));
if((G__61658__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"computed","computed",-1482016762).cljs$core$IFn$_invoke$arity$1(G__61658__$1);
}
} else {
return and__5043__auto__;
}
});
/**
 * 
 *   [x] [class props]
 * 
 *   Get the ident for a mounted component OR using a component class.
 * 
 *   That arity-2 will return the ident using the supplied props map.
 * 
 *   The single-arity version should only be used with a mounted component (e.g. `this` from `render`), and will derive the
 *   props that were sent to it most recently.
 */
com.fulcrologic.fulcro.components.get_ident = com.fulcrologic.fulcro.raw.components.get_ident;
/**
 * CLJS-only.  When the `component` is mounted this will tunnel `new-props` to that component through React `setState`. If you're in
 *   an event handler, this means the tunnelling will be synchronous, and can be useful when updating props that could affect DOM
 *   inputs. This is typically used internally (see `transact!!`, and should generally not be used in applications unless it is a very advanced
 *   scenario and you've studied how this works. NOTE: You should `tick!` the application clock and bind *denormalize-time*
 *   when generating `new-props` so they are properly time-stamped by `db->tree`, or manually add time to `new-props`
 *   using `fdn/with-time` directly.
 */
com.fulcrologic.fulcro.components.tunnel_props_BANG_ = (function com$fulcrologic$fulcro$components$tunnel_props_BANG_(component,new_props){
if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(component))){
return component.setState((function (s){
return ({"fulcro$value": new_props});
}));
} else {
return null;
}
});
/**
 * Returns true if the given argument is a component factory.
 */
com.fulcrologic.fulcro.components.is_factory_QMARK_ = (function com$fulcrologic$fulcro$components$is_factory_QMARK_(class_or_factory){
return com.fulcrologic.fulcro.raw.components.is_factory_QMARK_(class_or_factory);
});
/**
 * [class qualifier]
 * 
 * Returns a string ID for the query of the given class with qualifier.
 */
com.fulcrologic.fulcro.components.query_id = com.fulcrologic.fulcro.raw.components.query_id;
com.fulcrologic.fulcro.components.denormalize_query = com.fulcrologic.fulcro.raw.components.denormalize_query;
com.fulcrologic.fulcro.components.get_query_by_id = com.fulcrologic.fulcro.raw.components.get_query_by_id;
/**
 * Get the query for the given class or factory. If called without a state map, then you'll get the declared static
 *   query of the class. If a state map is supplied, then the dynamically set queries in that state will result in
 *   the current dynamically-set query according to that state.
 */
com.fulcrologic.fulcro.components.get_query = (function com$fulcrologic$fulcro$components$get_query(var_args){
var G__61667 = arguments.length;
switch (G__61667) {
case 1:
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1 = (function (class_or_factory){
return com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__61676 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__61676__$1 = (((G__61676 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__61676));
if((G__61676__$1 == null)){
return null;
} else {
return cljs.core.deref(G__61676__$1);
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}
})());
}));

(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2 = (function (class_or_factory,state_map){
return com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,state_map);
}));

(com.fulcrologic.fulcro.components.get_query.cljs$lang$maxFixedArity = 2);

/**
 * Build a component's initial state using the defsc initial-state-data from
 *   options, the children from options, and the params from the invocation of get-initial-state.
 */
com.fulcrologic.fulcro.components.make_state_map = (function com$fulcrologic$fulcro$components$make_state_map(initial_state,children_by_query_key,params){
var join_keys = cljs.core.set(cljs.core.keys(children_by_query_key));
var init_keys = cljs.core.set(cljs.core.keys(initial_state));
var is_child_QMARK_ = (function (k){
return cljs.core.contains_QMARK_(join_keys,k);
});
var value_of = (function com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_(p__61681){
var vec__61682 = p__61681;
var isk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61682,(0),null);
var isv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61682,(1),null);
var param_name = (function (v){
var and__5043__auto__ = (v instanceof cljs.core.Keyword);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param",cljs.core.namespace(v));
if(and__5043__auto____$1){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(v));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
var substitute = (function (ele){
var temp__5751__auto__ = param_name(ele);
if(cljs.core.truth_(temp__5751__auto__)){
var k = temp__5751__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
} else {
return ele;
}
});
var param_key = param_name(isv);
var param_exists_QMARK_ = cljs.core.contains_QMARK_(params,param_key);
var param_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,param_key);
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(children_by_query_key,isk);
if(cljs.core.truth_((function (){var and__5043__auto__ = param_key;
if(cljs.core.truth_(and__5043__auto__)){
return (!(param_exists_QMARK_));
} else {
return and__5043__auto__;
}
})())){
return null;
} else {
if(((cljs.core.map_QMARK_(isv)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,(function (){var G__61690 = child_class;
var G__61691 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_,isv));
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__61690,G__61691) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__61690,G__61691));
})()], null);
} else {
if(cljs.core.map_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_,isv))], null);
} else {
if(((cljs.core.vector_QMARK_(isv)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (m){
var G__61695 = child_class;
var G__61696 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_,m));
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__61695,G__61696) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__61695,G__61696));
}),isv)], null);
} else {
if(((cljs.core.vector_QMARK_(param_value)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (params__$1){
if(cljs.core.truth_(com.fulcrologic.fulcro.components.computed_initial_state_QMARK_(params__$1))){
return params__$1;
} else {
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(child_class,params__$1) : com.fulcrologic.fulcro.components.get_initial_state.call(null,child_class,params__$1));
}
}),param_value)], null);
} else {
if(cljs.core.vector_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ele){
return substitute(ele);
}),isv)], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = param_key;
if(cljs.core.truth_(and__5043__auto__)){
return ((is_child_QMARK_(isk)) && (param_exists_QMARK_));
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,(cljs.core.truth_(com.fulcrologic.fulcro.components.computed_initial_state_QMARK_(param_value))?param_value:(com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(child_class,param_value) : com.fulcrologic.fulcro.components.get_initial_state.call(null,child_class,param_value)))], null);
} else {
if(cljs.core.truth_(param_key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,param_value], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,isv], null);

}
}
}
}
}
}
}
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(value_of,initial_state));
});
/**
 * Run `real-render`, possibly through :render-middleware configured on your app.
 */
com.fulcrologic.fulcro.components.wrapped_render = (function com$fulcrologic$fulcro$components$wrapped_render(this$,real_render){
var app__$1 = com.fulcrologic.fulcro.components.goog$module$goog$object.getValueByKeys(this$,"props","fulcro$app");
var render_middleware = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render-middleware","render-middleware",1183628797));
if(cljs.core.truth_(render_middleware)){
return (render_middleware.cljs$core$IFn$_invoke$arity$2 ? render_middleware.cljs$core$IFn$_invoke$arity$2(this$,real_render) : render_middleware.call(null,this$,real_render));
} else {
return (real_render.cljs$core$IFn$_invoke$arity$0 ? real_render.cljs$core$IFn$_invoke$arity$0() : real_render.call(null));
}
});
/**
 * Configure a function `(f [this fulcro-props] ...)` to work properly as a hook-based react component. This can be
 *   used in leiu of `defsc` to create a component, where `options` is the (non-magic) map of component options
 *   (i.e. :query is a `(fn [this])`, not a vector).
 * 
 *   IMPORTANT: Your options must include `:componentName`, a fully-qualified keyword to use in the component registry.
 * 
 *   Returns a new function that wraps yours (to properly extract Fulcro props) and installs the proper Fulcro component
 *   options on the low-level function so that it will act properly when used within React as a hook-based component.
 * 
 *   (def MyComponent
 *  (configure-hooks-component!
 *    (fn [this props]
 *      (let [[v set-v!] (use-state this 0)
 *        (dom/div ...)))
 *    {:query ... :ident (fn [_ props] ...) :componentName ::MyComponent}))
 * 
 *   (def ui-my-component (comp/factory MyComponent {:keyfn :id})
 * 
 *   This can be used to easily generate dynamic components at runtime (as can `configure-component!`).
 *   
 */
com.fulcrologic.fulcro.components.configure_hooks_component_BANG_ = (function com$fulcrologic$fulcro$components$configure_hooks_component_BANG_(f,options){
var cls_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var js_fn = (function (js_props){
var vec__61711 = com.fulcrologic.fulcro.components.use_fulcro(js_props,cljs.core.deref(cls_atom));
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61711,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61711,(1),null);
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__61714 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__61715 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__61716 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__61717 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__61718 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.components.any__GT_app(this$);
}
})();
var _STAR_depth_STAR__temp_val__61719 = (com.fulcrologic.fulcro.components.depth(this$) + (1));
var _STAR_shared_STAR__temp_val__61720 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components._STAR_app_STAR_);
var _STAR_parent_STAR__temp_val__61721 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__61718);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__61719);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__61720);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__61721);

try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,props) : f.call(null,this$,props));
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__61717);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__61716);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__61715);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__61714);
}}));
});
cljs.core.reset_BANG_(cls_atom,js_fn);

return com.fulcrologic.fulcro.components.add_hook_options_BANG_(js_fn,options);
});
/**
 * Create a react element for a Fulcro class.  In CLJ this returns the same thing as a mounted instance, whereas in CLJS it is an
 *   element (which has yet to instantiate an instance).
 */
com.fulcrologic.fulcro.components.create_element = (function com$fulcrologic$fulcro$components$create_element(class$,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,class$,props,com.fulcrologic.fulcro.components.force_children(children));
});
/**
 * Create a factory constructor from a component class created with
 * defsc.
 */
com.fulcrologic.fulcro.components.factory = (function com$fulcrologic$fulcro$components$factory(var_args){
var G__61738 = arguments.length;
switch (G__61738) {
case 1:
return com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
}));

(com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__61743){
var map__61745 = p__61743;
var map__61745__$1 = cljs.core.__destructure_map(map__61745);
var opts = map__61745__$1;
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61745__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var qualifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61745__$1,new cljs.core.Keyword(null,"qualifier","qualifier",125841738));
var qid = (com.fulcrologic.fulcro.components.query_id.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.query_id.cljs$core$IFn$_invoke$arity$2(class$,qualifier) : com.fulcrologic.fulcro.components.query_id.call(null,class$,qualifier));
return cljs.core.with_meta((function() { 
var com$fulcrologic$fulcro$components$element_factory__delegate = function (props,children){
var key = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
var key__$1 = (cljs.core.truth_(key)?key:(cljs.core.truth_(keyfn)?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):null));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__61749 = ref;
if((ref instanceof cljs.core.Keyword)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61749);
} else {
return G__61749;
}
})();
var props_middleware = (function (){var G__61750 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if((G__61750 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(G__61750,new cljs.core.Keyword(null,"props-middleware","props-middleware",358176739));
}
})();
var props__$1 = ({"fulcro$value": props, "fulcro$queryid": qid, "fulcro$app": com.fulcrologic.fulcro.components._STAR_app_STAR_, "fulcro$parent": com.fulcrologic.fulcro.components._STAR_parent_STAR_, "fulcro$depth": com.fulcrologic.fulcro.components._STAR_depth_STAR_});
var props__$2 = (cljs.core.truth_(props_middleware)?(props_middleware.cljs$core$IFn$_invoke$arity$2 ? props_middleware.cljs$core$IFn$_invoke$arity$2(class$,props__$1) : props_middleware.call(null,class$,props__$1)):props__$1);
if(cljs.core.truth_(key__$1)){
com.fulcrologic.fulcro.components.goog$module$goog$object.set(props__$2,"key",key__$1);
} else {
}

if(cljs.core.truth_(ref__$1)){
com.fulcrologic.fulcro.components.goog$module$goog$object.set(props__$2,"ref",ref__$1);
} else {
}

if(cljs.core.truth_(goog.DEBUG)){
if((com.fulcrologic.fulcro.components._STAR_app_STAR_ == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,769,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A Fulcro component was rendered outside of a parent context. This probably means you are using a library that has you pass rendering code to it as a lambda. Use `with-parent-context` to fix this. See https://book.fulcrologic.com/#err-comp-rendered-outside-parent-ctx"], null);
}),null)),null,-2102617339,null);
} else {
}

if(((cljs.core.map_QMARK_(key__$1)) || (cljs.core.vector_QMARK_(key__$1)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,771,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["React key for ",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.component_name.call(null,class$))," is not a simple scalar value. This could cause spurious component remounts. See https://book.fulcrologic.com/#warn-react-key-not-simple-scalar"], null);
}),null)),null,2069690235,null);
} else {
}

if(typeof ref__$1 === 'string'){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,774,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String ref on ",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.component_name.call(null,class$))," should be a function. See https://book.fulcrologic.com/#warn-string-ref-not-function"], null);
}),null)),null,1367777672,null);
} else {
}

if((((props__$2 == null)) || (cljs.core.not(com.fulcrologic.fulcro.components.goog$module$goog$object.containsKey(props__$2,"fulcro$value"))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,777,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Props middleware seems to have corrupted props for ",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.component_name.call(null,class$)),"See https://book.fulcrologic.com/#err-comp-props-middleware-corrupts"], null);
}),null)),null,965705727,null);
} else {
}

if(cljs.core.truth_(cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.PersistentArrayMap.EMPTY)(com.fulcrologic.fulcro.components.goog$module$goog$object.get(props__$2,"fulcro$value")))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,780,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Props passed to",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.component_name.call(null,class$)),"are of the type",cljs.core.type__GT_str(cljs.core.type(com.fulcrologic.fulcro.components.goog$module$goog$object.get(props__$2,"fulcro$value"))),"instead of a map. Perhaps you meant to `map` the component over the props? See https://book.fulcrologic.com/#err-comp-props-not-a-map"], null);
}),null)),null,1103171076,null);
}
} else {
}

return com.fulcrologic.fulcro.components.create_element(class$,props__$2,children);
};
var com$fulcrologic$fulcro$components$element_factory = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__62035__i = 0, G__62035__a = new Array(arguments.length -  1);
while (G__62035__i < G__62035__a.length) {G__62035__a[G__62035__i] = arguments[G__62035__i + 1]; ++G__62035__i;}
  children = new cljs.core.IndexedSeq(G__62035__a,0,null);
} 
return com$fulcrologic$fulcro$components$element_factory__delegate.call(this,props,children);};
com$fulcrologic$fulcro$components$element_factory.cljs$lang$maxFixedArity = 1;
com$fulcrologic$fulcro$components$element_factory.cljs$lang$applyTo = (function (arglist__62040){
var props = cljs.core.first(arglist__62040);
var children = cljs.core.rest(arglist__62040);
return com$fulcrologic$fulcro$components$element_factory__delegate(props,children);
});
com$fulcrologic$fulcro$components$element_factory.cljs$core$IFn$_invoke$arity$variadic = com$fulcrologic$fulcro$components$element_factory__delegate;
return com$fulcrologic$fulcro$components$element_factory;
})()
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"queryid","queryid",-271432056),qid,new cljs.core.Keyword(null,"qualifier","qualifier",125841738),qualifier], null));
}));

(com.fulcrologic.fulcro.components.factory.cljs$lang$maxFixedArity = 2);

/**
 * Similar to factory, but returns a function with the signature
 *   [props computed & children] instead of default [props & children].
 *   This makes easier to send computed.
 */
com.fulcrologic.fulcro.components.computed_factory = (function com$fulcrologic$fulcro$components$computed_factory(var_args){
var G__61777 = arguments.length;
switch (G__61777) {
case 1:
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,options){
var real_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(class$,options);
return cljs.core.with_meta((function() {
var G__62044 = null;
var G__62044__1 = (function (props){
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(props) : real_factory.call(null,props));
});
var G__62044__2 = (function (props,computed_props){
var G__61778 = (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(props,computed_props) : com.fulcrologic.fulcro.components.computed.call(null,props,computed_props));
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(G__61778) : real_factory.call(null,G__61778));
});
var G__62044__3 = (function() { 
var G__62048__delegate = function (props,computed_props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,(com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(props,computed_props) : com.fulcrologic.fulcro.components.computed.call(null,props,computed_props)),children);
};
var G__62048 = function (props,computed_props,var_args){
var children = null;
if (arguments.length > 2) {
var G__62049__i = 0, G__62049__a = new Array(arguments.length -  2);
while (G__62049__i < G__62049__a.length) {G__62049__a[G__62049__i] = arguments[G__62049__i + 2]; ++G__62049__i;}
  children = new cljs.core.IndexedSeq(G__62049__a,0,null);
} 
return G__62048__delegate.call(this,props,computed_props,children);};
G__62048.cljs$lang$maxFixedArity = 2;
G__62048.cljs$lang$applyTo = (function (arglist__62050){
var props = cljs.core.first(arglist__62050);
arglist__62050 = cljs.core.next(arglist__62050);
var computed_props = cljs.core.first(arglist__62050);
var children = cljs.core.rest(arglist__62050);
return G__62048__delegate(props,computed_props,children);
});
G__62048.cljs$core$IFn$_invoke$arity$variadic = G__62048__delegate;
return G__62048;
})()
;
G__62044 = function(props,computed_props,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return G__62044__1.call(this,props);
case 2:
return G__62044__2.call(this,props,computed_props);
default:
var G__62053 = null;
if (arguments.length > 2) {
var G__62054__i = 0, G__62054__a = new Array(arguments.length -  2);
while (G__62054__i < G__62054__a.length) {G__62054__a[G__62054__i] = arguments[G__62054__i + 2]; ++G__62054__i;}
G__62053 = new cljs.core.IndexedSeq(G__62054__a,0,null);
}
return G__62044__3.cljs$core$IFn$_invoke$arity$variadic(props,computed_props, G__62053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62044.cljs$lang$maxFixedArity = 2;
G__62044.cljs$lang$applyTo = G__62044__3.cljs$lang$applyTo;
G__62044.cljs$core$IFn$_invoke$arity$1 = G__62044__1;
G__62044.cljs$core$IFn$_invoke$arity$2 = G__62044__2;
G__62044.cljs$core$IFn$_invoke$arity$variadic = G__62044__3.cljs$core$IFn$_invoke$arity$variadic;
return G__62044;
})()
,cljs.core.meta(real_factory));
}));

(com.fulcrologic.fulcro.components.computed_factory.cljs$lang$maxFixedArity = 2);

/**
 * Submit a transaction for processing.
 * 
 *   The underlying transaction system is pluggable, but the *default* supported options are:
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The ident of the component used to submit this transaction. This is set automatically if you use a component to call this function.
 *   - `:component` - React element. Set automatically if you call this function using a component.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 *   - `:abort-id` - An ID (you make up) that makes it possible (if the plugins you're using support it) to cancel
 *  the network portion of the transaction (assuming it has not already completed).
 *   - `:compressible?` - boolean. Check compressible-transact! docs.
 *   - `:synchronous?` - boolean. When turned on the transaction will run immediately on the calling thread. If run against
 *   a component then the props will be immediately tunneled back to the calling component, allowing for React (raw) input
 *   event handlers to behave as described in standard React Forms docs (uses setState behind the scenes). Any remote operations
 *   will still be queued as normal. Calling `transact!!` is a shorthand for this option. WARNING: ONLY the given component will
 *   be refreshed in the UI. If you have dependent data elsewhere in the UI you must either use `transact!` or schedule
 *   your own global render using `app/schedule-render!`.
 *   - `:after-render?` - Wait until the next render completes before allowing this transaction to run. This can be used
 *   when calling `transact!` from *within* another mutation to ensure that the effects of the current mutation finish
 *   before this transaction takes control of the CPU. This option defaults to `false`, but `defmutation` causes it to
 *   be set to true for any transactions run within mutation action sections. You can affect the default for this value
 *   in a dynamic scope by binding `rc/*after-render*` to true
 *   - `:parallel?` - Boolean. If true, the mutation(s) in the transaction will NOT go into a network queue, nor
 *  will it block later mutations or queries.
 * 
 *   You may add any additional keys to the option map (namespaced is ideal), and any value is legal in the options
 *   map, including functions. The options will appear in the `env` of all mutations run in the transaction as
 *   `:com.fulcrologic.fulcro.algorithms.tx-processing/options`. This is the preferred way of passing things like
 *   lambdas (if you wanted something like a callback) to mutations. Note that mutation symbols are perfectly legal
 *   as mutation *arguments*, so chaining mutations can already be done via the normal transaction mechanism, and
 *   callbacks, while sometimes necessary/useful, should be limited to usages where there is no other clean way
 *   to accomplish the goal.
 * 
 *   NOTE: This function calls the application's `tx!` function (which is configurable). Fulcro 2 'follow-on reads' are
 *   supported by the default version and are added to the `:refresh` entries. Your choice of rendering algorithm will
 *   influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.components.transact_BANG_ = (function com$fulcrologic$fulcro$components$transact_BANG_(var_args){
var G__61780 = arguments.length;
switch (G__61780) {
case 3:
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_or_component,tx,options){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_or_component,tx,options);
}));

(com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_or_comp,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_or_comp,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.components.transact_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Shorthand for exactly `(transact! component tx (merge options {:synchronous? true}))`.
 * 
 *   Runs a synchronous transaction, which is an optimized mode where the optimistic behaviors of the mutations in the
 *   transaction run on the calling thread, and new props are immediately made available to the calling component via
 *   "props tunneling" (a behind-the-scenes mechanism using js/setState).
 * 
 *   This mode is meant to be used in form input event handlers, since React is designed to only work properly with
 *   raw DOM inputs via component-local state. This prevents things like the cursor jumping to the end of inputs
 *   unexpectedly.
 * 
 *   WARNING: Using an `app` instead of a component in synchronous transactions makes no sense. You must pass a component
 *   that has an ident.
 * 
 *   If you're using this, you can also set the compiler option:
 * 
 *   ```
 *   :compiler-options {:external-config {:fulcro     {:wrap-inputs? false}}}
 *   ```
 * 
 *   to turn off Fulcro DOM's generation of wrapped inputs (which try to solve this problem in a less-effective way).
 * 
 *   WARNING: Synchronous rendering does *not* refresh the full UI, only the component.
 *   
 */
com.fulcrologic.fulcro.components.transact_BANG__BANG_ = (function com$fulcrologic$fulcro$components$transact_BANG__BANG_(var_args){
var G__61806 = arguments.length;
switch (G__61806) {
case 2:
return com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(component,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,tx,options){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component,tx,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391),true], null)], 0)));
}));

(com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Part of internal implementation of dynamic queries.
 */
com.fulcrologic.fulcro.components.link_element = com.fulcrologic.fulcro.raw.components.link_element;
/**
 * Part of internal implementation of dynamic queries.
 * 
 *   Determines if there are query elements in the `query` that need to be normalized. If so, it does so.
 * 
 *   Returns the new state map containing potentially-updated normalized queries.
 */
com.fulcrologic.fulcro.components.normalize_query_elements = com.fulcrologic.fulcro.raw.components.normalize_query_elements;
/**
 * Part of dyn query implementation. Find all of the elements (only at the top level) of the given query and replace them
 *   with their query ID.
 */
com.fulcrologic.fulcro.components.link_query = com.fulcrologic.fulcro.raw.components.link_query;
/**
 * Given a state map and a query, returns a state map with the query normalized into the database. Query fragments
 *   that already appear in the state will not be added.  Part of dynamic query implementation.
 */
com.fulcrologic.fulcro.components.normalize_query = com.fulcrologic.fulcro.raw.components.normalize_query;
/**
 * Put a query in app state.
 * 
 *   NOTE: Indexes must be rebuilt after setting a query, so this function should primarily be used to build
 *   up an initial app state.
 */
com.fulcrologic.fulcro.components.set_query_STAR_ = (function com$fulcrologic$fulcro$components$set_query_STAR_(state_map,class_or_factory,p__61812){
var map__61813 = p__61812;
var map__61813__$1 = cljs.core.__destructure_map(map__61813);
var args = map__61813__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61813__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return com.fulcrologic.fulcro.raw.components.set_query_STAR_(state_map,class_or_factory,args);
});
/**
 * Public API for setting a dynamic query on a component. This function alters the query and rebuilds internal indexes.
 * 
 *   * `x` : is anything that any->app accepts.
 *   * `class-or-factory` : A component class or factory for that class (if using query qualifiers)
 *   * `opts` : A map with `query` and optionally `params` (substitutions on queries)
 *   
 */
com.fulcrologic.fulcro.components.set_query_BANG_ = (function com$fulcrologic$fulcro$components$set_query_BANG_(x,class_or_factory,p__61815){
var map__61816 = p__61815;
var map__61816__$1 = cljs.core.__destructure_map(map__61816);
var opts = map__61816__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61816__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61816__$1,new cljs.core.Keyword(null,"params","params",710516235));
return com.fulcrologic.fulcro.raw.components.set_query_BANG_(x,class_or_factory,opts);
});
/**
 * Refresh the current dynamic queries in app state to reflect any updates to the static queries of the components.
 * 
 * This can be used at development time to update queries that have changed but that hot code reload does not
 * reflect (because there is a current saved query in state). This is *not* always what you want, since a component
 * may have a custom query whose prop-level elements are set to a particular thing on purpose.
 * 
 * An component that has `:preserve-dynamic-query? true` in its component options will be ignored by
 * this function.
 */
com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_ = (function com$fulcrologic$fulcro$components$refresh_dynamic_queries_BANG_(var_args){
var G__61823 = arguments.length;
switch (G__61823) {
case 3:
return com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,cls,force_QMARK_){
return com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,cls,force_QMARK_);
}));

(com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app_ish){
return com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1(app_ish);
}));

(com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Get all of the indexes from a component instance or app. See also `ident->any`, `class->any`, etc.
 */
com.fulcrologic.fulcro.components.get_indexes = (function com$fulcrologic$fulcro$components$get_indexes(x){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(x);
var G__61824 = app__$1;
var G__61824__$1 = (((G__61824 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__61824));
var G__61824__$2 = (((G__61824__$1 == null))?null:cljs.core.deref(G__61824__$1));
if((G__61824__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938).cljs$core$IFn$_invoke$arity$1(G__61824__$2);
}
});
/**
 * Return all on-screen component instances that are rendering the data for a given ident. `x` is anything any->app accepts.
 */
com.fulcrologic.fulcro.components.ident__GT_components = (function com$fulcrologic$fulcro$components$ident__GT_components(x,ident){
var G__61825 = com.fulcrologic.fulcro.components.get_indexes(x);
var G__61825__$1 = (((G__61825 == null))?null:new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224).cljs$core$IFn$_invoke$arity$1(G__61825));
if((G__61825__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__61825__$1,ident);
}
});
/**
 * Return some (random) on-screen components that uses the given ident. `x` is anything any->app accepts.
 */
com.fulcrologic.fulcro.components.ident__GT_any = (function com$fulcrologic$fulcro$components$ident__GT_any(x,ident){
return cljs.core.first(com.fulcrologic.fulcro.components.ident__GT_components(x,ident));
});
/**
 * Get all component classes that query for the given prop.
 *   `x` can be anything `any->app` is ok with.
 * 
 *   Returns all classes that query for that prop (or ident)
 */
com.fulcrologic.fulcro.components.prop__GT_classes = (function com$fulcrologic$fulcro$components$prop__GT_classes(x,prop){
var G__61826 = com.fulcrologic.fulcro.components.get_indexes(x);
var G__61826__$1 = (((G__61826 == null))?null:new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717).cljs$core$IFn$_invoke$arity$1(G__61826));
if((G__61826__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__61826__$1,prop);
}
});
/**
 * Get all of the on-screen component instances from the indexes that have the type of the component class.
 *   `x` can be anything `any->app` is ok with.
 */
com.fulcrologic.fulcro.components.class__GT_all = (function com$fulcrologic$fulcro$components$class__GT_all(x,class$){
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
var G__61827 = com.fulcrologic.fulcro.components.get_indexes(x);
var G__61827__$1 = (((G__61827 == null))?null:new cljs.core.Keyword(null,"class->components","class->components",436435919).cljs$core$IFn$_invoke$arity$1(G__61827));
if((G__61827__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__61827__$1,k);
}
});
/**
 * Get a (random) on-screen component instance from the indexes that has type of the given component class.
 *   `x` can be anything `any->app` is ok with.
 */
com.fulcrologic.fulcro.components.class__GT_any = (function com$fulcrologic$fulcro$components$class__GT_any(x,cls){
return cljs.core.first(com.fulcrologic.fulcro.components.class__GT_all(x,cls));
});
/**
 * Returns the current value of the state map via a component instance. Note that it is not safe to render
 *   arbitrary data from the state map since Fulcro will have no idea that it should refresh a component that
 *   does so; however, it is sometimes useful to look at the state map for information that doesn't
 *   change over time.
 */
com.fulcrologic.fulcro.components.component__GT_state_map = (function com$fulcrologic$fulcro$components$component__GT_state_map(this$){
var G__61832 = this$;
var G__61832__$1 = (((G__61832 == null))?null:com.fulcrologic.fulcro.components.any__GT_app(G__61832));
var G__61832__$2 = (((G__61832__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__61832__$1));
if((G__61832__$2 == null)){
return null;
} else {
return cljs.core.deref(G__61832__$2);
}
});
/**
 * Wrap the props middleware such that `f` is called to get extra props that should be placed
 *   in the extra-props arg of the component.
 * 
 *   `handler` - (optional) The next item in the props middleware chain.
 *   `f` - A (fn [cls extra-props] new-extra-props)
 * 
 *   `f` will be passed the class being rendered and the current map of extra props. It should augment
 *   those and return a new version.
 */
com.fulcrologic.fulcro.components.wrap_update_extra_props = (function com$fulcrologic$fulcro$components$wrap_update_extra_props(var_args){
var G__61834 = arguments.length;
switch (G__61834) {
case 1:
return com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (cls,raw_props){
var existing = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components.goog$module$goog$object.get(raw_props,"fulcro$extra_props");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var new$ = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cls,existing) : f.call(null,cls,existing));
com.fulcrologic.fulcro.components.goog$module$goog$object.set(raw_props,"fulcro$extra_props",new$);

return raw_props;
});
}));

(com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$2 = (function (handler,f){
return (function (cls,raw_props){
var existing = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components.goog$module$goog$object.get(raw_props,"fulcro$extra_props");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var new$ = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cls,existing) : f.call(null,cls,existing));
com.fulcrologic.fulcro.components.goog$module$goog$object.set(raw_props,"fulcro$extra_props",new$);

return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(cls,raw_props) : handler.call(null,cls,raw_props));
});
}));

(com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$lang$maxFixedArity = 2);

/**
 * Wraps children in a React.Fragment. Props are optional, like normal DOM elements.
 */
com.fulcrologic.fulcro.components.fragment = (function com$fulcrologic$fulcro$components$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62081 = arguments.length;
var i__5770__auto___62082 = (0);
while(true){
if((i__5770__auto___62082 < len__5769__auto___62081)){
args__5775__auto__.push((arguments[i__5770__auto___62082]));

var G__62083 = (i__5770__auto___62082 + (1));
i__5770__auto___62082 = G__62083;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__61837 = ((cljs.core.map_QMARK_(cljs.core.first(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({}),args], null));
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61837,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61837,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,module$node_modules$react$index.Fragment,cljs.core.clj__GT_js(props),com.fulcrologic.fulcro.components.force_children(children));
}));

(com.fulcrologic.fulcro.components.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.components.fragment.cljs$lang$applyTo = (function (seq61836){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61836));
}));

/**
 * 
 *   DEPRECATED: Generally use `result-action` in mutations to chain sequences instead. This call is equivalent
 *   to `transact!` with an `:optimistic? false` option.
 * 
 *   Like `transact!`, but ensures each call completes (in a full-stack, pessimistic manner) before the next call starts
 *   in any way. Note that two calls of this function have no guaranteed relationship to each other. They could end up
 *   intermingled at runtime. The only guarantee is that for *a single call* to `ptransact!`, the calls in the given tx will run
 *   pessimistically (one at a time) in the order given. Follow-on reads in the given transaction will be repeated after each remote
 *   interaction.
 * 
 *   `component-or-app` a mounted component or the app
 *   `tx` the tx to run
 *   `ref` the ident (ref context) in which to run the transaction (including all deferrals)
 */
com.fulcrologic.fulcro.components.ptransact_BANG_ = (function com$fulcrologic$fulcro$components$ptransact_BANG_(var_args){
var G__61851 = arguments.length;
switch (G__61851) {
case 2:
return com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component_or_app,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component_or_app,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),false], null));
}));

(com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component_or_app,ref,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component_or_app,tx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),false,new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
}));

(com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Identical to `transact!` with `:compressible? true` option. This means that if more than one
 *   adjacent history transition edge is compressible, only the more recent of the sequence of them is kept. This
 *   is useful for things like form input fields, where storing every keystoke in history is undesirable. This
 *   also compress the transactions in Fulcro Inspect.
 * 
 *   NOTE: history events that trigger remote interactions are not compressible, since they may be needed for
 *   automatic network error recovery handling.
 */
com.fulcrologic.fulcro.components.compressible_transact_BANG_ = (function com$fulcrologic$fulcro$components$compressible_transact_BANG_(var_args){
var G__61853 = arguments.length;
switch (G__61853) {
case 2:
return com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
}));

(com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,ref,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,tx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true,new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
}));

(com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.components.external_config = com.fulcrologic.fulcro.raw.components.external_config;
/**
 * Request that the given subtree starting a component be refreshed from the app database without re-rendering any parent. This
 *   is a synchronous call that will tunnel the props to the given component via an internal call to React setState.
 */
com.fulcrologic.fulcro.components.refresh_component_BANG_ = (function com$fulcrologic$fulcro$components$refresh_component_BANG_(component){
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,component)))){
var prior_computed = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.get_computed.call(null,component));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var map__61877 = com.fulcrologic.fulcro.components.any__GT_app(component);
var map__61877__$1 = cljs.core.__destructure_map(map__61877);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61877__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61877__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_map = cljs.core.deref(state_atom);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","basis-t","com.fulcrologic.fulcro.application/basis-t",-1038783437),cljs.core.inc);

var _STAR_denormalize_time_STAR__orig_val__61878 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__61879 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","basis-t","com.fulcrologic.fulcro.application/basis-t",-1038783437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__61879);

try{var ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.get_ident.call(null,component));
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
var ui_props = (function (){var G__61880 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,ident),state_map);
var G__61881 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__61880,G__61881) : com.fulcrologic.fulcro.components.computed.call(null,G__61880,G__61881));
})();
return com.fulcrologic.fulcro.components.tunnel_props_BANG_(component,ui_props);
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__61878);
}} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,1518,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot re-render a non-component. See https://book.fulcrologic.com/#err-comp-cannot-rerender-non-comp"], null);
}),null)),null,857715701,null);
}
});
/**
 * Returns the nth parent of `this` (a React element). The optional `n` can be 0 (the immediate parent) or any positive
 *   integer. If this walks past root then this function returns nil.
 */
com.fulcrologic.fulcro.components.get_parent = (function com$fulcrologic$fulcro$components$get_parent(var_args){
var G__61887 = arguments.length;
switch (G__61887) {
case 2:
return com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$2 = (function (this$,n){
if(com.fulcrologic.fulcro.components.component_instance_QMARK_(this$)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot get parent. First argument is not a component instance.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),this$], null));
}

var element = this$;
var level = n;
while(true){
var result = (function (){var G__61894 = element;
var G__61895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$parent","fulcro$parent",798142831)], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__61894,G__61895) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__61894,G__61895));
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = result;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.pos_int_QMARK_(level);
} else {
return and__5043__auto__;
}
})())){
var G__62120 = result;
var G__62121 = (level - (1));
element = G__62120;
level = G__62121;
continue;
} else {
return result;
}
break;
}
}));

(com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$2(this$,(0));
}));

(com.fulcrologic.fulcro.components.get_parent.cljs$lang$maxFixedArity = 2);

/**
 * Walks the complete list of components in the component registry and looks for problems. Used during dev mode to
 * detect common problems that can cause runtime misbehavior.
 */
com.fulcrologic.fulcro.components.check_component_registry_BANG_ = com.fulcrologic.fulcro.raw.components.check_component_registry_BANG_;

//# sourceMappingURL=com.fulcrologic.fulcro.components.js.map
