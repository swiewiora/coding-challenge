#PostgreSQL

SELECT plays.id, plays.title, COALESCE(total_reservations, 0)
FROM plays
LEFT OUTER JOIN (SELECT play_id, SUM(number_of_tickets) AS total_reservations
      FROM reservations
      GROUP BY play_id
) AS r 
ON plays.id = r.play_id
ORDER BY COALESCE(total_reservations, 0) DESC, plays.id ASC