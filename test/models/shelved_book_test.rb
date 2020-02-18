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

require 'test_helper'

class ShelvedBookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
