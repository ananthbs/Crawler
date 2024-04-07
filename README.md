# Crawler Project

A web application that crawls company website, collects data, and stores it in a database. This data can be accessed and modified as needed.

# Tech used
 1. client side
    React.js + redux-toolkit( for state management) + Chakra UI (Styling)

2. server side
    Node.js + Express.js

3. Database
    mySql
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [References](#references)

## Introduction

This Crawler Project is a powerful web application designed to automate the process of collecting company data from website. By crawling company site, it gathers information such as company name, contact CIN, PIN, and email address. This data is then stored in a mysql database for easy access and modification.

## Features

- **Automated Crawling:** Automatically retrieves company data from its website.
- **Data Storage:** Stores collected data in a mysql database for future use.
- **Easy Access:** Allows users to access and modify the collected data through a user-friendly interface.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ananthbs/crawler.git
```

2. Install node modules in both server and client folder seperatly:
3. Create the table schema as shown below
    ```bash 
    CREATE TABLE `company_data` (
      `id` int NOT NULL AUTO_INCREMENT,
      `cin` varchar(30) NOT NULL,
      `pin` int NOT NULL,
      `name` varchar(200) NOT NULL,
      `email` varchar(50) NOT NULL,
      PRIMARY KEY (`id`),
      UNIQUE KEY `cin_UNIQUE` (`cin`)
    ```
4. Add your DB credentials and check connection
5. Run the client with 
    ```bash 
        npm start
    ```
6. Run server with cmd
    ```bash
        npm run start
    ```
## References

Please find the attached recording below.
[Crawler Demo vedio](https://drive.google.com/file/d/1JZEol1ucWQwpSEhTjPrqGnYeH-azMred/view?usp=drive_link)
        

