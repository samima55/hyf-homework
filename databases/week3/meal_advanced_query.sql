SELECT 
    *
FROM
    meal
WHERE
    price < 200;
    
SELECT 
    title, max_reservations, SUM(number_of_guests) AS reservated
FROM
    meal
        LEFT JOIN
    reservation ON meal.id = reservation.meal_id
GROUP BY title , max_reservations
HAVING max_reservations - IFNULL(SUM(number_of_guests), 0) > 0;


SELECT 
    title
FROM
    meal
WHERE
    title LIKE '%chicken%';
    
SELECT
   * 
FROM
   meal 
WHERE
   created_date BETWEEN '2022-05-01' AND '2023-05-24';


SELECT
   * 
FROM
   meal LIMIT 5;
   
SELECT
   meal.id,
   meal.title,
   review.title,
   review.description,
   review.stars 
FROM
   meal 
   INNER JOIN
      review 
      ON meal.id = review.meal_id 
WHERE
   review.stars >= 3;
   
SELECT
   meal.id,
   meal.title,
   reservation.id,
   reservation.number_of_guests,
   reservation.created_date 
FROM
   reservation 
   INNER JOIN
      meal 
      ON reservation.meal_id = meal.id 
WHERE
   meal.id = 4
ORDER BY
   reservation.created_date ASC;
   
SELECT review.meal_id,meal.title ,meal.description,AVG(stars) AS avg_stars
FROM meal
JOIN  review ON meal.id=review.meal_id
GROUP BY meal.id
ORDER BY avg_stars ASC;
    
    
