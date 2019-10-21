# What is SQL? 

#### And why do I care... ?

## `SQL` stands for `S`tructured `Q`uery `L`anguage

SQL is a standard programming language specifically designed for storing, retrieving, managing or manipulating the data inside a `relational database management system` (RDBMS)

- Traditional relational databases are very good at keeping your data transactions secure and making complex queries to acquire information.
#
## What You Can Do with an SQL Database?
#### There are lot more things you can do with SQL:

- You can create a database.
- You can create tables in a database.
- You can query or request information from a database.
- You can insert records in a database.
- You can update or modify records in a database.
- You can delete records from the database.
- You can set permissions or access control within the database for data security.
- You can create views to avoid typing frequently used complex queries.


#

## Let's see how it is used:

First we need to CREATE a new DATABASE
```sql
CREATE DATABASE friends_db;
```

The next `IMPORTANT` thing that we need to do before we start adding or playing with data in our DATABASE is we have to tell SQL that we want to USE this specific database

```sql
USE friends_db;
```

Next we need a data structure to hold our data. In SQL that data structure is a TABLE

```sql
CREATE TABLE people (
    -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    -- Makes a string column called "name" which cannot contain null --
    name VARCHAR(30) NOT NULL,
    -- Makes a numeric column called "age" --
    age INTEGER(10),
    -- Makes a boolean column called "is_married" which cannot contain null --
    is_married BOOLEAN NOT NULL,
    -- Sets id as this table's primary key which means all data contained within it will be unique --
    PRIMARY_KEY(id)
);
```


