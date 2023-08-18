import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerReadings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Readings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly humidity: number;
  readonly timestamp: number;
  readonly device: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReadings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Readings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly humidity: number;
  readonly timestamp: number;
  readonly device: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Readings = LazyLoading extends LazyLoadingDisabled ? EagerReadings : LazyReadings

export declare const Readings: (new (init: ModelInit<Readings>) => Readings) & {
  copyOf(source: Readings, mutator: (draft: MutableModel<Readings>) => MutableModel<Readings> | void): Readings;
}