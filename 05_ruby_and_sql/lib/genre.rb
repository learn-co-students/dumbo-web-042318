class Genre
  # implement CRUD with the DB
  # DB.execute(some_sql)

  def self.table_name
    self.name.downcase + 's'
  end

  def self.create_table
    # what's the sql command
    sql = "CREATE TABLE IF NOT EXISTS #{table_name} (id INTEGER PRIMARY KEY, name TEXT)"

    DB[:conn].execute(sql)
  end

  # Genre.insert("punk")
  def self.insert(name)
    sql = "INSERT INTO #{table_name} (name) VALUES (\"#{name}\")"

    DB[:conn].execute(sql)
  end

  def self.update(id, new_name)
    sql = "UPDATE #{table_name} SET name = '#{new_name}' WHERE GenreId = #{id}"

    DB[:conn].execute(sql)
  end

  def self.find_by_name(name)
    sql = "SELECT * FROM #{table_name} WHERE name = '#{name}'"

    DB[:conn].execute(sql)
  end

  def self.delete(id)
    sql = "DELETE FROM #{table_name} WHERE GenreId = #{id}"

    DB[:conn].execute(sql)
  end
end
