#!/bin/sh
echo "starting migration up"
cat $(dirname $0)/../migrations/*/up.sql | psql $DATABASE_URL --single-transaction -v ON_ERROR_STOP=1;
