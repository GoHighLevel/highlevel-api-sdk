/**
 * Associations Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface createRelationReqDto {
  locationId: string;
  associationId: string;
  firstRecordId: string;
  secondRecordId: string;
}

export interface GetPostSuccessfulResponseDto {
  locationId: string;
  id: string;
  key: string;
  firstObjectLabel: any;
  firstObjectKey: any;
  secondObjectLabel: any;
  secondObjectKey: any;
  associationType: any;
}

export interface createAssociationReqDto {
  locationId: string;
  key: string;
  firstObjectLabel: any;
  firstObjectKey: any;
  secondObjectLabel: any;
  secondObjectKey: any;
}

export interface UpdateAssociationReqDto {
  firstObjectLabel: any;
  secondObjectLabel: any;
}

export interface DeleteAssociationsResponseDTO {
  deleted: boolean;
  id: string;
  message: string;
}

