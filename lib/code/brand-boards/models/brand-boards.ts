// BrandBoards Models

export interface Logo {
  id: string;
  url: string;
  label: string;
  path: string;
}

export interface Color {
  id: string;
  hexa: string;
  rgba: string;
  hex: string;
  rgb: string;
  label: string;
}

export interface Font {
  id: string;
  font: string;
  fallback: string;
  label: string;
}

export interface CreateBrandBoardParam {
  locationId: string;
  name: string;
  logos?: Logo[];
  colors?: Color[];
  fonts?: Font[];
  default?: boolean;
  brandBoardId?: string;
  parentId?: string;
  type?: string;
}

export interface MetaData {
  updatedBy?: string;
  lastAction?: string;
  sourceId?: string;
  sourceType?: string;
}

export interface GetBrandBoardSuccessDTO {
  _id: string;
  locationId: string;
  name: string;
  logos?: Logo[];
  colors?: Color[];
  fonts?: Font[];
  default: boolean;
  deleted: boolean;
  parentId?: string;
  folderId?: string;
  originId?: string;
  meta?: any;
  createdAt?: string;
  updatedAt?: string;
}

export interface InvalidLocationDTO {
  statusCode?: number;
  message?: string;
}

export interface BrandBoardListItemDTO {
  _id: string;
  name: string;
  updatedAt: string;
  default?: boolean;
  meta?: any;
}

export interface GetBrandBoardsByLocationSuccessDTO {
  brandBoards: BrandBoardListItemDTO[];
  totalCount: number;
}

export interface NotFoundDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface UpdateBrandBoardBody {
  name?: string;
  logos?: Logo[];
  colors?: Color[];
  fonts?: Font[];
  default?: boolean;
  parentId?: string;
}

