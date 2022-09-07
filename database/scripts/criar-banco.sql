	CREATE TABLE users (
		id SERIAL PRIMARY KEY,
		name TEXT NOT NULL,
		email TEXT NOT NULL UNIQUE,
		password TEXT NOT NULL
	);

	CREATE TABLE urls (
		id SERIAL PRIMARY KEY,
		shortUrl TEXT NOT NULL UNIQUE,
		url TEXT NOT NULL,
		userId INTEGER NOT NULL REFERENCES users(id),
		created date NOT NULL 
	);




