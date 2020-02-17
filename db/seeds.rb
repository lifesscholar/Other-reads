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
    description: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkeness bind them.
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
    description: "The Fellowship was scattered. 
        Some were bracing hopelessly for war against the ancient evil of Sauron. Some were contending with the treachery of the wizard Saruman. Only Frodo and Sam were left to take the accursed Ring of Power to be destroyed in Mordor–the dark Kingdom where Sauron was supreme. Their guide was Gollum, deceitful and lust-filled, slave to the corruption of the Ring. 
        Thus continues the magnificent, bestselling tale of adventure begun in The Fellowship of the Ring, which reaches its soul-stirring climax in The Return of the King.",
    cover_image_url: "ReturnOfTheKing"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the "spice" melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...
        When House Atreides is betrayed, the destruction of Paul's family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad'Dib, he will bring to fruition humankind's most ancient and unattainable dream.
        A stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction.",
    cover_image_url: "Dune"
  },
  {
    title: "Do Robots Dream of Electric Sheep?",
    author: "Philip K. Dick",
    description: "It was January 2021, and Rick Deckard had a license to kill.
        Somewhere among the hordes of humans out there, lurked several rogue androids. Deckard's assignment--find them and then..."retire" them. Trouble was, the androids all looked exactly like humans, and they didn't want to be found!",
    cover_image_url: "DoRobotsDreamOfElectricSheep"
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    description: "Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.
    Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide ("A towel is about the most massively useful thing an interstellar hitchhiker can have") and a galaxy-full of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.",
    cover_image_url: "HitchhikersGuide"
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    description: "This novel tells the story of Dracula's attempt to move from Transylvania to England so that he may find new blood and spread the undead curse, and of the battle between Dracula and a small group of men and a woman led by Professor Abraham Van Helsing.",
    cover_image_url: "Dracula"
  },
  {
    title: "Necroscope",
    author: "Brian Lumley",
    description: "Except to Harry Keogh, Necroscope. And what they tell him is horrifying.
        In the Balkan mountains of Rumania, a terrible evil is growing. Long buried in hallowed ground, bound by earth and silver, the master vampire schemes and plots. Trapped in unlife, neither dead nor living, Thibor Ferenczy hungers for freedom and revenge.
        The vampire's human tool is Boris Dragosani, part of a super-secret Soviet spy agency. Dragosani is an avid pupil, eager to plumb the depthless evil of the vampire's mind. Ferenczy teaches Dragosani the awful skills of the necromancer, gives him the ability to rip secrets from the mind and bodies of the dead.
        Dragosani works not for Ferenczy's freedom but world domination. He will rule the world with knowledge raped from the dead.
        His only opponent: Harry Koegh, champion of the dead and the living.
        To protect Harry, the dead will do anything--even rise from their graves!",
    cover_image_url: "Necroscope"
  },
  {
    title: "The Exorcist",
    author: "William Peter Blatty",
    description: "Inspired by a true story of a child’s demonic possession in the 1940s, William Peter Blatty created an iconic novel that focuses on Regan, the eleven-year-old daughter of a movie actress residing in Washington, D.C. A small group of overwhelmed yet determined individuals must rescue Regan from her unspeakable fate, and the drama that ensues is gripping and unfailingly terrifying.
        Purposefully raw and profane, The Exorcist still has the extraordinary ability to disturb readers and cause them to forget that it is “just a story.” Published here in this beautiful fortieth anniversary edition, it remains an unforgettable reading experience and will continue to shock and frighten a new generation of readers.",
    cover_image_url: "Exorcist"
  },
  {
    title: "Gardens of the Moon",
    author: "Steven Erikson",
    description: "The Malazan Empire simmers with discontent, bled dry by interminable warfare, bitter infighting and bloody confrontations with the formidable Anomander Rake and his Tiste Andii, ancient and implacable sorcerers. Even the imperial legions, long inured to the bloodshed, yearn for some respite. Yet Empress Laseen's rule remains absolute, enforced by her dread Claw assassins.
        For Sergeant Whiskeyjack and his squad of Bridgeburners, and for Tattersail, surviving cadre mage of the Second Legion, the aftermath of the siege of Pale should have been a time to mourn the many dead. But Darujhistan, last of the Free Cities of Genabackis, yet holds out. It is to this ancient citadel that Laseen turns her predatory gaze.
        However, it would appear that the Empire is not alone in this great game. Sinister, shadowbound forces are gathering as the gods themselves prepare to play their hand...
        Conceived and written on a panoramic scale, Gardens of the Moon is epic fantasy of the highest order--an enthralling adventure by an outstanding new voice.",
    cover_image_url: "GardensOfTheMoon"
  },
])
