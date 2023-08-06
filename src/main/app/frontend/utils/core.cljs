(ns app.frontend.utils.core
  (:require
    [clojure.string :as str]
    [com.fulcrologic.fulcro.algorithms.form-state :as fs]
    [com.fulcrologic.fulcro.components :as comp]
    [cljs.spec.alpha :as s]))

;; Validate task description
(s/def :task/description (s/and string? #(seq (str/trim %))))
(s/def :task/status (s/and string? #(seq (str/trim %))))


(defn field-attrs
  "A helper function for getting aspects of a particular field."
  [component field]
  (let [form         (comp/props component)
        entity-ident (comp/get-ident component form)
        id           (str (first entity-ident) "-" (second entity-ident))
        is-dirty?    (fs/dirty? form)
        clean?       (not is-dirty?)
        validity     (fs/get-spec-validity form field)
        is-invalid?  (= :invalid validity)
        value        (get form field "")]
    {:dirty?   is-dirty?
     :ident    entity-ident
     :id       id
     :clean?   clean?
     :validity validity
     :invalid? (not (s/valid? :task/description value))
     :value    value}))

(defn add-task*
  [state-map id description]
  (let [task-ident [:task/id id]
        task {:task/id id :task/description description :task/status :pending}]
    (assoc-in state-map task-ident task)))

(defn change-task-data
  [task, status, description]
  (let [new-status (or status (:task/status task))
        new-description (or description (:task/description task))]
    (assoc task :task/status new-status :task/description new-description)))