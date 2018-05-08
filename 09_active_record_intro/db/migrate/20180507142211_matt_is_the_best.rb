class MattIsTheBest < ActiveRecord::Migration[5.1]
  def change
    create_table(:beverages) do |k| #table_builder
      k.string(:name)
      k.string :person
      k.float :price
      k.boolean :is_cold
      k.timestamps
      # k.datetime :created_at
      # k.datetime :updated_at
    end
  end
end
