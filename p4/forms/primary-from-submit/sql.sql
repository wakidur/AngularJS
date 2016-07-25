
PDO – PHP DATA OBJECTS Fundamentals
Posted: 06 Jun 2016 05:27 AM PDT
In this tutorial we are going to see about PDO – PHP DATA OBJECTS fundamentals. PDO is uniform database access libary, which provides uniform methods (functions) to work with differnet databases without rewriting scripts while switching the database.
“PDO is uniform database access libary, which provides uniform methods (functions) to work with differnet databases”
PDO - PHP DATA OBJECTS Fundamentals
To explain PDO concepts I am using following users table

CREATE TABLE IF NOT EXISTS `primary_from_submit` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NULL DEFAULT NULL,
  `last_name` VARCHAR(50) NULL DEFAULT NULL,
  `email` VARCHAR(60) NOT NULL,
  `description` VARCHAR(60) NOT NULL,
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO `primary_from_submit` (`id`,`first_name`,`last_name`,`email`,`description`,`created`,`modified`) VALUES
(1, 'WakidurDD', 'RahmanDD', 'wakidurDD@yahoo.com', 'I am a employ of probazeDD', '2016-07-16 10:36:26', '2016-07-16 10:40:26');

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT ;