import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerServices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Services, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly price?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Services, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly price?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Services = LazyLoading extends LazyLoadingDisabled ? EagerServices : LazyServices

export declare const Services: (new (init: ModelInit<Services>) => Services) & {
  copyOf(source: Services, mutator: (draft: MutableModel<Services>) => MutableModel<Services> | void): Services;
}

type EagerCandidate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Candidate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCandidate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Candidate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Candidate = LazyLoading extends LazyLoadingDisabled ? EagerCandidate : LazyCandidate

export declare const Candidate: (new (init: ModelInit<Candidate>) => Candidate) & {
  copyOf(source: Candidate, mutator: (draft: MutableModel<Candidate>) => MutableModel<Candidate> | void): Candidate;
}