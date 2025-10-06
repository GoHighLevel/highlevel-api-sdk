// Links Models

export interface LinkSchema {
  id?: string;
  name?: string;
  redirectTo?: string;
  fieldKey?: string;
  locationId?: string;
}

export interface GetLinksSuccessfulResponseDto {
  links?: LinkSchema[];
}

export interface LinksDto {
  locationId: string;
  name: string;
  redirectTo: string;
}

export interface GetLinkSuccessfulResponseDto {
  link?: LinkSchema;
}

export interface LinkUpdateDto {
  name: string;
  redirectTo: string;
}

export interface DeleteLinksSuccessfulResponseDto {
  succeded?: boolean;
}

