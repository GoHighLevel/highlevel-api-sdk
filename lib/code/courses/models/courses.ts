// Courses Models

export interface visibility {
}

export interface contentType {
}

export interface type {
}

export interface PostMaterialInterface {
  title: string;
  type: type;
  url: string;
}

export interface PostInterface {
  title: string;
  visibility: visibility;
  thumbnailUrl?: string;
  contentType: contentType;
  description: string;
  bucketVideoUrl?: string;
  postMaterials?: PostMaterialInterface[];
}

export interface SubCategoryInterface {
  title: string;
  visibility: visibility;
  thumbnailUrl?: string;
  posts?: PostInterface[];
}

export interface CategoryInterface {
  title: string;
  visibility: visibility;
  thumbnailUrl?: string;
  posts?: PostInterface[];
  subCategories?: SubCategoryInterface[];
}

export interface InstructorDetails {
  name: string;
  description: string;
}

export interface ProductInterface {
  title: string;
  description: string;
  imageUrl?: string;
  categories: CategoryInterface[];
  instructorDetails?: InstructorDetails;
}

export interface PublicExporterPayload {
  locationId: string;
  userId?: string;
  products: ProductInterface[];
}

