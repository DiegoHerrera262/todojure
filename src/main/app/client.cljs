(ns app.client
  (:require
    [app.components.todo-list :refer [ui-todo-list]]
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc, fragment]]
    [com.fulcrologic.fulcro.dom :refer [h1]]
    [test.mockups.todo-list :refer [test-todo-list]]
    ))

(defonce app (app/fulcro-app))

(defsc Root [this props]
  {:use-hooks? true}
  (fragment
    (h1 "Todojure")
    (ui-todo-list {:todo-list/items test-todo-list}))
  )

(defn ^:export init
  "Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build."
  []
  (app/mount! app Root "app")
  (js/console.log "Loaded"))

(defn ^:export refresh
  "During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn"
  []
  ;; re-mounting will cause forced UI refresh, update internals, etc.
  (app/mount! app Root "app")
  ;; As of Fulcro 3.3.0, this addition will help with stale queries when using dynamic routing:
  (comp/refresh-dynamic-queries! app)
  (js/console.log "Hot reload"))