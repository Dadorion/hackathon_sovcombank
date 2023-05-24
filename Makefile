up:
	docker-compose up --force-recreate

rm:
	docker-compose stop \
	&& docker-compose rm \
	&& sudo rm -rf pgdata/

run-db:
	docker-compose -f docker-compose.db.yml up