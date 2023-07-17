(ns app.ui
  (:require
    [app.components.todo-list :refer [ui-todo-list, TodoList]]
    [com.fulcrologic.fulcro.components :refer [defsc, fragment, get-initial-state, get-query]]
    [com.fulcrologic.fulcro.dom :refer [h1]]
    ))

(defsc Root [this {:keys [todo-list]}]
  {:query [{:todo-list (get-query TodoList)}]}
  (fragment
    (h1 "Todojure")
    (when todo-list
      (ui-todo-list todo-list))
    )
  )
