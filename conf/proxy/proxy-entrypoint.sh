#!/usr/bin/env sh
set -eu

envsubst '${API_HOST} ${API_PORT} ${WEBSITE_PORT}' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/nginx.conf

exec "$@"