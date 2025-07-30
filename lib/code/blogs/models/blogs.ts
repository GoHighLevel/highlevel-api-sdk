/**
 * Blogs Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface UrlSlugCheckResponseDTO {
  exists: boolean;
}

export interface UpdateBlogPostParams {
  title: string;
  locationId: string;
  blogId: string;
  imageUrl: string;
  description: string;
  rawHTML: string;
  status: string;
  imageAltText: string;
  categories: string[];
  tags?: string[];
  author: string;
  urlSlug: string;
  canonicalLink?: string;
  publishedAt: string;
}

export interface BlogPostUpdateResponseWrapperDTO {
  updatedBlogPost: BlogPostResponseDTO;
}

export interface CreateBlogPostParams {
  title: string;
  locationId: string;
  blogId: string;
  imageUrl: string;
  description: string;
  rawHTML: string;
  status: string;
  imageAltText: string;
  categories: string[];
  tags?: string[];
  author: string;
  urlSlug: string;
  canonicalLink?: string;
  publishedAt: string;
}

export interface BlogPostCreateResponseWrapperDTO {
  data: BlogPostResponseDTO;
}

export interface AuthorsResponseDTO {
  authors: AuthorResponseDTO[];
}

export interface AuthorResponseDTO {
  _id: string;
  name: string;
  locationId: string;
  updatedAt: string;
  canonicalLink: string;
}

export interface CategoriesResponseDTO {
  categories: CategoryResponseDTO[];
}

export interface CategoryResponseDTO {
  _id: string;
  label?: string;
  locationId: string;
  updatedAt: string;
  canonicalLink: string;
  urlSlug: string;
}

export interface BlogGetResponseWrapperDTO {
  data: BlogResponseDTO[];
}

export interface BlogResponseDTO {
  _id: string;
  name: string;
}

export interface BlogPostGetResponseWrapperDTO {
  blogs: BlogPostResponseDTO[];
}

export interface BlogPostResponseDTO {
  categories: string[];
  tags?: string[];
  archived: boolean;
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: string;
  imageAltText: string;
  urlSlug: string;
  canonicalLink?: string;
  author?: string;
  publishedAt: string;
  updatedAt: string;
}

