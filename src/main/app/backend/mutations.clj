(ns app.backend.mutations
  (:require [app.backend.db :refer [list-table, todo-table, todo-index]]
            [app.utils.todo :refer [change-task-data]]
            [com.wsscode.pathom.connect :as pc]))

(defn filter-id [list, id]
  (filterv #(not= id %) list))

(pc/defmutation delete-task [_ {:keys [todo-id, list-id]}]
  {::pc/sym    'app.frontend.mutations.todo-list/delete-task
   ::pc/params [:todo-id :list-id]}
  (println (str "Removing todo " todo-id " from list " list-id))
  ; remove from to do table
  (swap! todo-table (fn [data] (dissoc data todo-id)))
  ; remove from list table
  (swap! list-table update-in [:todo-list :list/items] (fn [prev] (filter-id prev todo-id)))
  {:todo/id todo-id})

(pc/defmutation create-task [_ {:keys [description]}]
  {::pc/sym 'app.frontend.mutations.todo-list/create-task
   ::pc/params [:description]}
  (println (str "Adding todo"))
  (let [new-task {:todo/id @todo-index :todo/description description :todo/status "PENDING"}]
    (swap! todo-table (fn [data] (assoc data @todo-index new-task)))
    (swap! list-table update-in [:todo-list :list/items] (fn [prev] (conj prev @todo-index)))
    (swap! todo-index inc)
    new-task))

(pc/defmutation update-task [_ {:keys [id, status, description]}]
  {::pc/sym    'app.frontend.mutations.todo-list/update-task
   ::pc/params [:id, :status, :description]}
  (println (str "Updating todo " id))
  (let [
        path [id]
        old-task (get-in @todo-table path)
        new-task (change-task-data old-task status description)]
    (swap! todo-table assoc-in path new-task)
    new-task))

(def mutations [delete-task, update-task, create-task])