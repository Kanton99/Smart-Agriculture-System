import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUsersDevices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersDevices, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly devices?: (string | null)[] | null;
  readonly User: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersDevices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersDevices, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly devices?: (string | null)[] | null;
  readonly User: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersDevices = LazyLoading extends LazyLoadingDisabled ? EagerUsersDevices : LazyUsersDevices

export declare const UsersDevices: (new (init: ModelInit<UsersDevices>) => UsersDevices) & {
  copyOf(source: UsersDevices, mutator: (draft: MutableModel<UsersDevices>) => MutableModel<UsersDevices> | void): UsersDevices;
}

type EagerReading = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reading, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly humidity?: number | null;
  readonly timestamp?: number | null;
  readonly device?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReading = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reading, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly humidity?: number | null;
  readonly timestamp?: number | null;
  readonly device?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reading = LazyLoading extends LazyLoadingDisabled ? EagerReading : LazyReading

export declare const Reading: (new (init: ModelInit<Reading>) => Reading) & {
  copyOf(source: Reading, mutator: (draft: MutableModel<Reading>) => MutableModel<Reading> | void): Reading;
}