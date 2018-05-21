class CreateCheeses < ActiveRecord::Migration[5.2]
  def change
    create_table :cheeses do |t|
      t.string :name
      t.integer :age
      t.integer :smelliness

      t.timestamps
    end
  end
end
