up:
	docker-compose up -d

down:
	docker-compose down

stop:
	docker-compose stop

build:
	docker-compose build --no-cache

exec:
	docekr-compose exec app bash

ps:
	docker-compose ps

yarn/install:
	docker-compose run --rm app yarn install

vue/create:
	docker-compose run --rm app vue create .

yarn/build:
	docker-compose run --rm app yarn build

yarn/dev:
	docker-compose run --rm --service-ports app yarn serve