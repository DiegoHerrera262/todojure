(ns app.backend.resolvers
  (:require
    [app.backend.db :refer [task-table]]
    [com.wsscode.pathom.connect :as pc]))

(defn filter-tasks-by-list
  "Function for filtering task list by status"
  [list-id]
  (if (= list-id :all)
    (vals @task-table)
    (filterv #(= list-id (:task/status %)) (vals @task-table)))
  )

(defn get-tasks-by-list
  "Function for retrieving possibly filtered task-list"
  [list-id]
  (-> {}
      (assoc :list/id list-id)
      (assoc :list/items (filter-tasks-by-list list-id))))

(pc/defresolver task-by-id-resolver [_ {:task/keys [id]}]
  {::pc/input  #{:task/id}
   ::pc/output [:task/id :task/description :task/status]}
  (get @task-table id))

(pc/defresolver list-by-id-resolver [_ {:list/keys [id]}]
  {::pc/input  #{:list/id}
   ::pc/output [:list/id :list/items]}
  (get-tasks-by-list id))

(pc/defresolver task-list-resolver [_ _]
  {::pc/output [{:task-list [:list/id :list/items]}]}
  {:task-list {:list/id :all}})

(def resolvers [task-by-id-resolver, list-by-id-resolver, task-list-resolver])