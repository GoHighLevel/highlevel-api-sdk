/**
 * Products Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface BulkUpdateFilters {
  collectionIds?: string[];
  productType?: string;
  availableInStore?: boolean;
  search?: string;
}

export interface PriceUpdateField {
  type: string;
  value: number;
  roundToWhole?: boolean;
}

export interface BulkUpdateDto {
  altId: string;
  altType: string;
  type: string;
  productIds: string[];
  filters?: any;
  price?: any;
  compareAtPrice?: any;
  availability?: boolean;
  collectionIds?: string[];
  currency?: string;
}

export interface BulkUpdateResponseDto {
  status: boolean;
  message?: string;
}

export interface RecurringDto {
  interval: string;
  intervalCount: number;
}

export interface MembershipOfferDto {
  label: string;
  value: string;
  _id: string;
}

export interface PriceMetaDto {
  source: string;
  sourceId?: string;
  stripePriceId: string;
  internalSource: string;
}

export interface WeightOptionsDto {
  value: number;
  unit: string;
}

export interface PriceDimensionsDto {
  height: number;
  width: number;
  length: number;
  unit: string;
}

export interface ShippingOptionsDto {
  weight?: any;
  dimensions?: any;
}

export interface CreatePriceDto {
  name: string;
  type: string;
  currency: string;
  amount: number;
  recurring?: any;
  description?: string;
  membershipOffers?: MembershipOfferDto[];
  trialPeriod?: number;
  totalCycles?: number;
  setupFee?: number;
  variantOptionIds?: string[];
  compareAtPrice?: number;
  locationId: string;
  userId?: string;
  meta?: any;
  trackInventory?: boolean;
  availableQuantity?: number;
  allowOutOfStockPurchases?: boolean;
  sku?: string;
  shippingOptions?: any;
  isDigitalProduct?: boolean;
  digitalDelivery?: string[];
}

export interface CreatePriceResponseDto {
  _id: string;
  membershipOffers?: MembershipOfferDto[];
  variantOptionIds?: string[];
  locationId?: string;
  product?: string;
  userId?: string;
  name: string;
  type: string;
  currency: string;
  amount: number;
  recurring?: any;
  createdAt?: string;
  updatedAt?: string;
  compareAtPrice?: number;
  trackInventory?: boolean;
  availableQuantity?: number;
  allowOutOfStockPurchases?: boolean;
}

export interface DefaultPriceResponseDto {
  _id: string;
  membershipOffers?: MembershipOfferDto[];
  variantOptionIds?: string[];
  locationId?: string;
  product?: string;
  userId?: string;
  name: string;
  type: string;
  currency: string;
  amount: number;
  recurring?: any;
  createdAt?: string;
  updatedAt?: string;
  compareAtPrice?: number;
  trackInventory?: boolean;
  availableQuantity?: number;
  allowOutOfStockPurchases?: boolean;
}

export interface ListPricesResponseDto {
  prices: DefaultPriceResponseDto[];
  total: number;
}

export interface InventoryItemDto {
  _id: string;
  name: string;
  availableQuantity: number;
  sku: string;
  allowOutOfStockPurchases: boolean;
  product: string;
  updatedAt: string;
  image?: string;
  productName?: string;
}

export interface GetInventoryResponseDto {
  inventory: InventoryItemDto[];
  total: any;
}

export interface UpdateInventoryItemDto {
  priceId: string;
  availableQuantity?: number;
  allowOutOfStockPurchases?: boolean;
}

export interface UpdateInventoryDto {
  altId: string;
  altType: string;
  items: UpdateInventoryItemDto[];
}

export interface UpdateInventoryResponseDto {
  status: boolean;
  message?: string;
}

export interface GetPriceResponseDto {
  _id: string;
  membershipOffers?: MembershipOfferDto[];
  variantOptionIds?: string[];
  locationId?: string;
  product?: string;
  userId?: string;
  name: string;
  type: string;
  currency: string;
  amount: number;
  recurring?: any;
  createdAt?: string;
  updatedAt?: string;
  compareAtPrice?: number;
  trackInventory?: boolean;
  availableQuantity?: number;
  allowOutOfStockPurchases?: boolean;
}

export interface UpdatePriceDto {
  name: string;
  type: string;
  currency: string;
  amount: number;
  recurring?: any;
  description?: string;
  membershipOffers?: MembershipOfferDto[];
  trialPeriod?: number;
  totalCycles?: number;
  setupFee?: number;
  variantOptionIds?: string[];
  compareAtPrice?: number;
  locationId: string;
  userId?: string;
  meta?: any;
  trackInventory?: boolean;
  availableQuantity?: number;
  allowOutOfStockPurchases?: boolean;
  sku?: string;
  shippingOptions?: any;
  isDigitalProduct?: boolean;
  digitalDelivery?: string[];
}

export interface UpdatePriceResponseDto {
  _id: string;
  membershipOffers?: MembershipOfferDto[];
  variantOptionIds?: string[];
  locationId?: string;
  product?: string;
  userId?: string;
  name: string;
  type: string;
  currency: string;
  amount: number;
  recurring?: any;
  createdAt?: string;
  updatedAt?: string;
  compareAtPrice?: number;
  trackInventory?: boolean;
  availableQuantity?: number;
  allowOutOfStockPurchases?: boolean;
}

export interface DeletePriceResponseDto {
  status: boolean;
}

export interface GetProductStatsResponseDto {
  totalProducts: number;
  includedInStore: number;
  excludedFromStore: number;
}

export interface UpdateProductStoreDto {
  action: string;
  productIds: string[];
}

export interface UpdateProductStoreResponseDto {
  status: boolean;
  message?: string;
}

export interface ListCollectionResponseDto {
  data: any[][];
  total: number;
}

export interface ProductCategories {
}

export interface DefaultCollectionResponseDto {
  data: any;
  status: boolean;
}

export interface CollectionSEODto {
  title?: string;
  description?: string;
}

export interface CreateProductCollectionsDto {
  altId: string;
  altType: string;
  collectionId?: string;
  name: string;
  slug: string;
  image?: string;
  seo?: any;
}

export interface CollectionSchema {
  _id: string;
  altId: string;
  name: string;
  slug: string;
  image: string;
  seo: any;
  createdAt: string;
}

export interface CreateCollectionResponseDto {
  data: any;
}

export interface UpdateProductCollectionsDto {
  altId: string;
  altType: string;
  name?: string;
  slug?: string;
  image?: string;
  seo?: any;
}

export interface UpdateProductCollectionResponseDto {
  status: boolean;
  message?: string;
}

export interface DeleteProductCollectionResponseDto {
  status: boolean;
  message?: string;
}

export interface ListProductReviewsResponseDto {
  data: any[][];
  total: number;
}

export interface CountReviewsByStatusResponseDto {
  data: any[][];
}

export interface UserDetailsDto {
  name: string;
  email: string;
  phone?: string;
  isCustomer?: boolean;
}

export interface ProductReviewDto {
  headline: string;
  comment: string;
  user: any;
}

export interface UpdateProductReviewDto {
  altId: string;
  altType: string;
  productId: string;
  status: string;
  reply?: ProductReviewDto[];
  rating?: number;
  headline?: string;
  detail?: string;
}

export interface UpdateProductReviewsResponseDto {
  status: boolean;
  message?: string;
}

export interface UpdateProductReviewObjectDto {
  reviewId: string;
  productId: string;
  storeId: string;
}

export interface UpdateProductReviewsDto {
  altId: string;
  altType: string;
  reviews: UpdateProductReviewObjectDto[];
  status: any;
}

export interface DeleteProductReviewResponseDto {
  status: boolean;
  message?: string;
}

export interface ProductVariantOptionDto {
  id: string;
  name: string;
}

export interface ProductVariantDto {
  id: string;
  name: string;
  options: ProductVariantOptionDto[];
}

export interface ProductMediaDto {
  id: string;
  title?: string;
  url: string;
  type: string;
  isFeatured?: boolean;
  priceIds?: any[][];
}

export interface ProductLabelDto {
  title: string;
  startDate?: string;
  endDate?: string;
}

export interface ProductSEODto {
  title?: string;
  description?: string;
}

export interface GetProductResponseDto {
  _id: string;
  description?: string;
  variants?: ProductVariantDto[];
  medias?: ProductMediaDto[];
  locationId: string;
  name: string;
  productType: string;
  availableInStore?: boolean;
  userId?: string;
  createdAt: string;
  updatedAt: string;
  statementDescriptor?: string;
  image?: string;
  collectionIds?: string[];
  isTaxesEnabled?: boolean;
  taxes?: string[];
  automaticTaxCategoryId?: string;
  isLabelEnabled?: boolean;
  label?: any;
  slug?: string;
  seo?: any;
}

export interface DeleteProductResponseDto {
  status: boolean;
}

export interface CreateProductDto {
  name: string;
  locationId: string;
  description?: string;
  productType: string;
  image?: string;
  statementDescriptor?: string;
  availableInStore?: boolean;
  medias?: ProductMediaDto[];
  variants?: ProductVariantDto[];
  collectionIds?: string[];
  isTaxesEnabled?: boolean;
  taxes?: string[];
  automaticTaxCategoryId?: string;
  isLabelEnabled?: boolean;
  label?: any;
  slug?: string;
  seo?: any;
}

export interface CreateProductResponseDto {
  _id: string;
  description?: string;
  variants?: ProductVariantDto[];
  medias?: ProductMediaDto[];
  locationId: string;
  name: string;
  productType: string;
  availableInStore?: boolean;
  userId?: string;
  createdAt: string;
  updatedAt: string;
  statementDescriptor?: string;
  image?: string;
  collectionIds?: string[];
  isTaxesEnabled?: boolean;
  taxes?: string[];
  automaticTaxCategoryId?: string;
  isLabelEnabled?: boolean;
  label?: any;
  slug?: string;
  seo?: any;
}

export interface UpdateProductDto {
  name: string;
  locationId: string;
  description?: string;
  productType: string;
  image?: string;
  statementDescriptor?: string;
  availableInStore?: boolean;
  medias?: ProductMediaDto[];
  variants?: ProductVariantDto[];
  collectionIds?: string[];
  isTaxesEnabled?: boolean;
  taxes?: string[];
  automaticTaxCategoryId?: string;
  isLabelEnabled?: boolean;
  label?: any;
  slug?: string;
  seo?: any;
}

export interface UpdateProductResponseDto {
  _id: string;
  description?: string;
  variants?: ProductVariantDto[];
  medias?: ProductMediaDto[];
  locationId: string;
  name: string;
  productType: string;
  availableInStore?: boolean;
  userId?: string;
  createdAt: string;
  updatedAt: string;
  statementDescriptor?: string;
  image?: string;
  collectionIds?: string[];
  isTaxesEnabled?: boolean;
  taxes?: string[];
  automaticTaxCategoryId?: string;
  isLabelEnabled?: boolean;
  label?: any;
  slug?: string;
  seo?: any;
}

export interface DefaultProductResponseDto {
  _id: string;
  description?: string;
  variants?: ProductVariantDto[];
  medias?: ProductMediaDto[];
  locationId: string;
  name: string;
  productType: string;
  availableInStore?: boolean;
  userId?: string;
  createdAt: string;
  updatedAt: string;
  statementDescriptor?: string;
  image?: string;
  collectionIds?: string[];
  isTaxesEnabled?: boolean;
  taxes?: string[];
  automaticTaxCategoryId?: string;
  isLabelEnabled?: boolean;
  label?: any;
  slug?: string;
  seo?: any;
}

export interface ListProductsStats {
  total: number;
}

export interface ListProductsResponseDto {
  products: DefaultProductResponseDto[];
  total: ListProductsStats[];
}

