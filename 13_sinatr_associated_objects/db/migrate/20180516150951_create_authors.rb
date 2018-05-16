class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.string :name
      t.integer :age
    end

    remove_column :books, :author
    add_column :books, :author_id, :integer
  end
end
