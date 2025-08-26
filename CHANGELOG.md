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
