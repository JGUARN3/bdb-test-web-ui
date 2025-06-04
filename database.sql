DROP DATABASE user_management;
CREATE DATABASE IF NOT EXISTS user_management;
USE user_management;

CREATE TABLE role (
id INT AUTO_INCREMENT PRIMARY KEY,
name_role VARCHAR(50) NOT NULL
);

CREATE TABLE area (
id INT AUTO_INCREMENT PRIMARY KEY,
name_area VARCHAR(50) NOT NULL
);

CREATE TABLE user (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
creation_date datetime default now(),
status INT
);

CREATE TABLE equipment (
id INT AUTO_INCREMENT PRIMARY KEY,
name_equipment VARCHAR(50) NOT NULL,
description TEXT
);

CREATE TABLE application (
id INT AUTO_INCREMENT PRIMARY KEY,
name_app VARCHAR(50) NOT NULL,
description TEXT
);

CREATE TABLE permission (
id INT AUTO_INCREMENT PRIMARY KEY,
description VARCHAR(100) NOT NULL
);

CREATE TABLE role_assignment (
id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
role_id INT,
area_id INT,
assignment_role_date datetime default now(),
FOREIGN KEY (user_id) REFERENCES user(id),
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (area_id) REFERENCES area(id)
);

CREATE TABLE equipment_assignment (
id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
equipment_id INT,
assignment_equipment_date datetime default now(),
FOREIGN KEY (user_id) REFERENCES user(id),
FOREIGN KEY (equipment_id) REFERENCES equipment(id)
);

CREATE TABLE users_permissions (
id INT AUTO_INCREMENT PRIMARY KEY,
role_id INT,
permission_id INT,
application_id INT,
status INT,
assignment_permissions_date datetime default now(),
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (permission_id) REFERENCES permission(id),
FOREIGN KEY (application_id) REFERENCES application(id)
);

INSERT INTO area (name_area) VALUES ('Area1');
INSERT INTO area (name_area) VALUES ('Area2');

INSERT INTO role (name_role) VALUES ('Administrator');
INSERT INTO role (name_role) VALUES ('Analista');

INSERT INTO permission (description) VALUES ('Write');
INSERT INTO permission (description) VALUES ('Read');

INSERT INTO user (name, email, status) VALUES ('Jhonny Guarnizo', 'test@gmail.com', 1);
INSERT INTO user (name, email, status) VALUES ('Mary Lopez', 'mary@example.com', 2);

INSERT INTO equipment (name_equipment, description) VALUES ('MAC 1', 'BB0001');
INSERT INTO equipment (name_equipment, description) VALUES ('Linux', 'BB0002');

INSERT INTO application (name_app, description) VALUES ('Github', 'Repositorio');
INSERT INTO application (name_app, description) VALUES ('Confluence', 'Gestion');

INSERT INTO role_assignment (role_id, user_id, area_id) VALUES (1, 1, 1);
INSERT INTO role_assignment (role_id, user_id, area_id) VALUES (2, 2, 1);
