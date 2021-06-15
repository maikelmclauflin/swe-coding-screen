#!/bin/sh
echo "starting seed"
cat $(dirname $0)/../seeds/*.sql | psql $DATABASE_URL --single-transaction -v ON_ERROR_STOP=1;