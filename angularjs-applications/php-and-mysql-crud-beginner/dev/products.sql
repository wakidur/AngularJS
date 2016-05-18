--Step 1: Create the Database Table
--
-- Table structure for table `products`
--
 
CREATE TABLE IF NOT EXISTS `products_beginner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `price` double NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;


--
-- Dumping data for table `products`
--
 
--
-- Dumping data for table `products`
--
 
INSERT INTO `products_beginner` (`id`, `name`, `description`, `price`, `created`, `modified`) VALUES
(10, 'Pillow', 'Sleeping well is important.', 788.99, '2015-08-02 12:18:56', '2015-08-06 06:59:18'),
(11, 'Pillow', 'Sleeping well is important.', 787.99, '2015-08-02 12:18:56', '2015-08-06 06:59:18'),
(12, 'Pillow', 'Sleeping well is important.', 837.99, '2015-08-02 12:18:56', '2015-08-06 06:59:18'),
(13, 'Pillow', 'Sleeping well is important.', 988.99, '2015-08-02 12:18:56', '2015-08-06 06:59:18'),
(14, 'Pillow', 'Sleeping well is important.', 47.99, '2015-08-02 12:18:56', '2015-08-06 06:59:18'),
(16, 'Pillow', 'Sleeping well is important.', 97.99, '2015-08-02 12:18:56', '2015-08-06 06:59:18'),
(16, 'Pillow', 'Sleeping well is important.', 87.99, '2015-08-02 12:18:56', '2015-08-06 06:59:18'),
(17, 'Pillow', 'Sleeping well is important.', 58.99, '2015-08-02 12:18:56', '2015-08-06 06:59:18'),
(18, 'Pillow', 'Sleeping well is important.', 36.99, '2015-08-02 12:18:56', '2015-08-06 06:59:18'),
(19, 'Pillow', 'Sgood drink for athletes.', 200.99, '2015-08-02 12:18:56', '2015-08-06 06:59:18');
