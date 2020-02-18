# == Schema Information
#
# Table name: books
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  author          :string           not null
#  description     :text
#  cover_image_url :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Book < ApplicationRecord
  validates :title, :author, presence: true
  validates :title, uniqueness: {
                                 scope: :author, 
                                #  message: "Authors cannot have more than one book of the same title"
                                }
  has_many :shelved_books,
    class_name: :ShelvedBook, 
    foreign_key: :book_id

  has_many :shelves, 
    through: :shelved_books, 
    source: :shelf
end
