class Genre
  # implement CRUD with the DB
  # DB.execute(some_sql)

  # most of the time, table columns will be lower snake case
  attr_accessor :Name
  attr_reader :GenreId

  def initialize(attributes)
    # @id = attributes["id"]
    # @name = attributes["name"]

    @GenreId = attributes["GenreId"]
    mass_assign_attributes(attributes)
  end

  def save
    # if the instance is not persisted, then save
    if self.GenreId.nil?
      # insert into table_name
      insert_record

      # add the last id to the object
      sql = "SELECT last_insert_rowid() FROM #{self.class.table_name} LIMIT 1"

      id = DB[:conn].execute(sql)[0][0]
      @GenreId = id
    end

    self
  end

  def delete
    # punk.delete

    delete_record
    @GenreId = nil

    self
  end

  def self.delete(id)
    # check for id, find that row
    obj = self.find(id)

    return nil if obj.nil?

    # call obj.delete
    obj.delete
  end

  def self.find(id)
    sql = "SELECT * FROM #{table_name} WHERE GenreId = '?' LIMIT 1"
    results = DB[:conn].execute(sql, id)

    return nil if results.empty?

    result = results[0]
    self.new(result)
  end

  def self.all
    sql = "SELECT * FROM #{table_name}"
    results = DB[:conn].execute(sql)

    results.map do |result|
      self.new(result)
    end
  end


  # * Public methods
  #   * `#save`
  #   * `#update(attrs)`
  #   * `.create(attrs)`
  #   * `.find_by(attrs)`
  # * Helper methods
  #   * `.new_from_row(row)`
  #   * `.conditions_from_hash(attrs)`
  # * Private methods
  #   * `#update_record`


  def self.table_name
    # PatientDoctor => patient_doctors
    self.name.downcase + 's'
  end

  def self.create_table
    # what's the sql command
    sql = <<-SQL
      CREATE TABLE IF NOT EXISTS #{table_name}
      (id INTEGER PRIMARY KEY, name TEXT)
    SQL

    DB[:conn].execute(sql)
  end

  def self.update(id, new_name)
    sql = "UPDATE #{table_name} SET name = '?' WHERE GenreId = ?"

    DB[:conn].execute(sql, new_name, id)
  end

  def self.find_by_name(name)
    sql = "SELECT * FROM #{table_name} WHERE name = '?'"

    DB[:conn].execute(sql, name)
  end

  "hello, \"world\""

  private

  def mass_assign_attributes(attributes)
    attributes.each do |k, v|
      if self.respond_to?("#{k}=")
        self.send("#{k}=", v)
      end
    end
  end

  def insert_record
    # not dynamic, but okay
    sql = "INSERT INTO #{self.class.table_name} (Name) VALUES (?)"
        binding.pry

    DB[:conn].execute(sql, self.Name)
  end

  def delete_record
    sql = "DELETE FROM #{self.class.table_name} WHERE GenreId = ?"

    DB[:conn].execute(sql, self.GenreId)
  end
end
