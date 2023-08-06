(ns app.frontend.client
  (:require
    [app.frontend.components.task-list :refer [ui-task-list, TaskList]]
    [app.frontend.application :refer [app]]
    [app.frontend.ui :as ui]
    [com.fulcrologic.fulcro.components :as comp]
    [com.fulcrologic.fulcro.data-fetch :as df]
    [com.fulcrologic.fulcro.application :as app]))

(defn ^:export init []
  (app/mount! app ui/Root "app")
  ;; fetch-initial state
  (df/load! app :task-list TaskList)
  (js/console.log "Loaded"))

(defn ^:export refresh []
  ;; re-mounting will cause forced UI refresh
  (app/mount! app ui/Root "app")
  ;; fetch-initial state
  (df/load! app :task-list TaskList)
  ;; 3.3.0+ Make sure dynamic queries are refreshed
  (comp/refresh-dynamic-queries! app)
  (js/console.log "Hot reload"))