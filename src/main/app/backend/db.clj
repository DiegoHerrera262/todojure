(ns app.backend.db)

(def todo-index (atom 5))

(def todo-table
  (atom {1 {:todo/id 1 :todo/description "Build simple front" :todo/status "PENDING"}
   2 {:todo/id 2 :todo/description "Integrate front with local db" :todo/status "PENDING"}
   3 {:todo/id 3 :todo/description "Add local mutations" :todo/status "PENDING"}
   4 {:todo/id 4 :todo/description "Integrate with pathom" :todo/status "PENDING"}}))

(def list-table
  (atom {:todo-list {:list/id :todo-list :list/items [1 2 3 4]}}))