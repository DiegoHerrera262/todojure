goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__65160){
var vec__65161 = p__65160;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65161,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65161,(1),null);
var pair = vec__65161;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__65164){
var vec__65165 = p__65164;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65165,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65165,(1),null);
var pair = vec__65165;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__65170){
var vec__65171 = p__65170;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65171,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65171,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__65174 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65174,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__65174;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__65220 = arguments.length;
switch (G__65220) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__65232 = component.refs;
var G__65232__$1 = (((G__65232 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__65232,name));
if((G__65232__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__65232__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__65233 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__65234 = (function (){var G__65235 = r;
if((G__65235 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__65235);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__65234) : ref.call(null,G__65234));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__65233) : factory.call(null,G__65233));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__65246 = arguments.length;
switch (G__65246) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___66247 = arguments.length;
var i__5770__auto___66248 = (0);
while(true){
if((i__5770__auto___66248 < len__5769__auto___66247)){
args_arr__5794__auto__.push((arguments[i__5770__auto___66248]));

var G__66249 = (i__5770__auto___66248 + (1));
i__5770__auto___66248 = G__66249;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq65243){
var G__65244 = cljs.core.first(seq65243);
var seq65243__$1 = cljs.core.next(seq65243);
var G__65245 = cljs.core.first(seq65243__$1);
var seq65243__$2 = cljs.core.next(seq65243__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65244,G__65245,seq65243__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__5043__auto__ = tag;
if(cljs.core.truth_(and__5043__auto__)){
var G__65301 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65301) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__65301));
} else {
return and__5043__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x65306_66250 = ctor.prototype;
(x65306_66250.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x65306_66250.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__65303_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__65303_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5043__auto__ = state_value;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = element_value;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,1834914881,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x65306_66250.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__66251__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__66251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66252__i = 0, G__66252__a = new Array(arguments.length -  0);
while (G__66252__i < G__66252__a.length) {G__66252__a[G__66252__i] = arguments[G__66252__i + 0]; ++G__66252__i;}
  args = new cljs.core.IndexedSeq(G__66252__a,0,null);
} 
return G__66251__delegate.call(this,args);};
G__66251.cljs$lang$maxFixedArity = 0;
G__66251.cljs$lang$applyTo = (function (arglist__66253){
var args = cljs.core.seq(arglist__66253);
return G__66251__delegate(args);
});
G__66251.cljs$core$IFn$_invoke$arity$variadic = G__66251__delegate;
return G__66251;
})()
;
return (function() { 
var G__66254__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5751__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__66254 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__66255__i = 0, G__66255__a = new Array(arguments.length -  1);
while (G__66255__i < G__66255__a.length) {G__66255__a[G__66255__i] = arguments[G__66255__i + 1]; ++G__66255__i;}
  children = new cljs.core.IndexedSeq(G__66255__a,0,null);
} 
return G__66254__delegate.call(this,props,children);};
G__66254.cljs$lang$maxFixedArity = 1;
G__66254.cljs$lang$applyTo = (function (arglist__66256){
var props = cljs.core.first(arglist__66256);
var children = cljs.core.rest(arglist__66256);
return G__66254__delegate(props,children);
});
G__66254.cljs$core$IFn$_invoke$arity$variadic = G__66254__delegate;
return G__66254;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__65323 = tag;
switch (G__65323) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65323)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__65333 = arguments.length;
switch (G__65333) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__65339 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__65340 = cljs.core.seq(vec__65339);
var first__65341 = cljs.core.first(seq__65340);
var seq__65340__$1 = cljs.core.next(seq__65340);
var head = first__65341;
var tail = seq__65340__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__65342 = (function (){var G__65343 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65343,tail);

return G__65343;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__65342) : f.call(null,G__65342));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__65346 = (function (){var G__65347 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65347,args);

return G__65347;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__65346) : f.call(null,G__65346));
} else {
if(cljs.core.object_QMARK_(head)){
var G__65351 = (function (){var G__65352 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65352,tail);

return G__65352;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__65351) : f.call(null,G__65351));
} else {
if(cljs.core.map_QMARK_(head)){
var G__65353 = (function (){var G__65354 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__65354,tail);

return G__65354;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__65353) : f.call(null,G__65353));
} else {
var G__65356 = (function (){var G__65357 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65357,args);

return G__65357;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__65356) : f.call(null,G__65356));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__65359 = arguments.length;
switch (G__65359) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__65364 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__65365 = cljs.core.seq(vec__65364);
var first__65366 = cljs.core.first(seq__65365);
var seq__65365__$1 = cljs.core.next(seq__65365);
var head = first__65366;
var tail = seq__65365__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__65369 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65369,tail);

return G__65369;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__65370 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65370,args);

return G__65370;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__65371 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65371,tail);

return G__65371;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__65372 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__65372,tail);

return G__65372;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__65374 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65374,args);

