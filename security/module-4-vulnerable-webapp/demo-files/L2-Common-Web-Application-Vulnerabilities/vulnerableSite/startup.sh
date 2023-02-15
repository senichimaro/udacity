#!/usr/bin/sh

/etc/init.d/postgresql start > app.log 2>&1
su postgres -c "createuser root -s" >> app.log 2>&1
su postgres -c "createuser vulnwebsiteuser -s" >> app.log 2>&1
createdb vulnwebsite >> app.log 2>&1
psql -d vulnwebsite -c "ALTER USER vulnwebsiteuser WITH PASSWORD 'weakpasswordrule'" >> app.log 2>&1
psql -d vulnwebsite -c "DROP TABLE IF EXISTS users; CREATE TABLE users (id SERIAL PRIMARY KEY, role TEXT NOT NULL, firstname TEXT, lastname TEXT, username TEXT NOT NULL, password TEXT NOT NULL);" >> app.log 2>&1
psql -d vulnwebsite -c "DROP TABLE IF EXISTS userlist; CREATE TABLE userlist (id SERIAL PRIMARY KEY, role TEXT NOT NULL, firstname TEXT, lastname TEXT, username TEXT NOT NULL, password TEXT NOT NULL);" >> app.log 2>&1
psql -d vulnwebsite -c "DROP TABLE IF EXISTS messages; CREATE TABLE messages (id SERIAL PRIMARY KEY, chat_id SERIAL, user_id SERIAL, body TEXT);" >> app.log 2>&1
psql -d vulnwebsite -c "DROP TABLE IF EXISTS friendlist; CREATE TABLE friendlist (id SERIAL PRIMARY KEY, firstname TEXT, lastname TEXT, password TEXT NOT NULL, email TEXT NOT NULL);" >> app.log 2>&1
psql -d vulnwebsite -c "DROP TABLE IF EXISTS customers; CREATE TABLE customers (id SERIAL PRIMARY KEY, firstname TEXT, lastname TEXT, username TEXT NOT NULL, password TEXT NOT NULL);" >> app.log 2>&1
psql -d vulnwebsite -c "DROP TABLE IF EXISTS users2; CREATE TABLE users2 (id SERIAL PRIMARY KEY, role TEXT NOT NULL, firstname TEXT, lastname TEXT, username TEXT NOT NULL, password TEXT NOT NULL);" >> app.log 2>&1
psql -d vulnwebsite -c "DROP TABLE IF EXISTS weakhash; CREATE TABLE weakhash (id SERIAL PRIMARY KEY, weakhashes TEXT NOT NULL);" >> app.log 2>&1
psql -d vulnwebsite -c "DROP TABLE IF EXISTS hashes; CREATE TABLE hashes (id SERIAL PRIMARY KEY, hash TEXT);" >> app.log 2>&1
cd /home/workspace/VulnWebApp && pip install wheel && pip install -r requirements.txt
