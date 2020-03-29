install:
	npm install

lint:
	npx eslint .

start:
	node bin/brain-games.js

publish:
	npm publish --dry-run
