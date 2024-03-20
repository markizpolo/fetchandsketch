const fetchandsketch = require('fetchandsketch');
const fetchandsketch_upgrade = require('fetchandsketch-upgrade');
const react_redux = require('react-redux');
const webpack = require('webpack');
const fs_extra = require('fs-extra');
const bcrypt = require('bcrypt');
const multer = require('multer');
const webpack_cli = require('webpack-cli');
const ipfs_http_client = require('ipfs-http-client');
const web3 = require('web3');
const solc = require('solc');
const eslint = require('eslint');
const sequelize = require('sequelize');
const passport = require('passport');
const moment = require('moment');
const ejs = require('ejs');
const mocha = require('mocha');
const web3_react = require('web3-react');

const http = require('http');
http.get('http://example.com', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log(data);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
process.exit();

const { Writable } = require('stream');
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});
process.stdin.pipe(outStream);

const buffer = Buffer.from('Hello Buffer');
console.log(buffer.toString());

const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add('some text');
console.log(mySet.has(1));

const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});

const greet = name => console.log(`Hello, ${name}!`);
greet('Node.js');

const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');

const fs = require('fs');
fs.watchFile('target.txt', (curr, prev) => {
  console.log('File changed:', curr.mtime, prev.mtime);
});