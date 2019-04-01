# ITC Team Formation Tool

## Overview

This repository hosts the ITC team formation tool to be integrated on Canvas and used by professors and students.

## Architecture

This is a React on Rails app on Ruby 2.6.0 with webpacker.

## Installation

0. If you do not have Ruby installed (check with `ruby -v`), follow the instructions for installing Ruby [here](https://www.ruby-lang.org/en/documentation/installation/).
1. If you do not have rails installed (check with `rails --version`), run
   ```
   gem install rails
   ```
2. With rails installed, run
   ```
   bundle install
   ```
   to install all dependencies for this project.
3. Start the application with 
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
