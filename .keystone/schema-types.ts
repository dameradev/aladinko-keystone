type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type RoleRelateToOneInput = {
  readonly create?: RoleCreateInput | null;
  readonly connect?: RoleWhereUniqueInput | null;
  readonly disconnect?: RoleWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CarpetRelateToManyInput = {
  readonly create?: ReadonlyArray<CarpetCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CarpetWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CarpetWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly role?: RoleWhereInput | null;
  readonly role_is_null?: Scalars['Boolean'] | null;
  readonly carpets_every?: CarpetWhereInput | null;
  readonly carpets_some?: CarpetWhereInput | null;
  readonly carpets_none?: CarpetWhereInput | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'role_ASC'
  | 'role_DESC'
  | 'carpets_ASC'
  | 'carpets_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly role?: RoleRelateToOneInput | null;
  readonly carpets?: CarpetRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly role?: RoleRelateToOneInput | null;
  readonly carpets?: CarpetRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type CarpetRelateToOneInput = {
  readonly create?: CarpetCreateInput | null;
  readonly connect?: CarpetWhereUniqueInput | null;
  readonly disconnect?: CarpetWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CarpetImageWhereInput = {
  readonly AND?: ReadonlyArray<CarpetImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CarpetImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly carpet?: CarpetWhereInput | null;
  readonly carpet_is_null?: Scalars['Boolean'] | null;
};

export type CarpetImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCarpetImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'carpet_ASC'
  | 'carpet_DESC';

export type CarpetImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly carpet?: CarpetRelateToOneInput | null;
};

export type CarpetImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CarpetImageUpdateInput | null;
};

export type CarpetImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly carpet?: CarpetRelateToOneInput | null;
};

export type CarpetImagesCreateInput = {
  readonly data?: CarpetImageCreateInput | null;
};

export type UserRelateToManyInput = {
  readonly create?: ReadonlyArray<UserCreateInput | null> | null;
  readonly connect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RoleWhereInput = {
  readonly AND?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly OR?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly canManageProducts?: Scalars['Boolean'] | null;
  readonly canManageProducts_not?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers_not?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers_not?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageRoles_not?: Scalars['Boolean'] | null;
  readonly canManageCart?: Scalars['Boolean'] | null;
  readonly canManageCart_not?: Scalars['Boolean'] | null;
  readonly canManageOrders?: Scalars['Boolean'] | null;
  readonly canManageOrders_not?: Scalars['Boolean'] | null;
  readonly assignedTo_every?: UserWhereInput | null;
  readonly assignedTo_some?: UserWhereInput | null;
  readonly assignedTo_none?: UserWhereInput | null;
};

export type RoleWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortRolesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'canManageProducts_ASC'
  | 'canManageProducts_DESC'
  | 'canSeeOtherUsers_ASC'
  | 'canSeeOtherUsers_DESC'
  | 'canManageUsers_ASC'
  | 'canManageUsers_DESC'
  | 'canManageRoles_ASC'
  | 'canManageRoles_DESC'
  | 'canManageCart_ASC'
  | 'canManageCart_DESC'
  | 'canManageOrders_ASC'
  | 'canManageOrders_DESC'
  | 'assignedTo_ASC'
  | 'assignedTo_DESC';

export type RoleUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canManageProducts?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageCart?: Scalars['Boolean'] | null;
  readonly canManageOrders?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: RoleUpdateInput | null;
};

