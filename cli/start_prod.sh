COMPOSE_PATH=../conf/app.prod.yml
docker-compose -f $COMPOSE_PATH -p restaurants build --no-cache
docker-compose -f $COMPOSE_PATH -p restaurants up -d --force-recreate