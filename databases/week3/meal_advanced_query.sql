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
    title LIKE 'chicken';
    
select
   * 
from
   meal 
where
   created_date between '2022-05-01' and '2023-05-24';


select
   * 
from
   meal limit 5;
   
select
   meal.id,
   meal.title,
   review.title,
   review.description,
   review.stars 
from
   meal 
   inner join
      review 
      on meal.id = review.meal_id 
where
   review.stars >= 3;
   
select
   meal.id,
   meal.title,
   reservation.id,
   reservation.number_of_guests,
   reservation.created_date 
from
   reservation 
   inner join
      meal 
      on reservation.meal_id = meal.id 
where
   meal.id = 4
order by
   reservation.created_date ASC;
   
SELECT review.meal_id,meal.title ,meal.description,AVG(stars) as avg_stars
FROM meal
JOIN  review ON meal.id=review.meal_id
GROUP BY meal.id
ORDER BY avg_stars ASC;
    
    
