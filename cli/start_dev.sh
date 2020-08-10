COMPOSE_PATH=../conf/docker-compose/app.dev.yml
COMPOSE_ENV_PATH=../conf/docker-compose/envs/.env_dev
docker-compose --env-file $COMPOSE_ENV_PATH -f $COMPOSE_PATH -p restaurants build --no-cache
docker-compose --env-file $COMPOSE_ENV_PATH -f $COMPOSE_PATH -p restaurants up -d --force-recreate