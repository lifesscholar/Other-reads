# == Schema Information
#
# Table name: shelved_books
#
#  id         :bigint           not null, primary key
#  shelf_id   :string           not null
#  book_id    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShelvedBook < ApplicationRecord
  validates :shelf_id, :book_id, presence: true
  validates :book_id, uniqueness: { scope: :shelf_id }

  belongs_to :book, 
    class_name: :Book, 
    foreign_key: :book_id

  belongs_to :shelf,
    class_name: :Shelf
    foreign_key: :shelf_id
end
