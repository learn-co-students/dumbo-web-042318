class ExpandDomainModel < ActiveRecord::Migration[5.1]
  def change
    create_table :producers do |t|
      t.string :name
      t.timestamps
    end

    create_table :beverage_ingredients do |t|
      t.string :name
      t.integer :beverage_id
      t.integer :ingredient_id
      t.timestamps
    end

    create_table :ingredients do |t|
      t.string :name
      t.timestamps
    end

    add_column :beverages, :producer_id, :integer
  end
end
