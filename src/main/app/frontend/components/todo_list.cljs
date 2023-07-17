(ns app.frontend.components.todo-list
  (:require
    [app.frontend.components.todo-item :refer [TodoItem, ui-todo-item]]
    [app.frontend.mutations.todo-list :as todo-api]
    [com.fulcrologic.fulcro.components :refer [defsc, factory, get-initial-state, get-query, computed, transact!!]]
    [com.fulcrologic.fulcro.dom :refer [button, div, ul]]
    ))

(defsc TodoList
  [this {:list/keys [items, id] :as props}]
  {:query [:list/id {:list/items (get-query TodoItem)}]
   :ident (fn [] [:list/id (:list/id props)])}
  (let [
        change-status (fn [todo-id, status]
                        (transact!! this
                                    [(todo-api/update-task
                                       {:id todo-id :status (if (= status "DONE") "PENDING" "DONE")})]))
        change-description (fn [todo-id, description]
                             (transact!! this
                                         [(todo-api/update-task
                                            {:id todo-id :description description})]))
        delete-task (fn [todo-id]
                      (transact!! this
                                  [(todo-api/delete-task {:todo-id todo-id :list-id id})]))
        ui-todo-item-comp (fn [task] (ui-todo-item (
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
        (map ui-todo-item-comp items)))
  )

(def ^:export ui-todo-list (factory TodoList))