export type RoleCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canManageProducts?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageCart?: Scalars['Boolean'] | null;
  readonly canManageOrders?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesCreateInput = {
  readonly data?: RoleCreateInput | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CarpetImageRelateToOneInput = {
  readonly create?: CarpetImageCreateInput | null;
  readonly connect?: CarpetImageWhereUniqueInput | null;
  readonly disconnect?: CarpetImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CarpetWhereInput = {
  readonly AND?: ReadonlyArray<CarpetWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CarpetWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly address?: Scalars['String'] | null;
  readonly address_not?: Scalars['String'] | null;
  readonly address_contains?: Scalars['String'] | null;
  readonly address_not_contains?: Scalars['String'] | null;
  readonly address_starts_with?: Scalars['String'] | null;
  readonly address_not_starts_with?: Scalars['String'] | null;
  readonly address_ends_with?: Scalars['String'] | null;
  readonly address_not_ends_with?: Scalars['String'] | null;
  readonly address_i?: Scalars['String'] | null;
  readonly address_not_i?: Scalars['String'] | null;
  readonly address_contains_i?: Scalars['String'] | null;
  readonly address_not_contains_i?: Scalars['String'] | null;
  readonly address_starts_with_i?: Scalars['String'] | null;
  readonly address_not_starts_with_i?: Scalars['String'] | null;
  readonly address_ends_with_i?: Scalars['String'] | null;
  readonly address_not_ends_with_i?: Scalars['String'] | null;
  readonly address_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly address_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly phoneNumber?: Scalars['String'] | null;
  readonly phoneNumber_not?: Scalars['String'] | null;
  readonly phoneNumber_contains?: Scalars['String'] | null;
  readonly phoneNumber_not_contains?: Scalars['String'] | null;
  readonly phoneNumber_starts_with?: Scalars['String'] | null;
  readonly phoneNumber_not_starts_with?: Scalars['String'] | null;
  readonly phoneNumber_ends_with?: Scalars['String'] | null;
  readonly phoneNumber_not_ends_with?: Scalars['String'] | null;
  readonly phoneNumber_i?: Scalars['String'] | null;
  readonly phoneNumber_not_i?: Scalars['String'] | null;
  readonly phoneNumber_contains_i?: Scalars['String'] | null;
  readonly phoneNumber_not_contains_i?: Scalars['String'] | null;
  readonly phoneNumber_starts_with_i?: Scalars['String'] | null;
  readonly phoneNumber_not_starts_with_i?: Scalars['String'] | null;
  readonly phoneNumber_ends_with_i?: Scalars['String'] | null;
  readonly phoneNumber_not_ends_with_i?: Scalars['String'] | null;
  readonly phoneNumber_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly phoneNumber_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly message?: Scalars['String'] | null;
  readonly message_not?: Scalars['String'] | null;
  readonly message_contains?: Scalars['String'] | null;
  readonly message_not_contains?: Scalars['String'] | null;
  readonly message_starts_with?: Scalars['String'] | null;
  readonly message_not_starts_with?: Scalars['String'] | null;
  readonly message_ends_with?: Scalars['String'] | null;
  readonly message_not_ends_with?: Scalars['String'] | null;
  readonly message_i?: Scalars['String'] | null;
  readonly message_not_i?: Scalars['String'] | null;
  readonly message_contains_i?: Scalars['String'] | null;
  readonly message_not_contains_i?: Scalars['String'] | null;
  readonly message_starts_with_i?: Scalars['String'] | null;
  readonly message_not_starts_with_i?: Scalars['String'] | null;
  readonly message_ends_with_i?: Scalars['String'] | null;
  readonly message_not_ends_with_i?: Scalars['String'] | null;
  readonly message_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly message_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly photo?: CarpetImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_contains?: Scalars['String'] | null;
  readonly status_not_contains?: Scalars['String'] | null;
  readonly status_starts_with?: Scalars['String'] | null;
  readonly status_not_starts_with?: Scalars['String'] | null;
  readonly status_ends_with?: Scalars['String'] | null;
  readonly status_not_ends_with?: Scalars['String'] | null;
  readonly status_i?: Scalars['String'] | null;
  readonly status_not_i?: Scalars['String'] | null;
  readonly status_contains_i?: Scalars['String'] | null;
  readonly status_not_contains_i?: Scalars['String'] | null;
  readonly status_starts_with_i?: Scalars['String'] | null;
  readonly status_not_starts_with_i?: Scalars['String'] | null;
  readonly status_ends_with_i?: Scalars['String'] | null;
  readonly status_not_ends_with_i?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city?: Scalars['String'] | null;
  readonly city_not?: Scalars['String'] | null;
  readonly city_contains?: Scalars['String'] | null;
  readonly city_not_contains?: Scalars['String'] | null;
  readonly city_starts_with?: Scalars['String'] | null;
  readonly city_not_starts_with?: Scalars['String'] | null;
  readonly city_ends_with?: Scalars['String'] | null;
  readonly city_not_ends_with?: Scalars['String'] | null;
  readonly city_i?: Scalars['String'] | null;
  readonly city_not_i?: Scalars['String'] | null;
  readonly city_contains_i?: Scalars['String'] | null;
  readonly city_not_contains_i?: Scalars['String'] | null;
  readonly city_starts_with_i?: Scalars['String'] | null;
  readonly city_not_starts_with_i?: Scalars['String'] | null;
  readonly city_ends_with_i?: Scalars['String'] | null;
  readonly city_not_ends_with_i?: Scalars['String'] | null;
  readonly city_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type CarpetWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCarpetsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'address_ASC'
  | 'address_DESC'
  | 'phoneNumber_ASC'
  | 'phoneNumber_DESC'
  | 'message_ASC'
  | 'message_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'city_ASC'
  | 'city_DESC';

export type CarpetUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly address?: Scalars['String'] | null;
  readonly phoneNumber?: Scalars['String'] | null;
  readonly message?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly photo?: CarpetImageRelateToOneInput | null;
  readonly status?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
};

export type CarpetsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CarpetUpdateInput | null;
};

export type CarpetCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly address?: Scalars['String'] | null;
  readonly phoneNumber?: Scalars['String'] | null;
  readonly message?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly photo?: CarpetImageRelateToOneInput | null;
  readonly status?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
};

