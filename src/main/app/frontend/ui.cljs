(ns app.frontend.ui
  (:require
    [app.frontend.components.task-list :refer [ui-task-list, TaskList]]
    [app.frontend.components.task-item :refer [TaskItem]]
    [app.frontend.components.task-form :refer [ui-task-form, TaskForm]]
    [app.frontend.mutations.task :as todo-api]
    [com.fulcrologic.fulcro.components :refer [defsc, fragment, get-initial-state, get-query, transact!]]
    [com.fulcrologic.fulcro.dom :refer [h1, button]]
    ))

(defsc Root [this {:keys [task-list task-form]}]
  {:query [{:task-list (get-query TaskList)}
           {:task-form (get-query TaskForm)}]}
  (fragment
    (h1 "Todojure - Datomic")
    (if (:task/id task-form)
      (ui-task-form task-form)
      (button
        {:style   {:margin "1em 0"}
         :onClick #(transact! this `[(todo-api/edit-new-task {})])}
        "Add"))
    (when task-list
      (ui-task-list task-list))
    )
  )
