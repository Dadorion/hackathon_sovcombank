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