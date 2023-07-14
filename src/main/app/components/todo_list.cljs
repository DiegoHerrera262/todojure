(ns app.components.todo-list
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc, factory]]
    [com.fulcrologic.fulcro.dom :as dom :refer [ul, div, button]]
    [app.components.todo-item :refer [ui-todo-item]]
    ))

(defsc TodoList
  [this {:todo-list/keys [items]}]
  { :use-hooks? true }
  (ul { :style {
                :display "flex"
                :flex-direction "column"
                :gap "0.5em"
                } }
      (map ui-todo-item items)))

(def ^:export ui-todo-list (factory TodoList))