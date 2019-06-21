#!/usr/bin/env sh

if [[ -z $TOKEN ]]
then
    echo 'TOKEN not found!'
    exit 1
fi

npm i request
