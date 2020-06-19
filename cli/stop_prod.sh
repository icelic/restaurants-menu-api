#!/usr/bin/env bash

COMPOSE_PATH=../conf/app.prod.yml
docker-compose -f $COMPOSE_PATH  -p restaurants down --rmi all