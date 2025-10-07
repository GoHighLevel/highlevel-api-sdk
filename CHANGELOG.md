## v2.2.1 - 2025-10-07

### SDK changes

- fix: remove all params from axios request config object which is causing 422 errors (e96f45b)

## v2.2.0 - 2025-10-06

### SDK changes

- refactor: service template params and token handle improved (6b46327)

## v2.1.0 - 2025-09-29

### SDK changes

- changes in config to reduce the size of the sdk (8ce6d34)
- fix: token not getting auto refreshed when api throws 401 error (3747ddb)

## v2.0.0 - 2025-09-18

Specs changes

**Contacts**:

Removed:
- response body `SearchContactSuccessResponseDto` removed in `searchContactsAdvanced` method

Modified:
- method name changed from `deleteContactToWorkflow` to `deleteContactFromWorkflow` for DELETE /contacts/\{contactId\}/workflow/\{workflowId\}

**Locations**:

Added:
- new method `getRecurringTaskById` added GET /locations/\{locationId\}/recurring-tasks/\{id\}
- new method `updateRecurringTask` added PUT /locations/\{locationId\}/recurring-tasks/\{id\}
- new method `deleteRecurringTask` added DELETE /locations/\{locationId\}/recurring-tasks/\{id\}
- new method `createRecurringTask` added POST /locations/\{locationId\}/recurring-tasks

**Payments**:

Added:
- new method `recordOrderPayment` added POST /payments/orders/\{orderId\}/record-payment
- new method `postMigrateOrderPaymentStatus` added POST /payments/orders/migrate-order-ps
- new method `listOrderNotes` added GET /payments/orders/\{orderId\}/notes
- new method `customProviderMarketplaceAppUpdateCapabilities` added PUT /payments/custom-provider/capabilities
- response body field `automaticTaxesCalculated` added in `getOrderById` method (optional)
- response body field `taxCalculationProvider` added in `getOrderById` method (optional)
- response body array item field `data[].items[].product.automaticTaxCategoryId` added in `listOrderFulfillment` method (optional)
- response body array item field `data.items[].product.automaticTaxCategoryId` added in `createOrderFulfillment` method (optional)
- response body array item field `data[].mergedFromContactId` added in `listTransactions` method (optional)
- response body array item field `data[].fulfilledAt` added in `listTransactions` method (required)
- response body field `mergedFromContactId` added in `getTransactionById` method (optional)
- request body field `supportsSubscriptionSchedule` added in `createIntegration` method (required)

Removed:
- query param `altType` is removed in `getOrderById` method (required)
- response body array item field `data[].hasAffiliateCoupon` removed in `listCoupons` method
- response body array item field `data[].deleted` removed in `listCoupons` method

**PhoneSystem**:

Added:
- new method `getNumberPoolList` added GET /phone-system/number-pools
- new method `activeNumbers` added GET /phone-system/numbers/location/\{locationId\}

**Products**:

Added:
- new method `bulkEdit` added POST /products/bulk-update/edit
- new method `updateDisplayPriority` added POST /products/store/\{storeId\}/priority
- request body field `altId` added in `updateStoreStatus` method (required)
- request body field `altType` added in `updateStoreStatus` method (required)
- query param `altId` is added in `getProductCollectionId` method (required)
- query param `sendWishlistStatus` is added in `getProductById` method (optional)
- request body field `taxInclusive` added in `updateProductById` method (optional)
- request body field `prices` added in `updateProductById` method (optional)
- query param `sendWishlistStatus` is added in `deleteProductById` method (optional)
- request body field `taxInclusive` added in `createProduct` method (optional)

Removed:
- response body field `medias` removed in `getProductById` method
- response body field `userId` removed in `getProductById` method
- response body field `isLabelEnabled` removed in `getProductById` method
- response body field `seo` removed in `getProductById` method
- response body field `medias` removed in `updateProductById` method
- response body field `userId` removed in `updateProductById` method
- response body field `isLabelEnabled` removed in `updateProductById` method
- response body field `seo` removed in `updateProductById` method
- response body array item field `products[].medias` removed in `listInvoices` method
- response body array item field `products[].userId` removed in `listInvoices` method
- response body array item field `products[].isLabelEnabled` removed in `listInvoices` method
- response body array item field `products[].seo` removed in `listInvoices` method
- response body field `medias` removed in `createProduct` method
- response body field `userId` removed in `createProduct` method
- response body field `isLabelEnabled` removed in `createProduct` method
- response body field `seo` removed in `createProduct` method

