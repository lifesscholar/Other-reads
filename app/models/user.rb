# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  attr_reader :password

  validates :first_name, :last_name, :email, :session_token, :password_digest, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  after_create :default_shelves

  has_many :shelves, 
    class_name: :Shelf,
    primary_key: :id,
    foreign_key: :user_id


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def default_shelves
    Shelf.create(shelf_name: "Read", exclusive: true, user_id: self.id)
    Shelf.create(shelf_name: "Reading", exclusive: true, user_id: self.id)
    Shelf.create(shelf_name: "Will Read", exclusive: true, user_id: self.id)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  self.table_name = "users"

end
