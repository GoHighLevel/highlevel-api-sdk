// CustomMenus Models

export interface IconSchemaOptional {
  name?: string;
  fontFamily?: string;
}

export interface CustomMenuSchema {
  id?: string;
  icon?: any;
  title?: string;
  url?: string;
  order?: number;
  showOnCompany?: boolean;
  showOnLocation?: boolean;
  showToAllLocations?: boolean;
  locations?: string[];
  openMode?: string;
  userRole?: string;
  allowCamera?: boolean;
  allowMicrophone?: boolean;
}

export interface GetCustomMenusResponseDTO {
  customMenus?: CustomMenuSchema[];
  totalLinks?: number;
}

export interface GetSingleCustomMenusSuccessfulResponseDTO {
  customMenu?: any;
}

export interface DeleteCustomMenuSuccessfulResponseDTO {
  success?: boolean;
  message?: string;
  deletedMenuId?: string;
  deletedAt?: string;
}

export interface IconSchema {
  name: string;
  fontFamily: string;
}

export interface CreateCustomMenuDTO {
  title: string;
  url: string;
  icon: any;
  showOnCompany: boolean;
  showOnLocation: boolean;
  showToAllLocations: boolean;
  openMode: string;
  locations: string[];
  userRole: string;
  allowCamera?: boolean;
  allowMicrophone?: boolean;
}

export interface UpdateCustomMenuDTO {
  title?: string;
  url?: string;
  icon?: any;
  showOnCompany?: boolean;
  showOnLocation?: boolean;
  showToAllLocations?: boolean;
  openMode?: string;
  locations?: string[];
  userRole?: string;
  allowCamera?: boolean;
  allowMicrophone?: boolean;
}

export interface UpdateCustomMenuLinkResponseDTO {
  success?: boolean;
  customMenu?: any;
}

