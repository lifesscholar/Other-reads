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

require 'test_helper'

class ShelvedBookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
