SELECT 
    *
FROM
    meal;


SELECT 
    *
FROM
    meal
WHERE
    id = 1;


UPDATE meal 
SET 
    `location` = 'copenhagen',
    `max_reservations` = 40
WHERE
    id = 3;

DELETE FROM meal 
WHERE
    id = 6;

/* Reservations */

SELECT 
    *
FROM
    reservation;

-- Get a reservation with any id, fx 1
SELECT 
    *
FROM
    reservation
WHERE
    id = 3;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation 
SET 
    `number_of_guests` = 3,
    `contact_name` = 'Hala'
   
WHERE
    id = 2;


DELETE FROM reservation 
WHERE
    id = 3;

/* Reviews */

SELECT
    *
FROM
    review;


SELECT 
    *
FROM
    review
WHERE
    id = 4;


UPDATE review 
SET 
    `title` = 'very good',
    `stars` = 4
WHERE
    id = 2;


DELETE FROM review 
WHERE
    id = 3;