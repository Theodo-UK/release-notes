#!/bin/bash
SOURCE_DIR=dist
TMP_DIR=tmp-deploy

SOURCE_BRANCH=master
DEPLOY_BRANCH=gh-pages

if [ ! -z "$(git status --porcelain)" ]
  then
    echo "Uncommited changes."
    exit 1
  fi

if [ -d $TMP_DIR ];
then
  rm -r $TMP_DIR
fi;

yarn build
cp -r "$SOURCE_DIR" "$TMP_DIR"

git checkout "$DEPLOY_BRANCH"

cp "$TMP_DIR"/* .

git add index.html
git add bundle.js

git commit -m "💫 Deployment $(date)"

git checkout "$SOURCE_BRANCH"

rm -r "$TMP_DIR"
