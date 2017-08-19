#!/usr/bin/env node

const { resolve } = require("path")

const parser = require("minimist")

const App = require(".")

const resolvePath = (cwd) => (path) => resolve(cwd, path)

const opts = parser(process.argv.slice(2))

const filePaths = opts._
  .map(resolvePath(process.cwd()))

App(filePaths)
