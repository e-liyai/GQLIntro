drop table if exists votes;
drop table if exists names;
drop table if exists contests;
drop table if exists users;

create table users (
	id serial primary key,
	email varchar(128) not null,
	first_name varchar(128),
	last_name varchar(128),
	api_key varchar(128) not null unique,
	created_at timestamp not null default current_timestamp
);

create table contensts (
	id serial primary key,
	code varchar(128) not null unique,
	title varchar(128),
	description text,
	status varchar(10) not null default 'draft' check (status in ('draft', 'published', 'archived')),
	created_at timestamp not null default current_timestamp,
	create_by integer references users not null
);