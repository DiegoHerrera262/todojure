(ns app.components.todo-list
  (:require
    [app.components.todo-item :refer [TodoItem, ui-todo-item]]
    [app.mutations.todo-list :as todo-api]
    [com.fulcrologic.fulcro.components :refer [defsc, factory, get-initial-state, get-query, computed, transact!]]
    [com.fulcrologic.fulcro.dom :refer [button, div, ul]]
    ))

(defsc TodoList
  [this {:list/keys [items] :as props}]
  {:query         [{:list/items (get-query TodoItem)}]
   :ident         (fn [] [:list/id (:list/id props)])}
  (let [
        change-status (fn [id, status]
                        (transact! this
                                   [(todo-api/update-task
                                      {:id id :status (if (= status "DONE") "PENDING" "DONE")})]))
        delete-task (fn [id]
                      (transact! this
                                 [(todo-api/delete-task {:todo-id id})]))
        ui-todo-item-comp (fn [task] (ui-todo-item (
                                                     computed task {
                                                                    :onChangeStatus change-status
                                                                    :onDeleteTask   delete-task
                                                                    }
                                                              )))]
    (ul {:style {
                 :display       "flex"
                 :flexDirection "column"
                 :gap           "0.5em"
                 :listStyle     "none"
                 :paddingLeft   0
                 }}
        (map ui-todo-item-comp items)))
  )

(def ^:export ui-todo-list (factory TodoList))