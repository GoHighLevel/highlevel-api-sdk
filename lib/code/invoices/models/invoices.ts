// Invoices Models

export interface AddressDto {
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  countryCode?: string;
  postalCode?: string;
}

export interface BusinessDetailsDto {
  logoUrl?: string;
  name?: string;
  phoneNo?: string;
  address?: any;
  website?: string;
  customValues?: string[];
}

export interface ItemTaxDto {
  _id: string;
  name: string;
  rate: number;
  calculation?: string;
  description?: string;
  taxId?: string;
}

export interface InvoiceItemDto {
  name: string;
  description?: string;
  productId?: string;
  priceId?: string;
  currency: string;
  amount: number;
  qty: number;
  taxes?: ItemTaxDto[];
  automaticTaxCategoryId?: string;
  isSetupFeeItem?: boolean;
  type?: string;
  taxInclusive?: boolean;
}

export interface DiscountDto {
  value?: number;
  type: string;
  validOnProductIds?: string[];
}

export interface TipsConfigurationDto {
  tipsPercentage: string[];
  tipsEnabled: boolean;
}

export interface LateFeesFrequencyDto {
  intervalCount?: number;
  interval: string;
}

export interface LateFeesGraceDto {
  intervalCount: number;
  interval: string;
}

export interface LateFeesMaxFeesDto {
  type: string;
  value: number;
}

export interface LateFeesConfigurationDto {
  enable: boolean;
  value: number;
  type: string;
  frequency: any;
  grace?: any;
  maxLateFees?: any;
}

export interface StripePaymentMethodDto {
  enableBankDebitOnly: boolean;
}

export interface PaymentMethodDto {
  stripe: any;
}

export interface ProcessingFeePaidChargeDto {
  name: string;
  charge: number;
  amount: number;
  _id: string;
}

export interface ProcessingFeeDto {
  charges: any[][];
  collectedMiscellaneousCharges?: number;
  paidCharges?: ProcessingFeePaidChargeDto[];
}

export interface CreateInvoiceTemplateDto {
  altId: string;
  altType: string;
  internal?: boolean;
  name: string;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  automaticTaxesEnabled?: boolean;
  discount?: DiscountDto;
  termsNotes?: string;
  title?: string;
  tipsConfiguration?: any;
  lateFeesConfiguration?: any;
  invoiceNumberPrefix?: string;
  paymentMethods?: any;
  attachments?: string[];
  miscellaneousCharges?: any;
}

