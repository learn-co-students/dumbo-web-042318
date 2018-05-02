module GenericModel
  class Base

    def initialize(attributes)
      # do we need .to_sym? idk
      val = attributes[self.class.primary_key.to_sym]
      self.instance_variable_set("@#{self.class.primary_key}".to_sym, val)
      mass_assign_attributes(attributes)
    end

    # DELETE
    def delete
      delete_record

      primary_key = "@#{self.class.primary_key}".to_sym
      self.instance_variable_set(primary_key, nil)
      # @GenreId = nil

      self
    end

    def self.table_name
      # PatientDoctor => patient_doctors
      self.name.downcase + 's'
    end

    def self.column_names
      sql = "PRAGMA table_info(#{table_name})"

      results = DB[:conn].execute(sql)

      results.select do |column|
        column["pk"] != 1
      end.map do |column|
        column["name"]
      end
    end

    def self.primary_key
      sql = "PRAGMA table_info(#{table_name})"

      results = DB[:conn].execute(sql)
      results.find { |column| column["pk"] == 1 }["name"]
    end

    def self.create(attributes)
      obj = self.new(attributes)
      obj.save
    end

    def self.delete(id)
      obj = self.find(id)

      return nil if obj.nil?

      obj.delete
    end

    def self.find(id)
      sql = "SELECT * FROM #{table_name} WHERE #{self.primary_key} = ?"
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

    private

    def mass_assign_attributes(attributes)
      attributes.each do |column_name, cell_value|
        if self.respond_to?("#{column_name}=")
          self.send("#{column_name}=", cell_value)
        end
      end
    end

    def delete_record
      # not dynamic, but okay
      sql = "DELETE FROM #{self.class.table_name} WHERE #{self.class.primary_key} = ?"

      DB[:conn].execute(sql, self.send(self.class.primary_key.to_sym)) # self.GenreId
    end


  end
end
