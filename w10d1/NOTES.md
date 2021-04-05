# All About Rails

[] routes
[] migrations

# Steps

rails new appNameGoesHere

./bin/rails server 

# Rails Starts from the config/routes.rb file

# You can generate controllers using the rails command

./bin/rails g controller Cats


# create a bunch of RESTful routes using the following in routes.rb (note: plural vs. singular matters )

  resources :cats

# Create your views. in app/views/cats/index.html.erb

# Here is how you add variables to the template

class CatsController < ApplicationController
    def index
        @secretstuff = 'the wire pulling the mast forward is called the forestay.'
    end
end

and then in the template itself...

# Want to see all the routes for the application? Try ./bin/rake routes or hit a 404

# Add , url: cats_path to the 'new cat form' in new.html.erb

<%= form_for :cat, url: cats_path do |f| %>

# A good debugging Post Route stub is ... (for cats_controller.rb

    def create
        render plain: params[:cat].inspect
    end

#
# MODEL
#

./bin/rails g model Cat title:string body:text

Creates a migration, a model, a test and a fixture

nally:/tinyAppV2] ./bin/rails g model Cat title:string body:text
Running via Spring preloader in process 81808
      invoke  active_record
      create    db/migrate/20210405152001_create_cats.rb
      create    app/models/cat.rb
      invoke    test_unit
      create      test/models/cat_test.rb
      create      test/fixtures/cats.yml


# Now... about that Database

cat config/database.yml

createdb cats
createuser -s -r postgres

export DATABASE_USER=postgres
export DATABASE_PASSWORD=postgres

psql -d cats

# ForbiddenAttributesError ... we need the following in our controller

```
    def create
#        render plain: params[:cat].inspect
        @cat = Cat.new(cat_params)
    end

    private def cat_params
        params.require(:cat).permit(:title, :body)
    end
```

# migrations error

```
./bin/rails db:migrate RAILS_ENV=development
```

# Include bootstrap from CDN? ... in views/layouts/application.html.erb

```
<%= stylesheet_link_tag  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' %>
```

# Further

1. Adding bootstrap classes to your form code? 35:10 of this video... https://www.youtube.com/watch?v=pPy0GQJLZUM
1. Adding validation? 36:30 of this video... https://www.youtube.com/watch?v=pPy0GQJLZUM
