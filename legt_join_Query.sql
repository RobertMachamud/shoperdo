SELECT
car_shop.id,
car_shop.brand,
car_shop.price,
car_shop.model,
category.name AS "category"
FROM car_shop
LEFT JOIN category
ON car_shop.category = category.id
