
SELECT name, email, title
FROM user_task
    INNER JOIN task ON task.id = user_task.task_id
    INNER JOIN user ON user.id = user_task.user_id
WHERE email LIKE '%@spotify.com%';

SELECT task.id, task.title AS 'TaskName', user.name AS 'user', status.name AS status
FROM user_task
JOIN task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id
JOIN status ON task.status_id = status.id
WHERE status.name = "Not started" AND user.name = 'Donald Duck';

SELECT name, task.*
FROM task
INNER JOIN user_task ON task.id = user_task.task_id
INNER JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows'
AND MONTH(created) = 9;

SELECT COUNT(*), MONTHNAME(task.created) AS month
FROM task
GROUP BY month;