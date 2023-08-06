(ns app.frontend.components.task-form
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc, factory]]
    [com.fulcrologic.fulcro.algorithms.form-state :as fs]
    [app.frontend.mutations.task-list :as todo-api]
    [com.fulcrologic.fulcro.dom :as dom :refer [div, input, button]]
    [app.frontend.utils.core :as utils]
    [com.fulcrologic.fulcro.mutations :as m]))

(defsc TaskForm [this {:task/keys [id description]}]
  {:query       [:task/id :task/status :task/description fs/form-config-join]
   :ident       :task/id
   :form-fields #{:task/id :task/status :task/description}}
  (let [{:keys [dirty? invalid? validity]} (utils/field-attrs this :task/description)]
    (println dirty?)
    (println invalid?)
    (println validity)
    (div {:style {:display       "flex"
                  :flexDirection "row"
                  :gap           "1.5ch"
                  :margin        "2em 0 1em 0"
                  :width         "100%"}}
         (button {:style   {:height "fit-content"}
                  :disabled invalid?
                  :onClick #(comp/transact! this [(todo-api/create-task {:id id :description description})])} "add")
         (div {:style {:display       "flex"
                       :flexDirection "column"
                       :gap           "0.5em"
                       :width         "100%"}}
              (input {:style    {:width "100%"}
                      :value    (or (str description) "")
                      :onChange #(m/set-string! this :task/description :event %)
                      :onBlur   #(comp/transact! this [(fs/mark-complete! {:entity-ident [:task/id id]
                                                                           :field        :task/description})])})
              (div {:style {:height   "0.7em"
                            :fontSize "0.6em"
                            :color    "red"}} (when invalid? (str "Enter a valid description " dirty?)))))))

(def ui-task-form (factory TaskForm))