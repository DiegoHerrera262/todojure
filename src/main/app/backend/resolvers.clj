(ns app.backend.resolvers
  (:require
    [app.backend.db :refer [todo-table, list-table]]
    [com.wsscode.pathom.connect :as pc]))

(defn get-todos-by-list [list-id]
  (when-let [t-list (get @list-table list-id)]
    (assoc t-list :list/items (mapv (fn [id] (get @todo-table id)) (:list/items t-list)))))

(pc/defresolver todo-by-id-resolver [_ {:todo/keys [id]}]
                {::pc/input  #{:todo/id}
                 ::pc/output [:todo/id :todo/description :todo/status]}
                (get @todo-table id))

(pc/defresolver list-by-id-resolver [_ {:list/keys [id]}]
                {::pc/input  #{:list/id}
                 ::pc/output [:list/id :list/items]}
                (get-todos-by-list id))

(pc/defresolver todo-list-resolver [_ _]
                {::pc/output [{:todo-list [:list/id :list/items]}]}
                {:todo-list {:list/id :todo-list}})

(def resolvers [todo-by-id-resolver, list-by-id-resolver, todo-list-resolver])