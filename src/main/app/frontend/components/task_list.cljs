(ns app.frontend.components.task-list
  (:require
    [app.frontend.components.task-item :refer [TaskItem, ui-task-item]]
    [app.frontend.mutations.task-list :as task-api]
    [com.fulcrologic.fulcro.components :refer [defsc, factory, get-initial-state, get-query, computed, transact!!]]
    [com.fulcrologic.fulcro.dom :refer [button, div, ul]]
    ))

(defsc TaskList
  [this {:list/keys [items, id] :as props}]
  {:query [:list/id {:list/items (get-query TaskItem)}]
   :ident (fn [] [:list/id (:list/id props)])}
  (let [
        change-status (fn [task-id, status]
                        (transact!! this
                                    [(task-api/update-task
                                       {:id task-id :status (if (= status :done) :pending :done)})]))
        change-description (fn [task-id, description]
                             (transact!! this
                                         [(task-api/update-task
                                            {:id task-id :description description})]))
        delete-task (fn [task-id]
                      (transact!! this
                                  [(task-api/delete-task {:task-id task-id :list-id id})]))
        ui-task-item-comp (fn [task] (ui-task-item (
                                                     computed task {
                                                                    :onChangeStatus      change-status
                                                                    :onDeleteTask        delete-task
                                                                    :onChangeDescription change-description
                                                                    }
                                                              )))]
    (ul {:style {
                 :marginTop     "0.5em"
                 :display       "flex"
                 :flexDirection "column"
                 :gap           "0.5em"
                 :listStyle     "none"
                 :paddingLeft   0
                 }}
        (map ui-task-item-comp items)))
  )

(def ^:export ui-task-list (factory TaskList))