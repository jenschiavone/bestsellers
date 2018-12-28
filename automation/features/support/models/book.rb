class Book

  attr_accessor :title, :author, :rank

  def to_hash
    {
      title: title,
      author: author,
      rank: rank,
      rank_last_week: 1,
      weeks_on_list: 9,
      amazon_product_href: "https://www.amazon.com/Reckoning-Novel-John-Grisham-ebook/dp/B079DBS447?tag=NYTBS-20",
      book_image_href: "https://s1.nyt.com/du/books/images/9780385544160.jpg",
      description: "A decorated World War II veteran shoots and kills a pastor.",
    }
  end
end
