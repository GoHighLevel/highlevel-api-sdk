// AffiliateManager Models

export interface OAuthAffiliateListItemResponseDto {
  _id: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  deleted?: boolean;
  locationId: string;
  active?: boolean;
  address?: string;
  avatar?: string;
  createdAt?: string;
  createdBy?: any;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  websiteUrl?: string;
  contactId?: string;
  campaignIds?: string[];
  vatId?: string;
  updatedAt?: string;
  w8Form?: string;
  w9Form?: string;
  lastUpdatedBy?: any;
  email: string;
  revenue?: number;
  customer?: number;
  lead?: number;
  droppedCustomer?: number;
  clickCount?: number;
  paid?: number;
  currency?: string;
  owned?: number;
}

export interface AffiliateListMetaResponseDto {
  count: number;
}

export interface ListAffiliatesResponseDto {
  affiliates: OAuthAffiliateListItemResponseDto[];
  meta: any;
}

export interface GetAffiliateResponseDto {
  _id: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  deleted?: boolean;
  locationId: string;
  active?: boolean;
  address?: string;
  avatar?: string;
  createdAt?: string;
  createdBy?: any;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  websiteUrl?: string;
  contactId?: string;
  campaignIds?: string[];
  vatId?: string;
  updatedAt?: string;
  w8Form?: string;
  w9Form?: string;
  lastUpdatedBy?: any;
  email: string;
  revenue?: number;
  customer?: number;
  lead?: number;
  droppedCustomer?: number;
  clickCount?: number;
  paid?: number;
  currency?: string;
  owned?: number;
}

export interface PayoutListItemResponseDto {
  _id: string;
  locationId: string;
  affiliateId: string;
  campaignId?: string;
  currency: string;
  amount: number;
  status?: string;
  payoutMonth?: string;
  dueAt?: string;
  paidAt?: string;
  paidMeta?: any;
  paidMethod?: string;
  altId?: string;
  deleted?: boolean;
  isMigrated?: boolean;
  createdAt?: string;
  updatedAt?: string;
  campaign?: string;
  affiliateName?: string;
  affiliateEmail?: string;
  payoutMethod?: string;
  affiliate?: any;
}

export interface PayoutListMetaResponseDto {
  count: number;
}

export interface GetPayoutListResponseDto {
  payouts: PayoutListItemResponseDto[];
  meta?: any;
}

export interface CommissionCustomerResponseDto {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  type?: string;
}

export interface CommissionCampaignResponseDto {
  id?: string;
  name?: string;
  liveMode?: boolean;
}

export interface CommissionAffiliateResponseDto {
  _id?: string;
  name?: string;
  email?: string;
}

export interface CommissionListItemResponseDto {
  _id: string;
  productId?: string;
  productName?: string;
  qty?: number;
  productCommission?: number;
  commissionAmount?: number;
  amount?: number;
  unitDiscount?: number;
  campaignName?: string;
  commission?: number;
  commissionType?: string;
  transactionAt?: string;
  transactionId?: string;
  affiliateId?: string;
  payoutId?: string;
  status?: string;
  currency?: string;
  isTrial?: boolean;
  customer?: any;
  createdAt?: string;
  eventId?: string;
  campaign?: any;
  affiliate?: any;
  dueAt?: string;
  liveMode?: boolean;
  tier?: number;
}

export interface CommissionListMetaResponseDto {
  count: number;
}

export interface GetCommissionListResponseDto {
  commissions: CommissionListItemResponseDto[];
  meta?: any;
}

