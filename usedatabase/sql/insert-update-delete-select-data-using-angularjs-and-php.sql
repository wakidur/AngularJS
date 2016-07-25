CREATE TABLE IF NOT EXISTS `employee` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `companyName` varchar(150) NOT NULL,
  `designation` varchar(150) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `employee` ( `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `name` varchar(150) NOT NULL, `email` varchar(150) NOT NULL, `companyName` varchar(150) NOT NULL, `designation` varchar(150) NOT NULL ) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1

INSERT INTO `employee` (`name`, `email`, `companyName`, `designation`) VALUES
( 'Muniappan Ayothi', 'muni@smart.com', 'My Indian Stay', 'Sr Web Developer'),
('Sasi', 'muni@smartinvoice.com', 'Symphony Telca', 'Sr Web Developer');



INSERT INTO `employee` (`id`, `name`, `email`, `companyName`, `designation`) VALUES ('1', 'Wakidur', 'wakidur@yahoo.com', 'probaze.com', 'developer');
