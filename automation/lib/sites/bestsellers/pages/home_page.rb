require 'rubygems'
require 'taza/page'

module Bestsellers
  class HomePage < ::Taza::Page

    element(:genre_list) { browser.select_list }
    element(:book_list) { browser.tbody }
    element(:book_rows) { book_list.trs }

    def book_titles
      titles = []
      book_rows.each do |row|
        titles << row.tds[1].text
      end
      titles
    end

  end
end
