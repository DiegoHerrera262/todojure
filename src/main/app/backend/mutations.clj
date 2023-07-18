(ns app.backend.mutations
  (:require [app.backend.db :refer [task-table, task-index]]
            [app.utils.task :refer [change-task-data]]
            [com.wsscode.pathom.connect :as pc]))

(defn filter-id [list, id]
  (filterv #(not= id %) list))

(pc/defmutation delete-task [_ {:keys [id]}]
  {::pc/sym    'app.frontend.mutations.task-list/delete-task
   ::pc/params [:id]}
  (println (str "Removing task " id))
  (swap! task-table (fn [data] (dissoc data id)))
  {:task/id id})

(pc/defmutation create-task [_ {:keys [description]}]
  {::pc/sym 'app.frontend.mutations.task-list/create-task
   ::pc/params [:description]}
  (println (str "Adding task"))
  (let [new-task {:task/id @task-index :task/description description :task/status :pending}]
    (swap! task-table (fn [data] (assoc data @task-index new-task)))
    (swap! task-index inc)
    new-task))

(pc/defmutation update-task [_ {:keys [id, status, description]}]
  {::pc/sym    'app.frontend.mutations.task-list/update-task
   ::pc/params [:id, :status, :description]}
  (println (str "Updating task " id))
  (let [
        path [id]
        old-task (get-in @task-table path)
        new-task (change-task-data old-task status description)]
    (swap! task-table assoc-in path new-task)
    new-task))

(def mutations [delete-task, update-task, create-task])