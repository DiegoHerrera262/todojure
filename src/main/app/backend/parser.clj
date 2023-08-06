(ns app.backend.parser
  (:require
    [app.backend.resolvers :as backend-resolvers]
    [app.backend.mutations :as backend-mutations]
    [com.wsscode.pathom.core :as p]
    [com.wsscode.pathom.connect :as pc]
    [taoensso.timbre :as log]))

(def api-registry [backend-resolvers/resolvers backend-mutations/mutations])

(def pathom-parser
  (p/parser {::p/env     {::p/reader                 [p/map-reader
                                                      pc/reader2
                                                      pc/ident-reader
                                                      pc/index-reader]
                          ::pc/mutation-join-globals [:tempids]}
             ::p/mutate  pc/mutate
             ::p/plugins [(pc/connect-plugin {::pc/register api-registry})
                          p/error-handler-plugin
                          ;; or p/elide-special-outputs-plugin
                          (p/post-process-parser-plugin p/elide-not-found)]}))

(defn api-parser [query]
  (log/info "Process" query)
  (pathom-parser {} query))

(comment
  (def tasks ["3a34cb66-607d-4ae1-98f1-d0bc35af64fe"
              "ddff1597-8edb-4cd8-b827-e123ecc86e0e"
              "00224721-b774-437e-9db8-d339b75a297b"
              "6f313e95-cdbc-400a-830f-a3ee20369b9c"])
  (api-parser '[(create-task {:description "Finish todo app!"})])
  (api-parser '[{[:task/id "3a34cb66-607d-4ae1-98f1-d0bc35af64fe"] [:task/id
                                                                    :task/description
                                                                    :task/status]}])
  (api-parser '[(update-task {:id "3a34cb66-607d-4ae1-98f1-d0bc35af64fe"
                              :status :done})])
  (api-parser '[(delete-task {:id "6f313e95-cdbc-400a-830f-a3ee20369b9c"})])
  (api-parser '[{[:list/id :all] [{:list/items [:task/id
                                                :task/description]}]}])
  )