#!/bin/bash

echo "\033[32m > ======================================================="
echo "\033[32m > [es6-node-server] [Processing] 🚀"
echo "\033[32m > ======================================================= \033[0m"
cd es6-node-server
npm install
npm run test:coverage

echo "\033[32m > ======================================================="
echo "\033[32m > [npm-packages] [Processing] 🚀"
echo "\033[32m > ======================================================= \033[0m"
cd ../npm-packages
npm install
npm run test:coverage