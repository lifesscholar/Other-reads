# == Schema Information
#
# Table name: shelved_books
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  shelf_id   :integer
#  book_id    :integer
#

class ShelvedBook < ApplicationRecord
  validates :shelf_id, :book_id, presence: true
  validates :book_id, uniqueness: { scope: :shelf_id }

  belongs_to :book, 
    class_name: :Book,
    primary_key: :id, 
    foreign_key: :book_id                  

  belongs_to :shelf,
    class_name: :Shelf,
    primary_key: :id,
    foreign_key: :shelf_id

  has_one :user,
    through: :shelf,
    source: :user

  self.table_name = "shelved_books"
    
end
