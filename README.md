# restaurants-menu-api

## Development
1. Install Docker & docker compose
2. `cd cli`
3. `./generate_certs.sh` -> you need to run this only once
4. Declare env files 
- Create `.env_dev` file in `/conf/docker-compose/envs`
- In `Server` and `Website/menupls-web` create .env file from .env.example (define your variables there)
4. `./start_dev.sh`
When you are done you can release resources with 
5. `./stop_dev.sh`

## Note: elastic search memory error fix
`sudo sysctl -w vm.max_map_count=262144`

## Production
1. Create .env file (like in the step 1.)
2. Create `.env_prod` file in `/conf/docker-compose/envs`
* set SSL certificates (needed only first time), follow https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx and then copy resulted keys in `conf/dev-certs`
3. Start docker with positioning in `/cli` and running `./start_prod`
4. Stop prod when needed with `./stop_prod`