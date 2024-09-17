export const authors = [
  {
    name: 'George Orwell',
    imgUrl:
      'https://dl6pgk4f88hky.cloudfront.net/2021/06/2020_50_orwell_opener_new-scaled.jpg',
  },
  {
    name: 'George R.R. Martin',
    imgUrl:
      'https://media.vanityfair.com/photos/62fa8f172d8966f073e581bb/master/w_1920,c_limit/george-r-r-martin-portrait-redux.jpg',
  },
  {
    name: 'J.R.R. Tolkien',
    imgUrl:
      'https://variety.com/wp-content/uploads/2017/07/j-rr-tolkein.jpg?w=1000&h=562&crop=1',
  },
];

export const books = [
  {
    title: '1984',
    authors: [authors[0]],
    imgUrl: 'https://m.media-amazon.com/images/I/7180qjGSgDL._SL1360_.jpg',
    description:
      'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.',
  },
  {
    title: 'A Game of Thrones',
    authors: [authors[1]],
    imgUrl: 'https://images.booksense.com/images/689/381/9780553381689.jpg',
    description:
      'A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin.',
  },
  {
    title: 'Fire and Blood',
    authors: [authors[1]],
    imgUrl: 'https://m.media-amazon.com/images/I/81sV4EKdlTL._SL1500_.jpg',
    description:
      'Centuries before the events of A Game of Thrones, House Targaryen—the only family of dragonlords to survive the Doom of Valyria—took up residence on Dragonstone.',
  },
  {
    title: 'The Lord of the Rings',
    authors: [authors[2]],
    imgUrl:
      'https://i.thriftbooks.com/api/imagehandler/m/6BAA3FAC4321FC4D8F07CB0D1F0D5A10D39E74EC.jpeg',
    description:
      'An epic high fantasy novel set in Middle-earth, following the quest to destroy the One Ring.',
  },
  {
    title: 'Fake Book Combined Authors',
    authors: [authors[0], authors[1]],
    imgUrl: 'https://via.placeholder.com/150',
    description: 'This is a fake book to show multiple authors for one book.',
  },
  {
    title: 'Animal Farm',
    authors: [authors[0]],
    imgUrl: 'https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_SL1500_.jpg',
    description:
      'A political fable set in a farmyard, in which the animals overthrow their human masters.',
  },
  {
    title: 'The Hobbit',
    authors: [authors[2]],
    imgUrl:
      'https://m.media-amazon.com/images/I/41aQPTCmeVL._SY344_BO1,204,203,200_.jpg',
    description:
      'A prelude to The Lord of the Rings, it follows the journey of Bilbo Baggins as he encounters adventure, treasure, and dragons.',
  },
];
