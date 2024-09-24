export const authors = [
  {
    id: 1,
    name: 'George Orwell',
    imgUrl:
      'https://dl6pgk4f88hky.cloudfront.net/2021/06/2020_50_orwell_opener_new-scaled.jpg',
  },
  {
    id: 2,
    name: 'George R.R. Martin',
    imgUrl:
      'https://media.vanityfair.com/photos/62fa8f172d8966f073e581bb/master/w_1920,c_limit/george-r-r-martin-portrait-redux.jpg',
  },
  {
    id: 3,
    name: 'J.R.R. Tolkien',
    imgUrl:
      'https://variety.com/wp-content/uploads/2017/07/j-rr-tolkein.jpg?w=1000&h=562&crop=1',
  },
];

export const books = [
  {
    id: 1,
    title: '1984',
    authors: [authors[0]],
    imgUrl: 'https://m.media-amazon.com/images/I/7180qjGSgDL._SL1360_.jpg',
    description:
      'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.',
    extendedDescription: `Published in 1949, George Orwell's 1984 is a profound anti-utopian novel that examines the dangers of totalitarian rule. The novel is set in a superstate governed by the Party, led by the figurehead Big Brother, where citizens are under constant surveillance and stripped of personal freedoms. The story follows Winston Smith, who dares to defy the Party’s oppressive regime in a doomed effort to find truth and individuality.`,
  },
  {
    id: 2,
    title: 'A Game of Thrones',
    authors: [authors[1]],
    imgUrl: 'https://images.booksense.com/images/689/381/9780553381689.jpg',
    description:
      'A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin.',
    extendedDescription: `First published in 1996, A Game of Thrones is the first book of the epic fantasy series A Song of Ice and Fire. Set in the fictional world of Westeros, the novel follows multiple noble families vying for control of the Iron Throne. The story is known for its complex characters, intricate political intrigue, and unexpected twists. It's a dark tale of betrayal, loyalty, and the dangerous pursuit of power in a world where the seasons can last decades.`,
  },
  {
    id: 3,
    title: 'Fire and Blood',
    authors: [authors[1]],
    imgUrl: 'https://m.media-amazon.com/images/I/81sV4EKdlTL._SL1500_.jpg',
    description:
      'Centuries before the events of A Game of Thrones, House Targaryen—the only family of dragonlords to survive the Doom of Valyria—took up residence on Dragonstone.',
    extendedDescription: `Published in 2018, Fire & Blood provides a rich historical account of House Targaryen’s rise to power in Westeros. Set 300 years before the events of A Song of Ice and Fire, it details the conquest of Westeros by Aegon the Conqueror and the reigns of his descendants. Written as a historical chronicle, it explores the dragonlords' internal strife, wars, and their eventual downfall. This book is essential for any fan seeking more backstory on Westeros and its famed Targaryen dynasty.`,
  },
  {
    id: 4,
    title: 'The Lord of the Rings',
    authors: [authors[2]],
    imgUrl:
      'https://i.thriftbooks.com/api/imagehandler/m/6BAA3FAC4321FC4D8F07CB0D1F0D5A10D39E74EC.jpeg',
    description:
      'An epic high fantasy novel set in Middle-earth, following the quest to destroy the One Ring.',
    extendedDescription: `Written by J.R.R. Tolkien, The Lord of the Rings is an epic tale set in the world of Middle-earth. The story centers around the One Ring, a powerful artifact that has the potential to enslave the entire world if it falls into the wrong hands. A young hobbit named Frodo Baggins is tasked with destroying the Ring in the fires of Mount Doom. Along the way, he is joined by a fellowship of diverse characters who must work together to combat the forces of evil. The trilogy is a cornerstone of modern fantasy literature, known for its deep world-building and themes of friendship, sacrifice, and hope.`,
  },
  {
    id: 5,
    title: 'Fake Book Combined Authors',
    authors: [authors[0], authors[1]],
    imgUrl: 'https://via.placeholder.com/150',
    description: 'This is a fake book to show multiple authors for one book.',
    extendedDescription: `This fake book is used as an example to demonstrate the functionality of having multiple authors associated with a single title. While it does not exist in reality, it serves as a test case for developing applications that involve complex author and book relationships.`,
  },
  {
    id: 6,
    title: 'Animal Farm',
    authors: [authors[0]],
    imgUrl: 'https://m.media-amazon.com/images/I/81WoYpcR34L._SY466_.jpg',
    description:
      'A political fable set in a farmyard, in which the animals overthrow their human masters.',
    extendedDescription: `Published in 1945, Animal Farm is an allegorical novella by George Orwell that critiques totalitarian regimes, most notably Soviet Russia. Set on a farm, the story follows a group of animals who rebel against their human farmer in hopes of creating an equal society. However, the pigs who lead the revolution soon become tyrannical themselves, mirroring the very oppression they fought against. The novella explores themes of power, corruption, and the cyclical nature of oppression.`,
  },
  {
    id: 7,
    title: 'The Hobbit',
    authors: [authors[2]],
    imgUrl:
      'https://m.media-amazon.com/images/I/41aQPTCmeVL._SY344_BO1,204,203,200_.jpg',
    description:
      'A prelude to The Lord of the Rings, it follows the journey of Bilbo Baggins as he encounters adventure, treasure, and dragons.',
    extendedDescription: `First published in 1937, The Hobbit is a children’s fantasy novel that serves as a prelude to The Lord of the Rings. The story follows the adventures of Bilbo Baggins, a hobbit who is drawn into a quest to help a group of dwarves reclaim their homeland from the dragon Smaug. Along the way, Bilbo encounters trolls, goblins, and even Gollum, from whom he acquires the One Ring. The book is beloved for its whimsical tone, rich characters, and adventurous spirit.`,
  },
];

export const discussions = [
  {
    bookId: 1,
    bookTitle: '1984',
    threads: [
      {
        id: 1,
        title: 'Big Brother’s Impact',
        comments: [
          {
            userId: 1,
            username: 'Alice',
            content: 'This book really made me think about privacy.',
          },
          {
            userId: 2,
            username: 'Bob',
            content: 'Yeah, Orwell’s vision is scarily relevant today.',
          },
        ],
      },
      {
        id: 2,
        title: 'The world of 1984 vs. Reality',
        comments: [
          {
            userId: 3,
            username: 'Charlie',
            content:
              'I wonder how Orwell would feel about modern surveillance.',
          },
        ],
      },
    ],
  },
  {
    bookId: 2,
    bookTitle: 'A Game of Thrones',
    threads: [
      {
        id: 1,
        title: 'The Starks and Honor',
        comments: [
          {
            userId: 4,
            username: 'Dana',
            content: 'The Starks are so honorable, but does it help them?',
          },
        ],
      },
    ],
  },
];
