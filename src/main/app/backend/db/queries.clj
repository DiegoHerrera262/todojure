(ns app.backend.db.queries
  (:require [datomic.client.api :as d]))

(defn query-task-by-id
  "Fetch task data by uuid"
  [conn id]
  (d/pull
    (d/db conn)
    '[:db/id
      :task/id
      :task/description
      :task/status]
    [:task/id id]))

(defn query-tasks-by-status
  "Fetch all tasks with given status"
  [conn status]
  (let [db (d/db conn)
        query '[:find (pull ?e pattern)
                :in $ ?status pattern
                :where
                [?e :task/status ?status]]
        result (d/q query db status '[:db/id :task/id :task/description :task/status])]
    (mapv first result)))

(defn query-all-tasks
  "Fetch all tasks"
  [conn]
  (let [db (d/db conn)
        query '[:find (pull ?e pattern)
                :in $ pattern
                :where
                [?e :task/id _]]
        result (d/q query db '[:db/id :task/id :task/description :task/status])]
    (mapv first result)))

(defn tx-retract
  [conn id]
  (d/transact conn {:tx-data [[:db/retractEntity id]]}))

(defn tx-add
  ([conn data]
   (d/transact conn {:tx-data [data]})
   data)
  ([conn id data]
   (let [tx-data (assoc data :db/id id)]
     (d/transact conn {:tx-data [(assoc data :db/id id)]})
     tx-data)))