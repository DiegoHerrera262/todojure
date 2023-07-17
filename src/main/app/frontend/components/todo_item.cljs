(ns app.frontend.components.todo-item
  (:require
    [com.fulcrologic.fulcro.components :refer [defsc, factory]]
    [com.fulcrologic.fulcro.dom :refer [button, li, input]]))

(defsc ^:export TodoItem
  [this {:todo/keys [status, description, id] :as props} {:keys [onChangeStatus, onDeleteTask, onChangeDescription]}]
  {:query         [:todo/status :todo/description :todo/id]
   :ident         (fn [] [:todo/id (:todo/id props)])}
  (li {:style {
               :display       "flex"
               :flexDirection "row"
               :gap           "1ch"
               }}
      (button {:onClick #(onDeleteTask id) :style {:background "none"}} "Delete")
      (button {:style {:width "11ch"} :onClick #(onChangeStatus id status)} (if (= status "DONE") "Done" "Pending"))
      (input {:style {:width "400px"} :value description :onChange #(onChangeDescription id (.. % -target -value))})
      ))

(def ^:export ui-todo-item (factory TodoItem {:keyfn :todo/id}))

