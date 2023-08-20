import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1, 'Мстители', 1000, 2012, 'США', "'Avengers Assemble!'", 'фантастика, боевик, фэнтези', '137 мин. / 02:17'));

console.log(cart.items);
