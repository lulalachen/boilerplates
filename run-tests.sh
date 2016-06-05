#!/bin/bash
STATUS=0

echo "======================================================="
echo "        [Test] [es6-node-server] [Processing] 🚀"
echo "======================================================="
cd es6-node-server
npm install -s -q
npm run test:coverage
STATUS=$(( $STATUS+$? ))


echo "======================================================="
echo "        [Test] [npm-packages] [Processing] 🚀"
echo "======================================================="
cd ../npm-packages
npm install -s -q
npm run test:coverage
STATUS=$(( $STATUS+$? ))

if [[ $STATUS -eq 0 ]]; then
  echo "Test Success"
  exit 0
else
  echo "Test Failed"
  exit 1
fi
