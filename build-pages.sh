#!/usr/bin/env bash
rm -rf public/
mkdir -p public
cp index.html public/index.html
sed -i "s/#raid/$(cat dist/raid.js)/" public/index.html
sed -i "s/#character/$(cat dist/character.js)/" public/index.html
sed -i "s/#weapon/$(cat dist/weapon.js)/" public/index.html
sed -i "s/#weapon jp/$(cat dist/weapon jp.js)/" public/index.html
sed -i "s/#summon/$(cat dist/summon.js)/" public/index.html
sed -i "s/#date/$(date)/" public/index.html
