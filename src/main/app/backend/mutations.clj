(ns app.backend.mutations
  (:require [app.backend.db :refer [list-table, todo-table]]
            [app.utils.todo :refer [change-task-data]]
            [com.wsscode.pathom.connect :as pc]))

(defn filter-id [list, id]
  (filterv #(not= id %) list))

(pc/defmutation delete-todo [_ {:keys [todo-id, list-id]}]
  {::pc/sym    'delete-todo
   ::pc/params [:todo-id :list-id]}
  (println (str "Removing todo " todo-id " from list " list-id))
  ; remove from to do table
  (swap! todo-table (fn [data] (dissoc data todo-id)))
  ; remove from list table
  (swap! list-table update-in [:todo-list :list/items] (fn [prev] (filter-id prev todo-id)))
  {:todo/id todo-id})

(pc/defmutation update-todo [_ {:keys [id, status, description]}]
  {::pc/sym    'update-todo
   ::pc/params [:id, :status, :description]}
  (println (str "Updating todo " id))
  (let [
        path [id]
        old-task (get-in @todo-table path)
        new-task (change-task-data old-task status description)]
    (swap! todo-table assoc-in path new-task)
    new-task))

(def mutations [delete-todo, update-todo])