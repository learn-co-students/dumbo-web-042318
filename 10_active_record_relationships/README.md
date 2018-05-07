# ActiveRecord

## Objectives

* Define Object Relational Mapper \(ORM\)
  * Abstraction on top of SQL
  * Allows us to do CRUD operations on a database
  * Brings our table rows to life through Ruby (or some other lang)
  * Relationships between objects that reflect DB relationships
* Describe how gems work and the value of shared code
  * Pre-existing code that we can pull from to make life (our code) easier (to write)
* Explain how `rake` works and how to run rake tasks
* Implement ActiveRecord in their projects
* Practice creating migrations for updating the database structure
* Distinguish between and define "model", "class", and "table"
* Practice with ActiveRecord::Base instance and class methods
* Perform persistent CRUD actions on one model using ActiveRecord

## Process

* Require `activerecord`, `sinatra-activerecord`, and `rake` gems
* Ran `rake db:create_migration NAME=matt_is_the_best`
* Edited my migration file to include whatever structural changes I wanted to make
* Ran `rake db:migrate` (if no error, you'll get status updates)
* Created the model class
  * Model = table + class
* Explore ActiveRecord::Base
  * Create instances and explore class methods
* Explore ActiveRecord::Relations (super powered array) methods
  * `(Beverage.all.methods - [].methods).sort`

## Beverages

* Saige & Eva - Arizona Iced Tea
* Daniel - Mountain Dew Code Red
* Drin – Spa Water
* Daiane – Coconut Water
