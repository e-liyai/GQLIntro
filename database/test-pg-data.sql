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

create table contests (
	id serial primary key,
	code varchar(128) not null unique,
	title varchar(128),
	description text,
	status varchar(10) not null default 'draft' check (status in ('draft', 'published', 'archived')),
	created_at timestamp not null default current_timestamp,
	create_by integer references users not null
);

create table names (
	id serial primary key,
	contest_id integer references contests not null,
	label varchar(255) not null,
	normalized_label varchar(255) not null,
	description text,
	created_at timestamp not null default current_timestamp,
	create_by integer references users not null
);

create table votes (
	id serial primary key,
	name_id integer references names not null,
	up boolean not null,
	created_at timestamp not null default current_timestamp,
	create_by integer references users not null,
	constraint user_can_vote_once_on_a_name unique(name_id, create_by)
);

