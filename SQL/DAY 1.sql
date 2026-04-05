use pundadinesh;

create table baadudinesh(
id int primary key ,
name varchar(59) not null,
age int check (age>=18),
email varchar(100) unique,
status varchar (20) default 'active'

);
insert into baadudinesh ( id, name, age , email, status)
values
(6,' koothidinesh', 69, 'dineshitem@gmail.com ' ,'inactive');
select * from baadudinesh;


