import { Movie, Cart } from "../service/Cart.ts"; // Убедитесь, что путь корректный

describe("Movie", () => {
    it("должен корректно создавать объект фильма", () => {
        const movie = new Movie(
            "Мстители",
            2012,
            "США",
            "Avengers Assemble!",
            ["фантастика", "боевик", "фэнтези", "приключения"],
            "137 мин. / 02:17"
        );

        expect(movie.title).toBe("Мстители");
        expect(movie.year).toBe(2012);
        expect(movie.country).toBe("США");
        expect(movie.slogan).toBe("Avengers Assemble!");
        expect(movie.genre).toEqual(["фантастика", "боевик", "фэнтези", "приключения"]);
        expect(movie.duration).toBe("137 мин. / 02:17");
    });

    it("должен отображать корректную информацию о фильме", () => {
        const movie = new Movie(
            "Мстители",
            2012,
            "США",
            "Avengers Assemble!",
            ["фантастика", "боевик", "фэнтези", "приключения"],
            "137 мин. / 02:17"
        );

        const info = movie.displayInfo();
        expect(info).toContain("Название: Мстители");
        expect(info).toContain("Год: 2012");
        expect(info).toContain("Страна: США");
        expect(info).toContain('Слоган: "Avengers Assemble!"');
        expect(info).toContain("Жанр: фантастика, боевик, фэнтези, приключения");
        expect(info).toContain("Длительность: 137 мин. / 02:17");
    });
});

describe("Cart", () => {
    it("должен добавлять фильмы в корзину", () => {
        const cart = new Cart();
        const movie = new Movie(
            "Мстители",
            2012,
            "США",
            "Avengers Assemble!",
            ["фантастика", "боевик", "фэнтези", "приключения"],
            "137 мин. / 02:17"
        );

        cart.addToCart(movie);
        expect(cart["items"].length).toBe(1);
        expect(cart["items"][0].title).toBe("Мстители");
    });
});
