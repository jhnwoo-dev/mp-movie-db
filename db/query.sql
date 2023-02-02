SELECT
    movies.id AS id,
    movies.movie_name AS name,
    reviews.review AS review
FROM reviews
    JOIN movies ON reviews.id = movies.id