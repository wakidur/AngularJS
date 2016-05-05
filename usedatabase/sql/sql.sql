create table `students` (
    `id` int (15),
    `roll` int (15),
    `name` varchar (50),
    `city` varchar (30),
    `country` varchar (30)
    
);


insert into `angularjs`.`students` (`id`, `roll`,`name`,`city`,`country`) values('112050','120','Wakidur','Dhaka','Bangladesh');
insert into `angularjs`.`students` (`id`, `roll`,`name`,`city`,`country`) values('112051','121','Alfreds Futterkiste','Berlin','Germany');
insert into `angularjs`.`students` (`id`, `roll`,`name`,`city`,`country`) values('112055','122','Ana Trujillo Emparedados y helados','Mexico D.F.','Mexico');
insert into `angularjs`.`students` (`id`, `roll`,`name`,`city`,`country`) values('112056','123','Bs Beverages','London','UK');
insert into `angularjs`.`students` (`id`, `roll`,`name`,`city`,`country`) values('112057','124','Chop-suey Chinese','Buenos Aires','Argentina');




create table `employ` (
    `name` varchar (1536),
    `id` int (11)
)

INSERT INTO `angularjs`.`employ` (`name`, `id`) VALUES ('Wakidur', '11205090');
INSERT INTO `angularjs`.`employ` (`name`, `id`) VALUES ('Rohman', '11205050');

INSERT INTO `angularjs`.`employ` (`name`, `id`) VALUES ('Rofiqul', '11200020');