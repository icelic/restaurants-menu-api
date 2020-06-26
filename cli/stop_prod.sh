#!/usr/bin/env bash
COMPOSE_PATH=../conf/docker-compose/app.prod.yml
COMPOSE_ENV_PATH=../conf/docker-compose/envs/.env_prod
docker-compose --env-file $COMPOSE_ENV_PATH -f $COMPOSE_PATH  -p restaurants down --rmi all