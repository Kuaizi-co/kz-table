#!/usr/bin/env sh

# abort on errors
set -e

git config --global user.name "kz-fe"
git config --global user.email "shaojinhong@kuaizi.co"

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "deploy $TRAVIS_COMMIT_MSG"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Kuaizi-co/kz-table.git master:gh-pages

cd -