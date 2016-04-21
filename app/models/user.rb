class User < ActiveRecord::Base
  devise :confirmable,
         :database_authenticatable,
         :lockable,
         :omniauthable,
         :recoverable,
         :registerable,
         :rememberable,
         :timeoutable,
         :trackable,
         :validatable

  has_many :identities

  def self.create_with_omniauth(info)
    create(email: info['email'])
  end

  def destroy
    self.current_user = nil
    redirect_to root_url, notice: "Signed out!"
  end
end
