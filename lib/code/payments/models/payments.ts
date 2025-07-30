/**
 * Payments Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface CreateWhiteLabelIntegrationProviderDto {
  altId: string;
  altType: string;
  uniqueName: string;
  title: string;
  provider: string;
  description: string;
  imageUrl: string;
}

export interface CreateWhitelabelIntegrationResponseDto {
  _id: string;
  altId: string;
  altType: string;
  title: string;
  route: string;
  provider: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface IntegrationProviderSchema {
  _id: string;
  altId: string;
  altType: string;
  title: string;
  route: string;
  provider: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface ListWhitelabelIntegrationProviderResponseDto {
  providers: any;
}

export interface OrderResponseSchema {
  _id: string;
  altId: string;
  altType: string;
  contactId?: string;
  contactName?: string;
  contactEmail?: string;
  currency?: string;
  amount?: number;
  subtotal?: number;
  discount?: number;
  status: string;
  liveMode?: boolean;
  totalProducts?: number;
  sourceType: string;
  sourceName?: string;
  sourceId?: string;
  sourceMeta?: any;
  couponCode?: string;
  createdAt: string;
  updatedAt: string;
  sourceSubType?: string;
  fulfillmentStatus?: string;
  onetimeProducts?: number;
  recurringProducts?: number;
}

export interface ListOrdersResponseDto {
  data: OrderResponseSchema[];
  totalCount: number;
}

export interface AmountSummary {
  subtotal: number;
  discount?: number;
}

export interface OrderSource {
  type: string;
  subType?: string;
  id: string;
  name?: string;
  meta?: any;
}

export interface GetOrderResponseSchema {
  _id: string;
  altId: string;
  altType: string;
  contactId?: string;
  currency?: string;
  amount?: number;
  status: string;
  liveMode?: boolean;
  createdAt: string;
  updatedAt: string;
  fulfillmentStatus?: string;
  contactSnapshot?: any;
  amountSummary?: any;
  source?: any;
  items?: string[];
  coupon?: any;
  trackingId?: string;
  fingerprint?: string;
  meta?: any;
  markAsTest?: boolean;
  traceId?: string;
}

export interface FulfillmentTracking {
  trackingNumber?: string;
  shippingCarrier?: string;
  trackingUrl?: string;
}

export interface FulfillmentItems {
  priceId: string;
  qty: number;
}

export interface CreateFulfillmentDto {
  altId: string;
  altType: string;
  trackings: FulfillmentTracking[];
  items: FulfillmentItems[];
  notifyCustomer: boolean;
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
  isLabelEnabled?: boolean;
  label?: any;
  slug?: string;
  seo?: any;
}

export interface MembershipOfferDto {
  label: string;
  value: string;
  _id: string;
}

export interface RecurringDto {
  interval: string;
  intervalCount: number;
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

export interface FulfilledItem {
  _id: string;
  name: string;
  product: any;
  price: any;
  qty: number;
}

export interface FulfillmentSchema {
  altId: string;
  altType: string;
  trackings: FulfillmentTracking[];
  _id: string;
  items: FulfilledItem[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateFulfillmentResponseDto {
  status: boolean;
  data: any;
}

export interface ListFulfillmentResponseDto {
  status: boolean;
  data: FulfillmentSchema[];
}

export interface TxnResponseSchema {
  _id: string;
  altId: string;
  altType: string;
  contactId?: string;
  contactName?: string;
  contactEmail?: string;
  currency?: string;
  amount?: number;
  status: any;
  liveMode?: boolean;
  entityType?: string;
  entityId?: string;
  entitySourceType: string;
  entitySourceSubType?: string;
  entitySourceName?: string;
  entitySourceId?: string;
  entitySourceMeta?: any;
  subscriptionId?: string;
  chargeId?: string;
  chargeSnapshot?: any;
  paymentProviderType?: string;
  paymentProviderConnectedAccount?: string;
  ipAddress?: string;
  createdAt: string;
  updatedAt: string;
  amountRefunded?: number;
  paymentMethod?: any;
}

export interface ListTxnsResponseDto {
  data: TxnResponseSchema[];
  totalCount: number;
}

export interface GetTxnResponseSchema {
  _id: string;
  altType: string;
  altId: string;
  contactId?: string;
  contactSnapshot?: any;
  currency?: string;
  amount?: number;
  status?: any;
  liveMode?: boolean;
  createdAt: string;
  updatedAt: string;
  entityType?: string;
  entityId?: string;
  entitySource?: any;
  chargeId?: string;
  chargeSnapshot?: any;
  invoiceId?: string;
  subscriptionId?: string;
  paymentProvider?: any;
  ipAddress?: string;
  meta?: any;
  markAsTest?: boolean;
  isParent?: boolean;
  amountRefunded?: number;
  receiptId?: string;
  qboSynced?: boolean;
  qboResponse?: any;
  traceId?: string;
}

export interface SubscriptionResponseSchema {
  _id: string;
  altId: string;
  altType: string;
  contactId?: string;
  contactName?: string;
  contactEmail?: string;
  currency?: string;
  amount?: number;
  status: any;
  liveMode?: boolean;
  entityType?: string;
  entityId?: string;
  entitySourceType: string;
  entitySourceName?: string;
  entitySourceId?: string;
  entitySourceMeta?: any;
  subscriptionId?: string;
  subscriptionSnapshot?: any;
  paymentProviderType?: string;
  paymentProviderConnectedAccount?: string;
  ipAddress?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ListSubscriptionResponseDto {
  data: SubscriptionResponseSchema[];
  totalCount: number;
}

export interface CustomRRuleOptionsDto {
  intervalType: string;
  interval: number;
  startDate: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  dayOfMonth?: number;
  dayOfWeek?: string;
  numOfWeek?: number;
  monthOfYear?: string;
  count?: number;
  daysBefore?: number;
}

export interface ScheduleOptionsDto {
  executeAt?: string;
  rrule?: CustomRRuleOptionsDto;
}

export interface GetSubscriptionResponseSchema {
  _id: string;
  altType: any;
  altId: string;
  contactId?: string;
  contactSnapshot?: any;
  coupon?: any;
  currency?: string;
  amount?: number;
  status?: any;
  liveMode?: boolean;
  entityType?: string;
  entityId?: string;
  entitySource?: any;
  subscriptionId?: string;
  subscriptionSnapshot?: any;
  paymentProvider?: any;
  ipAddress?: string;
  createdAt: string;
  updatedAt: string;
  meta?: any;
  markAsTest?: boolean;
  schedule?: any;
  autoPayment?: any;
  recurringProduct?: any;
  canceledAt?: string;
  canceledBy?: string;
  traceId?: string;
}

export interface ApplyToFuturePaymentsConfigDto {
  type: string;
  duration?: number;
  durationType?: string;
}

export interface CouponDto {
  _id: string;
  usageCount: number;
  hasAffiliateCoupon: boolean;
  deleted: boolean;
  limitPerCustomer: number;
  altId: string;
  altType: string;
  name: string;
  code: string;
  discountType: string;
  discountValue: number;
  status: string;
  startDate: string;
  endDate?: string;
  applyToFuturePayments: boolean;
  applyToFuturePaymentsConfig: any;
  userId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ListCouponsResponseDto {
  data: CouponDto[];
  totalCount: number;
  traceId: string;
}

export interface ApplyToFuturePaymentsConfig {
  type: string;
  duration: number;
  durationType: string;
}

export interface CreateCouponParams {
  altId: string;
  altType: string;
  name: string;
  code: string;
  discountType: string;
  discountValue: number;
  startDate: string;
  endDate?: string;
  usageLimit?: number;
  productIds?: string[];
  applyToFuturePayments?: boolean;
  applyToFuturePaymentsConfig?: any;
  limitPerCustomer?: boolean;
}

export interface CreateCouponResponseDto {
  _id: string;
  usageCount: number;
  limitPerCustomer: number;
  altId: string;
  altType: string;
  name: string;
  code: string;
  discountType: string;
  discountValue: number;
  status: string;
  startDate: string;
  endDate?: string;
  applyToFuturePayments: boolean;
  applyToFuturePaymentsConfig: any;
  userId?: string;
  createdAt: string;
  updatedAt: string;
  traceId: string;
}

export interface UpdateCouponParams {
  altId: string;
  altType: string;
  name: string;
  code: string;
  discountType: string;
  discountValue: number;
  startDate: string;
  endDate?: string;
  usageLimit?: number;
  productIds?: string[];
  applyToFuturePayments?: boolean;
  applyToFuturePaymentsConfig?: any;
  limitPerCustomer?: boolean;
  id: string;
}

export interface DeleteCouponParams {
  altId: string;
  altType: string;
  id: string;
}

export interface DeleteCouponResponseDto {
  success: boolean;
  traceId: string;
}

export interface CreateCustomProvidersDto {
  name: string;
  description: string;
  paymentsUrl: string;
  queryUrl: string;
  imageUrl: string;
}

export interface CreateCustomProvidersResponseSchema {
  name: string;
  description: string;
  paymentsUrl: string;
  queryUrl: string;
  imageUrl: string;
  _id: string;
  locationId: string;
  marketplaceAppId: string;
  paymentProvider?: any;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  traceId?: string;
}

export interface DeleteCustomProvidersResponseSchema {
  success: boolean;
}

export interface GetCustomProvidersResponseSchema {
  name: string;
  description: string;
  paymentsUrl: string;
  queryUrl: string;
  imageUrl: string;
  _id: string;
  locationId: string;
  marketplaceAppId: string;
  paymentProvider?: any;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  traceId?: string;
}

export interface CustomProviderKeys {
  apiKey: string;
  publishableKey: string;
}

export interface ConnectCustomProvidersConfigDto {
  live: any;
  test: any;
}

export interface ConnectCustomProvidersResponseSchema {
  name: string;
  description: string;
  paymentsUrl: string;
  queryUrl: string;
  imageUrl: string;
  _id: string;
  locationId: string;
  marketplaceAppId: string;
  paymentProvider?: any;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  traceId?: string;
}

export interface DeleteCustomProvidersConfigDto {
  liveMode: boolean;
}

export interface DisconnectCustomProvidersResponseSchema {
  success: boolean;
}

