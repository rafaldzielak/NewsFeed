import { rest } from "msw";

export const handlers = [
  rest.get("https://free-news.p.rapidapi.com/v1/search", (req, res, ctx) => {
    return res(
      ctx.json({
        error: null,
        loading: false,
        page: 1,
        page_size: 25,
        status: "ok",
        articles: [
          {
            _id: "198ee5830d9a21f95df11cab81984891",
            _score: 1,
            author: "Author 1",
            clean_url: "clean_url1.com",
            country: "US",
            is_opinion: false,
            language: "en",
            link: "link1.com",
            media:
              "https://i2.wp.com/media.nbcmiami.com/2020/12/106806369-16070…RMANY_MUSK.jpeg?quality=85&resize=1200%2C675&strip=all&ssl=1",
            published_date: "2021-06-01 10:11:24",
            published_date_precision: "full",
            rank: 143,
            rights: "rights1.com",
            summary: "Short summary 1",
            title: "Title 1",
            topic: "Topic 1",
            twitter_account: "@twitter1",
          },
          {
            _id: "198ee5830d9a21f95df11cab81984899",
            _score: 2,
            author: "Author 2",
            clean_url: "clean_url2.com",
            country: "US",
            is_opinion: false,
            language: "en",
            link: "link2.com",
            media:
              "https://i2.wp.com/media.nbcmiami.com/2020/12/106806369-16070…RMANY_MUSK.jpeg?quality=85&resize=1200%2C675&strip=all&ssl=1",
            published_date: "2021-06-02 01:10:24",
            published_date_precision: "full",
            rank: 143,
            rights: "rights2.com",
            summary: "Short summary 2",
            title: "Title 2",
            topic: "Topic 2",
            twitter_account: "@twitter2",
          },
        ],
      })
    );
  }),
];