export interface CreateInvoiceTemplateResponseDto {
  _id: string;
  altId: string;
  altType: string;
  name: string;
  businessDetails: any;
  currency: string;
  discount?: any;
  items: string[];
  invoiceNumberPrefix?: string;
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetTemplateResponseDto {
  _id: string;
  altId: string;
  altType: string;
  name: string;
  businessDetails: any;
  currency: string;
  discount?: any;
  items: string[];
  invoiceNumberPrefix?: string;
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface ListTemplatesResponseDto {
  data: GetTemplateResponseDto[];
  totalCount: number;
}

export interface UpdateInvoiceTemplateDto {
  altId: string;
  altType: string;
  internal?: boolean;
  name: string;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  discount?: DiscountDto;
  termsNotes?: string;
  title?: string;
  miscellaneousCharges?: any;
}

export interface UpdateInvoiceTemplateResponseDto {
  _id: string;
  altId: string;
  altType: string;
  name: string;
  businessDetails: any;
  currency: string;
  discount?: any;
  items: string[];
  invoiceNumberPrefix?: string;
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateInvoiceLateFeesConfigurationDto {
  altId: string;
  altType: string;
  lateFeesConfiguration: any;
}

export interface UpdatePaymentMethodsConfigurationDto {
  altId: string;
  altType: string;
  paymentMethods?: any;
}

export interface DeleteInvoiceTemplateResponseDto {
  success: boolean;
}

export interface AdditionalEmailsDto {
  email: string;
}

export interface ContactDetailsDto {
  id: string;
  name: string;
  phoneNo: string;
  email: string;
  additionalEmails?: AdditionalEmailsDto[];
  companyName?: string;
  address?: AddressDto;
  customFields?: string[];
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
  useStartAsPrimaryUserAccepted?: boolean;
  endType?: string;
}

export interface ScheduleOptionsDto {
  executeAt?: string;
  rrule?: CustomRRuleOptionsDto;
}

export interface AttachmentsDto {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
}

export interface CreateInvoiceScheduleDto {
  altId: string;
  altType: string;
  name: string;
  contactDetails: ContactDetailsDto;
  schedule: ScheduleOptionsDto;
  liveMode: boolean;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  automaticTaxesEnabled?: boolean;
  discount: DiscountDto;
  termsNotes?: string;
  title?: string;
  tipsConfiguration?: any;
  lateFeesConfiguration?: any;
  invoiceNumberPrefix?: string;
  paymentMethods?: any;
  attachments?: AttachmentsDto[];
  miscellaneousCharges?: any;
}

export interface DefaultInvoiceResponseDto {
  _id: string;
  status: string;
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: string;
  name: string;
  businessDetails: any;
  invoiceNumber: number;
  currency: string;
  contactDetails: any;
  issueDate: string;
  dueDate: string;
  discount?: any;
  invoiceItems: string[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
  automaticTaxesEnabled?: boolean;
  automaticTaxesCalculated?: boolean;
  paymentSchedule?: any;
}

export interface CreateInvoiceScheduleResponseDto {
  _id: string;
  status: any;
  liveMode: boolean;
  altId: string;
  altType: string;
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetScheduleResponseDto {
  _id: string;
  status: any;
  liveMode: boolean;
  altId: string;
  altType: string;
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface ListSchedulesResponseDto {
  schedules: GetScheduleResponseDto[];
  total: number;
}

export interface UpdateInvoiceScheduleDto {
  altId: string;
  altType: string;
  name: string;
  contactDetails: ContactDetailsDto;
  schedule: ScheduleOptionsDto;
  liveMode: boolean;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  discount: DiscountDto;
  termsNotes?: string;
  title?: string;
  attachments?: AttachmentsDto[];
  miscellaneousCharges?: any;
}

export interface UpdateInvoiceScheduleResponseDto {
  _id: string;
  status: any;
  liveMode: boolean;
  altId: string;
  altType: string;
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface DeleteInvoiceScheduleResponseDto {
  success: boolean;
}

export interface UpdateAndScheduleInvoiceScheduleResponseDto {
  _id: string;
  status: any;
  liveMode: boolean;
  altId: string;
  altType: string;
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface CardDto {
  brand: string;
  last4: string;
}

export interface USBankAccountDto {
  bank_name: string;
  last4: string;
}

export interface SepaDirectDebitDTO {
  bank_code: string;
  last4: string;
  branch_code: string;
}

export interface BacsDirectDebitDTO {
  sort_code: string;
  last4: string;
}

export interface BecsDirectDebitDTO {
  bsb_number: string;
  last4: string;
}

export interface AutoPaymentDetailsDto {
  enable: boolean;
  type?: string;
  paymentMethodId?: string;
  customerId?: string;
  card?: CardDto;
  usBankAccount?: USBankAccountDto;
  sepaDirectDebit?: SepaDirectDebitDTO;
  bacsDirectDebit?: BacsDirectDebitDTO;
  becsDirectDebit?: BecsDirectDebitDTO;
  cardId?: string;
}

export interface ScheduleInvoiceScheduleDto {
  altId: string;
  altType: string;
  liveMode: boolean;
  autoPayment?: any;
}

export interface ScheduleInvoiceScheduleResponseDto {
  _id: string;
  status: any;
  liveMode: boolean;
  altId: string;
  altType: string;
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface AutoPaymentScheduleDto {
  altId: string;
  altType: string;
  id: string;
  autoPayment: any;
}

export interface AutoPaymentInvoiceScheduleResponseDto {
  _id: string;
  status: any;
  liveMode: boolean;
  altId: string;
  altType: string;
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface CancelInvoiceScheduleDto {
  altId: string;
  altType: string;
}

export interface CancelInvoiceScheduleResponseDto {
  _id: string;
  status: any;
  liveMode: boolean;
  altId: string;
  altType: string;
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface SentToDto {
  email: string[];
  emailCc?: string[];
  emailBcc?: string[];
  phoneNo?: string[];
}

export interface PaymentScheduleDto {
  type: string;
  schedules: string[];
}

export interface Text2PayDto {
  altId: string;
  altType: string;
  name: string;
  currency: string;
  items: InvoiceItemDto[];
  termsNotes?: string;
  title?: string;
  contactDetails: any;
  invoiceNumber?: string;
  issueDate: string;
  dueDate?: string;
  sentTo: SentToDto;
  liveMode: boolean;
  automaticTaxesEnabled?: boolean;
  paymentSchedule?: any;
  lateFeesConfiguration?: any;
  tipsConfiguration?: any;
  invoiceNumberPrefix?: string;
  paymentMethods?: any;
  attachments?: AttachmentsDto[];
  miscellaneousCharges?: any;
  id?: string;
  includeTermsNote?: boolean;
  action: string;
  userId: string;
  discount?: DiscountDto;
  businessDetails?: BusinessDetailsDto;
}

export interface Text2PayInvoiceResponseDto {
  invoice: DefaultInvoiceResponseDto;
  invoiceUrl: string;
}

export interface GenerateInvoiceNumberResponseDto {
  invoiceNumber?: number;
}

export interface CreateInvoiceDto {
  altId: string;
  altType: string;
  name: string;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  discount: DiscountDto;
  termsNotes?: string;
  title?: string;
  contactDetails: any;
  invoiceNumber?: string;
  issueDate: string;
  dueDate?: string;
  sentTo: SentToDto;
  liveMode: boolean;
  automaticTaxesEnabled?: boolean;
  paymentSchedule?: any;
  lateFeesConfiguration?: any;
  tipsConfiguration?: any;
  invoiceNumberPrefix?: string;
  paymentMethods?: any;
  attachments?: AttachmentsDto[];
  miscellaneousCharges?: any;
}

export interface OldCreateInvoiceDTO {
}

export interface CreateInvoiceResponseDto {
  _id: string;
  status: string;
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: string;
  name: string;
  businessDetails: any;
  invoiceNumber: number;
  currency: string;
  contactDetails: any;
  issueDate: string;
  dueDate: string;
  discount?: any;
  invoiceItems: string[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
  automaticTaxesEnabled?: boolean;
  automaticTaxesCalculated?: boolean;
  paymentSchedule?: any;
}

export interface TotalSummaryDto {
  subTotal: number;
  discount: number;
  tax: number;
}

export interface ReminderExecutionDetailsList {
}

export interface ReminderDto {
  enabled: boolean;
  emailTemplate: string;
  smsTemplate: string;
  emailSubject: string;
  reminderId: string;
  reminderName: string;
  reminderTime: string;
  intervalType: string;
  maxReminders: number;
  reminderInvoiceCondition: string;
  reminderNumber: number;
  startTime?: string;
  endTime?: string;
  timezone?: string;
}

export interface ReminderSettingsDto {
  defaultEmailTemplateId: string;
  reminders: ReminderDto[];
}

export interface RemindersConfigurationDto {
  reminderExecutionDetailsList: any;
  reminderSettings: any;
}

export interface GetInvoiceResponseDto {
  _id: string;
  status: string;
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: string;
  name: string;
  businessDetails: any;
  invoiceNumber: number;
  currency: string;
  contactDetails: any;
  issueDate: string;
  dueDate: string;
  discount?: any;
  invoiceItems: string[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
  automaticTaxesEnabled?: boolean;
  automaticTaxesCalculated?: boolean;
  paymentSchedule?: any;
  totalSummary: TotalSummaryDto;
  remindersConfiguration?: any;
}

export interface ListInvoicesResponseDto {
  invoices: GetInvoiceResponseDto[];
  total: number;
}

export interface UpdateInvoiceDto {
  altId: string;
  altType: string;
  name: string;
  title?: string;
  currency: string;
  description?: string;
  businessDetails?: any;
  invoiceNumber?: string;
  contactId?: string;
  contactDetails?: ContactDetailsDto;
  termsNotes?: string;
  discount?: DiscountDto;
  invoiceItems: InvoiceItemDto[];
  automaticTaxesEnabled?: boolean;
  liveMode?: boolean;
  issueDate: string;
  dueDate: string;
  paymentSchedule?: any;
  tipsConfiguration?: any;
  xeroDetails?: any;
  invoiceNumberPrefix?: string;
  paymentMethods?: any;
  attachments?: AttachmentsDto[];
  miscellaneousCharges?: any;
}

export interface UpdateInvoiceResponseDto {
  _id: string;
  status: string;
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: string;
  name: string;
  businessDetails: any;
  invoiceNumber: number;
  currency: string;
  contactDetails: any;
  issueDate: string;
  dueDate: string;
  discount?: any;
  invoiceItems: string[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
  automaticTaxesEnabled?: boolean;
  automaticTaxesCalculated?: boolean;
  paymentSchedule?: any;
}

export interface DeleteInvoiceResponseDto {
  _id: string;
  status: string;
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: string;
  name: string;
  businessDetails: any;
  invoiceNumber: number;
  currency: string;
  contactDetails: any;
  issueDate: string;
  dueDate: string;
  discount?: any;
  invoiceItems: string[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
  automaticTaxesEnabled?: boolean;
  automaticTaxesCalculated?: boolean;
  paymentSchedule?: any;
}

export interface VoidInvoiceDto {
  altId: string;
  altType: string;
}

export interface VoidInvoiceResponseDto {
  _id: string;
  status: string;
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: string;
  name: string;
  businessDetails: any;
  invoiceNumber: number;
  currency: string;
  contactDetails: any;
  issueDate: string;
  dueDate: string;
  discount?: any;
  invoiceItems: string[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
  automaticTaxesEnabled?: boolean;
  automaticTaxesCalculated?: boolean;
  paymentSchedule?: any;
}

export interface InvoiceSettingsSenderConfigurationDto {
  fromName?: string;
  fromEmail?: string;
}

export interface SendInvoiceDto {
  altId: string;
  altType: string;
  userId: string;
  action: string;
  liveMode: boolean;
  sentFrom?: any;
  autoPayment?: any;
}

export interface SendInvoicesResponseDto {
  invoice: DefaultInvoiceResponseDto;
  smsData: any;
  emailData: any;
}

export interface ChequeDto {
  number: string;
}

export interface RecordPaymentDto {
  altId: string;
  altType: string;
  mode: string;
  card: CardDto;
  cheque: ChequeDto;
  notes: string;
  amount?: number;
  meta?: any;
  paymentScheduleIds?: string[];
  fulfilledAt?: string;
}

export interface RecordPaymentResponseDto {
  success: boolean;
  invoice: DefaultInvoiceResponseDto;
}

export interface PatchInvoiceStatsLastViewedDto {
  invoiceId: string;
}

export interface SendEstimateDto {
  altId: string;
  altType: string;
  action: string;
  liveMode: boolean;
  userId: string;
  sentFrom?: any;
  estimateName?: string;
}

export interface FrequencySettingsDto {
  enabled: boolean;
  schedule: any;
}

export interface AutoInvoicingDto {
  enabled: boolean;
  directPayments?: boolean;
}

export interface PaymentScheduleDateConfigDto {
  depositDateType: string;
  scheduleDateType: string;
}

export interface PaymentScheduleConfigDto {
  type: string;
  dateConfig: any;
  schedules: any[][];
}

export interface CreateEstimatesDto {
  altId: string;
  altType: string;
  name: string;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  liveMode?: boolean;
  discount: DiscountDto;
  termsNotes?: string;
  title?: string;
  contactDetails: any;
  estimateNumber?: number;
  issueDate?: string;
  expiryDate?: string;
  sentTo?: any;
  automaticTaxesEnabled?: boolean;
  meta?: any;
  sendEstimateDetails?: any;
  frequencySettings: any;
  estimateNumberPrefix?: string;
  userId?: string;
  attachments?: AttachmentsDto[];
  autoInvoice?: any;
  miscellaneousCharges?: any;
  paymentScheduleConfig?: any;
}

export interface BusinessDetails {
}

export interface ContactDetails {
}

export interface SentTo {
}

export interface AutoInvoice {
}

export interface EstimateResponseDto {
  altId: string;
  altType: string;
  _id: string;
  liveMode: boolean;
  deleted: boolean;
  name: string;
  currency: string;
  businessDetails: any;
  items: any[][];
  discount: any;
  title?: string;
  estimateNumberPrefix?: string;
  attachments?: AttachmentsDto[];
  updatedBy?: string;
  total: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  automaticTaxesEnabled: boolean;
  termsNotes?: string;
  companyId: string;
  contactDetails: any;
  issueDate: string;
  expiryDate: string;
  sentBy?: string;
  automaticTaxesCalculated: boolean;
  meta: any;
  estimateActionHistory: string[];
  sentTo: any;
  frequencySettings: any;
  lastVisitedAt: string;
  totalamountInUSD: number;
  autoInvoice?: any;
  traceId: string;
}

export interface UpdateEstimateDto {
  altId: string;
  altType: string;
  name: string;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  liveMode?: boolean;
  discount: DiscountDto;
  termsNotes?: string;
  title?: string;
  contactDetails: any;
  estimateNumber?: number;
  issueDate?: string;
  expiryDate?: string;
  sentTo?: any;
  automaticTaxesEnabled?: boolean;
  meta?: any;
  sendEstimateDetails?: any;
  frequencySettings: any;
  estimateNumberPrefix?: string;
  userId?: string;
  attachments?: AttachmentsDto[];
  autoInvoice?: any;
  miscellaneousCharges?: any;
  paymentScheduleConfig?: any;
  estimateStatus?: string;
}

export interface GenerateEstimateNumberResponse {
  estimateNumber: number;
  traceId: string;
}

export interface AltDto {
  altId: string;
  altType: string;
}

export interface CreateInvoiceFromEstimateDto {
  altId: string;
  altType: string;
  markAsInvoiced: boolean;
  version?: string;
}

export interface CreateInvoiceFromEstimateResponseDTO {
  estimate: any;
  invoice: any;
}

export interface ListEstimatesResponseDTO {
  estimates: string[];
  total: number;
  traceId: string;
}

export interface EstimateIdParam {
  estimateId: string;
}

export interface ListEstimateTemplateResponseDTO {
  data: string[];
  totalCount: number;
  traceId: string;
}

export interface EstimateTemplatesDto {
  altId: string;
  altType: string;
  name: string;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: any[][];
  liveMode?: boolean;
  discount: DiscountDto;
  termsNotes?: string;
  title?: string;
  automaticTaxesEnabled?: boolean;
  meta?: any;
  sendEstimateDetails?: any;
  estimateNumberPrefix?: string;
  attachments?: AttachmentsDto[];
  miscellaneousCharges?: any;
}

export interface EstimateTemplateResponseDTO {
  altId: string;
  altType: string;
  _id: string;
  liveMode: boolean;
  deleted: boolean;
  name: string;
  currency: string;
  businessDetails: any;
  items: any[][];
  discount: any;
  title?: string;
  estimateNumberPrefix?: string;
  attachments?: AttachmentsDto[];
  updatedBy?: string;
  total: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  automaticTaxesEnabled: boolean;
  termsNotes?: string;
}

