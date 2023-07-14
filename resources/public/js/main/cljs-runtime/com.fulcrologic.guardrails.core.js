goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__35016__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35017__auto__ = (function (){var switch__34929__auto__ = (function (state_59612){
var state_val_59613 = (state_59612[(1)]);
if((state_val_59613 === (7))){
var inst_59608 = (state_59612[(2)]);
var state_59612__$1 = state_59612;
var statearr_59616_59744 = state_59612__$1;
(statearr_59616_59744[(2)] = inst_59608);

(statearr_59616_59744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59613 === (1))){
var state_59612__$1 = state_59612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59612__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_59613 === (4))){
var inst_59610 = (state_59612[(2)]);
var state_59612__$1 = state_59612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59612__$1,inst_59610);
} else {
if((state_val_59613 === (6))){
var inst_59606 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_59612__$1 = state_59612;
var statearr_59617_59748 = state_59612__$1;
(statearr_59617_59748[(2)] = inst_59606);

(statearr_59617_59748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59613 === (3))){
var inst_59583 = (state_59612[(7)]);
var state_59612__$1 = state_59612;
if(cljs.core.truth_(inst_59583)){
var statearr_59618_59749 = state_59612__$1;
(statearr_59618_59749[(1)] = (5));

} else {
var statearr_59619_59750 = state_59612__$1;
(statearr_59619_59750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59613 === (12))){
var inst_59603 = (state_59612[(2)]);
var inst_59583 = inst_59603;
var state_59612__$1 = (function (){var statearr_59621 = state_59612;
(statearr_59621[(7)] = inst_59583);

return statearr_59621;
})();
var statearr_59622_59753 = state_59612__$1;
(statearr_59622_59753[(2)] = null);

(statearr_59622_59753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59613 === (2))){
var inst_59581 = (state_59612[(2)]);
var inst_59583 = inst_59581;
var state_59612__$1 = (function (){var statearr_59626 = state_59612;
(statearr_59626[(7)] = inst_59583);

return statearr_59626;
})();
var statearr_59627_59755 = state_59612__$1;
(statearr_59627_59755[(2)] = null);

(statearr_59627_59755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59613 === (11))){
var _ = (function (){var statearr_59628 = state_59612;
(statearr_59628[(4)] = cljs.core.rest((state_59612[(4)])));

return statearr_59628;
})();
var state_59612__$1 = state_59612;
var ex59620 = (state_59612__$1[(2)]);
var statearr_59630_59757 = state_59612__$1;
(statearr_59630_59757[(5)] = ex59620);


var statearr_59631_59758 = state_59612__$1;
(statearr_59631_59758[(1)] = (10));

(statearr_59631_59758[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59613 === (9))){
var inst_59601 = (state_59612[(2)]);
var state_59612__$1 = (function (){var statearr_59632 = state_59612;
(statearr_59632[(8)] = inst_59601);

return statearr_59632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59612__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_59613 === (5))){
var state_59612__$1 = state_59612;
var statearr_59633_59761 = state_59612__$1;
(statearr_59633_59761[(2)] = null);

(statearr_59633_59761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59613 === (10))){
var inst_59589 = (state_59612[(2)]);
var state_59612__$1 = (function (){var statearr_59635 = state_59612;
(statearr_59635[(9)] = inst_59589);

return statearr_59635;
})();
var statearr_59636_59762 = state_59612__$1;
(statearr_59636_59762[(2)] = null);

(statearr_59636_59762[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59613 === (8))){
var inst_59583 = (state_59612[(7)]);
var _ = (function (){var statearr_59637 = state_59612;
(statearr_59637[(4)] = cljs.core.cons((11),(state_59612[(4)])));

return statearr_59637;
})();
var inst_59595 = (inst_59583.cljs$core$IFn$_invoke$arity$0 ? inst_59583.cljs$core$IFn$_invoke$arity$0() : inst_59583.call(null));
var ___$1 = (function (){var statearr_59638 = state_59612;
(statearr_59638[(4)] = cljs.core.rest((state_59612[(4)])));

return statearr_59638;
})();
var state_59612__$1 = state_59612;
var statearr_59640_59763 = state_59612__$1;
(statearr_59640_59763[(2)] = inst_59595);

(statearr_59640_59763[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__34930__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__34930__auto____0 = (function (){
var statearr_59643 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59643[(0)] = com$fulcrologic$guardrails$core$state_machine__34930__auto__);

(statearr_59643[(1)] = (1));

return statearr_59643;
});
var com$fulcrologic$guardrails$core$state_machine__34930__auto____1 = (function (state_59612){
while(true){
var ret_value__34931__auto__ = (function (){try{while(true){
var result__34932__auto__ = switch__34929__auto__(state_59612);
if(cljs.core.keyword_identical_QMARK_(result__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34932__auto__;
}
break;
}
}catch (e59645){var ex__34933__auto__ = e59645;
var statearr_59646_59770 = state_59612;
(statearr_59646_59770[(2)] = ex__34933__auto__);


if(cljs.core.seq((state_59612[(4)]))){
var statearr_59648_59771 = state_59612;
(statearr_59648_59771[(1)] = cljs.core.first((state_59612[(4)])));

} else {
throw ex__34933__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59772 = state_59612;
state_59612 = G__59772;
continue;
} else {
return ret_value__34931__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__34930__auto__ = function(state_59612){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__34930__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__34930__auto____1.call(this,state_59612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__34930__auto____0;
com$fulcrologic$guardrails$core$state_machine__34930__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__34930__auto____1;
return com$fulcrologic$guardrails$core$state_machine__34930__auto__;
})()
})();
var state__35018__auto__ = (function (){var statearr_59650 = f__35017__auto__();
(statearr_59650[(6)] = c__35016__auto__);

return statearr_59650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35018__auto__);
}));

return c__35016__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__59654 = data;
var map__59654__$1 = cljs.core.__destructure_map(map__59654);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59654__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59654__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59654__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59654__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59654__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59654__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59654__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59654__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__59658,spec,value){
var map__59659 = p__59658;
var map__59659__$1 = cljs.core.__destructure_map(map__59659);
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59659__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59659__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59659__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59659__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59659__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59659__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_59780 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__59781 = (function (){var and__5043__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return vararg_QMARK_;
} else {
return and__5043__auto__;
}
})();
var varg_59782 = (cljs.core.truth_(vargs_QMARK__59781)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_59783 = (cljs.core.truth_(vargs_QMARK__59781)?((cljs.core.map_QMARK_(varg_59782))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_59782))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_59782))):value);
var valid_exception_59784 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_59783)){
} else {
var problem_59788 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_59783,expound_opts);
var description_59789 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_59788)].join('');
if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_59784,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(description_59789,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_59783], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_59789,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = callsite;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e59664){var e_59798 = e59664;
com.fulcrologic.guardrails.utils.report_exception(e_59798,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_59799 = (com.fulcrologic.guardrails.core.now_ms() - start_59780);
if((duration_59799 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_59799),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_59784))){
throw cljs.core.deref(valid_exception_59784);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
