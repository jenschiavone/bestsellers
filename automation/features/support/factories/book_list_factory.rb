require 'factory_bot'
require 'faker'
require_relative '../models/book_list'

# class is not required, FactoryBot will find it by camel casing the factory name
FactoryBot.define do
  factory :book_list, class: BookList do
    genre {'hardcover-fiction'}
    books { build_list(:book, 3) }
  end

  factory :book do
    title {Faker::Book.title}
    author {Faker::Book.author}
    sequence(:rank)
  end
end
