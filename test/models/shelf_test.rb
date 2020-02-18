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

require 'test_helper'

class ShelfTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
