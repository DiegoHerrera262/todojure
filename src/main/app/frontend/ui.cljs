(ns app.frontend.ui
  (:require
    [app.frontend.components.todo-list :refer [ui-todo-list, TodoList]]
    [app.frontend.mutations.todo-list :as todo-api]
    [com.fulcrologic.fulcro.components :refer [defsc, fragment, get-initial-state, get-query, transact!!]]
    [com.fulcrologic.fulcro.dom :refer [h1, button]]
    [com.fulcrologic.fulcro.data-fetch :as df]
    ))

(defsc Root [this {:keys [todo-list]}]
  {:query [{:todo-list (get-query TodoList)}]}
  (df/load! this :todo-list TodoList)
  (fragment
    (h1 "Todojure")
    (button
      {:style   {:margin "1em 0"}
       :onClick #(transact!! this [(todo-api/create-task {:description "New task"})])}
      "Add")
    (when todo-list
      (ui-todo-list todo-list))
    )
  )
