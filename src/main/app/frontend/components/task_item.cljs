(ns app.frontend.components.task-item
  (:require
    [com.fulcrologic.fulcro.components :refer [defsc, factory]]
    [com.fulcrologic.fulcro.dom :refer [button, li, input]]))

(defsc ^:export TaskItem
  [this {:task/keys [status, description, id] :as props} {:keys [onChangeStatus, onDeleteTask, onChangeDescription]}]
  {:query         [:task/status :task/description :task/id]
   :ident         (fn [] [:task/id (:task/id props)])}
  (li {:style {
               :display       "flex"
               :flexDirection "row"
               :gap           "1ch"
               }}
      (button {:onClick #(onDeleteTask id) :style {:background "none"}} "Delete")
      (button {:style {:width "11ch"} :onClick #(onChangeStatus id status)} (if (= status :done) "Done" "Pending"))
      (input {:style {:width "400px"} :value description :onChange #(onChangeDescription id (.. % -target -value))})
      ))

(def ^:export ui-task-item (factory TaskItem {:keyfn :task/id}))

