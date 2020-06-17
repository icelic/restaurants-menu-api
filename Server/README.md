# restaurants-menu-api
## env 
In the app root (next to package.json) create .env file which looks like this (fill it with your own values):
```
DB_NAME=database-name
DB_USERNAME=database-username
DB_PASSWORD=database-password
DB_HOST=hostname // optional, will ldefault to localhost if not specified in the .env file
DB_PORT=databse-port // optional, will ldefault to 3306 if not specified in the .env file
```

## migrations
Generate new migration with:

```
npm run typeorm migration:generate -- -n migrationName
```

Run migration with:
```
npm run typeorm migration:run
```