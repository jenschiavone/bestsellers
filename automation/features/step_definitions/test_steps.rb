When("I visit the bestseller page") do
  # @site = Bestsellers.new
end

Then("I should see the app title") do
  expect(@site.browser.body.text).to include 'New York Times Bestsellers'
end

Given("there is a list of Hardcover Fiction books") do
  @book_list = FactoryBot.create(:book_list)
end

When("I choose to view the Hardcover Fiction list") do
  @site.home_page.genre_list.select('Hardcover Fiction')
end

Then("I should see the list of Hardcover Fiction books") do
  # raise('danger! danger!')
  expect(@site.home_page.book_titles).to eq @book_list.books.collect(&:title)
end
