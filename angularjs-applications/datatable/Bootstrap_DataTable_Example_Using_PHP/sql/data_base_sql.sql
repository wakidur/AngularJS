CREATE TABLE `employees_tbl` (
  `empid` int(10) NOT NULL auto_increment,
  `ename` varchar(100) NOT NULL,
  `desg` varchar(100) NOT NULL,
  `salary` double NOT NULL,
  `joindate` date NOT NULL,
  PRIMARY KEY  (`empid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;
 
-- 
-- Dumping data for table `employees_tbl`
-- 
 
INSERT INTO `employees_tbl` VALUES (1, 'vikram', 'manager', 50000, '2016-06-01');
INSERT INTO `employees_tbl` VALUES (2, 'lucky', 'General Manager', 75000, '2016-06-13');
INSERT INTO `employees_tbl` VALUES (3, 'balraj', 'System Admin', 4500, '2016-06-15');
INSERT INTO `employees_tbl` VALUES (4, 'Srujana', 'Programmer', 6000, '2016-03-15');
INSERT INTO `employees_tbl` VALUES (5, 'Vijaya', 'Software Analyst', 5000, '2016-06-27');
INSERT INTO `employees_tbl` VALUES (6, 'Gloria Little', 'Systems Administrator', 6000, '2016-06-08');
INSERT INTO `employees_tbl` VALUES (7, ' Kennedy', 'Secretary', 3000, '2016-06-27');
INSERT INTO `employees_tbl` VALUES (8, 'Hatfield', 'Regional Director', 15000, '2016-06-01');
INSERT INTO `employees_tbl` VALUES (9, 'Caldwell', 'Development Lead', 6000, '2016-06-20');
INSERT INTO `employees_tbl` VALUES (10, 'Jennifer ', ' Javascript Developer', 7500, '2016-06-13');
INSERT INTO `employees_tbl` VALUES (11, 'Bradshaw', 'Office Manager', 6500, '2016-06-07');
INSERT INTO `employees_tbl` VALUES (12, 'Wilder', 'Sales Assistant', 3500, '2016-06-08');
INSERT INTO `employees_tbl` VALUES (13, 'Green', 'Accountant', 2500, '2016-06-20');
INSERT INTO `employees_tbl` VALUES (14, 'Joyce', 'Developer', 4500, '2016-06-14');
INSERT INTO `employees_tbl` VALUES (15, 'Winters', 'Accountant', 4500, '2016-06-21');
INSERT INTO `employees_tbl` VALUES (16, 'Chang', 'Developer', 4500, '2016-06-27');
INSERT INTO `employees_tbl` VALUES (17, 'Michael ', 'Javascript Developer', 6500, '2016-06-27');