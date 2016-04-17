ruby '2.3.0'
source 'https://rubygems.org'

# Server gems
#

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.6'
# Thin server for development and testing
gem 'thin', '1.6.4', group: [:development, :test]
# Use Unicorn as the app server
gem 'unicorn', '5.1.0'
# Add React and webpack integration to the server
gem 'react_on_rails', '5.2.0'
# Chron replacement on Heroku
gem 'clockwork', '1.2.0'
# Deflater on heroku
gem 'heroku-deflater', '0.6.2', :group => :production

# Front-end gems
#

# Use SCSS for stylesheets
gem 'sass-rails', '5.0.4'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '3.0.0'
# Pagination
gem 'kaminari', '0.16.3'
#Geolocation
gem 'geocoder', '1.3.3'

#Forms
#gem 'simple_forms'

#Admin dashboards
#gem 'activeadmin'
#gem 'sass-rails'
#gem 'meta_search', '>= 1.1.0.pre'

#Payments
#gem 'stripe-ruby'

#Telcom
#gem 'twilio-rb'

# Mail gems
#gem 'sendgrid'


# Database gems
# Use PostgreSQL as the database for Active Record
gem 'pg', '0.18.4'
gem 'surus', '0.6.2'

# Analytics gems
#

# Add segment support
gem 'analytics-ruby', :require => "segment"

# Utility gems
#

# Decode JSON Web Tokens returned by Google OAuth
gem 'jwt', '1.5.4'
# Use jquery as the JavaScript library
gem 'jquery-rails', '4.1.1'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '2.4.1'
# Use ActiveModel has_secure_password
gem 'bcrypt', '3.1.11'
# Authentication
gem 'devise', '3.5.6'
# Authorization
gem 'pundit', '1.1.0'
# Asynchronous jobs
gem 'sidekiq', '4.1.1'
gem 'sidekiq-cron', '0.4.2'
# Image uploading
gem 'refile', '0.5.3'
# Secure app ENV configuration
gem 'figaro', '1.1.1'
# Turbolinks
gem 'turbolinks', '2.5.3'

# Dev ops gems

# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '0.4.1', group: :doc

#Environment-specific gems

group :development, :test do
  
  gem 'awesome_print', '1.6.1'

  #Debugging gems
  #

  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', '8.2.4'

  # Rails panel support in Chrome debugger
  gem 'meta_request', '0.4.0'
  
  #Test gems
  #

  gem 'rspec-rails', '3.4.2'

  # Assertions
  gem 'mocha', '1.1.0'

  # Test factories
  gem 'factory_girl_rails', '4.7.0'

  # Ruby linter / style enforcer
  gem 'rubocop', '0.39.0'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '2.3.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring', '1.6.4'
end


gem 'therubyracer', platforms: :ruby
