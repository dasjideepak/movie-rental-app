const moviesData = [
  {
    id: "1",
    title: "Black Panther",
    year: "2018",
    genres: ["Action", "Adventure", "Sci-Fi"],
    ratings: [
      4, 1, 9, 6, 2, 10, 6, 5, 1, 7, 4, 5, 6, 5, 6, 3, 10, 10, 8, 2, 5, 3, 4, 6,
      6, 7, 9, 4, 4, 9,
    ],
    poster:
      "MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "134", // in minutes

    releaseDate: "2018-02-14",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "After the events of Captain America: Civil War, King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.                Written by\nEditor",
    actors: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
    imdbRating: 7.0,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    id: "2",
    title: "Grottmannen Dug",
    year: "2018",
    genres: ["Animation", "Adventure", "Comedy"],
    ratings: [
      7, 9, 6, 1, 3, 8, 3, 8, 7, 6, 10, 3, 6, 8, 3, 5, 6, 6, 8, 2, 7, 9, 1, 1,
      10, 2, 3, 6, 3, 5,
    ],
    poster:
      "MV5BYWMxYWVjNzAtMTY0YS00YWQyLWExMGItMjUxODkwYzQyNzMwXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SY500_CR0,0,328,500_AL_.jpg",
    contentRating: "PG",
    duration: "89", // in minutes

    releaseDate: "2018-03-23",
    averageRating: 0,
    originalTitle: "Early Man",
    storyline:
      "Set at the dawn of time, when prehistoric creatures and woolly mammoths roamed the earth, Early Man tells the story of Dug, along with sidekick Hognob as they unite his tribe against a mighty enemy Lord Nooth and his Bronze Age City to save their home.",
    actors: ["Tom Hiddleston", "Eddie Redmayne", "Maisie Williams"],
    imdbRating: 6.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYWMxYWVjNzAtMTY0YS00YWQyLWExMGItMjUxODkwYzQyNzMwXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SY500_CR0,0,328,500_AL_.jpg",
  },
  {
    id: "3",
    title: "Aiyaary",
    year: "2018",
    genres: ["Action", "Crime", "Drama"],
    ratings: [
      1, 2, 8, 10, 3, 8, 8, 6, 1, 8, 4, 1, 9, 5, 7, 8, 9, 8, 10, 10, 8, 3, 1, 2,
      5, 7, 9, 9, 10, 7,
    ],
    poster:
      "MV5BMjI1NTk0NTc1OV5BMl5BanBnXkFtZTgwNTMwMTE4NDM@._V1_SY500_CR0,0,281,500_AL_.jpg",
    contentRating: "",
    duration: "157", // in minutes

    releaseDate: "2018-02-16",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Two officers with patriotic hearts suddenly have a fallout. The mentor, Colonel Abhay Singh has complete faith in the country's system while prot\u00e9g\u00e9 Major Jai Bakshi thinks differently due to a recent stint in surveillance.",
    actors: ["Anupam Kher", "Sidharth Malhotra", "Naseeruddin Shah"],
    imdbRating: "",
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTk0NTc1OV5BMl5BanBnXkFtZTgwNTMwMTE4NDM@._V1_SY500_CR0,0,281,500_AL_.jpg",
  },
  {
    id: "4",
    title: "Samson",
    year: "2018",
    genres: ["Action", "Drama"],
    ratings: [
      9, 6, 5, 7, 5, 8, 9, 7, 1, 1, 9, 2, 9, 7, 8, 7, 5, 3, 3, 1, 2, 10, 10, 2,
      1, 9, 6, 8, 6, 8,
    ],
    poster:
      "MV5BYThiMjg4ZDAtNjk5ZS00ZTUxLThmM2ItMGI0ZTE1NjRhNWNmXkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_SY500_CR0,0,334,500_AL_.jpg",
    contentRating: "PG-13",
    duration: "", // in minutes

    releaseDate: "2018-02-16",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A Hebrew with an unusual gift of strength must respond properly to the call of God on his life in order to lead his people out of enslavement. After his youthful ambition leads to a tragic marriage, his acts of revenge thrust him into direct conflict with the Philistine army. As his brother mounts a tribal rebellion, only Samson's relationship with a Philistine seductress and his final surrender - both to the Philistines and to God - turns imprisonment and blindness into final victory.                Written by\nPure Flix",
    actors: ["Jackson Rathbone", "Billy Zane", "Taylor James"],
    imdbRating: 5.0,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYThiMjg4ZDAtNjk5ZS00ZTUxLThmM2ItMGI0ZTE1NjRhNWNmXkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_SY500_CR0,0,334,500_AL_.jpg",
  },
  {
    id: "5",
    title: "Loveless",
    year: "2017",
    genres: ["Drama"],
    ratings: [
      7, 5, 7, 6, 10, 8, 8, 7, 3, 7, 3, 4, 5, 10, 8, 10, 1, 7, 2, 10, 10, 3, 5,
      2, 9, 7, 7, 3, 5, 1,
    ],
    poster:
      "MV5BMzU3ODQ3MzQ5Nl5BMl5BanBnXkFtZTgwMDQwMDIzNDM@._V1_SY500_CR0,0,338,500_AL_.jpg",
    contentRating: "R",
    duration: "127", // in minutes

    releaseDate: "2017-06-01",
    averageRating: 0,
    originalTitle: "Nelyubov",
    storyline:
      "Still living under the same roof, the Moscow couple of Boris and Zhenya is in the terrible final stages of a bitter divorce. Under those circumstances, as both have already found new partners, the insults pour down like rain in this toxic familial battle zone, always pivoting around the irresolvable and urgent matter of Alyosha's custody, their 12-year-old only son. Unheard, unloved, and above all, unwanted, the introverted and unhappy boy feels that he is an intolerable burden, however, what his parents don't know is that he can hear every single word. As a result, when Boris and Zhenya finally realize that Alyosha has been missing for nearly two days, it is already too late. But is this a simple case of a runaway teenager?                Written by\nNick Riganas",
    actors: ["Maryana Spivak", "Aleksey Rozin", "Matvey Novikov"],
    imdbRating: 7.8,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU3ODQ3MzQ5Nl5BMl5BanBnXkFtZTgwMDQwMDIzNDM@._V1_SY500_CR0,0,338,500_AL_.jpg",
  },
  {
    id: "6",
    title: "L'amant double",
    year: "2017",
    genres: ["Drama", "Romance", "Thriller"],
    ratings: [
      5, 8, 9, 8, 10, 2, 7, 2, 9, 8, 5, 1, 9, 5, 9, 5, 7, 10, 5, 8, 2, 3, 5, 4,
      6, 9, 3, 7, 1, 4,
    ],
    poster:
      "MV5BMTg5NjUyMzAyOV5BMl5BanBnXkFtZTgwMTU4Njk2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "",
    duration: "107", // in minutes

    releaseDate: "2017-05-26",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Disenchanted with the ephemeral glamour of the modelling world, Chlo\u00e9, a vulnerable Parisian woman of 25, is convinced that the severe and persistent abdominal pains she's been suffering, stem mainly from a psychosomatic disorder. As a result, the reserved beauty will soon find herself on the couch of the charming therapist, Dr Paul Meyer, nevertheless, the mutual and unfailing sexual attraction between them will make it impossible to continue with the therapy. Before long, the ecstatic, yet unexplored lovers will move in together, however, Paul's obscure past will inevitably lead Chlo\u00e9 to the conclusion that there's definitely more to him than meets the eye. Is the doe-eyed woman lured into a world of hallucinations and dream-like sequences?                Written by\nNick Riganas",
    actors: ["Marine Vacth", "J\u00e9r\u00e9mie Renier", "Jacqueline Bisset"],
    imdbRating: 6.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NjUyMzAyOV5BMl5BanBnXkFtZTgwMTU4Njk2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    id: "7",
    title: "The Party",
    year: "2017",
    genres: ["Comedy", "Drama"],
    ratings: [
      1, 4, 3, 3, 1, 4, 6, 5, 8, 3, 8, 5, 9, 9, 8, 6, 9, 2, 2, 10, 8, 2, 8, 9,
      3, 6, 10, 8, 9, 9,
    ],
    poster:
      "MV5BMTYwMTU5MzY4NF5BMl5BanBnXkFtZTgwNTY2NTkxNDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "11",
    duration: "71", // in minutes

    releaseDate: "2018-01-05",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "To celebrate her long-awaited prestigious post as a Shadow Minister for Health and, hopefully, the stepping stone to party leadership, the newly-appointed British opposition politician, Janet, is throwing a party for friends at her London flat. Of course, in this select and intimate soir\u00e9e, apart from Bill--Janet's self-denying academic husband--a motley crew of elite hand-picked guests have been invited: There's April, the sourly cynical American best friend; her unlikely German husband, Gottfried; there's also Jinny and Martha; and finally, Tom, the smooth banker in the impeccable suit. But inevitably, before dinner is served, the upbeat ambience will shatter to pieces, as festering secrets will start surfacing in this perfect domestic war-zone. Undoubtedly, after this night, things will never be the same again.                Written by\nNick Riganas",
    actors: ["Timothy Spall", "Kristin Scott Thomas", "Patricia Clarkson"],
    imdbRating: 6.7,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMTU5MzY4NF5BMl5BanBnXkFtZTgwNTY2NTkxNDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    id: "8",
    title: "The Boy Downstairs",
    year: "2017",
    genres: ["Comedy", "Drama", "Romance"],
    ratings: [
      6, 5, 8, 5, 8, 3, 2, 4, 4, 1, 8, 5, 5, 1, 9, 8, 1, 1, 9, 10, 9, 8, 4, 10,
      3, 6, 2, 8, 9, 8,
    ],
    poster:
      "MV5BNjZiNzgzNjUtOWE0Ni00MWFmLTliZDEtNWRkMzc5ZTA2MWM1XkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "PG-13",
    duration: "91", // in minutes

    releaseDate: "2018-02-16",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A young woman is forced to reflect on her first relationship when she inadvertently moves into her ex-boyfriend's apartment building.",
    actors: ["Zosia Mamet", "Matthew Shear", "Deirdre O'Connell"],
    imdbRating: 6.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZiNzgzNjUtOWE0Ni00MWFmLTliZDEtNWRkMzc5ZTA2MWM1XkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    id: "9",
    title: "Nostalgia",
    year: "2018",
    genres: ["Drama"],
    ratings: [
      5, 1, 10, 9, 6, 9, 6, 6, 4, 3, 6, 6, 7, 5, 3, 5, 4, 6, 4, 7, 7, 1, 10, 9,
      7, 3, 4, 4, 3, 10,
    ],
    poster:
      "MV5BYTc0MjI4YTktY2NkYi00YzgwLWIxNDItYWIyNjAwMWNlMGUzXkEyXkFqcGdeQXVyNDY2MjcyOTQ@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "R",
    duration: "114", // in minutes

    releaseDate: "2018-02-16",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A mosaic of stories about love and loss, 'Nostalgia' explores our relationships to the objects, artifacts, and memories that shape our lives.",
    actors: ["Hugo Armstrong", "Shinelle Azoroh", "Annalise Basso"],
    imdbRating: 6.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYTc0MjI4YTktY2NkYi00YzgwLWIxNDItYWIyNjAwMWNlMGUzXkEyXkFqcGdeQXVyNDY2MjcyOTQ@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    id: "10",
    title: "Oh Lucy!",
    year: "2017",
    genres: ["Comedy", "Drama"],
    ratings: [
      10, 4, 7, 10, 8, 4, 6, 10, 2, 10, 9, 8, 8, 3, 3, 6, 6, 3, 5, 4, 5, 4, 5,
      2, 2, 8, 5, 10, 2, 9,
    ],
    poster:
      "MV5BMTUzMjcwMDExOV5BMl5BanBnXkFtZTgwMjU4Njk2NDM@._V1_SY377_CR0,0,254,377_AL_.jpg",
    contentRating: "",
    duration: "95", // in minutes

    releaseDate: "2018-03-02",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "The drama-comedy tells the story of Setsuko Kawashima (Terajima), a lonely, chain-smoking office lady in Tokyo who is past her prime. After deciding to take an English class, she discovers a new identity in her American alter ego, 'Lucy,' and falls for her instructor, John (Hartnett). When John suddenly disappears, Setsuko earnestly sets out on a quest to find him, eventually leading her to the outskirts of Southern California.                Written by\nOh Lucy!",
    actors: ["Shinobu Terajima", "Josh Hartnett", "Kaho Minami"],
    imdbRating: 6.8,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzMjcwMDExOV5BMl5BanBnXkFtZTgwMjU4Njk2NDM@._V1_SY377_CR0,0,254,377_AL_.jpg",
  },
  {
    id: "11",
    title: "Tehran Taboo",
    year: "2017",
    genres: ["Animation", "Drama"],
    ratings: [
      3, 6, 1, 4, 9, 10, 7, 5, 2, 8, 9, 7, 5, 10, 9, 1, 10, 4, 6, 7, 3, 10, 3,
      6, 3, 10, 6, 4, 1, 10,
    ],
    poster:
      "MV5BZDM0OTZlOWQtZGU0My00MmIxLTk0N2ItMjU3OGY0ODRlODYxXkEyXkFqcGdeQXVyNTQ0NjIwNDU@._V1_SY500_CR0,0,353,500_AL_.jpg",
    contentRating: "",
    duration: "90", // in minutes

    releaseDate: "2017-11-16",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "In their desperate search for freedom and happiness, four young people from Tehran, Iran are forced to break the taboos of a restrictive, islamic society.",
    actors: ["Farhad Abadinejad", "Jasmina Ali", "Rozita Assadollahy"],
    imdbRating: 7.1,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM0OTZlOWQtZGU0My00MmIxLTk0N2ItMjU3OGY0ODRlODYxXkEyXkFqcGdeQXVyNTQ0NjIwNDU@._V1_SY500_CR0,0,353,500_AL_.jpg",
  },
  {
    id: "12",
    title: "Xiyouji zhi N\u00fc'erguo",
    year: "2018",
    genres: ["Action", "Adventure", "Fantasy"],
    ratings: [
      10, 6, 1, 4, 8, 2, 2, 4, 10, 10, 6, 5, 5, 7, 2, 3, 1, 3, 2, 10, 2, 3, 2,
      10, 9, 9, 8, 9, 6, 4,
    ],
    poster:
      "MV5BMDM1MzZjNDUtNDBmMC00M2M5LTg0NDQtN2ExMjQ1Zjc0ZTE0XkEyXkFqcGdeQXVyNjMyMDA1ODM@._V1_SY500_CR0,0,357,500_AL_.jpg",
    contentRating: "",
    duration: "", // in minutes

    releaseDate: "2018-02-16",
    averageRating: 0,
    originalTitle: "",
    storyline: "",
    actors: ["Aaron Kwok", "William Feng", "Zanilia Zhao"],
    imdbRating: "",
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMDM1MzZjNDUtNDBmMC00M2M5LTg0NDQtN2ExMjQ1Zjc0ZTE0XkEyXkFqcGdeQXVyNjMyMDA1ODM@._V1_SY500_CR0,0,357,500_AL_.jpg",
  },
  {
    id: "13",
    title: "Mind Game",
    year: "2004",
    genres: ["Animation", "Adventure", "Comedy"],
    ratings: [
      8, 6, 5, 7, 10, 7, 9, 5, 9, 3, 6, 10, 7, 4, 2, 4, 7, 7, 5, 8, 9, 3, 9, 7,
      9, 4, 8, 5, 2, 8,
    ],
    poster:
      "MV5BNzFlMDI1ZjctMzgzYy00YmVkLTlmMTMtNDZmZmVmMzk3MzNhXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SY500_CR0,0,381,500_AL_.jpg",
    contentRating: "",
    duration: "103", // in minutes

    releaseDate: "2004-07-28",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "The film follows Nishi, a loser who has a crush on his childhood girlfriend. After an encounter with the Japanese mafia, the film follows Nishi as he journeys to heaven and back, and ends up trapped in an even more unlikely place. Nishi (and some friends) attempt to break out of their trap, and discover what it truly means to be alive along the way. This is a mind-bending trip that uses some of the most innovative animation ever created.                Written by\nanimenewsnetwork.com",
    actors: ["K\u00f4ji Imada", "Sayaka Maeda", "Takashi Fujii"],
    imdbRating: 7.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzFlMDI1ZjctMzgzYy00YmVkLTlmMTMtNDZmZmVmMzk3MzNhXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SY500_CR0,0,381,500_AL_.jpg",
  },
  {
    id: "14",
    title: "Western",
    year: "2017",
    genres: ["Drama"],
    ratings: [
      3, 6, 4, 2, 10, 5, 1, 9, 7, 9, 10, 6, 3, 2, 10, 5, 10, 7, 1, 5, 6, 10, 9,
      9, 10, 4, 8, 8, 3, 9,
    ],
    poster:
      "MV5BZDRkZGUxZmEtZDdiZC00NGJmLWFiODAtN2RiMzY3ODhjNTNmXkEyXkFqcGdeQXVyMTg5MDEyNw@@._V1_SY500_CR0,0,341,500_AL_.jpg",
    contentRating: "15",
    duration: "119", // in minutes

    releaseDate: "2017-08-24",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A group of German construction workers start a tough job at a remote site in the Bulgarian countryside. The foreign land awakens the men's sense of adventure, but they are also confronted with their own prejudice and mistrust due to the language barrier and cultural differences. The stage is quickly set for a showdown when men begin to compete for recognition and favor from the local villagers.",
    actors: [
      "Meinhard Neumann",
      "Reinhardt Wetrek",
      "Syuleyman Alilov Letifov",
    ],
    imdbRating: 7.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZDRkZGUxZmEtZDdiZC00NGJmLWFiODAtN2RiMzY3ODhjNTNmXkEyXkFqcGdeQXVyMTg5MDEyNw@@._V1_SY500_CR0,0,341,500_AL_.jpg",
  },
  {
    id: "15",
    title: "Fifty Shades Freed",
    year: "2018",
    genres: ["Drama", "Romance", "Thriller"],
    ratings: [
      6, 9, 7, 7, 1, 4, 9, 9, 1, 7, 6, 8, 10, 4, 6, 1, 10, 2, 1, 6, 10, 7, 1,
      10, 7, 5, 1, 5, 9, 8,
    ],
    poster:
      "MV5BMTYxOTQ1MzI0Nl5BMl5BanBnXkFtZTgwMzgwMzIxNDM@._V1_SY500_CR0,0,315,500_AL_.jpg",
    contentRating: "15",
    duration: "105", // in minutes

    releaseDate: "2018-02-09",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.                Written by\nOfficial Synopsis",
    actors: ["Dakota Johnson", "Jamie Dornan", "Eric Johnson"],
    imdbRating: 4.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxOTQ1MzI0Nl5BMl5BanBnXkFtZTgwMzgwMzIxNDM@._V1_SY500_CR0,0,315,500_AL_.jpg",
  },
  {
    id: "16",
    title: "Pelle Kanin",
    year: "2018",
    genres: ["Animation", "Adventure", "Comedy"],
    ratings: [
      10, 10, 5, 3, 1, 8, 1, 6, 7, 9, 5, 3, 10, 2, 1, 3, 5, 9, 6, 2, 1, 9, 8, 5,
      9, 10, 1, 6, 1, 10,
    ],
    poster:
      "MV5BMTk5NzI0ODUwN15BMl5BanBnXkFtZTgwOTIxNjA0NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "7",
    duration: "93", // in minutes

    releaseDate: "2018-02-21",
    averageRating: 0,
    originalTitle: "Peter Rabbit",
    storyline:
      "Feature adaptation of Beatrix Potter's classic tale of a rebellious rabbit trying to sneak into a farmer's vegetable garden.",
    actors: ["James Corden", "Fayssal Bazzi", "Domhnall Gleeson"],
    imdbRating: 6.1,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NzI0ODUwN15BMl5BanBnXkFtZTgwOTIxNjA0NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    id: "17",
    title: "The 15:17 to Paris",
    year: "2018",
    genres: ["Drama", "History", "Thriller"],
    ratings: [
      2, 6, 7, 10, 10, 4, 1, 2, 1, 6, 1, 10, 9, 3, 7, 8, 3, 3, 7, 5, 4, 8, 1, 3,
      1, 9, 9, 3, 4, 1,
    ],
    poster:
      "MV5BMTY0NjUzNjYwOV5BMl5BanBnXkFtZTgwMzY1MDM0NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "PG-13",
    duration: "94", // in minutes

    releaseDate: "2018-04-20",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "In the early evening of August 21, 2015, the world watched in stunned silence as the media reported a thwarted terrorist attack on Thalys train #9364 bound for Paris--an attempt prevented by three courageous young Americans traveling through Europe. The film follows the course of the friends' lives, from the struggles of childhood through finding their footing in life, to the series of unlikely events leading up to the attack. Throughout the harrowing ordeal, their friendship never wavers, making it their greatest weapon and allowing them to save the lives of the more than 500 passengers on board.",
    actors: ["Alek Skarlatos", "Anthony Sadler", "Spencer Stone"],
    imdbRating: 5.1,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0NjUzNjYwOV5BMl5BanBnXkFtZTgwMzY1MDM0NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    id: "18",
    title: "Jumanji: Welcome to the Jungle",
    year: "2017",
    genres: ["Action", "Adventure", "Comedy"],
    ratings: [
      5, 10, 7, 4, 7, 10, 5, 2, 9, 8, 8, 6, 10, 1, 5, 9, 3, 1, 6, 8, 5, 3, 2, 3,
      6, 7, 10, 8, 9, 4,
    ],
    poster:
      "MV5BMTkyNDQ1MDc5OV5BMl5BanBnXkFtZTgwOTcyNzI2MzI@._V1_SY400_SX270_AL_.jpg",
    contentRating: "11",
    duration: "119", // in minutes

    releaseDate: "2017-12-22",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it. To beat the game and return to the real world, they'll have to go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves - or they'll be stuck in the game forever, to be played by others without break.                Written by\nSony Pictures",
    actors: ["Dwayne Johnson", "Karen Gillan", "Kevin Hart"],
    imdbRating: 7.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNDQ1MDc5OV5BMl5BanBnXkFtZTgwOTcyNzI2MzI@._V1_SY400_SX270_AL_.jpg",
  },
  {
    id: "19",
    title: "The Greatest Showman",
    year: "2017",
    genres: ["Biography", "Drama", "Musical"],
    ratings: [
      3, 8, 4, 3, 4, 6, 10, 5, 7, 4, 9, 4, 9, 2, 1, 8, 9, 6, 2, 3, 10, 2, 8, 8,
      1, 5, 6, 8, 1, 3,
    ],
    poster:
      "MV5BYjQ0ZWJkYjMtYjJmYS00MjJiLTg3NTYtMmIzN2E2Y2YwZmUyXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "11",
    duration: "105", // in minutes

    releaseDate: "2017-12-25",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Orphaned, penniless but ambitious and with a mind crammed with imagination and fresh ideas, the American Phineas Taylor Barnum will always be remembered as the man with the gift to effortlessly blur the line between reality and fiction. Thirsty for innovation and hungry for success, the son of a tailor will manage to open a wax museum but will soon shift focus to the unique and peculiar, introducing extraordinary, never-seen-before live acts on the circus stage. Some will call Barnum's wide collection of oddities, a freak show; however, when the obsessed for cheers and respectability showman gambles everything on the opera singer Jenny Lind to appeal to a high-brow audience, he will somehow lose sight of the most important aspect of his life: his family. Will Barnum risk it all to be accepted?                Written by\nNick Riganas",
    actors: ["Hugh Jackman", "Michelle Williams", "Zac Efron"],
    imdbRating: 8.0,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ0ZWJkYjMtYjJmYS00MjJiLTg3NTYtMmIzN2E2Y2YwZmUyXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    id: "20",
    title: "Maze Runner: The Death Cure",
    year: "2018",
    genres: ["Action", "Sci-Fi", "Thriller"],
    ratings: [
      4, 6, 8, 10, 7, 6, 5, 3, 6, 4, 2, 8, 3, 5, 5, 2, 7, 4, 3, 1, 10, 8, 2, 9,
      4, 5, 3, 2, 8, 3,
    ],
    poster:
      "MV5BMTYyNzk3MDc2NF5BMl5BanBnXkFtZTgwMDk3OTM1NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "141", // in minutes

    releaseDate: "2018-01-26",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "In the epic finale to The Maze Runner Saga, Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary last city, a WCKD controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get the answers to the questions the Gladers have been asking since they first arrived in the maze. Will Thomas and the crew make it out alive? Or will Ava Paige get her way?",
    actors: ["Dylan O'Brien", "Ki Hong Lee", "Kaya Scodelario"],
    imdbRating: 6.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyNzk3MDc2NF5BMl5BanBnXkFtZTgwMDk3OTM1NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    id: "21",
    title: "Winchester - House of Ghosts",
    year: "2018",
    genres: ["Biography", "Fantasy", "Horror"],
    ratings: [
      7, 7, 1, 7, 8, 6, 2, 7, 9, 4, 6, 6, 3, 4, 7, 6, 9, 5, 6, 6, 4, 2, 2, 4, 9,
      6, 8, 3, 5, 10,
    ],
    poster:
      "MV5BMjI2OWE5OGItMTE4Yi00ZmIzLThjZDctNTU1OTMxMTc3Yjg4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,315,500_AL_.jpg",
    contentRating: "PG-13",
    duration: "99", // in minutes

    releaseDate: "2018-02-02",
    averageRating: 0,
    originalTitle: "Winchester",
    storyline:
      "Inspired by true events. On an isolated stretch of land 50 miles outside of San Francisco sits the most haunted house in the world. Built by Sarah Winchester, (Academy Award\u00ae-winner Helen Mirren) heiress to the Winchester fortune, it is a house that knows no end. Constructed in an incessant twenty-four hour a day, seven day a week mania for decades, it stands seven stories tall and contains hundreds of rooms. To the outsider it looks like a monstrous monument to a disturbed woman's madness. But Sarah is not building for herself, for her niece (Sarah Snook) or for the brilliant Doctor Eric Price (Jason Clarke) whom she has summoned to the house. She is building a prison, an asylum for hundreds of vengeful ghosts, and the most terrifying among them have a score to settle with the Winchesters.",
    actors: ["Helen Mirren", "Sarah Snook", "Finn Scicluna-O'Prey"],
    imdbRating: 5.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2OWE5OGItMTE4Yi00ZmIzLThjZDctNTU1OTMxMTc3Yjg4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,315,500_AL_.jpg",
  },
  {
    id: "22",
    title: "The Post",
    year: "2017",
    genres: ["Biography", "Drama", "History"],
    ratings: [
      10, 6, 2, 8, 2, 5, 7, 3, 2, 7, 4, 8, 8, 1, 1, 2, 3, 1, 8, 2, 2, 4, 7, 8,
      7, 1, 10, 9, 4, 8,
    ],
    poster:
      "MV5BMjQyMjEwOTIwNV5BMl5BanBnXkFtZTgwOTkzNTMxNDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "11",
    duration: "116", // in minutes

    releaseDate: "2018-01-26",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "When American military analyst, Daniel Ellsberg, realizes to his disgust the depths of the US government's deceptions about the futility of the Vietnam War, he takes action by copying top-secret documents that would become the Pentagon Papers. Later, Washington Post owner, Kay Graham, is still adjusting to taking over her late husband's business when editor Ben Bradlee discovers the New York Times has scooped them with an explosive expose on those papers. Determined to compete, Post reporters find Ellsberg himself and a complete copy of those papers. However, the Post's plans to publish their findings are put in jeopardy with a Federal restraining order that could get them all indicted for Contempt. Now, Kay Graham must decide whether to back down for the safety of her paper or publish and fight for the Freedom of the Press. In doing so, Graham and her staff join a fight that would have America's democratic ideals in the balance.                Written by\nKenneth Chisholm (kchishol@rogers.com)",
    actors: ["Meryl Streep", "Tom Hanks", "Sarah Paulson"],
    imdbRating: 7.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMjEwOTIwNV5BMl5BanBnXkFtZTgwOTkzNTMxNDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    id: "23",
    title: "Hostiles",
    year: "2017",
    genres: ["Adventure", "Drama", "Western"],
    ratings: [
      8, 8, 3, 3, 8, 10, 2, 9, 7, 5, 4, 8, 6, 5, 10, 4, 5, 8, 4, 2, 1, 2, 10, 4,
      5, 4, 1, 3, 4, 1,
    ],
    poster:
      "MV5BNjFhZjM4ZDYtMGRjYi00Yzc2LWExYmEtMDQ3NzA4ODU4YTljXkEyXkFqcGdeQXVyNjkwMzU3NDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "R",
    duration: "134", // in minutes

    releaseDate: "2018-04-06",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "In 1892, a legendary Army captain reluctantly agrees to escort a Cheyenne chief and his family through dangerous territory.",
    actors: ["Scott Shepherd", "Rosamund Pike", "Ava Cooper"],
    imdbRating: 7.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjFhZjM4ZDYtMGRjYi00Yzc2LWExYmEtMDQ3NzA4ODU4YTljXkEyXkFqcGdeQXVyNjkwMzU3NDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    id: "24",
    title: "The Shape of Water",
    year: "2017",
    genres: ["Adventure", "Drama", "Fantasy"],
    ratings: [
      2, 9, 7, 4, 8, 5, 9, 8, 6, 4, 5, 10, 6, 6, 10, 3, 5, 4, 2, 4, 8, 5, 10,
      10, 5, 5, 7, 2, 6, 3,
    ],
    poster:
      "MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "123", // in minutes

    releaseDate: "2018-02-14",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "From master storyteller Guillermo del Toro comes THE SHAPE OF WATER, an otherworldly fable set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment. Rounding out the cast are Michael Shannon, Richard Jenkins, Michael Stuhlbarg, and Doug Jones.                Written by\nFox Searchlight Pictures",
    actors: ["Sally Hawkins", "Octavia Spencer", "Michael Shannon"],
    imdbRating: 7.8,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
];

export default moviesData;
