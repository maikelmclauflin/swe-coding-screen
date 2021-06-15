#!/bin/sh
ls -r $(dirname $0)/../migrations/*/down.sql | xargs cat | psql $DATABASE_URL --single-transaction -v ON_ERROR_STOP=1