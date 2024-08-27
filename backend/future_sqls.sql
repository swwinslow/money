-- FUTURE check on on existing trans
SELECT id, money, date FROM trans t 
WHERE EXISTS(SELECT id FROM `trans` WHERE t.money = 48.89) 
OR EXISTS(SELECT id from trans where t.date BETWEEN DATE_SUB('2022-03-01', INTERVAL 1 DAY) and DATE_ADD('2022-03-01', INTERVAL 1 DAY) and t.money = "3.49")


-- FUTURE NETWORTH BY GROUP SQL
select ROUND(SUM(category_value),2) as cat_value, ROUND(SUM(category_liabilities),2) as cat_lib, ROUND(SUM(`category_value` - `category_liabilities`),2) AS money_value, date from net_worth where Category = 'House' group by date order by YEAR(date) DESC

SELECT id, money, date FROM trans t 
WHERE EXISTS(
    SELECT * FROM `trans` WHERE money = '37.23' AND date BETWEEN DATE_SUB('10/17/2021', INTERVAL 3 DAY) and DATE_ADD('10/17/2021', INTERVAL 3 DAY));