export type CarpetsCreateInput = {
  readonly data?: CarpetCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type PasswordResetRequestErrorCode =
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES';

export type PasswordResetRedemptionErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'TOKEN_NOT_SET'
  | 'TOKEN_MISMATCH'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_REDEEMED';

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'role'
    | 'carpets'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly role?: string | null;
    readonly carpets?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type CarpetImageListTypeInfo = {
  key: 'CarpetImage';
  fields: 'id' | 'image' | 'altText' | 'carpet';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly carpet?: string | null;
  };
  inputs: {
    where: CarpetImageWhereInput;
    create: CarpetImageCreateInput;
    update: CarpetImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CarpetImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCarpetImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CarpetImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CarpetImageListTypeInfo,
    CarpetImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CarpetImageListTypeInfo,
  CarpetImageListTypeInfo['fields']
>;

export type RoleListTypeInfo = {
  key: 'Role';
  fields:
    | 'id'
    | 'name'
    | 'canManageProducts'
    | 'canSeeOtherUsers'
    | 'canManageUsers'
    | 'canManageRoles'
    | 'canManageCart'
    | 'canManageOrders'
    | 'assignedTo';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly canManageProducts?: boolean | null;
    readonly canSeeOtherUsers?: boolean | null;
    readonly canManageUsers?: boolean | null;
    readonly canManageRoles?: boolean | null;
    readonly canManageCart?: boolean | null;
    readonly canManageOrders?: boolean | null;
    readonly assignedTo?: string | null;
  };
  inputs: {
    where: RoleWhereInput;
    create: RoleCreateInput;
    update: RoleUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: RoleWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortRolesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type RoleListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    RoleListTypeInfo,
    RoleListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  RoleListTypeInfo,
  RoleListTypeInfo['fields']
>;

export type CarpetListTypeInfo = {
  key: 'Carpet';
  fields:
    | 'id'
    | 'name'
    | 'address'
    | 'phoneNumber'
    | 'message'
    | 'user'
    | 'photo'
    | 'status'
    | 'city';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly address?: string | null;
    readonly phoneNumber?: string | null;
    readonly message?: string | null;
    readonly user?: string | null;
    readonly photo?: string | null;
    readonly status?: string | null;
    readonly city?: string | null;
  };
  inputs: {
    where: CarpetWhereInput;
    create: CarpetCreateInput;
    update: CarpetUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CarpetWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCarpetsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CarpetListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CarpetListTypeInfo,
    CarpetListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CarpetListTypeInfo,
  CarpetListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly CarpetImage: CarpetImageListTypeInfo;
  readonly Role: RoleListTypeInfo;
  readonly Carpet: CarpetListTypeInfo;
};