return G__65374;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66260 = arguments.length;
var i__5770__auto___66261 = (0);
while(true){
if((i__5770__auto___66261 < len__5769__auto___66260)){
args__5775__auto__.push((arguments[i__5770__auto___66261]));

var G__66262 = (i__5770__auto___66261 + (1));
i__5770__auto___66261 = G__66262;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65399 = conformed_args__45404__auto__;
var map__65399__$1 = cljs.core.__destructure_map(map__65399);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65399__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65399__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65399__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq65394){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65394));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66263 = arguments.length;
var i__5770__auto___66264 = (0);
while(true){
if((i__5770__auto___66264 < len__5769__auto___66263)){
args__5775__auto__.push((arguments[i__5770__auto___66264]));

var G__66265 = (i__5770__auto___66264 + (1));
i__5770__auto___66264 = G__66265;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65437 = conformed_args__45404__auto__;
var map__65437__$1 = cljs.core.__destructure_map(map__65437);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq65409){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65409));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66266 = arguments.length;
var i__5770__auto___66267 = (0);
while(true){
if((i__5770__auto___66267 < len__5769__auto___66266)){
args__5775__auto__.push((arguments[i__5770__auto___66267]));

var G__66268 = (i__5770__auto___66267 + (1));
i__5770__auto___66267 = G__66268;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65452 = conformed_args__45404__auto__;
var map__65452__$1 = cljs.core.__destructure_map(map__65452);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq65450){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65450));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66269 = arguments.length;
var i__5770__auto___66270 = (0);
while(true){
if((i__5770__auto___66270 < len__5769__auto___66269)){
args__5775__auto__.push((arguments[i__5770__auto___66270]));

var G__66271 = (i__5770__auto___66270 + (1));
i__5770__auto___66270 = G__66271;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65466 = conformed_args__45404__auto__;
var map__65466__$1 = cljs.core.__destructure_map(map__65466);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65466__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65466__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65466__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq65456){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65456));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66272 = arguments.length;
var i__5770__auto___66273 = (0);
while(true){
if((i__5770__auto___66273 < len__5769__auto___66272)){
args__5775__auto__.push((arguments[i__5770__auto___66273]));

var G__66274 = (i__5770__auto___66273 + (1));
i__5770__auto___66273 = G__66274;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65470 = conformed_args__45404__auto__;
var map__65470__$1 = cljs.core.__destructure_map(map__65470);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65470__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65470__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65470__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq65467){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65467));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66275 = arguments.length;
var i__5770__auto___66276 = (0);
while(true){
if((i__5770__auto___66276 < len__5769__auto___66275)){
args__5775__auto__.push((arguments[i__5770__auto___66276]));

var G__66277 = (i__5770__auto___66276 + (1));
i__5770__auto___66276 = G__66277;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65482 = conformed_args__45404__auto__;
var map__65482__$1 = cljs.core.__destructure_map(map__65482);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65482__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65482__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq65474){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65474));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66278 = arguments.length;
var i__5770__auto___66279 = (0);
while(true){
if((i__5770__auto___66279 < len__5769__auto___66278)){
args__5775__auto__.push((arguments[i__5770__auto___66279]));

var G__66280 = (i__5770__auto___66279 + (1));
i__5770__auto___66279 = G__66280;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65485 = conformed_args__45404__auto__;
var map__65485__$1 = cljs.core.__destructure_map(map__65485);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65485__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65485__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65485__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq65483){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65483));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66281 = arguments.length;
var i__5770__auto___66282 = (0);
while(true){
if((i__5770__auto___66282 < len__5769__auto___66281)){
args__5775__auto__.push((arguments[i__5770__auto___66282]));

var G__66283 = (i__5770__auto___66282 + (1));
i__5770__auto___66282 = G__66283;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65495 = conformed_args__45404__auto__;
var map__65495__$1 = cljs.core.__destructure_map(map__65495);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq65494){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65494));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66284 = arguments.length;
var i__5770__auto___66285 = (0);
while(true){
if((i__5770__auto___66285 < len__5769__auto___66284)){
args__5775__auto__.push((arguments[i__5770__auto___66285]));

var G__66286 = (i__5770__auto___66285 + (1));
i__5770__auto___66285 = G__66286;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65509 = conformed_args__45404__auto__;
var map__65509__$1 = cljs.core.__destructure_map(map__65509);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65509__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65509__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65509__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq65501){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65501));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66287 = arguments.length;
var i__5770__auto___66288 = (0);
while(true){
if((i__5770__auto___66288 < len__5769__auto___66287)){
args__5775__auto__.push((arguments[i__5770__auto___66288]));

var G__66289 = (i__5770__auto___66288 + (1));
i__5770__auto___66288 = G__66289;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65535 = conformed_args__45404__auto__;
var map__65535__$1 = cljs.core.__destructure_map(map__65535);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65535__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65535__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq65522){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65522));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66290 = arguments.length;
var i__5770__auto___66291 = (0);
while(true){
if((i__5770__auto___66291 < len__5769__auto___66290)){
args__5775__auto__.push((arguments[i__5770__auto___66291]));

var G__66292 = (i__5770__auto___66291 + (1));
i__5770__auto___66291 = G__66292;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65551 = conformed_args__45404__auto__;
var map__65551__$1 = cljs.core.__destructure_map(map__65551);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65551__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65551__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65551__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq65547){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65547));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66293 = arguments.length;
var i__5770__auto___66294 = (0);
while(true){
if((i__5770__auto___66294 < len__5769__auto___66293)){
args__5775__auto__.push((arguments[i__5770__auto___66294]));

var G__66295 = (i__5770__auto___66294 + (1));
i__5770__auto___66294 = G__66295;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65578 = conformed_args__45404__auto__;
var map__65578__$1 = cljs.core.__destructure_map(map__65578);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65578__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65578__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65578__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq65564){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65564));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66296 = arguments.length;
var i__5770__auto___66297 = (0);
while(true){
if((i__5770__auto___66297 < len__5769__auto___66296)){
args__5775__auto__.push((arguments[i__5770__auto___66297]));

var G__66298 = (i__5770__auto___66297 + (1));
i__5770__auto___66297 = G__66298;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65582 = conformed_args__45404__auto__;
var map__65582__$1 = cljs.core.__destructure_map(map__65582);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65582__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65582__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq65579){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65579));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66299 = arguments.length;
var i__5770__auto___66300 = (0);
while(true){
if((i__5770__auto___66300 < len__5769__auto___66299)){
args__5775__auto__.push((arguments[i__5770__auto___66300]));

var G__66301 = (i__5770__auto___66300 + (1));
i__5770__auto___66300 = G__66301;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65587 = conformed_args__45404__auto__;
var map__65587__$1 = cljs.core.__destructure_map(map__65587);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65587__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65587__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65587__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq65585){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65585));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66302 = arguments.length;
var i__5770__auto___66303 = (0);
while(true){
if((i__5770__auto___66303 < len__5769__auto___66302)){
args__5775__auto__.push((arguments[i__5770__auto___66303]));

var G__66304 = (i__5770__auto___66303 + (1));
i__5770__auto___66303 = G__66304;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65592 = conformed_args__45404__auto__;
var map__65592__$1 = cljs.core.__destructure_map(map__65592);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65592__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq65588){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65588));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66305 = arguments.length;
var i__5770__auto___66306 = (0);
while(true){
if((i__5770__auto___66306 < len__5769__auto___66305)){
args__5775__auto__.push((arguments[i__5770__auto___66306]));

var G__66307 = (i__5770__auto___66306 + (1));
i__5770__auto___66306 = G__66307;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65597 = conformed_args__45404__auto__;
var map__65597__$1 = cljs.core.__destructure_map(map__65597);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65597__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65597__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65597__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq65595){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65595));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66308 = arguments.length;
var i__5770__auto___66309 = (0);
while(true){
if((i__5770__auto___66309 < len__5769__auto___66308)){
args__5775__auto__.push((arguments[i__5770__auto___66309]));

var G__66310 = (i__5770__auto___66309 + (1));
i__5770__auto___66309 = G__66310;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65601 = conformed_args__45404__auto__;
var map__65601__$1 = cljs.core.__destructure_map(map__65601);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65601__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65601__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65601__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq65600){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65600));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66311 = arguments.length;
var i__5770__auto___66312 = (0);
while(true){
if((i__5770__auto___66312 < len__5769__auto___66311)){
args__5775__auto__.push((arguments[i__5770__auto___66312]));

var G__66313 = (i__5770__auto___66312 + (1));
i__5770__auto___66312 = G__66313;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65603 = conformed_args__45404__auto__;
var map__65603__$1 = cljs.core.__destructure_map(map__65603);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65603__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65603__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65603__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq65602){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65602));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66314 = arguments.length;
var i__5770__auto___66315 = (0);
while(true){
if((i__5770__auto___66315 < len__5769__auto___66314)){
args__5775__auto__.push((arguments[i__5770__auto___66315]));

var G__66316 = (i__5770__auto___66315 + (1));
i__5770__auto___66315 = G__66316;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65608 = conformed_args__45404__auto__;
var map__65608__$1 = cljs.core.__destructure_map(map__65608);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65608__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65608__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65608__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq65604){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65604));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66317 = arguments.length;
var i__5770__auto___66318 = (0);
while(true){
if((i__5770__auto___66318 < len__5769__auto___66317)){
args__5775__auto__.push((arguments[i__5770__auto___66318]));

var G__66319 = (i__5770__auto___66318 + (1));
i__5770__auto___66318 = G__66319;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65615 = conformed_args__45404__auto__;
var map__65615__$1 = cljs.core.__destructure_map(map__65615);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65615__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65615__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65615__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq65612){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65612));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66320 = arguments.length;
var i__5770__auto___66321 = (0);
while(true){
if((i__5770__auto___66321 < len__5769__auto___66320)){
args__5775__auto__.push((arguments[i__5770__auto___66321]));

var G__66322 = (i__5770__auto___66321 + (1));
i__5770__auto___66321 = G__66322;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65621 = conformed_args__45404__auto__;
var map__65621__$1 = cljs.core.__destructure_map(map__65621);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65621__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65621__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq65617){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65617));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66323 = arguments.length;
var i__5770__auto___66324 = (0);
while(true){
if((i__5770__auto___66324 < len__5769__auto___66323)){
args__5775__auto__.push((arguments[i__5770__auto___66324]));

var G__66325 = (i__5770__auto___66324 + (1));
i__5770__auto___66324 = G__66325;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65649 = conformed_args__45404__auto__;
var map__65649__$1 = cljs.core.__destructure_map(map__65649);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65649__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65649__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65649__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq65631){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65631));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66326 = arguments.length;
var i__5770__auto___66327 = (0);
while(true){
if((i__5770__auto___66327 < len__5769__auto___66326)){
args__5775__auto__.push((arguments[i__5770__auto___66327]));

var G__66328 = (i__5770__auto___66327 + (1));
i__5770__auto___66327 = G__66328;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65657 = conformed_args__45404__auto__;
var map__65657__$1 = cljs.core.__destructure_map(map__65657);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65657__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65657__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq65653){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65653));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66329 = arguments.length;
var i__5770__auto___66330 = (0);
while(true){
if((i__5770__auto___66330 < len__5769__auto___66329)){
args__5775__auto__.push((arguments[i__5770__auto___66330]));

var G__66331 = (i__5770__auto___66330 + (1));
i__5770__auto___66330 = G__66331;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65668 = conformed_args__45404__auto__;
var map__65668__$1 = cljs.core.__destructure_map(map__65668);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65668__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65668__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65668__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq65661){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65661));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66332 = arguments.length;
var i__5770__auto___66333 = (0);
while(true){
if((i__5770__auto___66333 < len__5769__auto___66332)){
args__5775__auto__.push((arguments[i__5770__auto___66333]));

var G__66334 = (i__5770__auto___66333 + (1));
i__5770__auto___66333 = G__66334;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65677 = conformed_args__45404__auto__;
var map__65677__$1 = cljs.core.__destructure_map(map__65677);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq65675){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65675));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66335 = arguments.length;
var i__5770__auto___66336 = (0);
while(true){
if((i__5770__auto___66336 < len__5769__auto___66335)){
args__5775__auto__.push((arguments[i__5770__auto___66336]));

var G__66337 = (i__5770__auto___66336 + (1));
i__5770__auto___66336 = G__66337;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65682 = conformed_args__45404__auto__;
var map__65682__$1 = cljs.core.__destructure_map(map__65682);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65682__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq65680){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66338 = arguments.length;
var i__5770__auto___66339 = (0);
while(true){
if((i__5770__auto___66339 < len__5769__auto___66338)){
args__5775__auto__.push((arguments[i__5770__auto___66339]));

var G__66340 = (i__5770__auto___66339 + (1));
i__5770__auto___66339 = G__66340;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65717 = conformed_args__45404__auto__;
var map__65717__$1 = cljs.core.__destructure_map(map__65717);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65717__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65717__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65717__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq65683){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65683));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66341 = arguments.length;
var i__5770__auto___66342 = (0);
while(true){
if((i__5770__auto___66342 < len__5769__auto___66341)){
args__5775__auto__.push((arguments[i__5770__auto___66342]));

var G__66343 = (i__5770__auto___66342 + (1));
i__5770__auto___66342 = G__66343;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65760 = conformed_args__45404__auto__;
var map__65760__$1 = cljs.core.__destructure_map(map__65760);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq65741){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65741));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66344 = arguments.length;
var i__5770__auto___66345 = (0);
while(true){
if((i__5770__auto___66345 < len__5769__auto___66344)){
args__5775__auto__.push((arguments[i__5770__auto___66345]));

var G__66346 = (i__5770__auto___66345 + (1));
i__5770__auto___66345 = G__66346;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65787 = conformed_args__45404__auto__;
var map__65787__$1 = cljs.core.__destructure_map(map__65787);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq65774){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65774));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66347 = arguments.length;
var i__5770__auto___66348 = (0);
while(true){
if((i__5770__auto___66348 < len__5769__auto___66347)){
args__5775__auto__.push((arguments[i__5770__auto___66348]));

var G__66349 = (i__5770__auto___66348 + (1));
i__5770__auto___66348 = G__66349;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65789 = conformed_args__45404__auto__;
var map__65789__$1 = cljs.core.__destructure_map(map__65789);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq65788){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65788));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66350 = arguments.length;
var i__5770__auto___66351 = (0);
while(true){
if((i__5770__auto___66351 < len__5769__auto___66350)){
args__5775__auto__.push((arguments[i__5770__auto___66351]));

var G__66352 = (i__5770__auto___66351 + (1));
i__5770__auto___66351 = G__66352;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65803 = conformed_args__45404__auto__;
var map__65803__$1 = cljs.core.__destructure_map(map__65803);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq65800){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65800));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66353 = arguments.length;
var i__5770__auto___66354 = (0);
while(true){
if((i__5770__auto___66354 < len__5769__auto___66353)){
args__5775__auto__.push((arguments[i__5770__auto___66354]));

var G__66355 = (i__5770__auto___66354 + (1));
i__5770__auto___66354 = G__66355;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65806 = conformed_args__45404__auto__;
var map__65806__$1 = cljs.core.__destructure_map(map__65806);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65806__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65806__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq65805){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65805));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66356 = arguments.length;
var i__5770__auto___66357 = (0);
while(true){
if((i__5770__auto___66357 < len__5769__auto___66356)){
args__5775__auto__.push((arguments[i__5770__auto___66357]));

var G__66358 = (i__5770__auto___66357 + (1));
i__5770__auto___66357 = G__66358;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65812 = conformed_args__45404__auto__;
var map__65812__$1 = cljs.core.__destructure_map(map__65812);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65812__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65812__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65812__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq65810){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65810));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66359 = arguments.length;
var i__5770__auto___66360 = (0);
while(true){
if((i__5770__auto___66360 < len__5769__auto___66359)){
args__5775__auto__.push((arguments[i__5770__auto___66360]));

var G__66361 = (i__5770__auto___66360 + (1));
i__5770__auto___66360 = G__66361;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65814 = conformed_args__45404__auto__;
var map__65814__$1 = cljs.core.__destructure_map(map__65814);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65814__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65814__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq65813){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65813));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66362 = arguments.length;
var i__5770__auto___66363 = (0);
while(true){
if((i__5770__auto___66363 < len__5769__auto___66362)){
args__5775__auto__.push((arguments[i__5770__auto___66363]));

var G__66364 = (i__5770__auto___66363 + (1));
i__5770__auto___66363 = G__66364;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65818 = conformed_args__45404__auto__;
var map__65818__$1 = cljs.core.__destructure_map(map__65818);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65818__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65818__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65818__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq65817){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65817));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66365 = arguments.length;
var i__5770__auto___66366 = (0);
while(true){
if((i__5770__auto___66366 < len__5769__auto___66365)){
args__5775__auto__.push((arguments[i__5770__auto___66366]));

var G__66367 = (i__5770__auto___66366 + (1));
i__5770__auto___66366 = G__66367;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65820 = conformed_args__45404__auto__;
var map__65820__$1 = cljs.core.__destructure_map(map__65820);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65820__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65820__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65820__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq65819){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65819));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66368 = arguments.length;
var i__5770__auto___66369 = (0);
while(true){
if((i__5770__auto___66369 < len__5769__auto___66368)){
args__5775__auto__.push((arguments[i__5770__auto___66369]));

var G__66370 = (i__5770__auto___66369 + (1));
i__5770__auto___66369 = G__66370;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65824 = conformed_args__45404__auto__;
var map__65824__$1 = cljs.core.__destructure_map(map__65824);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65824__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65824__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65824__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq65823){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65823));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66371 = arguments.length;
var i__5770__auto___66372 = (0);
while(true){
if((i__5770__auto___66372 < len__5769__auto___66371)){
args__5775__auto__.push((arguments[i__5770__auto___66372]));

var G__66373 = (i__5770__auto___66372 + (1));
i__5770__auto___66372 = G__66373;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65829 = conformed_args__45404__auto__;
var map__65829__$1 = cljs.core.__destructure_map(map__65829);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq65828){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65828));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66374 = arguments.length;
var i__5770__auto___66375 = (0);
while(true){
if((i__5770__auto___66375 < len__5769__auto___66374)){
args__5775__auto__.push((arguments[i__5770__auto___66375]));

var G__66376 = (i__5770__auto___66375 + (1));
i__5770__auto___66375 = G__66376;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65833 = conformed_args__45404__auto__;
var map__65833__$1 = cljs.core.__destructure_map(map__65833);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq65832){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65832));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66377 = arguments.length;
var i__5770__auto___66378 = (0);
while(true){
if((i__5770__auto___66378 < len__5769__auto___66377)){
args__5775__auto__.push((arguments[i__5770__auto___66378]));

var G__66379 = (i__5770__auto___66378 + (1));
i__5770__auto___66378 = G__66379;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65838 = conformed_args__45404__auto__;
var map__65838__$1 = cljs.core.__destructure_map(map__65838);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65838__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65838__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65838__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq65836){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65836));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66380 = arguments.length;
var i__5770__auto___66381 = (0);
while(true){
if((i__5770__auto___66381 < len__5769__auto___66380)){
args__5775__auto__.push((arguments[i__5770__auto___66381]));

var G__66382 = (i__5770__auto___66381 + (1));
i__5770__auto___66381 = G__66382;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65840 = conformed_args__45404__auto__;
var map__65840__$1 = cljs.core.__destructure_map(map__65840);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65840__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65840__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq65839){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65839));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66383 = arguments.length;
var i__5770__auto___66384 = (0);
while(true){
if((i__5770__auto___66384 < len__5769__auto___66383)){
args__5775__auto__.push((arguments[i__5770__auto___66384]));

var G__66385 = (i__5770__auto___66384 + (1));
i__5770__auto___66384 = G__66385;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65842 = conformed_args__45404__auto__;
var map__65842__$1 = cljs.core.__destructure_map(map__65842);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65842__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65842__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65842__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq65841){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65841));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66386 = arguments.length;
var i__5770__auto___66387 = (0);
while(true){
if((i__5770__auto___66387 < len__5769__auto___66386)){
args__5775__auto__.push((arguments[i__5770__auto___66387]));

var G__66388 = (i__5770__auto___66387 + (1));
i__5770__auto___66387 = G__66388;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65845 = conformed_args__45404__auto__;
var map__65845__$1 = cljs.core.__destructure_map(map__65845);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65845__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65845__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65845__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq65843){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65843));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66389 = arguments.length;
var i__5770__auto___66390 = (0);
while(true){
if((i__5770__auto___66390 < len__5769__auto___66389)){
args__5775__auto__.push((arguments[i__5770__auto___66390]));

var G__66391 = (i__5770__auto___66390 + (1));
i__5770__auto___66390 = G__66391;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65863 = conformed_args__45404__auto__;
var map__65863__$1 = cljs.core.__destructure_map(map__65863);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq65852){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65852));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66392 = arguments.length;
var i__5770__auto___66393 = (0);
while(true){
if((i__5770__auto___66393 < len__5769__auto___66392)){
args__5775__auto__.push((arguments[i__5770__auto___66393]));

var G__66394 = (i__5770__auto___66393 + (1));
i__5770__auto___66393 = G__66394;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65875 = conformed_args__45404__auto__;
var map__65875__$1 = cljs.core.__destructure_map(map__65875);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65875__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65875__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65875__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq65871){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65871));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66395 = arguments.length;
var i__5770__auto___66396 = (0);
while(true){
if((i__5770__auto___66396 < len__5769__auto___66395)){
args__5775__auto__.push((arguments[i__5770__auto___66396]));

var G__66397 = (i__5770__auto___66396 + (1));
i__5770__auto___66396 = G__66397;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65880 = conformed_args__45404__auto__;
var map__65880__$1 = cljs.core.__destructure_map(map__65880);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65880__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65880__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65880__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq65876){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65876));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66398 = arguments.length;
var i__5770__auto___66399 = (0);
while(true){
if((i__5770__auto___66399 < len__5769__auto___66398)){
args__5775__auto__.push((arguments[i__5770__auto___66399]));

var G__66400 = (i__5770__auto___66399 + (1));
i__5770__auto___66399 = G__66400;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65882 = conformed_args__45404__auto__;
var map__65882__$1 = cljs.core.__destructure_map(map__65882);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq65881){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65881));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66401 = arguments.length;
var i__5770__auto___66402 = (0);
while(true){
if((i__5770__auto___66402 < len__5769__auto___66401)){
args__5775__auto__.push((arguments[i__5770__auto___66402]));

var G__66403 = (i__5770__auto___66402 + (1));
i__5770__auto___66402 = G__66403;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65884 = conformed_args__45404__auto__;
var map__65884__$1 = cljs.core.__destructure_map(map__65884);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65884__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq65883){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65883));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66404 = arguments.length;
var i__5770__auto___66405 = (0);
while(true){
if((i__5770__auto___66405 < len__5769__auto___66404)){
args__5775__auto__.push((arguments[i__5770__auto___66405]));

var G__66406 = (i__5770__auto___66405 + (1));
i__5770__auto___66405 = G__66406;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65891 = conformed_args__45404__auto__;
var map__65891__$1 = cljs.core.__destructure_map(map__65891);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq65887){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65887));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66407 = arguments.length;
var i__5770__auto___66408 = (0);
while(true){
if((i__5770__auto___66408 < len__5769__auto___66407)){
args__5775__auto__.push((arguments[i__5770__auto___66408]));

var G__66409 = (i__5770__auto___66408 + (1));
i__5770__auto___66408 = G__66409;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65907 = conformed_args__45404__auto__;
var map__65907__$1 = cljs.core.__destructure_map(map__65907);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65907__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65907__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65907__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq65894){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65894));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66410 = arguments.length;
var i__5770__auto___66411 = (0);
while(true){
if((i__5770__auto___66411 < len__5769__auto___66410)){
args__5775__auto__.push((arguments[i__5770__auto___66411]));

var G__66412 = (i__5770__auto___66411 + (1));
i__5770__auto___66411 = G__66412;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65912 = conformed_args__45404__auto__;
var map__65912__$1 = cljs.core.__destructure_map(map__65912);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq65910){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65910));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66413 = arguments.length;
var i__5770__auto___66414 = (0);
while(true){
if((i__5770__auto___66414 < len__5769__auto___66413)){
args__5775__auto__.push((arguments[i__5770__auto___66414]));

var G__66415 = (i__5770__auto___66414 + (1));
i__5770__auto___66414 = G__66415;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65918 = conformed_args__45404__auto__;
var map__65918__$1 = cljs.core.__destructure_map(map__65918);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65918__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65918__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65918__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq65915){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65915));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66416 = arguments.length;
var i__5770__auto___66417 = (0);
while(true){
if((i__5770__auto___66417 < len__5769__auto___66416)){
args__5775__auto__.push((arguments[i__5770__auto___66417]));

var G__66418 = (i__5770__auto___66417 + (1));
i__5770__auto___66417 = G__66418;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65923 = conformed_args__45404__auto__;
var map__65923__$1 = cljs.core.__destructure_map(map__65923);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65923__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65923__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65923__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq65921){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65921));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66419 = arguments.length;
var i__5770__auto___66420 = (0);
while(true){
if((i__5770__auto___66420 < len__5769__auto___66419)){
args__5775__auto__.push((arguments[i__5770__auto___66420]));

var G__66421 = (i__5770__auto___66420 + (1));
i__5770__auto___66420 = G__66421;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65928 = conformed_args__45404__auto__;
var map__65928__$1 = cljs.core.__destructure_map(map__65928);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq65926){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65926));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66422 = arguments.length;
var i__5770__auto___66423 = (0);
while(true){
if((i__5770__auto___66423 < len__5769__auto___66422)){
args__5775__auto__.push((arguments[i__5770__auto___66423]));

var G__66424 = (i__5770__auto___66423 + (1));
i__5770__auto___66423 = G__66424;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65932 = conformed_args__45404__auto__;
var map__65932__$1 = cljs.core.__destructure_map(map__65932);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65932__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65932__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65932__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq65931){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65931));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66425 = arguments.length;
var i__5770__auto___66426 = (0);
while(true){
if((i__5770__auto___66426 < len__5769__auto___66425)){
args__5775__auto__.push((arguments[i__5770__auto___66426]));

var G__66427 = (i__5770__auto___66426 + (1));
i__5770__auto___66426 = G__66427;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65936 = conformed_args__45404__auto__;
var map__65936__$1 = cljs.core.__destructure_map(map__65936);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65936__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65936__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65936__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq65935){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65935));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66428 = arguments.length;
var i__5770__auto___66429 = (0);
while(true){
if((i__5770__auto___66429 < len__5769__auto___66428)){
args__5775__auto__.push((arguments[i__5770__auto___66429]));

var G__66430 = (i__5770__auto___66429 + (1));
i__5770__auto___66429 = G__66430;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65942 = conformed_args__45404__auto__;
var map__65942__$1 = cljs.core.__destructure_map(map__65942);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65942__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65942__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65942__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq65939){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65939));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66431 = arguments.length;
var i__5770__auto___66432 = (0);
while(true){
if((i__5770__auto___66432 < len__5769__auto___66431)){
args__5775__auto__.push((arguments[i__5770__auto___66432]));

var G__66433 = (i__5770__auto___66432 + (1));
i__5770__auto___66432 = G__66433;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65944 = conformed_args__45404__auto__;
var map__65944__$1 = cljs.core.__destructure_map(map__65944);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65944__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65944__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65944__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq65943){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65943));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66434 = arguments.length;
var i__5770__auto___66435 = (0);
while(true){
if((i__5770__auto___66435 < len__5769__auto___66434)){
args__5775__auto__.push((arguments[i__5770__auto___66435]));

var G__66436 = (i__5770__auto___66435 + (1));
i__5770__auto___66435 = G__66436;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65950 = conformed_args__45404__auto__;
var map__65950__$1 = cljs.core.__destructure_map(map__65950);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65950__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65950__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65950__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq65949){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65949));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66437 = arguments.length;
var i__5770__auto___66438 = (0);
while(true){
if((i__5770__auto___66438 < len__5769__auto___66437)){
args__5775__auto__.push((arguments[i__5770__auto___66438]));

var G__66439 = (i__5770__auto___66438 + (1));
i__5770__auto___66438 = G__66439;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65954 = conformed_args__45404__auto__;
var map__65954__$1 = cljs.core.__destructure_map(map__65954);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq65953){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65953));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66440 = arguments.length;
var i__5770__auto___66441 = (0);
while(true){
if((i__5770__auto___66441 < len__5769__auto___66440)){
args__5775__auto__.push((arguments[i__5770__auto___66441]));

var G__66442 = (i__5770__auto___66441 + (1));
i__5770__auto___66441 = G__66442;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65956 = conformed_args__45404__auto__;
var map__65956__$1 = cljs.core.__destructure_map(map__65956);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq65955){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65955));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66443 = arguments.length;
var i__5770__auto___66444 = (0);
while(true){
if((i__5770__auto___66444 < len__5769__auto___66443)){
args__5775__auto__.push((arguments[i__5770__auto___66444]));

var G__66445 = (i__5770__auto___66444 + (1));
i__5770__auto___66444 = G__66445;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65959 = conformed_args__45404__auto__;
var map__65959__$1 = cljs.core.__destructure_map(map__65959);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65959__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65959__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65959__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq65958){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65958));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66446 = arguments.length;
var i__5770__auto___66447 = (0);
while(true){
if((i__5770__auto___66447 < len__5769__auto___66446)){
args__5775__auto__.push((arguments[i__5770__auto___66447]));

var G__66448 = (i__5770__auto___66447 + (1));
i__5770__auto___66447 = G__66448;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65961 = conformed_args__45404__auto__;
var map__65961__$1 = cljs.core.__destructure_map(map__65961);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq65960){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65960));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66449 = arguments.length;
var i__5770__auto___66450 = (0);
while(true){
if((i__5770__auto___66450 < len__5769__auto___66449)){
args__5775__auto__.push((arguments[i__5770__auto___66450]));

var G__66451 = (i__5770__auto___66450 + (1));
i__5770__auto___66450 = G__66451;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65964 = conformed_args__45404__auto__;
var map__65964__$1 = cljs.core.__destructure_map(map__65964);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65964__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq65963){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65963));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66452 = arguments.length;
var i__5770__auto___66453 = (0);
while(true){
if((i__5770__auto___66453 < len__5769__auto___66452)){
args__5775__auto__.push((arguments[i__5770__auto___66453]));

var G__66454 = (i__5770__auto___66453 + (1));
i__5770__auto___66453 = G__66454;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65966 = conformed_args__45404__auto__;
var map__65966__$1 = cljs.core.__destructure_map(map__65966);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65966__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65966__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65966__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq65965){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65965));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66455 = arguments.length;
var i__5770__auto___66456 = (0);
while(true){
if((i__5770__auto___66456 < len__5769__auto___66455)){
args__5775__auto__.push((arguments[i__5770__auto___66456]));

var G__66457 = (i__5770__auto___66456 + (1));
i__5770__auto___66456 = G__66457;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65969 = conformed_args__45404__auto__;
var map__65969__$1 = cljs.core.__destructure_map(map__65969);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65969__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65969__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65969__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq65967){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65967));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66458 = arguments.length;
var i__5770__auto___66459 = (0);
while(true){
if((i__5770__auto___66459 < len__5769__auto___66458)){
args__5775__auto__.push((arguments[i__5770__auto___66459]));

var G__66460 = (i__5770__auto___66459 + (1));
i__5770__auto___66459 = G__66460;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65971 = conformed_args__45404__auto__;
var map__65971__$1 = cljs.core.__destructure_map(map__65971);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65971__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65971__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65971__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq65970){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65970));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66461 = arguments.length;
var i__5770__auto___66462 = (0);
while(true){
if((i__5770__auto___66462 < len__5769__auto___66461)){
args__5775__auto__.push((arguments[i__5770__auto___66462]));

var G__66463 = (i__5770__auto___66462 + (1));
i__5770__auto___66462 = G__66463;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65974 = conformed_args__45404__auto__;
var map__65974__$1 = cljs.core.__destructure_map(map__65974);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65974__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65974__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65974__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq65972){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65972));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66464 = arguments.length;
var i__5770__auto___66465 = (0);
while(true){
if((i__5770__auto___66465 < len__5769__auto___66464)){
args__5775__auto__.push((arguments[i__5770__auto___66465]));

var G__66466 = (i__5770__auto___66465 + (1));
i__5770__auto___66465 = G__66466;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65976 = conformed_args__45404__auto__;
var map__65976__$1 = cljs.core.__destructure_map(map__65976);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq65975){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65975));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66467 = arguments.length;
var i__5770__auto___66468 = (0);
while(true){
if((i__5770__auto___66468 < len__5769__auto___66467)){
args__5775__auto__.push((arguments[i__5770__auto___66468]));

var G__66469 = (i__5770__auto___66468 + (1));
i__5770__auto___66468 = G__66469;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65979 = conformed_args__45404__auto__;
var map__65979__$1 = cljs.core.__destructure_map(map__65979);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65979__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65979__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65979__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq65978){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65978));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66470 = arguments.length;
var i__5770__auto___66471 = (0);
while(true){
if((i__5770__auto___66471 < len__5769__auto___66470)){
args__5775__auto__.push((arguments[i__5770__auto___66471]));

var G__66472 = (i__5770__auto___66471 + (1));
i__5770__auto___66471 = G__66472;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65981 = conformed_args__45404__auto__;
var map__65981__$1 = cljs.core.__destructure_map(map__65981);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq65980){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65980));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66473 = arguments.length;
var i__5770__auto___66474 = (0);
while(true){
if((i__5770__auto___66474 < len__5769__auto___66473)){
args__5775__auto__.push((arguments[i__5770__auto___66474]));

var G__66475 = (i__5770__auto___66474 + (1));
i__5770__auto___66474 = G__66475;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65983 = conformed_args__45404__auto__;
var map__65983__$1 = cljs.core.__destructure_map(map__65983);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq65982){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65982));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66476 = arguments.length;
var i__5770__auto___66477 = (0);
while(true){
if((i__5770__auto___66477 < len__5769__auto___66476)){
args__5775__auto__.push((arguments[i__5770__auto___66477]));

var G__66478 = (i__5770__auto___66477 + (1));
i__5770__auto___66477 = G__66478;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65985 = conformed_args__45404__auto__;
var map__65985__$1 = cljs.core.__destructure_map(map__65985);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65985__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65985__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65985__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq65984){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65984));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66479 = arguments.length;
var i__5770__auto___66480 = (0);
while(true){
if((i__5770__auto___66480 < len__5769__auto___66479)){
args__5775__auto__.push((arguments[i__5770__auto___66480]));

var G__66481 = (i__5770__auto___66480 + (1));
i__5770__auto___66480 = G__66481;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65987 = conformed_args__45404__auto__;
var map__65987__$1 = cljs.core.__destructure_map(map__65987);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq65986){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65986));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66482 = arguments.length;
var i__5770__auto___66483 = (0);
while(true){
if((i__5770__auto___66483 < len__5769__auto___66482)){
args__5775__auto__.push((arguments[i__5770__auto___66483]));

var G__66484 = (i__5770__auto___66483 + (1));
i__5770__auto___66483 = G__66484;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65989 = conformed_args__45404__auto__;
var map__65989__$1 = cljs.core.__destructure_map(map__65989);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65989__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65989__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65989__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq65988){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65988));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66485 = arguments.length;
var i__5770__auto___66486 = (0);
while(true){
if((i__5770__auto___66486 < len__5769__auto___66485)){
args__5775__auto__.push((arguments[i__5770__auto___66486]));

var G__66487 = (i__5770__auto___66486 + (1));
i__5770__auto___66486 = G__66487;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65991 = conformed_args__45404__auto__;
var map__65991__$1 = cljs.core.__destructure_map(map__65991);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65991__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65991__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65991__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq65990){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65990));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66488 = arguments.length;
var i__5770__auto___66489 = (0);
while(true){
if((i__5770__auto___66489 < len__5769__auto___66488)){
args__5775__auto__.push((arguments[i__5770__auto___66489]));

var G__66490 = (i__5770__auto___66489 + (1));
i__5770__auto___66489 = G__66490;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65993 = conformed_args__45404__auto__;
var map__65993__$1 = cljs.core.__destructure_map(map__65993);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq65992){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65992));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66491 = arguments.length;
var i__5770__auto___66492 = (0);
while(true){
if((i__5770__auto___66492 < len__5769__auto___66491)){
args__5775__auto__.push((arguments[i__5770__auto___66492]));

var G__66493 = (i__5770__auto___66492 + (1));
i__5770__auto___66492 = G__66493;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65995 = conformed_args__45404__auto__;
var map__65995__$1 = cljs.core.__destructure_map(map__65995);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65995__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65995__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65995__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq65994){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65994));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66494 = arguments.length;
var i__5770__auto___66495 = (0);
while(true){
if((i__5770__auto___66495 < len__5769__auto___66494)){
args__5775__auto__.push((arguments[i__5770__auto___66495]));

var G__66496 = (i__5770__auto___66495 + (1));
i__5770__auto___66495 = G__66496;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65997 = conformed_args__45404__auto__;
var map__65997__$1 = cljs.core.__destructure_map(map__65997);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65997__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65997__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65997__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq65996){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65996));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66497 = arguments.length;
var i__5770__auto___66498 = (0);
while(true){
if((i__5770__auto___66498 < len__5769__auto___66497)){
args__5775__auto__.push((arguments[i__5770__auto___66498]));

var G__66499 = (i__5770__auto___66498 + (1));
i__5770__auto___66498 = G__66499;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65999 = conformed_args__45404__auto__;
var map__65999__$1 = cljs.core.__destructure_map(map__65999);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq65998){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65998));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66500 = arguments.length;
var i__5770__auto___66501 = (0);
while(true){
if((i__5770__auto___66501 < len__5769__auto___66500)){
args__5775__auto__.push((arguments[i__5770__auto___66501]));

var G__66502 = (i__5770__auto___66501 + (1));
i__5770__auto___66501 = G__66502;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66001 = conformed_args__45404__auto__;
var map__66001__$1 = cljs.core.__destructure_map(map__66001);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq66000){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66000));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66503 = arguments.length;
var i__5770__auto___66504 = (0);
while(true){
if((i__5770__auto___66504 < len__5769__auto___66503)){
args__5775__auto__.push((arguments[i__5770__auto___66504]));

var G__66505 = (i__5770__auto___66504 + (1));
i__5770__auto___66504 = G__66505;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66003 = conformed_args__45404__auto__;
var map__66003__$1 = cljs.core.__destructure_map(map__66003);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq66002){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66002));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66506 = arguments.length;
var i__5770__auto___66507 = (0);
while(true){
if((i__5770__auto___66507 < len__5769__auto___66506)){
args__5775__auto__.push((arguments[i__5770__auto___66507]));

var G__66508 = (i__5770__auto___66507 + (1));
i__5770__auto___66507 = G__66508;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66005 = conformed_args__45404__auto__;
var map__66005__$1 = cljs.core.__destructure_map(map__66005);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq66004){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66004));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66509 = arguments.length;
var i__5770__auto___66510 = (0);
while(true){
if((i__5770__auto___66510 < len__5769__auto___66509)){
args__5775__auto__.push((arguments[i__5770__auto___66510]));

var G__66511 = (i__5770__auto___66510 + (1));
i__5770__auto___66510 = G__66511;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66007 = conformed_args__45404__auto__;
var map__66007__$1 = cljs.core.__destructure_map(map__66007);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq66006){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66006));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66512 = arguments.length;
var i__5770__auto___66513 = (0);
while(true){
if((i__5770__auto___66513 < len__5769__auto___66512)){
args__5775__auto__.push((arguments[i__5770__auto___66513]));

var G__66514 = (i__5770__auto___66513 + (1));
i__5770__auto___66513 = G__66514;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66009 = conformed_args__45404__auto__;
var map__66009__$1 = cljs.core.__destructure_map(map__66009);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq66008){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66008));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66515 = arguments.length;
var i__5770__auto___66516 = (0);
while(true){
if((i__5770__auto___66516 < len__5769__auto___66515)){
args__5775__auto__.push((arguments[i__5770__auto___66516]));

var G__66517 = (i__5770__auto___66516 + (1));
i__5770__auto___66516 = G__66517;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66011 = conformed_args__45404__auto__;
var map__66011__$1 = cljs.core.__destructure_map(map__66011);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq66010){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66010));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66518 = arguments.length;
var i__5770__auto___66519 = (0);
while(true){
if((i__5770__auto___66519 < len__5769__auto___66518)){
args__5775__auto__.push((arguments[i__5770__auto___66519]));

var G__66520 = (i__5770__auto___66519 + (1));
i__5770__auto___66519 = G__66520;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66013 = conformed_args__45404__auto__;
var map__66013__$1 = cljs.core.__destructure_map(map__66013);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66013__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66013__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66013__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq66012){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66012));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66521 = arguments.length;
var i__5770__auto___66522 = (0);
while(true){
if((i__5770__auto___66522 < len__5769__auto___66521)){
args__5775__auto__.push((arguments[i__5770__auto___66522]));

var G__66523 = (i__5770__auto___66522 + (1));
i__5770__auto___66522 = G__66523;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66015 = conformed_args__45404__auto__;
var map__66015__$1 = cljs.core.__destructure_map(map__66015);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq66014){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66014));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66524 = arguments.length;
var i__5770__auto___66525 = (0);
while(true){
if((i__5770__auto___66525 < len__5769__auto___66524)){
args__5775__auto__.push((arguments[i__5770__auto___66525]));

var G__66526 = (i__5770__auto___66525 + (1));
i__5770__auto___66525 = G__66526;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66017 = conformed_args__45404__auto__;
var map__66017__$1 = cljs.core.__destructure_map(map__66017);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq66016){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66016));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66527 = arguments.length;
var i__5770__auto___66528 = (0);
while(true){
if((i__5770__auto___66528 < len__5769__auto___66527)){
args__5775__auto__.push((arguments[i__5770__auto___66528]));

var G__66529 = (i__5770__auto___66528 + (1));
i__5770__auto___66528 = G__66529;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66019 = conformed_args__45404__auto__;
var map__66019__$1 = cljs.core.__destructure_map(map__66019);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66019__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66019__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66019__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq66018){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66018));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66530 = arguments.length;
var i__5770__auto___66531 = (0);
while(true){
if((i__5770__auto___66531 < len__5769__auto___66530)){
args__5775__auto__.push((arguments[i__5770__auto___66531]));

var G__66532 = (i__5770__auto___66531 + (1));
i__5770__auto___66531 = G__66532;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66021 = conformed_args__45404__auto__;
var map__66021__$1 = cljs.core.__destructure_map(map__66021);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66021__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66021__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq66020){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66020));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66533 = arguments.length;
var i__5770__auto___66534 = (0);
while(true){
if((i__5770__auto___66534 < len__5769__auto___66533)){
args__5775__auto__.push((arguments[i__5770__auto___66534]));

var G__66535 = (i__5770__auto___66534 + (1));
i__5770__auto___66534 = G__66535;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66023 = conformed_args__45404__auto__;
var map__66023__$1 = cljs.core.__destructure_map(map__66023);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66023__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66023__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66023__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq66022){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66022));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66536 = arguments.length;
var i__5770__auto___66537 = (0);
while(true){
if((i__5770__auto___66537 < len__5769__auto___66536)){
args__5775__auto__.push((arguments[i__5770__auto___66537]));

var G__66538 = (i__5770__auto___66537 + (1));
i__5770__auto___66537 = G__66538;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66025 = conformed_args__45404__auto__;
var map__66025__$1 = cljs.core.__destructure_map(map__66025);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq66024){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66024));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66539 = arguments.length;
var i__5770__auto___66540 = (0);
while(true){
if((i__5770__auto___66540 < len__5769__auto___66539)){
args__5775__auto__.push((arguments[i__5770__auto___66540]));

var G__66541 = (i__5770__auto___66540 + (1));
i__5770__auto___66540 = G__66541;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66027 = conformed_args__45404__auto__;
var map__66027__$1 = cljs.core.__destructure_map(map__66027);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66027__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66027__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66027__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq66026){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66026));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66542 = arguments.length;
var i__5770__auto___66543 = (0);
while(true){
if((i__5770__auto___66543 < len__5769__auto___66542)){
args__5775__auto__.push((arguments[i__5770__auto___66543]));

var G__66544 = (i__5770__auto___66543 + (1));
i__5770__auto___66543 = G__66544;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66029 = conformed_args__45404__auto__;
var map__66029__$1 = cljs.core.__destructure_map(map__66029);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66029__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66029__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66029__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq66028){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66028));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66545 = arguments.length;
var i__5770__auto___66546 = (0);
while(true){
if((i__5770__auto___66546 < len__5769__auto___66545)){
args__5775__auto__.push((arguments[i__5770__auto___66546]));

var G__66547 = (i__5770__auto___66546 + (1));
i__5770__auto___66546 = G__66547;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66031 = conformed_args__45404__auto__;
var map__66031__$1 = cljs.core.__destructure_map(map__66031);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66031__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66031__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66031__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq66030){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66030));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66548 = arguments.length;
var i__5770__auto___66549 = (0);
while(true){
if((i__5770__auto___66549 < len__5769__auto___66548)){
args__5775__auto__.push((arguments[i__5770__auto___66549]));

var G__66550 = (i__5770__auto___66549 + (1));
i__5770__auto___66549 = G__66550;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66033 = conformed_args__45404__auto__;
var map__66033__$1 = cljs.core.__destructure_map(map__66033);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66033__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66033__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66033__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq66032){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66032));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66551 = arguments.length;
var i__5770__auto___66552 = (0);
while(true){
if((i__5770__auto___66552 < len__5769__auto___66551)){
args__5775__auto__.push((arguments[i__5770__auto___66552]));

var G__66553 = (i__5770__auto___66552 + (1));
i__5770__auto___66552 = G__66553;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66035 = conformed_args__45404__auto__;
var map__66035__$1 = cljs.core.__destructure_map(map__66035);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq66034){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66034));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66554 = arguments.length;
var i__5770__auto___66555 = (0);
while(true){
if((i__5770__auto___66555 < len__5769__auto___66554)){
args__5775__auto__.push((arguments[i__5770__auto___66555]));

var G__66556 = (i__5770__auto___66555 + (1));
i__5770__auto___66555 = G__66556;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66037 = conformed_args__45404__auto__;
var map__66037__$1 = cljs.core.__destructure_map(map__66037);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq66036){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66036));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66557 = arguments.length;
var i__5770__auto___66558 = (0);
while(true){
if((i__5770__auto___66558 < len__5769__auto___66557)){
args__5775__auto__.push((arguments[i__5770__auto___66558]));

var G__66559 = (i__5770__auto___66558 + (1));
i__5770__auto___66558 = G__66559;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66039 = conformed_args__45404__auto__;
var map__66039__$1 = cljs.core.__destructure_map(map__66039);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66039__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66039__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq66038){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66038));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66560 = arguments.length;
var i__5770__auto___66561 = (0);
while(true){
if((i__5770__auto___66561 < len__5769__auto___66560)){
args__5775__auto__.push((arguments[i__5770__auto___66561]));

var G__66562 = (i__5770__auto___66561 + (1));
i__5770__auto___66561 = G__66562;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66041 = conformed_args__45404__auto__;
var map__66041__$1 = cljs.core.__destructure_map(map__66041);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66041__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66041__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq66040){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66040));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66563 = arguments.length;
var i__5770__auto___66564 = (0);
while(true){
if((i__5770__auto___66564 < len__5769__auto___66563)){
args__5775__auto__.push((arguments[i__5770__auto___66564]));

var G__66565 = (i__5770__auto___66564 + (1));
i__5770__auto___66564 = G__66565;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66043 = conformed_args__45404__auto__;
var map__66043__$1 = cljs.core.__destructure_map(map__66043);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66043__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66043__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66043__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq66042){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66042));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66566 = arguments.length;
var i__5770__auto___66567 = (0);
while(true){
if((i__5770__auto___66567 < len__5769__auto___66566)){
args__5775__auto__.push((arguments[i__5770__auto___66567]));

var G__66568 = (i__5770__auto___66567 + (1));
i__5770__auto___66567 = G__66568;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66045 = conformed_args__45404__auto__;
var map__66045__$1 = cljs.core.__destructure_map(map__66045);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66045__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66045__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66045__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq66044){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66044));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66569 = arguments.length;
var i__5770__auto___66570 = (0);
while(true){
if((i__5770__auto___66570 < len__5769__auto___66569)){
args__5775__auto__.push((arguments[i__5770__auto___66570]));

var G__66571 = (i__5770__auto___66570 + (1));
i__5770__auto___66570 = G__66571;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66047 = conformed_args__45404__auto__;
var map__66047__$1 = cljs.core.__destructure_map(map__66047);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66047__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66047__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66047__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq66046){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66046));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66572 = arguments.length;
var i__5770__auto___66573 = (0);
while(true){
if((i__5770__auto___66573 < len__5769__auto___66572)){
args__5775__auto__.push((arguments[i__5770__auto___66573]));

var G__66574 = (i__5770__auto___66573 + (1));
i__5770__auto___66573 = G__66574;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66049 = conformed_args__45404__auto__;
var map__66049__$1 = cljs.core.__destructure_map(map__66049);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66049__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66049__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66049__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq66048){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66048));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66575 = arguments.length;
var i__5770__auto___66576 = (0);
while(true){
if((i__5770__auto___66576 < len__5769__auto___66575)){
args__5775__auto__.push((arguments[i__5770__auto___66576]));

var G__66577 = (i__5770__auto___66576 + (1));
i__5770__auto___66576 = G__66577;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66051 = conformed_args__45404__auto__;
var map__66051__$1 = cljs.core.__destructure_map(map__66051);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66051__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66051__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66051__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq66050){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66050));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66578 = arguments.length;
var i__5770__auto___66579 = (0);
while(true){
if((i__5770__auto___66579 < len__5769__auto___66578)){
args__5775__auto__.push((arguments[i__5770__auto___66579]));

var G__66580 = (i__5770__auto___66579 + (1));
i__5770__auto___66579 = G__66580;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66053 = conformed_args__45404__auto__;
var map__66053__$1 = cljs.core.__destructure_map(map__66053);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq66052){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66052));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66581 = arguments.length;
var i__5770__auto___66582 = (0);
while(true){
if((i__5770__auto___66582 < len__5769__auto___66581)){
args__5775__auto__.push((arguments[i__5770__auto___66582]));

var G__66583 = (i__5770__auto___66582 + (1));
i__5770__auto___66582 = G__66583;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66055 = conformed_args__45404__auto__;
var map__66055__$1 = cljs.core.__destructure_map(map__66055);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq66054){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66054));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66584 = arguments.length;
var i__5770__auto___66585 = (0);
while(true){
if((i__5770__auto___66585 < len__5769__auto___66584)){
args__5775__auto__.push((arguments[i__5770__auto___66585]));

var G__66586 = (i__5770__auto___66585 + (1));
i__5770__auto___66585 = G__66586;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66057 = conformed_args__45404__auto__;
var map__66057__$1 = cljs.core.__destructure_map(map__66057);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66057__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66057__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66057__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq66056){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66056));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66587 = arguments.length;
var i__5770__auto___66588 = (0);
while(true){
if((i__5770__auto___66588 < len__5769__auto___66587)){
args__5775__auto__.push((arguments[i__5770__auto___66588]));

var G__66589 = (i__5770__auto___66588 + (1));
i__5770__auto___66588 = G__66589;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66059 = conformed_args__45404__auto__;
var map__66059__$1 = cljs.core.__destructure_map(map__66059);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq66058){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66058));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66590 = arguments.length;
var i__5770__auto___66591 = (0);
while(true){
if((i__5770__auto___66591 < len__5769__auto___66590)){
args__5775__auto__.push((arguments[i__5770__auto___66591]));

var G__66592 = (i__5770__auto___66591 + (1));
i__5770__auto___66591 = G__66592;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66061 = conformed_args__45404__auto__;
var map__66061__$1 = cljs.core.__destructure_map(map__66061);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66061__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66061__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66061__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq66060){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66060));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66593 = arguments.length;
var i__5770__auto___66594 = (0);
while(true){
if((i__5770__auto___66594 < len__5769__auto___66593)){
args__5775__auto__.push((arguments[i__5770__auto___66594]));

var G__66595 = (i__5770__auto___66594 + (1));
i__5770__auto___66594 = G__66595;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66063 = conformed_args__45404__auto__;
var map__66063__$1 = cljs.core.__destructure_map(map__66063);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66063__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66063__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66063__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq66062){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66062));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66596 = arguments.length;
var i__5770__auto___66597 = (0);
while(true){
if((i__5770__auto___66597 < len__5769__auto___66596)){
args__5775__auto__.push((arguments[i__5770__auto___66597]));

var G__66598 = (i__5770__auto___66597 + (1));
i__5770__auto___66597 = G__66598;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66065 = conformed_args__45404__auto__;
var map__66065__$1 = cljs.core.__destructure_map(map__66065);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66065__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66065__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66065__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq66064){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66064));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66599 = arguments.length;
var i__5770__auto___66600 = (0);
while(true){
if((i__5770__auto___66600 < len__5769__auto___66599)){
args__5775__auto__.push((arguments[i__5770__auto___66600]));

var G__66601 = (i__5770__auto___66600 + (1));
i__5770__auto___66600 = G__66601;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66067 = conformed_args__45404__auto__;
var map__66067__$1 = cljs.core.__destructure_map(map__66067);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq66066){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66066));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66602 = arguments.length;
var i__5770__auto___66603 = (0);
while(true){
if((i__5770__auto___66603 < len__5769__auto___66602)){
args__5775__auto__.push((arguments[i__5770__auto___66603]));

var G__66604 = (i__5770__auto___66603 + (1));
i__5770__auto___66603 = G__66604;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66069 = conformed_args__45404__auto__;
var map__66069__$1 = cljs.core.__destructure_map(map__66069);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66069__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66069__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66069__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq66068){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66068));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66605 = arguments.length;
var i__5770__auto___66606 = (0);
while(true){
if((i__5770__auto___66606 < len__5769__auto___66605)){
args__5775__auto__.push((arguments[i__5770__auto___66606]));

var G__66607 = (i__5770__auto___66606 + (1));
i__5770__auto___66606 = G__66607;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66071 = conformed_args__45404__auto__;
var map__66071__$1 = cljs.core.__destructure_map(map__66071);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq66070){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66070));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66608 = arguments.length;
var i__5770__auto___66609 = (0);
while(true){
if((i__5770__auto___66609 < len__5769__auto___66608)){
args__5775__auto__.push((arguments[i__5770__auto___66609]));

var G__66610 = (i__5770__auto___66609 + (1));
i__5770__auto___66609 = G__66610;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66073 = conformed_args__45404__auto__;
var map__66073__$1 = cljs.core.__destructure_map(map__66073);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq66072){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66072));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66611 = arguments.length;
var i__5770__auto___66612 = (0);
while(true){
if((i__5770__auto___66612 < len__5769__auto___66611)){
args__5775__auto__.push((arguments[i__5770__auto___66612]));

var G__66613 = (i__5770__auto___66612 + (1));
i__5770__auto___66612 = G__66613;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66075 = conformed_args__45404__auto__;
var map__66075__$1 = cljs.core.__destructure_map(map__66075);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66075__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66075__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66075__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq66074){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66074));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66614 = arguments.length;
var i__5770__auto___66615 = (0);
while(true){
if((i__5770__auto___66615 < len__5769__auto___66614)){
args__5775__auto__.push((arguments[i__5770__auto___66615]));

var G__66616 = (i__5770__auto___66615 + (1));
i__5770__auto___66615 = G__66616;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66077 = conformed_args__45404__auto__;
var map__66077__$1 = cljs.core.__destructure_map(map__66077);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq66076){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66076));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66617 = arguments.length;
var i__5770__auto___66618 = (0);
while(true){
if((i__5770__auto___66618 < len__5769__auto___66617)){
args__5775__auto__.push((arguments[i__5770__auto___66618]));

var G__66619 = (i__5770__auto___66618 + (1));
i__5770__auto___66618 = G__66619;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66079 = conformed_args__45404__auto__;
var map__66079__$1 = cljs.core.__destructure_map(map__66079);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66079__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66079__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66079__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq66078){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66078));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66620 = arguments.length;
var i__5770__auto___66621 = (0);
while(true){
if((i__5770__auto___66621 < len__5769__auto___66620)){
args__5775__auto__.push((arguments[i__5770__auto___66621]));

var G__66622 = (i__5770__auto___66621 + (1));
i__5770__auto___66621 = G__66622;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66081 = conformed_args__45404__auto__;
var map__66081__$1 = cljs.core.__destructure_map(map__66081);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66081__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66081__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66081__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq66080){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66080));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66623 = arguments.length;
var i__5770__auto___66624 = (0);
while(true){
if((i__5770__auto___66624 < len__5769__auto___66623)){
args__5775__auto__.push((arguments[i__5770__auto___66624]));

var G__66625 = (i__5770__auto___66624 + (1));
i__5770__auto___66624 = G__66625;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66083 = conformed_args__45404__auto__;
var map__66083__$1 = cljs.core.__destructure_map(map__66083);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq66082){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66082));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66626 = arguments.length;
var i__5770__auto___66627 = (0);
while(true){
if((i__5770__auto___66627 < len__5769__auto___66626)){
args__5775__auto__.push((arguments[i__5770__auto___66627]));

var G__66628 = (i__5770__auto___66627 + (1));
i__5770__auto___66627 = G__66628;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66085 = conformed_args__45404__auto__;
var map__66085__$1 = cljs.core.__destructure_map(map__66085);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq66084){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66084));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66629 = arguments.length;
var i__5770__auto___66630 = (0);
while(true){
if((i__5770__auto___66630 < len__5769__auto___66629)){
args__5775__auto__.push((arguments[i__5770__auto___66630]));

var G__66631 = (i__5770__auto___66630 + (1));
i__5770__auto___66630 = G__66631;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66087 = conformed_args__45404__auto__;
var map__66087__$1 = cljs.core.__destructure_map(map__66087);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66087__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66087__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66087__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq66086){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66086));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66632 = arguments.length;
var i__5770__auto___66633 = (0);
while(true){
if((i__5770__auto___66633 < len__5769__auto___66632)){
args__5775__auto__.push((arguments[i__5770__auto___66633]));

var G__66634 = (i__5770__auto___66633 + (1));
i__5770__auto___66633 = G__66634;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66089 = conformed_args__45404__auto__;
var map__66089__$1 = cljs.core.__destructure_map(map__66089);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66089__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66089__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66089__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq66088){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66088));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66635 = arguments.length;
var i__5770__auto___66636 = (0);
while(true){
if((i__5770__auto___66636 < len__5769__auto___66635)){
args__5775__auto__.push((arguments[i__5770__auto___66636]));

var G__66637 = (i__5770__auto___66636 + (1));
i__5770__auto___66636 = G__66637;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66091 = conformed_args__45404__auto__;
var map__66091__$1 = cljs.core.__destructure_map(map__66091);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq66090){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66090));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66638 = arguments.length;
var i__5770__auto___66639 = (0);
while(true){
if((i__5770__auto___66639 < len__5769__auto___66638)){
args__5775__auto__.push((arguments[i__5770__auto___66639]));

var G__66640 = (i__5770__auto___66639 + (1));
i__5770__auto___66639 = G__66640;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66093 = conformed_args__45404__auto__;
var map__66093__$1 = cljs.core.__destructure_map(map__66093);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66093__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66093__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq66092){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66092));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66641 = arguments.length;
var i__5770__auto___66642 = (0);
while(true){
if((i__5770__auto___66642 < len__5769__auto___66641)){
args__5775__auto__.push((arguments[i__5770__auto___66642]));

var G__66643 = (i__5770__auto___66642 + (1));
i__5770__auto___66642 = G__66643;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66095 = conformed_args__45404__auto__;
var map__66095__$1 = cljs.core.__destructure_map(map__66095);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq66094){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66094));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66644 = arguments.length;
var i__5770__auto___66645 = (0);
while(true){
if((i__5770__auto___66645 < len__5769__auto___66644)){
args__5775__auto__.push((arguments[i__5770__auto___66645]));

var G__66646 = (i__5770__auto___66645 + (1));
i__5770__auto___66645 = G__66646;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66097 = conformed_args__45404__auto__;
var map__66097__$1 = cljs.core.__destructure_map(map__66097);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66097__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66097__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66097__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq66096){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66096));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66647 = arguments.length;
var i__5770__auto___66648 = (0);
while(true){
if((i__5770__auto___66648 < len__5769__auto___66647)){
args__5775__auto__.push((arguments[i__5770__auto___66648]));

var G__66649 = (i__5770__auto___66648 + (1));
i__5770__auto___66648 = G__66649;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66099 = conformed_args__45404__auto__;
var map__66099__$1 = cljs.core.__destructure_map(map__66099);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66099__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66099__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66099__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq66098){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66098));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66650 = arguments.length;
var i__5770__auto___66651 = (0);
while(true){
if((i__5770__auto___66651 < len__5769__auto___66650)){
args__5775__auto__.push((arguments[i__5770__auto___66651]));

var G__66652 = (i__5770__auto___66651 + (1));
i__5770__auto___66651 = G__66652;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66101 = conformed_args__45404__auto__;
var map__66101__$1 = cljs.core.__destructure_map(map__66101);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66101__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66101__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66101__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq66100){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66100));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66653 = arguments.length;
var i__5770__auto___66654 = (0);
while(true){
if((i__5770__auto___66654 < len__5769__auto___66653)){
args__5775__auto__.push((arguments[i__5770__auto___66654]));

var G__66655 = (i__5770__auto___66654 + (1));
i__5770__auto___66654 = G__66655;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66103 = conformed_args__45404__auto__;
var map__66103__$1 = cljs.core.__destructure_map(map__66103);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66103__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66103__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66103__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq66102){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66102));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66656 = arguments.length;
var i__5770__auto___66657 = (0);
while(true){
if((i__5770__auto___66657 < len__5769__auto___66656)){
args__5775__auto__.push((arguments[i__5770__auto___66657]));

var G__66658 = (i__5770__auto___66657 + (1));
i__5770__auto___66657 = G__66658;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66105 = conformed_args__45404__auto__;
var map__66105__$1 = cljs.core.__destructure_map(map__66105);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66105__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66105__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66105__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq66104){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66104));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66659 = arguments.length;
var i__5770__auto___66660 = (0);
while(true){
if((i__5770__auto___66660 < len__5769__auto___66659)){
args__5775__auto__.push((arguments[i__5770__auto___66660]));

var G__66661 = (i__5770__auto___66660 + (1));
i__5770__auto___66660 = G__66661;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66107 = conformed_args__45404__auto__;
var map__66107__$1 = cljs.core.__destructure_map(map__66107);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66107__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66107__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66107__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq66106){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66106));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66662 = arguments.length;
var i__5770__auto___66663 = (0);
while(true){
if((i__5770__auto___66663 < len__5769__auto___66662)){
args__5775__auto__.push((arguments[i__5770__auto___66663]));

var G__66664 = (i__5770__auto___66663 + (1));
i__5770__auto___66663 = G__66664;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66109 = conformed_args__45404__auto__;
var map__66109__$1 = cljs.core.__destructure_map(map__66109);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq66108){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66108));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66665 = arguments.length;
var i__5770__auto___66666 = (0);
while(true){
if((i__5770__auto___66666 < len__5769__auto___66665)){
args__5775__auto__.push((arguments[i__5770__auto___66666]));

var G__66667 = (i__5770__auto___66666 + (1));
i__5770__auto___66666 = G__66667;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66111 = conformed_args__45404__auto__;
var map__66111__$1 = cljs.core.__destructure_map(map__66111);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66111__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66111__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66111__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq66110){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66110));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66668 = arguments.length;
var i__5770__auto___66669 = (0);
while(true){
if((i__5770__auto___66669 < len__5769__auto___66668)){
args__5775__auto__.push((arguments[i__5770__auto___66669]));

var G__66670 = (i__5770__auto___66669 + (1));
i__5770__auto___66669 = G__66670;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66113 = conformed_args__45404__auto__;
var map__66113__$1 = cljs.core.__destructure_map(map__66113);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq66112){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66112));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66671 = arguments.length;
var i__5770__auto___66672 = (0);
while(true){
if((i__5770__auto___66672 < len__5769__auto___66671)){
args__5775__auto__.push((arguments[i__5770__auto___66672]));

var G__66673 = (i__5770__auto___66672 + (1));
i__5770__auto___66672 = G__66673;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66115 = conformed_args__45404__auto__;
var map__66115__$1 = cljs.core.__destructure_map(map__66115);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66115__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66115__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66115__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq66114){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66114));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66674 = arguments.length;
var i__5770__auto___66675 = (0);
while(true){
if((i__5770__auto___66675 < len__5769__auto___66674)){
args__5775__auto__.push((arguments[i__5770__auto___66675]));

var G__66676 = (i__5770__auto___66675 + (1));
i__5770__auto___66675 = G__66676;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66117 = conformed_args__45404__auto__;
var map__66117__$1 = cljs.core.__destructure_map(map__66117);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66117__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66117__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66117__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq66116){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66116));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66677 = arguments.length;
var i__5770__auto___66678 = (0);
while(true){
if((i__5770__auto___66678 < len__5769__auto___66677)){
args__5775__auto__.push((arguments[i__5770__auto___66678]));

var G__66679 = (i__5770__auto___66678 + (1));
i__5770__auto___66678 = G__66679;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66119 = conformed_args__45404__auto__;
var map__66119__$1 = cljs.core.__destructure_map(map__66119);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66119__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66119__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq66118){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66118));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66680 = arguments.length;
var i__5770__auto___66681 = (0);
while(true){
if((i__5770__auto___66681 < len__5769__auto___66680)){
args__5775__auto__.push((arguments[i__5770__auto___66681]));

var G__66682 = (i__5770__auto___66681 + (1));
i__5770__auto___66681 = G__66682;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66121 = conformed_args__45404__auto__;
var map__66121__$1 = cljs.core.__destructure_map(map__66121);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq66120){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66120));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66683 = arguments.length;
var i__5770__auto___66684 = (0);
while(true){
if((i__5770__auto___66684 < len__5769__auto___66683)){
args__5775__auto__.push((arguments[i__5770__auto___66684]));

var G__66685 = (i__5770__auto___66684 + (1));
i__5770__auto___66684 = G__66685;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66123 = conformed_args__45404__auto__;
var map__66123__$1 = cljs.core.__destructure_map(map__66123);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66123__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66123__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66123__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq66122){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66122));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66686 = arguments.length;
var i__5770__auto___66687 = (0);
while(true){
if((i__5770__auto___66687 < len__5769__auto___66686)){
args__5775__auto__.push((arguments[i__5770__auto___66687]));

var G__66688 = (i__5770__auto___66687 + (1));
i__5770__auto___66687 = G__66688;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66125 = conformed_args__45404__auto__;
var map__66125__$1 = cljs.core.__destructure_map(map__66125);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66125__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66125__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq66124){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66124));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66689 = arguments.length;
var i__5770__auto___66690 = (0);
while(true){
if((i__5770__auto___66690 < len__5769__auto___66689)){
args__5775__auto__.push((arguments[i__5770__auto___66690]));

var G__66691 = (i__5770__auto___66690 + (1));
i__5770__auto___66690 = G__66691;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66127 = conformed_args__45404__auto__;
var map__66127__$1 = cljs.core.__destructure_map(map__66127);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66127__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66127__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq66126){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66126));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66692 = arguments.length;
var i__5770__auto___66693 = (0);
while(true){
if((i__5770__auto___66693 < len__5769__auto___66692)){
args__5775__auto__.push((arguments[i__5770__auto___66693]));

var G__66694 = (i__5770__auto___66693 + (1));
i__5770__auto___66693 = G__66694;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66129 = conformed_args__45404__auto__;
var map__66129__$1 = cljs.core.__destructure_map(map__66129);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66129__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66129__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66129__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq66128){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66128));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66695 = arguments.length;
var i__5770__auto___66696 = (0);
while(true){
if((i__5770__auto___66696 < len__5769__auto___66695)){
args__5775__auto__.push((arguments[i__5770__auto___66696]));

var G__66697 = (i__5770__auto___66696 + (1));
i__5770__auto___66696 = G__66697;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66131 = conformed_args__45404__auto__;
var map__66131__$1 = cljs.core.__destructure_map(map__66131);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66131__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66131__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66131__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq66130){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66130));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66698 = arguments.length;
var i__5770__auto___66699 = (0);
while(true){
if((i__5770__auto___66699 < len__5769__auto___66698)){
args__5775__auto__.push((arguments[i__5770__auto___66699]));

var G__66700 = (i__5770__auto___66699 + (1));
i__5770__auto___66699 = G__66700;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66133 = conformed_args__45404__auto__;
var map__66133__$1 = cljs.core.__destructure_map(map__66133);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66133__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66133__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66133__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq66132){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66132));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66701 = arguments.length;
var i__5770__auto___66702 = (0);
while(true){
if((i__5770__auto___66702 < len__5769__auto___66701)){
args__5775__auto__.push((arguments[i__5770__auto___66702]));

var G__66703 = (i__5770__auto___66702 + (1));
i__5770__auto___66702 = G__66703;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66135 = conformed_args__45404__auto__;
var map__66135__$1 = cljs.core.__destructure_map(map__66135);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66135__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66135__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66135__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq66134){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66134));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66704 = arguments.length;
var i__5770__auto___66705 = (0);
while(true){
if((i__5770__auto___66705 < len__5769__auto___66704)){
args__5775__auto__.push((arguments[i__5770__auto___66705]));

var G__66706 = (i__5770__auto___66705 + (1));
i__5770__auto___66705 = G__66706;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66137 = conformed_args__45404__auto__;
var map__66137__$1 = cljs.core.__destructure_map(map__66137);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66137__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66137__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66137__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq66136){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66136));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66707 = arguments.length;
var i__5770__auto___66708 = (0);
while(true){
if((i__5770__auto___66708 < len__5769__auto___66707)){
args__5775__auto__.push((arguments[i__5770__auto___66708]));

var G__66709 = (i__5770__auto___66708 + (1));
i__5770__auto___66708 = G__66709;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66139 = conformed_args__45404__auto__;
var map__66139__$1 = cljs.core.__destructure_map(map__66139);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66139__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66139__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66139__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq66138){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66138));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66710 = arguments.length;
var i__5770__auto___66711 = (0);
while(true){
if((i__5770__auto___66711 < len__5769__auto___66710)){
args__5775__auto__.push((arguments[i__5770__auto___66711]));

var G__66712 = (i__5770__auto___66711 + (1));
i__5770__auto___66711 = G__66712;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66141 = conformed_args__45404__auto__;
var map__66141__$1 = cljs.core.__destructure_map(map__66141);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66141__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66141__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66141__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq66140){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66140));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66713 = arguments.length;
var i__5770__auto___66714 = (0);
while(true){
if((i__5770__auto___66714 < len__5769__auto___66713)){
args__5775__auto__.push((arguments[i__5770__auto___66714]));

var G__66715 = (i__5770__auto___66714 + (1));
i__5770__auto___66714 = G__66715;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66143 = conformed_args__45404__auto__;
var map__66143__$1 = cljs.core.__destructure_map(map__66143);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq66142){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66142));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66716 = arguments.length;
var i__5770__auto___66717 = (0);
while(true){
if((i__5770__auto___66717 < len__5769__auto___66716)){
args__5775__auto__.push((arguments[i__5770__auto___66717]));

var G__66718 = (i__5770__auto___66717 + (1));
i__5770__auto___66717 = G__66718;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66145 = conformed_args__45404__auto__;
var map__66145__$1 = cljs.core.__destructure_map(map__66145);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66145__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66145__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66145__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq66144){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66144));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66719 = arguments.length;
var i__5770__auto___66720 = (0);
while(true){
if((i__5770__auto___66720 < len__5769__auto___66719)){
args__5775__auto__.push((arguments[i__5770__auto___66720]));

var G__66721 = (i__5770__auto___66720 + (1));
i__5770__auto___66720 = G__66721;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66147 = conformed_args__45404__auto__;
var map__66147__$1 = cljs.core.__destructure_map(map__66147);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq66146){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66146));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66722 = arguments.length;
var i__5770__auto___66723 = (0);
while(true){
if((i__5770__auto___66723 < len__5769__auto___66722)){
args__5775__auto__.push((arguments[i__5770__auto___66723]));

var G__66724 = (i__5770__auto___66723 + (1));
i__5770__auto___66723 = G__66724;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66149 = conformed_args__45404__auto__;
var map__66149__$1 = cljs.core.__destructure_map(map__66149);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq66148){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66148));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66725 = arguments.length;
var i__5770__auto___66726 = (0);
while(true){
if((i__5770__auto___66726 < len__5769__auto___66725)){
args__5775__auto__.push((arguments[i__5770__auto___66726]));

var G__66727 = (i__5770__auto___66726 + (1));
i__5770__auto___66726 = G__66727;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66151 = conformed_args__45404__auto__;
var map__66151__$1 = cljs.core.__destructure_map(map__66151);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66151__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66151__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66151__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq66150){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66150));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66728 = arguments.length;
var i__5770__auto___66729 = (0);
while(true){
if((i__5770__auto___66729 < len__5769__auto___66728)){
args__5775__auto__.push((arguments[i__5770__auto___66729]));

var G__66730 = (i__5770__auto___66729 + (1));
i__5770__auto___66729 = G__66730;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66153 = conformed_args__45404__auto__;
var map__66153__$1 = cljs.core.__destructure_map(map__66153);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66153__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66153__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66153__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq66152){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66152));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66731 = arguments.length;
var i__5770__auto___66732 = (0);
while(true){
if((i__5770__auto___66732 < len__5769__auto___66731)){
args__5775__auto__.push((arguments[i__5770__auto___66732]));

var G__66733 = (i__5770__auto___66732 + (1));
i__5770__auto___66732 = G__66733;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66155 = conformed_args__45404__auto__;
var map__66155__$1 = cljs.core.__destructure_map(map__66155);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66155__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66155__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66155__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq66154){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66154));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66734 = arguments.length;
var i__5770__auto___66735 = (0);
while(true){
if((i__5770__auto___66735 < len__5769__auto___66734)){
args__5775__auto__.push((arguments[i__5770__auto___66735]));

var G__66736 = (i__5770__auto___66735 + (1));
i__5770__auto___66735 = G__66736;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66157 = conformed_args__45404__auto__;
var map__66157__$1 = cljs.core.__destructure_map(map__66157);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66157__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66157__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66157__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq66156){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66156));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66737 = arguments.length;
var i__5770__auto___66738 = (0);
while(true){
if((i__5770__auto___66738 < len__5769__auto___66737)){
args__5775__auto__.push((arguments[i__5770__auto___66738]));

var G__66739 = (i__5770__auto___66738 + (1));
i__5770__auto___66738 = G__66739;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66159 = conformed_args__45404__auto__;
var map__66159__$1 = cljs.core.__destructure_map(map__66159);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66159__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66159__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66159__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq66158){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66158));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66740 = arguments.length;
var i__5770__auto___66741 = (0);
while(true){
if((i__5770__auto___66741 < len__5769__auto___66740)){
args__5775__auto__.push((arguments[i__5770__auto___66741]));

var G__66742 = (i__5770__auto___66741 + (1));
i__5770__auto___66741 = G__66742;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66161 = conformed_args__45404__auto__;
var map__66161__$1 = cljs.core.__destructure_map(map__66161);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq66160){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66160));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66743 = arguments.length;
var i__5770__auto___66744 = (0);
while(true){
if((i__5770__auto___66744 < len__5769__auto___66743)){
args__5775__auto__.push((arguments[i__5770__auto___66744]));

var G__66745 = (i__5770__auto___66744 + (1));
i__5770__auto___66744 = G__66745;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66163 = conformed_args__45404__auto__;
var map__66163__$1 = cljs.core.__destructure_map(map__66163);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66163__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66163__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66163__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq66162){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66162));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66746 = arguments.length;
var i__5770__auto___66747 = (0);
while(true){
if((i__5770__auto___66747 < len__5769__auto___66746)){
args__5775__auto__.push((arguments[i__5770__auto___66747]));

var G__66748 = (i__5770__auto___66747 + (1));
i__5770__auto___66747 = G__66748;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66165 = conformed_args__45404__auto__;
var map__66165__$1 = cljs.core.__destructure_map(map__66165);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq66164){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66164));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66749 = arguments.length;
var i__5770__auto___66750 = (0);
while(true){
if((i__5770__auto___66750 < len__5769__auto___66749)){
args__5775__auto__.push((arguments[i__5770__auto___66750]));

var G__66751 = (i__5770__auto___66750 + (1));
i__5770__auto___66750 = G__66751;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66167 = conformed_args__45404__auto__;
var map__66167__$1 = cljs.core.__destructure_map(map__66167);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq66166){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66166));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66752 = arguments.length;
var i__5770__auto___66753 = (0);
while(true){
if((i__5770__auto___66753 < len__5769__auto___66752)){
args__5775__auto__.push((arguments[i__5770__auto___66753]));

var G__66754 = (i__5770__auto___66753 + (1));
i__5770__auto___66753 = G__66754;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66169 = conformed_args__45404__auto__;
var map__66169__$1 = cljs.core.__destructure_map(map__66169);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66169__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66169__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq66168){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66168));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66755 = arguments.length;
var i__5770__auto___66756 = (0);
while(true){
if((i__5770__auto___66756 < len__5769__auto___66755)){
args__5775__auto__.push((arguments[i__5770__auto___66756]));

var G__66757 = (i__5770__auto___66756 + (1));
i__5770__auto___66756 = G__66757;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66171 = conformed_args__45404__auto__;
var map__66171__$1 = cljs.core.__destructure_map(map__66171);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66171__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66171__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66171__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq66170){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66170));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66758 = arguments.length;
var i__5770__auto___66759 = (0);
while(true){
if((i__5770__auto___66759 < len__5769__auto___66758)){
args__5775__auto__.push((arguments[i__5770__auto___66759]));

var G__66760 = (i__5770__auto___66759 + (1));
i__5770__auto___66759 = G__66760;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66173 = conformed_args__45404__auto__;
var map__66173__$1 = cljs.core.__destructure_map(map__66173);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66173__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66173__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq66172){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66172));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66761 = arguments.length;
var i__5770__auto___66762 = (0);
while(true){
if((i__5770__auto___66762 < len__5769__auto___66761)){
args__5775__auto__.push((arguments[i__5770__auto___66762]));

var G__66763 = (i__5770__auto___66762 + (1));
i__5770__auto___66762 = G__66763;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66175 = conformed_args__45404__auto__;
var map__66175__$1 = cljs.core.__destructure_map(map__66175);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66175__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66175__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66175__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq66174){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66174));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66764 = arguments.length;
var i__5770__auto___66765 = (0);
while(true){
if((i__5770__auto___66765 < len__5769__auto___66764)){
args__5775__auto__.push((arguments[i__5770__auto___66765]));

var G__66766 = (i__5770__auto___66765 + (1));
i__5770__auto___66765 = G__66766;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66177 = conformed_args__45404__auto__;
var map__66177__$1 = cljs.core.__destructure_map(map__66177);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66177__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66177__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66177__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq66176){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66176));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66767 = arguments.length;
var i__5770__auto___66768 = (0);
while(true){
if((i__5770__auto___66768 < len__5769__auto___66767)){
args__5775__auto__.push((arguments[i__5770__auto___66768]));

var G__66769 = (i__5770__auto___66768 + (1));
i__5770__auto___66768 = G__66769;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66179 = conformed_args__45404__auto__;
var map__66179__$1 = cljs.core.__destructure_map(map__66179);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66179__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66179__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66179__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq66178){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66178));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66770 = arguments.length;
var i__5770__auto___66771 = (0);
while(true){
if((i__5770__auto___66771 < len__5769__auto___66770)){
args__5775__auto__.push((arguments[i__5770__auto___66771]));

var G__66772 = (i__5770__auto___66771 + (1));
i__5770__auto___66771 = G__66772;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66181 = conformed_args__45404__auto__;
var map__66181__$1 = cljs.core.__destructure_map(map__66181);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66181__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66181__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66181__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq66180){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66180));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66773 = arguments.length;
var i__5770__auto___66774 = (0);
while(true){
if((i__5770__auto___66774 < len__5769__auto___66773)){
args__5775__auto__.push((arguments[i__5770__auto___66774]));

var G__66775 = (i__5770__auto___66774 + (1));
i__5770__auto___66774 = G__66775;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66183 = conformed_args__45404__auto__;
var map__66183__$1 = cljs.core.__destructure_map(map__66183);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66183__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66183__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66183__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq66182){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66182));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66776 = arguments.length;
var i__5770__auto___66777 = (0);
while(true){
if((i__5770__auto___66777 < len__5769__auto___66776)){
args__5775__auto__.push((arguments[i__5770__auto___66777]));

var G__66778 = (i__5770__auto___66777 + (1));
i__5770__auto___66777 = G__66778;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66185 = conformed_args__45404__auto__;
var map__66185__$1 = cljs.core.__destructure_map(map__66185);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66185__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66185__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66185__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq66184){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66184));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66779 = arguments.length;
var i__5770__auto___66780 = (0);
while(true){
if((i__5770__auto___66780 < len__5769__auto___66779)){
args__5775__auto__.push((arguments[i__5770__auto___66780]));

var G__66781 = (i__5770__auto___66780 + (1));
i__5770__auto___66780 = G__66781;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66187 = conformed_args__45404__auto__;
var map__66187__$1 = cljs.core.__destructure_map(map__66187);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq66186){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66186));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66782 = arguments.length;
var i__5770__auto___66783 = (0);
while(true){
if((i__5770__auto___66783 < len__5769__auto___66782)){
args__5775__auto__.push((arguments[i__5770__auto___66783]));

var G__66784 = (i__5770__auto___66783 + (1));
i__5770__auto___66783 = G__66784;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66189 = conformed_args__45404__auto__;
var map__66189__$1 = cljs.core.__destructure_map(map__66189);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66189__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66189__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66189__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq66188){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66188));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66785 = arguments.length;
var i__5770__auto___66786 = (0);
while(true){
if((i__5770__auto___66786 < len__5769__auto___66785)){
args__5775__auto__.push((arguments[i__5770__auto___66786]));

var G__66787 = (i__5770__auto___66786 + (1));
i__5770__auto___66786 = G__66787;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66191 = conformed_args__45404__auto__;
var map__66191__$1 = cljs.core.__destructure_map(map__66191);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66191__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66191__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66191__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq66190){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66190));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66788 = arguments.length;
var i__5770__auto___66789 = (0);
while(true){
if((i__5770__auto___66789 < len__5769__auto___66788)){
args__5775__auto__.push((arguments[i__5770__auto___66789]));

var G__66790 = (i__5770__auto___66789 + (1));
i__5770__auto___66789 = G__66790;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66193 = conformed_args__45404__auto__;
var map__66193__$1 = cljs.core.__destructure_map(map__66193);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66193__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66193__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66193__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq66192){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66192));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66791 = arguments.length;
var i__5770__auto___66792 = (0);
while(true){
if((i__5770__auto___66792 < len__5769__auto___66791)){
args__5775__auto__.push((arguments[i__5770__auto___66792]));

var G__66793 = (i__5770__auto___66792 + (1));
i__5770__auto___66792 = G__66793;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66195 = conformed_args__45404__auto__;
var map__66195__$1 = cljs.core.__destructure_map(map__66195);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq66194){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66194));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66794 = arguments.length;
var i__5770__auto___66795 = (0);
while(true){
if((i__5770__auto___66795 < len__5769__auto___66794)){
args__5775__auto__.push((arguments[i__5770__auto___66795]));

var G__66796 = (i__5770__auto___66795 + (1));
i__5770__auto___66795 = G__66796;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66197 = conformed_args__45404__auto__;
var map__66197__$1 = cljs.core.__destructure_map(map__66197);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66197__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66197__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66197__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq66196){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66196));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66797 = arguments.length;
var i__5770__auto___66798 = (0);
while(true){
if((i__5770__auto___66798 < len__5769__auto___66797)){
args__5775__auto__.push((arguments[i__5770__auto___66798]));

var G__66799 = (i__5770__auto___66798 + (1));
i__5770__auto___66798 = G__66799;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66199 = conformed_args__45404__auto__;
var map__66199__$1 = cljs.core.__destructure_map(map__66199);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66199__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66199__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66199__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq66198){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66198));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66800 = arguments.length;
var i__5770__auto___66801 = (0);
while(true){
if((i__5770__auto___66801 < len__5769__auto___66800)){
args__5775__auto__.push((arguments[i__5770__auto___66801]));

var G__66802 = (i__5770__auto___66801 + (1));
i__5770__auto___66801 = G__66802;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66201 = conformed_args__45404__auto__;
var map__66201__$1 = cljs.core.__destructure_map(map__66201);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66201__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66201__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66201__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq66200){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66200));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66803 = arguments.length;
var i__5770__auto___66804 = (0);
while(true){
if((i__5770__auto___66804 < len__5769__auto___66803)){
args__5775__auto__.push((arguments[i__5770__auto___66804]));

var G__66805 = (i__5770__auto___66804 + (1));
i__5770__auto___66804 = G__66805;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66203 = conformed_args__45404__auto__;
var map__66203__$1 = cljs.core.__destructure_map(map__66203);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq66202){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66202));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66806 = arguments.length;
var i__5770__auto___66807 = (0);
while(true){
if((i__5770__auto___66807 < len__5769__auto___66806)){
args__5775__auto__.push((arguments[i__5770__auto___66807]));

var G__66808 = (i__5770__auto___66807 + (1));
i__5770__auto___66807 = G__66808;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66205 = conformed_args__45404__auto__;
var map__66205__$1 = cljs.core.__destructure_map(map__66205);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq66204){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66204));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66809 = arguments.length;
var i__5770__auto___66810 = (0);
while(true){
if((i__5770__auto___66810 < len__5769__auto___66809)){
args__5775__auto__.push((arguments[i__5770__auto___66810]));

var G__66811 = (i__5770__auto___66810 + (1));
i__5770__auto___66810 = G__66811;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66207 = conformed_args__45404__auto__;
var map__66207__$1 = cljs.core.__destructure_map(map__66207);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66207__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66207__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66207__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq66206){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66206));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66812 = arguments.length;
var i__5770__auto___66813 = (0);
while(true){
if((i__5770__auto___66813 < len__5769__auto___66812)){
args__5775__auto__.push((arguments[i__5770__auto___66813]));

var G__66814 = (i__5770__auto___66813 + (1));
i__5770__auto___66813 = G__66814;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66209 = conformed_args__45404__auto__;
var map__66209__$1 = cljs.core.__destructure_map(map__66209);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq66208){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66208));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66815 = arguments.length;
var i__5770__auto___66816 = (0);
while(true){
if((i__5770__auto___66816 < len__5769__auto___66815)){
args__5775__auto__.push((arguments[i__5770__auto___66816]));

var G__66817 = (i__5770__auto___66816 + (1));
i__5770__auto___66816 = G__66817;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66211 = conformed_args__45404__auto__;
var map__66211__$1 = cljs.core.__destructure_map(map__66211);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66211__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66211__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66211__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq66210){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66210));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66818 = arguments.length;
var i__5770__auto___66819 = (0);
while(true){
if((i__5770__auto___66819 < len__5769__auto___66818)){
args__5775__auto__.push((arguments[i__5770__auto___66819]));

var G__66820 = (i__5770__auto___66819 + (1));
i__5770__auto___66819 = G__66820;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66213 = conformed_args__45404__auto__;
var map__66213__$1 = cljs.core.__destructure_map(map__66213);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq66212){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66212));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66821 = arguments.length;
var i__5770__auto___66822 = (0);
while(true){
if((i__5770__auto___66822 < len__5769__auto___66821)){
args__5775__auto__.push((arguments[i__5770__auto___66822]));

var G__66823 = (i__5770__auto___66822 + (1));
i__5770__auto___66822 = G__66823;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66215 = conformed_args__45404__auto__;
var map__66215__$1 = cljs.core.__destructure_map(map__66215);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq66214){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66214));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66824 = arguments.length;
var i__5770__auto___66825 = (0);
while(true){
if((i__5770__auto___66825 < len__5769__auto___66824)){
args__5775__auto__.push((arguments[i__5770__auto___66825]));

var G__66826 = (i__5770__auto___66825 + (1));
i__5770__auto___66825 = G__66826;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66217 = conformed_args__45404__auto__;
var map__66217__$1 = cljs.core.__destructure_map(map__66217);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq66216){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66216));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66827 = arguments.length;
var i__5770__auto___66828 = (0);
while(true){
if((i__5770__auto___66828 < len__5769__auto___66827)){
args__5775__auto__.push((arguments[i__5770__auto___66828]));

var G__66829 = (i__5770__auto___66828 + (1));
i__5770__auto___66828 = G__66829;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66219 = conformed_args__45404__auto__;
var map__66219__$1 = cljs.core.__destructure_map(map__66219);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66219__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66219__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66219__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq66218){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66218));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66830 = arguments.length;
var i__5770__auto___66831 = (0);
while(true){
if((i__5770__auto___66831 < len__5769__auto___66830)){
args__5775__auto__.push((arguments[i__5770__auto___66831]));

var G__66832 = (i__5770__auto___66831 + (1));
i__5770__auto___66831 = G__66832;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66221 = conformed_args__45404__auto__;
var map__66221__$1 = cljs.core.__destructure_map(map__66221);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq66220){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66220));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66833 = arguments.length;
var i__5770__auto___66834 = (0);
while(true){
if((i__5770__auto___66834 < len__5769__auto___66833)){
args__5775__auto__.push((arguments[i__5770__auto___66834]));

var G__66835 = (i__5770__auto___66834 + (1));
i__5770__auto___66834 = G__66835;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66223 = conformed_args__45404__auto__;
var map__66223__$1 = cljs.core.__destructure_map(map__66223);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66223__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66223__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66223__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq66222){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66222));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66836 = arguments.length;
var i__5770__auto___66837 = (0);
while(true){
if((i__5770__auto___66837 < len__5769__auto___66836)){
args__5775__auto__.push((arguments[i__5770__auto___66837]));

var G__66838 = (i__5770__auto___66837 + (1));
i__5770__auto___66837 = G__66838;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66225 = conformed_args__45404__auto__;
var map__66225__$1 = cljs.core.__destructure_map(map__66225);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66225__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66225__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66225__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq66224){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66224));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66839 = arguments.length;
var i__5770__auto___66840 = (0);
while(true){
if((i__5770__auto___66840 < len__5769__auto___66839)){
args__5775__auto__.push((arguments[i__5770__auto___66840]));

var G__66841 = (i__5770__auto___66840 + (1));
i__5770__auto___66840 = G__66841;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66227 = conformed_args__45404__auto__;
var map__66227__$1 = cljs.core.__destructure_map(map__66227);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq66226){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66226));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66842 = arguments.length;
var i__5770__auto___66843 = (0);
while(true){
if((i__5770__auto___66843 < len__5769__auto___66842)){
args__5775__auto__.push((arguments[i__5770__auto___66843]));

var G__66844 = (i__5770__auto___66843 + (1));
i__5770__auto___66843 = G__66844;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66229 = conformed_args__45404__auto__;
var map__66229__$1 = cljs.core.__destructure_map(map__66229);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66229__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66229__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66229__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq66228){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66228));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66845 = arguments.length;
var i__5770__auto___66846 = (0);
while(true){
if((i__5770__auto___66846 < len__5769__auto___66845)){
args__5775__auto__.push((arguments[i__5770__auto___66846]));

var G__66847 = (i__5770__auto___66846 + (1));
i__5770__auto___66846 = G__66847;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66231 = conformed_args__45404__auto__;
var map__66231__$1 = cljs.core.__destructure_map(map__66231);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66231__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66231__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq66230){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66230));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66848 = arguments.length;
var i__5770__auto___66849 = (0);
while(true){
if((i__5770__auto___66849 < len__5769__auto___66848)){
args__5775__auto__.push((arguments[i__5770__auto___66849]));

var G__66850 = (i__5770__auto___66849 + (1));
i__5770__auto___66849 = G__66850;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66233 = conformed_args__45404__auto__;
var map__66233__$1 = cljs.core.__destructure_map(map__66233);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66233__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66233__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66233__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq66232){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66232));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66851 = arguments.length;
var i__5770__auto___66852 = (0);
while(true){
if((i__5770__auto___66852 < len__5769__auto___66851)){
args__5775__auto__.push((arguments[i__5770__auto___66852]));

var G__66853 = (i__5770__auto___66852 + (1));
i__5770__auto___66852 = G__66853;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__45404__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66235 = conformed_args__45404__auto__;
var map__66235__$1 = cljs.core.__destructure_map(map__66235);
var children__45406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__45405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__45407__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__45406__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__45406__auto__);
var attrs_value__45408__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__45405__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__45408__auto__], null),children__45406__auto____$1),css__45407__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq66234){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66234));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
