/**
 * Medias Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface GetFilesResponseDTO {
  files: string[];
}

export interface UploadFileResponseDTO {
  fileId: string;
  url: string;
}

export interface FolderDTO {
  altId: string;
  altType: string;
  name: string;
  parentId?: string;
  type: string;
  deleted?: boolean;
  pendingUpload?: boolean;
  category?: string;
  subCategory?: string;
  isPrivate?: boolean;
  relocatedFolder?: boolean;
  migrationCompleted?: boolean;
  appFolder?: boolean;
  isEssential?: boolean;
  status?: string;
  lastUpdatedBy?: string;
}

export interface CreateFolderParams {
  altId: string;
  altType: string;
  name: string;
  parentId?: string;
}

export interface UpdateObject {
  name: string;
  altType: string;
  altId: string;
}

export interface UpdateMediaObjects {
  altId: string;
  altType: string;
  filesToBeUpdated: UpdateMediaObject[];
}

export interface DeleteMediaObjectItem {
  _id: string;
}

export interface UpdateMediaObject {
  id: string;
  name?: string;
}

export interface DeleteMediaObjectsBodyParams {
  filesToBeDeleted: DeleteMediaObjectItem[];
  altType: string;
  altId: string;
  status: string;
}

export interface MoveOrDeleteObjectParams {
  altType: string;
  altId: string;
  _id: string;
}

