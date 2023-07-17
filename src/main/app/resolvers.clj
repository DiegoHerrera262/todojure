(ns app.resolvers
  (:require
    [com.wsscode.pathom.core :as p]
    [com.wsscode.pathom.connect :as pc]))
+
(def todo-table
  {1 {:todo/id 1 :todo/description "Build simple front" :todo/status "DONE"}
   2 {:todo/id 2 :todo/description "Integrate front with local db" :todo/status "DONE"}
   3 {:todo/id 3 :todo/description "Add local mutations" :todo/status "DONE"}
   4 {:todo/id 4 :todo/description "Integrate with pathom" :todo/status "PENDING"}})

(def list-table
  {:todo-list {:list/id :todo-list :list/items [1 2 3 4]}})

(defn get-todos-list [base-table]
  (->> (keys base-table)
       (map #(get base-table %))
       (vec)))

(defn get-todos-by-list [list-id]
  (when-let [t-list (get list-table list-id)]
    (assoc t-list :list/items (mapv (fn [id] (get todo-table id)) (:list/items t-list)))))

(pc/defresolver todo-by-id-resolver [env {:todo/keys [id]}]
                {::pc/input  #{:todo/id}
                 ::pc/output [:todo/id :todo/description :todo/status]}
                (get todo-table id))

(pc/defresolver list-by-id-resolver [env {:list/keys [id]}]
                {::pc/input  #{:list/id}
                 ::pc/output [:list/id :list/items]}
                (get-todos-by-list id))

(pc/defresolver todo-list-resolver [_ _]
                {::pc/output [{:todo-list [:list/id :list/items]}]}
                {:todo-list (get-todos-by-list :todo-list)})

(def resolvers [todo-by-id-resolver, list-by-id-resolver, todo-list-resolver])