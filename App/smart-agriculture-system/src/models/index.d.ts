import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerReading = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reading, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly humidity: number;
  readonly timestamp: number;
  readonly device: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReading = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reading, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly humidity: number;
  readonly timestamp: number;
  readonly device: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reading = LazyLoading extends LazyLoadingDisabled ? EagerReading : LazyReading

export declare const Reading: (new (init: ModelInit<Reading>) => Reading) & {
  copyOf(source: Reading, mutator: (draft: MutableModel<Reading>) => MutableModel<Reading> | void): Reading;
}