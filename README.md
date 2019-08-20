# ITC Team Formation Tool

## Overview

This repository hosts the ITC team formation tool to be integrated on Canvas and used by professors and students.

## Designs

Figma: https://www.figma.com/file/Ai38dTaRAbw1NQ0x7FSdhm/ITC-19S?node-id=1%3A3

## Architecture

This is a React on Rails app on Ruby 2.6.0 with webpacker.

## Style

We are using react components. As of now, questions are components as are the title and creating a survey in general.

## Installation

0. If you do not have Ruby installed (check with `ruby -v`), follow the instructions for installing Ruby [here](https://www.ruby-lang.org/en/documentation/installation/). Run
   ```
   brew install postgresql node yarn
   ```
   too for other basic dependencies.
1. If you do not have rails installed (check with `rails --version`), run
   ```
   gem install rails
   ```
2. With rails installed, run
   ```
   bundle install
   ```
   to install all rails dependencies for this project.
   Run
   ```
   yarn install
   ```
   to install all node dependencies.
3. Start Postgres as a background service by running
   ```
   brew services start postgresql
   ```
   If this is your first time starting Postgres, run
   ```
   rake db:setup
   ```
   followed by 
   ```
   rake db:migrate
   ```
   which will create all the databases specified in `config/database.yml`.
4. Start the application with
   ```
   rails s
   ```
   and visit http://localhost:3000/hello_world and http://localhost:3000. In development, it may be easier to run
   ```
   foreman start -f Procfile.dev
   ```
   for ease of debugging.


### General instructions from Ruby On Rails initializtion
This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## Authors

Lindsey Hodel, Janvi Kalra, Annie Ke, Morgan Sorbaro, Nitasha Kochar, Wylie Kasai
