# Todojure

This app is a simple todo list application implemented in clojure, using fulcro.
The front end allows simple CRUD operations, using pathom as parser tool for EQL
requests in the front.

To run the app, preferably use IntelliJ + Cursive, and start a REPL with the `dev` alias. Then do the following:

1. Download and install NodeJS dependencies. Using `yarn`
2. Run `npx shadow-cljs compile main`
3. In the REPL, run `(start)` command