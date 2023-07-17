(ns test.mockups.todo-list)
(def ^:export test-todo-list [
                              {
                               :todo/status      "DONE"
                               :todo/description "Build task item",
                               :todo/id          1
                               },
                              {
                               :todo/status      "DONE"
                               :todo/description "Build task list"
                               :todo/id          2
                               },
                              {
                               :todo/status      "DONE"
                               :todo/description "Depute mapping of initial states"
                               :todo/id          3
                               },
                              {
                               :todo/status      "PENDING"
                               :todo/description "Integrate Pathom backend"
                               :todo/id          4
                               },
                              ])