--Step 1: Create the Database Table
--
-- Table structure for table `products`
--
--  CREATE TABLE IF NOT EXISTS `login`.`users` (
--   `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
--   `first_name` VARCHAR(50) NULL DEFAULT NULL,
--   `last_name` VARCHAR(50) NULL DEFAULT NULL,
--   `email` VARCHAR(60) NOT NULL,
--   `password` VARCHAR(60) NOT NULL,
--   `oauth_provider` VARCHAR(50) NULL DEFAULT NULL,
--   `oauth_uid` VARCHAR(150) NULL DEFAULT NULL,
--   `oauth_token` VARCHAR(150) NULL DEFAULT NULL,
--   `oauth_secret` VARCHAR(150) NULL DEFAULT NULL,
--   `username` VARCHAR(75) NULL DEFAULT NULL,
--   `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   `updated` DATETIME NULL DEFAULT NULL,
--   PRIMARY KEY (`id`))
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8;


CREATE TABLE IF NOT EXISTS `products_beginner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `price` double NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


--
-- Dumping data for table `products`
--
 
--
-- Dumping data for table `products`
--
 
INSERT INTO `products_beginner` (`id`, `name`, `description`, `price`, `created`, `modified`) VALUES
(1, 'Basketball', 'A ball used in the NBA.', 49.99, '2015-08-02 12:04:03', '2015-08-06 06:59:18'),
(2, 'Gatorade', 'This is a very good drink for athletes.', 1.99, '2015-08-02 12:14:29', '2015-08-06 06:59:18'),
(3, 'Eye Glasses', 'It will make you read better.', 6, '2015-08-02 12:15:04', '2015-08-06 06:59:18'),
(4, 'Trash Can', 'It will help you maintain cleanliness.', 3.95, '2015-08-02 12:16:08', '2015-08-06 06:59:18'),
(5, 'Mouse', 'Very useful if you love your computer.', 11.35, '2015-08-02 12:17:58', '2015-08-06 06:59:18'),
(6, 'Earphone', 'You need this one if you love music.', 7, '2015-08-02 12:18:21', '2015-08-06 06:59:18')


