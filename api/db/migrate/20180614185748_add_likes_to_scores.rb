class AddLikesToScores < ActiveRecord::Migration[5.2]
  def change
    add_column :scores, :likes, :integer 
  end
end
