(ns app.backend.db)

(def task-index (atom 5))

(def task-table
  (atom {1 {:task/id 1 :task/description "Build simple front" :task/status :pending}
   2 {:task/id 2 :task/description "Integrate front with local db" :task/status :pending}
   3 {:task/id 3 :task/description "Add local mutations" :task/status :pending}
   4 {:task/id 4 :task/description "Integrate with pathom" :task/status :pending}}))