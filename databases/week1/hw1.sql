select name, phone from user; 
select name from user where id= 10;
select count(*) from user;
select *from user;

select count(*) from task;
select count(*) from task where due_date IS NULL;
select * FROM task where status_id like 3;
SELECT * FROM task WHERE status_id NOT LIKE 3;

SELECT * FROM task ORDER BY created  DESC;

SELECT * FROM task ORDER BY created  DESC LIMIT 1;

SELECT * FROM task WHERE title LIKE '%database%' OR DESCRIPTION LIKE '%database%';

SELECT task.title,status.name FROM task JOIN STATUS ON task.status_id=STATUS.id;

SELECT STATUS.name,count(task.title) FROM task 
JOIN STATUS ON task.status_id=STATUS.id 
GROUP BY status.name 
ORDER BY count(task.title) DESC;



