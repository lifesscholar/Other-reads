# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

users = User.create([{
                      first_name: "Neev", 
                      last_name: "Granite", 
                      email: "n_granite@hotmail.com",
                      password: "tefekar567",
                    },
                    {
                      first_name: "Dale", # Demo User
                      last_name: "Christian",
                      email: "a@a.com",
                      password: "hunter2"
                    },
                    {
                      first_name: "Jason",
                      last_name: "Wang",
                      email: "JWang9392@gmail.com",
                      password: "hunter2"
                    },
                    {
                      first_name: "Cindy",
                      last_name: "Tong"
                      email: "cindytong@aol.com",
                      password: "cindy1"
                    }
                  ]
                )
