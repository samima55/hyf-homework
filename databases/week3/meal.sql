drop DATABASE IF EXISTS `meal_sharing`;
CREATE DATABASE IF NOT EXISTS `meal_sharing`;
USE `meal_sharing`;

CREATE TABLE `meal` (
`id` INT PRIMARY KEY AUTO_INCREMENT,
`title` VARCHAR(200) NOT NULL,
`description` TEXT NOT NULL,
`location` VARCHAR(250) NOT NULL,
`when` DATETIME NOT NULL,
`max_reservations` INT NOT NULL,
`price` DECIMAL NOT NULL,
`created_date` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
`id` INT PRIMARY KEY AUTO_INCREMENT,
`number_of_guests` INT NOT NULL,
`meal_id` INT NOT NULL,
`created_date` DATE NOT NULL,
`contact_phonenumber` VARCHAR(30) NOT NULL,
`contact_name` VARCHAR(50) NOT NULL,
`contact_email` VARCHAR(50) NOT NULL,
CONSTRAINT `fk_reservation_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
`id` INT PRIMARY KEY AUTO_INCREMENT,
`title` VARCHAR(50) NOT NULL,
`description` TEXT NOT NULL,
`meal_id` INT NOT NULL,
`stars` INT NOT NULL,
`created_date` DATE NOT NULL,
CONSTRAINT `fk_review_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- Meal
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date) VALUES (1, 'Mcdonalds', 'fries and burger', 'cph station', '2022-08-12', 2, 10, '2022-06-6');
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date) VALUES (2, 'BurgerKing', 'burgers with beef', 'jersie', '2021-07-30', 6, 300, '2021-01-30');
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date) VALUES (3, 'KFC', 'fried chicken and wings', 'Greve', '2022-06-12', 4, 600, '2022-01-02');
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date) VALUES (4, 'premium burger ', ' vegan burgers and chickens', 'Aarhus', '2021-05-12', 3, 200, '2021-02-16');
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date) VALUES (5, 'Dhaba', 'indian chicken masala ', 'odense', '2020-01-12', 6, 350, '2021-06-18');

-- Reservation
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_number, contact_name, contact_email) VALUES (1, 5, 1, '2022-02-09', '66666666', 'Sarah', 'sarah@dk.com');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_number, contact_name, contact_email) VALUES (2, 3, 2, '2022-03-17', '99999999', 'Hala', 'hala@dk.com');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_number, contact_name, contact_email) VALUES (3, 4, 3, '2022-02-16', '77777777', 'Rashid', 'rashid@dk.com');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_number, contact_name, contact_email) VALUES (4, 2, 4, '2022-02-15', '44445555', 'Meena', 'meena@dk.com');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_number, contact_name, contact_email) VALUES (5, 1, 5, '2022-03-04', '22224444', 'Tim', 'tim@dk.com');

-- Review
INSERT INTO review (id, title, description, meal_id, stars, created_date) VALUES (1, 'excellent', 'good food ', 1, 3, '2022-05-22');
INSERT INTO review (id, title, description, meal_id, stars, created_date) VALUES (2, 'amazing', 'best experience with food', 2, 3, '2022-05-22');
INSERT INTO review (id, title, description, meal_id, stars, created_date) VALUES (3, 'best food', 'very good food', 3, 5, '2022-05-22');
INSERT INTO review (id, title, description, meal_id, stars, created_date) VALUES (4, 'not good', 'didnt like the food', 4, 2, '2022-05-21');
INSERT INTO review (id, title, description, meal_id, stars, created_date) VALUES (5, 'very good', 'liked the food', 5, 4, '2022-05-19');