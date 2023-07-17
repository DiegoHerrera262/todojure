(ns app.frontend.mutations.todo-list
  (:require [com.fulcrologic.fulcro.algorithms.merge :as merge]
            [com.fulcrologic.fulcro.mutations :refer [defmutation]]))

(defn change-task-data
  [task, status, description]
  (let [new-status (or status (:todo/status task))
        new-description (or description (:todo/description task))]
    (assoc task :todo/status new-status :todo/description new-description)))

(defmutation update-task
  "Update task info by id"
  [{:keys [id, status, description]}]
  (action [{:keys [state]}]
          (let [
                path [:todo/id id]
                old-task (get-in @state path)
                new-task (change-task-data old-task status description)]
            (swap! state assoc-in path new-task)))
  (remote [_] true))

(defmutation delete-task
  "Delete task todo-id from list todo-list-id"
  [{:keys [todo-id, list-id]}]
  (action [{:keys [state]}]
          (swap! state merge/remove-ident* [:todo/id todo-id] [:list/id list-id :list/items]))
  (remote [_] true))

(defmutation create-task
  "Create task in to do list"
  [{:keys [description]}]
  (action [{:keys [state]}]
          (swap! state assoc-in [:todo/id 0] {:todo/id 0 :status "PENDING" :description description})
          (swap! state update-in [:list/id :todo-list :list/items] (fn [prev] (conj prev [:todo/id 0]))))
  (remote [_] true))
