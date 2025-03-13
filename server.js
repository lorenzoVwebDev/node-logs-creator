const express = require('express');
const { v4: uuid } = require('uuid');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const app = express();
const os = require('os');
const { errorMonitor } = require('events');


const newFunc = async (a, b) => {
  const string = uuid() + ' ' + a + '\n';
  const write = await fsPromises.writeFile(path.join('./', 'storage', 'test', 'test.txt'), string);

  const read = await fsPromises.readFile(path.join('./', 'storage', 'test', 'test.txt'));
  console.log(read.toString())
  const unlink = await fsPromises.unlink(path.join('./', 'storage', 'test', 'test.txt'));
}

module.exports = {newFunc}