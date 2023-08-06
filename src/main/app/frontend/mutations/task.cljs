(ns app.frontend.mutations.task
  (:require [com.fulcrologic.fulcro.mutations :refer [defmutation]]
            [com.fulcrologic.fulcro.algorithms.form-state :as fs]
            [com.fulcrologic.fulcro.algorithms.tempid :as tempid]
            [app.frontend.components.task-form :refer [TaskForm]]
            [app.frontend.utils.core :refer [add-task*]]))

(defmutation edit-new-task [_]
  (action [{:keys [state]}]
          (let [task-id 0
                task-ident [:task/id task-id]]
            (swap! state
                   (fn [s] (-> s
                               (add-task* task-id "New task")
                               ;; Locate initial values in the right place
                               (assoc :task-form task-ident)
                               (fs/add-form-config* TaskForm [:task/id task-id])))))))