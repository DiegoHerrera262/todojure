(ns app.client
  (:require
    [app.application :refer [app]]
    [app.ui :as ui]
    [app.components.todo-list :as todo-list]
    [com.fulcrologic.fulcro.components :as comp]
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.data-fetch :as df]))

(defn ^:export init []
  (app/mount! app ui/Root "app")
  (df/load! app :todo-list todo-list/TodoList)
  (js/console.log "Loaded"))

(defn ^:export refresh []
  ;; re-mounting will cause forced UI refresh
  (app/mount! app ui/Root "app")
  ;; 3.3.0+ Make sure dynamic queries are refreshed
  (comp/refresh-dynamic-queries! app)
  (js/console.log "Hot reload"))