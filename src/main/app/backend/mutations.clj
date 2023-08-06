(ns app.backend.mutations
  (:require [app.backend.db.setup :refer [conn]]
            [app.backend.db.queries :as q]
            [com.wsscode.pathom.connect :as pc]))

(defn filter-id [list, id]
  (filterv #(not= id %) list))

(pc/defmutation delete-task [_ {:keys [id]}]
                {::pc/sym    'app.frontend.mutations.task-list/delete-task
                 ::pc/params [:id]}
                (println (str "Removing task " id))
                (let [task-id (:db/id (q/query-task-by-id conn id))]
                  (q/tx-retract conn task-id)
                  {:task/id id}))

(pc/defmutation create-task [_ {:keys [description]}]
                {::pc/sym    'app.frontend.mutations.task-list/create-task
                 ::pc/params [:description]}
                (let [task-data {:task/id          (str (java.util.UUID/randomUUID))
                                 :task/description description
                                 :task/status      :pending}]
                  (q/tx-add conn task-data)
                  (println (str "Added task " task-data))
                  task-data))

(pc/defmutation update-task [_ {:keys [id, status, description]}]
                {::pc/sym    'app.frontend.mutations.task-list/update-task
                 ::pc/params [:id, :status, :description]}
                (let [current (q/query-task-by-id conn id)
                      ;; for allowing partial edition of data
                      update-data {:task/status      (or status (:task/status current))
                                   :task/description (or description (:task/description current))}
                      response (q/tx-add conn (:db/id current) update-data)]
                  (println (str "Updated task " id))
                  (assoc response :task/id id)))

(def mutations [delete-task, update-task, create-task])