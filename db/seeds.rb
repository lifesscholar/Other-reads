# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Book.destroy_all

users = User.create!([{
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
    last_name: "Tong",
    email: "cindytong@aol.com",
    password: "cindy1"
  }
])

books = Book.create!([{
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    description: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkeness bind them

        In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, The Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit.

        In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.",
    cover_image_url: "FellowshipOfTheRing"
  },
  {
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    description: "The Companions of the Ring have become involved in separate adventures as the quest continues. Aragorn, revealed as the hidden heir of the ancient Kings of the West, joined with the Riders of Rohan against the forces of Isengard, and took part in the desperate victory of the Hornburg. Merry and Pippin, captured by Orcs, escaped into Fangorn Forest and there encountered the Ents. Gandalf returned, miraculously, and defeated the evil wizard, Saruman. Meanwhile, Sam and Frodo progressed towards Mordor to destroy the Ring, accompanied by SmEagol--Gollum, still obsessed by his 'precious'. After a battle with the giant spider, Shelob, Sam left his master for dead; but Frodo is still alive--in the hands of the Orcs. And all the time the armies of the Dark Lord are massing. J.R.R. Tolkien's great work of imaginative fiction has been labeled both a heroic romance and a classic fantasy fiction. By turns comic and homely, epic and diabolic, the narrative moves through countless changes of scene and character in an imaginary world which is totally convincing in its detail.",
    cover_image_url: "TwoTowers"
  },
  {
    title: "The Return of the King",
    author: "J.R.R. Tolkien",
    description: "The Fellowship was scattered. Some were bracing hopelessly for war against the ancient evil of Sauron. Some were contending with the treachery of the wizard Saruman. Only Frodo and Sam were left to take the accursed Ring of Power to be destroyed in Mordor–the dark Kingdom where Sauron was supreme. Their guide was Gollum, deceitful and lust-filled, slave to the corruption of the Ring. Thus continues the magnificent, bestselling tale of adventure begun in The Fellowship of the Ring, which reaches its soul-stirring climax in The Return of the King.",
    cover_image_url: "ReturnOfTheKing"
  }
])
