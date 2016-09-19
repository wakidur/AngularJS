-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Jun 27, 2016 at 06:45 AM
-- Server version: 5.0.51
-- PHP Version: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- Database: `angularjs`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `employees_tbl_second`
-- 

CREATE TABLE `employees_tbl_second_second` (
  `empid` int(10) NOT NULL auto_increment,
  `ename` varchar(100) NOT NULL,
  `desg` varchar(100) NOT NULL,
  `salary` double NOT NULL,
  `joindate` date NOT NULL,
  PRIMARY KEY  (`empid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=27 ;

-- 
-- Dumping data for table `employees_tbl_second`
-- 

INSERT INTO `employees_tbl_second` VALUES (1, 'vikram', 'manager', 50000, '2016-06-01');
INSERT INTO `employees_tbl_second` VALUES (2, 'lucky', 'General Manager', 75000, '2016-06-13');
INSERT INTO `employees_tbl_second` VALUES (3, 'balraj', 'System Admin', 4500, '2016-06-15');
INSERT INTO `employees_tbl_second` VALUES (4, 'Srujana', 'Programmer', 6000, '2016-03-15');
INSERT INTO `employees_tbl_second` VALUES (5, 'Vijaya', 'Software Analyst', 5000, '2016-06-27');
INSERT INTO `employees_tbl_second` VALUES (6, 'Gloria Little', 'Systems Administrator', 6000, '2016-06-08');
INSERT INTO `employees_tbl_second` VALUES (7, ' Kennedy', 'Secretary', 3000, '2016-06-27');
INSERT INTO `employees_tbl_second` VALUES (8, 'Hatfield', 'Regional Director', 15000, '2016-06-01');
INSERT INTO `employees_tbl_second` VALUES (9, 'Caldwell', 'Development Lead', 6000, '2016-06-20');
INSERT INTO `employees_tbl_second` VALUES (10, 'Jennifer ', ' Javascript Developer', 7500, '2016-06-13');
INSERT INTO `employees_tbl_second` VALUES (11, 'Bradshaw', 'Office Manager', 6500, '2016-06-07');
INSERT INTO `employees_tbl_second` VALUES (12, 'Wilder', 'Sales Assistant', 3500, '2016-06-08');
INSERT INTO `employees_tbl_second` VALUES (13, 'Green', 'Accountant', 2500, '2016-06-20');
INSERT INTO `employees_tbl_second` VALUES (14, 'Joyce', 'Developer', 4500, '2016-06-14');
INSERT INTO `employees_tbl_second` VALUES (15, 'Winters', 'Accountant', 4500, '2016-06-21');
INSERT INTO `employees_tbl_second` VALUES (16, 'Chang', 'Developer', 4500, '2016-06-27');
INSERT INTO `employees_tbl_second` VALUES (17, 'Din', 'Developer', 4500, '2016-06-29');
INSERT INTO `employees_tbl_second` VALUES (18, 'Min ', 'Java Developer', 65070, '2016-06-20');
INSERT INTO `employees_tbl_second` VALUES (19, 'Wek ', 'Javascript Developer', 65080, '2016-06-7');
INSERT INTO `employees_tbl_second` VALUES (20, 'Yau ', 'Javascript Developer', 65090, '2016-06-8');
INSERT INTO `employees_tbl_second` VALUES (21, 'And ', 'Javascript Developer', 65030, '2016-06-9');
INSERT INTO `employees_tbl_second` VALUES (22, 'Sohana ', 'Javascript Developer', 67500, '2016-06-10');
INSERT INTO `employees_tbl_second` VALUES (23, 'Sajib ', 'Javascript Developer', 65900, '2016-06-11');
INSERT INTO `employees_tbl_second` VALUES (24, 'Mukter ', 'Javascript Developer', 68500, '2016-06-12');
INSERT INTO `employees_tbl_second` VALUES (25, 'Iqbal ', 'Javascript Developer', 65500, '2016-06-13');
INSERT INTO `employees_tbl_second` VALUES (26, 'Rivee', 'k', 9000, '2016-06-17');