class Genre < GenericModel::Base
  attr_accessor :Name
  attr_reader :GenreId

  def save
    if self.send(self.class.primary_key.to_sym).nil?
      insert_record

      sql = "SELECT last_insert_rowid() FROM #{self.class.table_name}"
      id = DB[:conn].execute(sql)[0][0]
      @GenreId = id
    end

    self
  end

  # READ

  private

  def insert_record
    # not dynamic, but okay
    sql = "INSERT INTO #{self.class.table_name} (Name, BPM, Color, Size) VALUES (?, ?, ?, ?)"

    DB[:conn].execute(sql, self.Name, self.BPM, self.Color, self.Size)
  end
end

#
# self.column_names.join(", ")
# self.column_names.map { "?" }.join(", ")
#
# values = self.column_names.map do |column_name|
#   self.send(column_name.to_sym)
# end
#
# DB[:conn].execute(sql, *values)







###
