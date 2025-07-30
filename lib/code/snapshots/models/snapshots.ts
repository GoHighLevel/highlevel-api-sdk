/**
 * Snapshots Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface SnapshotsSchema {
  id?: string;
  name?: string;
  type?: string;
}

export interface GetSnapshotsSuccessfulResponseDto {
  snapshots?: SnapshotsSchema[];
}

export interface CreateSnapshotShareLinkRequestDTO {
  snapshot_id: string;
  share_type: string;
  relationship_number?: string;
  share_location_id?: string;
}

export interface CreateSnapshotShareLinkSuccessfulResponseDTO {
  id?: string;
  shareLink?: string;
}

export interface SnapshotStatusSchema {
  id?: string;
  locationId?: string;
  status?: string;
  dateAdded?: string;
}

export interface GetSnapshotPushStatusSuccessfulResponseDTO {
  data?: SnapshotStatusSchema[];
}

export interface SnapshotStatusSchemaWithAssets {
  id?: string;
  locationId?: string;
  status?: string;
  completed?: string[];
  pending?: string[];
}

export interface GetLatestSnapshotPushStatusSuccessfulResponseDTO {
  data?: SnapshotStatusSchemaWithAssets;
}

