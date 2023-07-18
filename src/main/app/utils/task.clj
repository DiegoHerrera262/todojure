(ns app.utils.task)

(defn change-task-data
  [task, status, description]
  (let [new-status (or status (:task/status task))
        new-description (or description (:task/description task))]
    (assoc task :task/status new-status :task/description new-description)))
