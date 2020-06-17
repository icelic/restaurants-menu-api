#!/usr/bin/env bash

COMPOSE_PATH=../conf/app.dev.yml
docker-compose -f $COMPOSE_PATH  -p restaurants down --rmi all