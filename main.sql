CREATE TABLE
   personal_data (
      id integer CONSTRAINT firstkey PRIMARY KEY,
      name varchar(255) NOT NULL,
      surname varchar(255) NOT NULL,
      phone integer NOT NULL,
      e_mail varchar(255) NOT NULL,
      city varchar(255) NOT NULL,
      birstday date NOT NULL,
      status varchar(255) NOT NULL
   );

ALTER TABLE users
ADD COLUMN password character varying(255) NOT NULL;

ALTER TABLE users
ADD COLUMN personal_data_id integer;

ALTER TABLE users
ADD COLUMN registration_date пше;

SELECT
   *
FROM
   public.users
ORDER BY
   id ASC;

SELECT
   login,
   name,
   value as auth_role,
   city,
   status
FROM
   users
   JOIN auth_roles ON users.auth_role_id = auth_roles.id
   JOIN personal_data ON users.id = personal_data.id;

INSERT INTO
   users (login, password, registration_date)
VALUES
   ('Sasha', '12345', default);

INSERT INTO
   groups (name)
VALUES
   ('admins'),
   ('users');

SELECT
   requests.name as request,
   positions.name as position,
   description,
   count,
   cities.name as city,
   skills.name as skills
FROM
   requests
   JOIN requests_positions ON requests.id = request_id
   JOIN positions ON positions.id = position_id
   JOIN cities ON cities.id = city_id
   JOIN positions_skills ON positions_skills.position_id = positions.id
   JOIN skills ON skills.id = skill_id
ORDER BY
   requests.id DESC;