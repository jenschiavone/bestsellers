export interface Book {
  id: number;
  title: string;
  author: string;
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  amazon_product_href: string;
  book_image_href: string;
  description: any;
}