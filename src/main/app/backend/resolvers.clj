(ns app.backend.resolvers
  (:require
    [app.backend.db.setup :refer [conn]]
    [app.backend.db.queries :as q]
    [com.wsscode.pathom.connect :as pc]))

(pc/defresolver task-by-id-resolver [_ {:task/keys [id]}]
                {::pc/input  #{:task/id}
                 ::pc/output [:task/id :task/description :task/status]}
                (q/query-task-by-id conn id))

(pc/defresolver list-by-id-resolver [_ {:list/keys [id]}]
                {::pc/input  #{:list/id}
                 ::pc/output [:list/id :list/items]}
                {:list/id id
                 :list/items (if (= id :all)
                               (q/query-all-tasks conn)
                               (q/query-tasks-by-status conn id))})

(pc/defresolver task-list-resolver [_ _]
                {::pc/output [{:task-list [:list/id :list/items]}]}
                {:task-list {:list/id :all}})

(def resolvers [task-by-id-resolver,
                list-by-id-resolver,
                task-list-resolver])