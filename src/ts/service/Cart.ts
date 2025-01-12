// Интерфейс для описания фильма
interface IMovie {
  title: string;
  year: number;
  country: string;
  slogan: string;
  genre: string[];
  duration: string; // в формате "137 мин. / 02:17"
}

// Класс для фильмов
export class Movie implements IMovie {
  constructor(
    public title: string,
    public year: number,
    public country: string,
    public slogan: string,
    public genre: string[],
    public duration: string
  ) {}
  // Метод для отображения информации о фильме
  displayInfo(): string {
    return `
            Название: ${this.title}
            Год: ${this.year}
            Страна: ${this.country}
            Слоган: "${this.slogan}"
            Жанр: ${this.genre.join(", ")}
            Длительность: ${this.duration}
        `;
  }
}

// Класс корзины для добавления фильмов
export class Cart {
  private items: Movie[] = [];

  // Добавление фильма в корзину
  addToCart(movie: Movie): void {
    this.items.push(movie);
    console.log(`Фильм "${movie.title}" добавлен в корзину.`);
  }

  // Отображение всех фильмов в корзине
  displayCart(): void {
    console.log("Корзина содержит следующие фильмы:");
    this.items.forEach((movie, index) => {
      console.log(`${index + 1}. ${movie.title}`);
    });
  }
}

// Пример использования
const avengers = new Movie(
  "Мстители",
  2012,
  "США",
  "Avengers Assemble!",
  ["фантастика", "боевик", "фэнтези", "приключения"],
  "137 мин. / 02:17"
);

console.log(avengers.displayInfo());

const cart = new Cart();
cart.addToCart(avengers);
cart.displayCart();
