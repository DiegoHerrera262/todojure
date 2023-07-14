(ns test.mockups.todo-list)
(def ^:export test-todo-list [
                              {
                               :todo/status           "DONE"
                               :todo/description      "Build task item"
                               :todo/on-change-status #(js/alert "Change status of 1")
                               },
                              {
                               :todo/status           "DONE"
                               :todo/description      "Build task list"
                               :todo/on-change-status #(js/alert "Change status of 2")
                               },
                              {
                               :todo/status           "PENDING"
                               :todo/description      "Integrate Pathom backend"
                               :todo/on-change-status #(js/alert "Change status of 3")
                               },
                              ])