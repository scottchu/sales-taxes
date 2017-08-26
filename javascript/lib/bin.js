#!/usr/bin/env node

const args = require("./args")
const app = require("./index")

const { argv, cwd } = process

app(args(cwd())(argv))
