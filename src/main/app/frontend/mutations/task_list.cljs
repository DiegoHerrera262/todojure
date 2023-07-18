(ns app.frontend.mutations.task-list
  (:require [com.fulcrologic.fulcro.algorithms.merge :as merge]
            [com.fulcrologic.fulcro.mutations :refer [defmutation]]))

(defn change-task-data
  [task, status, description]
  (let [new-status (or status (:task/status task))
        new-description (or description (:task/description task))]
    (assoc task :task/status new-status :task/description new-description)))

(defmutation update-task
  "Update task info by id"
  [{:keys [id, status, description]}]
  (action [{:keys [state]}]
          ; this is also possible thanks to normalization
          (println (str "Updating task " id " with " status ", " description))
          (let [
                path [:task/id id]
                old-task (get-in @state path)
                new-task (change-task-data old-task status description)]
            (swap! state assoc-in path new-task)))
  (remote [_] true))

(defmutation delete-task
  "Delete task todo-id from list todo-list-id"
  [{:keys [task-id, list-id]}]
  (action [{:keys [state]}]
          ; this single-liner delete is why I like normalization
          (println (str "Deleting task " task-id))
          (swap! state merge/remove-ident* [:task/id task-id] [:list/id list-id :list/items]))
  (remote [{:keys [ast]}] (assoc ast :params {:id task-id})))

(defmutation create-task
  "Create task in to do list"
  [{:keys [description]}]
  (action [{:keys [state]}]
          ; by default add new task in pending
          (println (str "Creating task " description))
          (swap! state assoc-in [:task/id 0] {:task/id 0 :status :pending :description description})
          (swap! state update-in [:list/id :all :list/items] (fn [prev] (conj prev [:task/id 0]))))
  (remote [_] true))
