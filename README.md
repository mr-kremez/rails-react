Basic setup steps are as follows:


### Requirements
* Ruby 2.2.0
* Rails 4.1.6
* MySQL

----------------------------------------------------------------------------------

### Initial steps to follow

copy /config/secrets.yml.sample to /config/secrets.yml

Setting up Database:
* copy /config/database.yml.sample to /config/database.yml and set database connection settings for your local installation
* bundle exec rake db:migrate
* bundle exec rake db:seed