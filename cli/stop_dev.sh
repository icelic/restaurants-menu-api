#!/usr/bin/env bash
COMPOSE_PATH=../conf/docker-compose/app.dev.yml
COMPOSE_ENV_PATH=../conf/docker-compose/envs/.env_dev
docker-compose --env-file $COMPOSE_ENV_PATH -f $COMPOSE_PATH  -p restaurants down --rmi all