(ns app.utils.todo)

(defn change-task-data
  [task, status, description]
  (let [new-status (or status (:todo/status task))
        new-description (or description (:todo/description task))]
    (assoc task :todo/status new-status :todo/description new-description)))
