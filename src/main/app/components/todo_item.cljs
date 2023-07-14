(ns app.components.todo-item
  (:require
    [com.fulcrologic.fulcro.components :refer [defsc, factory]]
    [com.fulcrologic.fulcro.dom :refer [button  , div, li]]))

(defsc TodoItem
  [this {:todo/keys [status, description, on-change-status]}]
  {:use-hooks? true}
  (li {:style {
               :display        "flex"
               :flex-direction "row"
               :gap            "1ch"
               }}
      (button { :onClick on-change-status } (if (= status "DONE") "Done" "Pending"))
      (div (str description))
      ))

(def ^:export ui-todo-item (factory TodoItem))

