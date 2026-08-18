-- DATABASE SETUP: coffee_valley
CREATE DATABASE IF NOT EXISTS `coffee_valley`;
USE `coffee_valley`;

SET FOREIGN_KEY_CHECKS = 0;

-- 1. Table logins
DROP TABLE IF EXISTS `logins`;
CREATE TABLE `logins` (
    `user_id` VARCHAR(50) NOT NULL PRIMARY KEY,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `logins` (`user_id`, `password`) VALUES
('admin', 'admin123'),
('dataon', 'coffee2026');

-- 2. Table bean
DROP TABLE IF EXISTS `bean`;
CREATE TABLE `bean` (
    `bean_id` INT AUTO_INCREMENT PRIMARY KEY,
    `bean_name` VARCHAR(100) NOT NULL,
    `description` TEXT NOT NULL,
    `price_per_unit` DECIMAL(10, 2) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `bean` (`bean_name`, `description`, `price_per_unit`) VALUES
('Cubita', 'Cubita Coffee is sun dried and hand sorted. It originates from an elevation of over 2000 meters in the Andes Mountains of Ecuador, which is located closest to the sun on the Equator. Superb aroma and rich flavor.', 12.00),
('Colombian Supremo', 'This smooth, full-flavored coffee from Colombia boasts a sweet delicate aroma and a rich, balanced flavor. A classic coffee appropriate for any occasion.', 13.50),
('Pure Kona Fancy', 'Grown on the Big Island of Hawaii, this coffee is known for its tantalizing aroma. This medium bodied brew offers a rich flavor with subtle winery tones.', 15.90),
('Kenyan', 'The complex coffee from the highlands of East Africa features a winey, full flavor coupled with an intriguing aroma. A delightfully delicate selection for coffee lovers.', 24.00),
('Costa Rican', 'Arabicas normally set aside for the demanding Northern European market produce this lively, well-balanced coffee distinguished by its snappy, clean taste.', 12.30),
('Kona Peaberry', 'Occasionally coffee fruit produces a single, rather than a double, bean. These "peaberries" provide all the flavor and aroma of their larger, regular cousins, but in a smaller package.', 10.00),
('Sumatra', 'The wonderful cocoa-like finish of this smooth, full-bodied coffee is reminiscent of rich, dark chocolate. Its unique characteristics can only be captured from the rich soils of this isle of Indonesia.', 9.50),
('Kona Blend', '25% Kona, 25% Sumatra and 50% Colombian. This combination unites the fragrant aroma of Kona with the full body of Sumatra and the dry snap of Colombian.', 12.15),
('Kona Espresso', 'Some like it dark roasted to give it the smokey, bittersweet tan that espresso drinkers crave.', 13.00),
('Italian Roast', 'Roasted in the Southern Italian tradition, this boldly flavored dark roast is a perfect choice for either a hearty cup of drip coffee or a shot of espresso.', 11.90);

-- 3. Table dailybean
DROP TABLE IF EXISTS `dailybean`;
CREATE TABLE `dailybean` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `bean_id` INT NOT NULL,
    `sale_price` DECIMAL(10, 2) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`bean_id`) REFERENCES `bean`(`bean_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `dailybean` (`bean_id`, `sale_price`) VALUES (1, 11.00);

-- 4. Table distributors
DROP TABLE IF EXISTS `distributors`;
CREATE TABLE `distributors` (
    `dist_id` INT AUTO_INCREMENT PRIMARY KEY,
    `dist_name` VARCHAR(150) NOT NULL,
    `city` VARCHAR(100) NOT NULL,
    `state_region` VARCHAR(100) DEFAULT NULL,
    `country` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(50) DEFAULT NULL,
    `email` VARCHAR(100) DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `distributors` (`dist_name`, `city`, `state_region`, `country`, `phone`, `email`) VALUES
('Beans R Us', 'Brisbane', 'Queensland', 'Australia', '+61 7 3000 0000', 'info@beansrus.com.au'),
('The Buzz', 'Munich', 'Bavaria', 'Germany', '+49 89 123456', 'contact@thebuzz.de'),
('Coffee Galore', 'Capelle aan den IJssel', 'South Holland', 'The Netherlands', '+31 10 458 7148', 'jslooten@coffeegalore.com'),
('Perk Plus', 'Salem', 'Massachusetts', 'United States', '+1 978 555 0199', 'support@perkplus.com'),
('Café Colombian', 'Hawthorne', 'California', 'United States', '+1 310 555 0142', 'orders@cafecolombian.com'),
('Jumping Java', 'Sydney', 'New South Wales', 'Australia', '+61 2 9000 1111', 'hello@jumpingjava.com.au'),
('Coffee 2000', 'Munich', 'Bavaria', 'Germany', '+49 89 654321', 'sales@coffee2000.de'),
('The Whole Bean', 'Alton', 'Illinois', 'United States', '+1 618 555 0177', 'info@thewholebean.com'),
('Roast Resellers', 'Vancouver', 'British Columbia', 'Canada', '+1 604 555 0188', 'contact@roastresellers.ca');

-- 5. Table uploads
DROP TABLE IF EXISTS `uploads`;
CREATE TABLE `uploads` (
    `upload_id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `document_file` VARCHAR(255) NOT NULL,
    `author` VARCHAR(150) NOT NULL,
    `uploaded_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;