**Proposals**:

Added:
- new method `listDocumentsContracts` added GET /proposals/document
- new method `sendDocumentsContracts` added POST /proposals/document/send
- new method `listDocumentsContractsTemplates` added GET /proposals/templates
- new method `sendDocumentsContractsTemplate` added POST /proposals/templates/send

**Store**:

Added:
- new method `listShippingZones` added GET /store/shipping-zone
- new method `createShippingZone` added POST /store/shipping-zone
- new method `getShippingZones` added GET /store/shipping-zone/\{shippingZoneId\}
- new method `updateShippingZone` added PUT /store/shipping-zone/\{shippingZoneId\}
- new method `deleteShippingZone` added DELETE /store/shipping-zone/\{shippingZoneId\}
- new method `getAvailableShippingZones` added POST /store/shipping-zone/shipping-rates
- new method `listShippingRates` added GET /store/shipping-zone/\{shippingZoneId\}/shipping-rate
- new method `createShippingRate` added POST /store/shipping-zone/\{shippingZoneId\}/shipping-rate
- new method `getShippingRates` added GET /store/shipping-zone/\{shippingZoneId\}/shipping-rate/\{shippingRateId\}
- new method `updateShippingRate` added PUT /store/shipping-zone/\{shippingZoneId\}/shipping-rate/\{shippingRateId\}
- new method `deleteShippingRate` added DELETE /store/shipping-zone/\{shippingZoneId\}/shipping-rate/\{shippingRateId\}
- new method `listShippingCarriers` added GET /store/shipping-carrier
- new method `createShippingCarrier` added POST /store/shipping-carrier
- new method `getShippingCarriers` added GET /store/shipping-carrier/\{shippingCarrierId\}
- new method `updateShippingCarrier` added PUT /store/shipping-carrier/\{shippingCarrierId\}
- new method `deleteShippingCarrier` added DELETE /store/shipping-carrier/\{shippingCarrierId\}
- new method `getStoreSettings` added GET /store/store-setting
- new method `createStoreSetting` added POST /store/store-setting

**VoiceAi**:

Added:
- new method `getAgents` added GET /voice-ai/agents
- new method `createAgent` added POST /voice-ai/agents
- new method `getAgent` added GET /voice-ai/agents/\{agentId\}
- new method `deleteAgent` added DELETE /voice-ai/agents/\{agentId\}
- new method `patchAgent` added PATCH /voice-ai/agents/\{agentId\}
- new method `getCallLogs` added GET /voice-ai/dashboard/call-logs
- new method `getCallLog` added GET /voice-ai/dashboard/call-logs/\{callId\}
- new method `createAction` added POST /voice-ai/actions
- new method `getAction` added GET /voice-ai/actions/\{actionId\}
- new method `updateAction` added PUT /voice-ai/actions/\{actionId\}
- new method `deleteAction` added DELETE /voice-ai/actions/\{actionId\}

SDK changes

- fix: remove extra things from package to reduce the build size (3fe5b3a)

## v1.0.1 - 2025-08-26

Specs changes

Conversations:
Added:
- response body field `chatWidgetId` added in `getMessage` method (optional)
- response body array item field `messages.messages[].chatWidgetId` added in `getMessages` method (optional)

Marketplace:
Added:
- request body field `price` added in `charge` method (optional)

Modified:
- method `getInstallerDetails` endpoint changed from GET /marketplace/app/{appId}/installer-details to GET /marketplace/app/{appId}/installations

Users:
Added:
- path param `userId` is added in `getUser` method

Removed:
- header param `Authorization` is removed in `filterUsersByEmail` method

SDK changes

- fix: crypto package removed, token expire function moved to base storage class (d96d25c)

## v1.0.0 - 2025-08-25

SDK changes

- feat: package name updated for highlevel api client (e85cc51)

## v0.1.0 - 2025-08-19

SDK changes

- feat: use company token as fallback if available while refreshing location token (4dfa77e)
