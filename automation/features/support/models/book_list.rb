require 'wiremock_mapper'

class BookList
  attr_accessor :books, :genre

  WireMockMapper::Configuration.set_wiremock_url(MOCK_BASE_URI)

  def response
    books.map {|book| book.to_hash}
  end

  def endpoint
    "/books/genre/#{genre}"
  end

  def save!
    WireMockMapper.create_mapping do |request, respond|
      request.with_url_path.equal_to(endpoint)
      respond.with_body(self.response)
      respond.with_header('Content-Type', 'application/json')
      respond.with_header('Access-Control-Allow-Origin', '*')
    end
  end
end
