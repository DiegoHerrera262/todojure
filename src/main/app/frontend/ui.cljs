(ns app.frontend.ui
  (:require
    [app.frontend.components.task-list :refer [ui-task-list, TaskList]]
    [app.frontend.mutations.task-list :as todo-api]
    [com.fulcrologic.fulcro.components :refer [defsc, fragment, get-initial-state, get-query, transact!!]]
    [com.fulcrologic.fulcro.dom :refer [h1, button]]
    [com.fulcrologic.fulcro.data-fetch :as df]
    ))

(defsc Root [this {:keys [task-list]}]
  {:query [{:task-list (get-query TaskList)}]}
  (df/load! this :task-list TaskList)
  (fragment
    (h1 "Todojure")
    (button
      {:style   {:margin "1em 0"}
       :onClick #(transact!! this [(todo-api/create-task {:description "New task"})])}
      "Add")
    (when task-list
      (ui-task-list task-list))
    )
  )
