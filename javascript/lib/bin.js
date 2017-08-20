#!/usr/bin/env node

const { get, map, pipe, slice } = require("./common")
const { resolve } = require("path")

const parser = require("minimist")

const app = require(".")

const absolutePath = cwd => path => resolve(cwd, path)

pipe([
  slice(2),
  parser,
  get("_"),
  map(absolutePath(process.cwd())),
  app
])(process.argv)
