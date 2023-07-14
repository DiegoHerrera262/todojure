(ns app.components.todo-list
  (:require
    [app.components.todo-item :refer [ui-todo-item]]
    [com.fulcrologic.fulcro.components :refer [defsc, factory]]
    [com.fulcrologic.fulcro.dom :refer [button , div, ul]]
    ))

(defsc TodoList
  [this {:todo-list/keys [items]}]
  {:use-hooks? true}
  (ul {:style {
               :display        "flex"
               :flex-direction "column"
               :gap            "0.5em"
               :list-style     "none"
               :padding-left   0
               }}
      (map ui-todo-item items)))

(def ^:export ui-todo-list (factory TodoList))