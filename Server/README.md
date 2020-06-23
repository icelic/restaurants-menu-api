# restaurants-menu-api

## Development
## Config .env 

1. In the app root (next to package.json) create .env file which looks like this (fill it with your own values):

```
DB_NAME=database-name
DB_USERNAME=database-username
DB_PASSWORD=database-password
DB_HOST=hostname // optional, will ldefault to localhost if not specified in the .env file
DB_PORT=databse-port // optional, will ldefault to 3306 if not specified in the .env file
```

2. Generate new migration with:

```
npm run typeorm migration:generate -- -n migrationName
```

3. Run migration with:

```
npm run typeorm migration:run
```

4. Start dev server with:

```
npm run start:dev
```

## Production
1. Create .env file (like in the step 1.)
2. Create `.env_prod` file in `/conf/docker-compose/envs`
* set SSL certificates (needed only first time), follow https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx and then copy resulted keys in `conf/dev-certs`
3. Start docker with positioning in `/cli` and running `./start_prod`
4. Stop prod when needed with `./stop_prod`