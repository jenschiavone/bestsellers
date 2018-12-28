Before do
  @site = Bestsellers.new
end

After do
  @site.browser.close
end

After do |scenario|

  if scenario.failed?
    begin
      # @site.browser.screenshot.save("screenshot.png")
      encoded_img = @site.browser.screenshot.base64
      embed("data:image/png;base64,#{encoded_img}", 'image/png')
    rescue
      putes 'there was an issue taking a screenshot'
    end
  end

end
