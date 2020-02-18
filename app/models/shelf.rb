# == Schema Information
#
# Table name: shelves
#
#  id         :bigint           not null, primary key
#  shelf_name :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shelf < ApplicationRecord
  validates :shelf_name, :user_id, presence: true
  validates :shelf_name, :user_id, uniqueness: true

  belongs_to :user, 
    class_name: :User, 
    foreign_key: :user_id

end
