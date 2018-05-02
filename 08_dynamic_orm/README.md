# Dynamic ORMs

## Objectives

* Explain how inheritance works in Ruby
* Demonstrate inheritance on Ruby classes without persistence
* Refactor code that is common to two separate custom ORMs into a shared parent class
* Apply meta-programming to create and act on methods in child classes
* BONUS: Implement relationship macros in custom dynamic ORM

## Deliverables

### Each class

* Public methods
  * `#save` // do the update part
  * `#update(attrs)`
  * `.find_by(attrs)`
* Helper methods
  * `.new_from_row(row)`
  * `.conditions_from_hash(attrs)`
* Private methods
  * `#update_record`

### `Album`

* `#AlbumID` pk
* `#ArtistID` fk
* `#Title`
* `#Title=(new_title)`

### `Artist`

* `#ArtistID` pk
* `#Name`
* `#Name=(new_name)`
