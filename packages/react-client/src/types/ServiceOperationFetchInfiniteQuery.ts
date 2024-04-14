import type {
  DefaultError,
  FetchQueryOptions,
  GetNextPageParamFunction,
  InfiniteData,
  InitialPageParam,
  QueryClient,
  QueryFunction,
} from '@tanstack/query-core';

import type { RequestFn } from '../lib/requestFn.js';
import type { PartialParameters } from './PartialParameters.js';
import type {
  ServiceOperationInfiniteQueryKey,
  ServiceOperationQueryKey,
} from './ServiceOperationKey.js';

type FetchInfiniteQueryPages<TData = unknown, TPageParam = unknown> =
  | {
      pages?: never;
    }
  | {
      pages: number;
      getNextPageParam: GetNextPageParamFunction<
        PartialParameters<TPageParam>,
        TData
      >;
    };

type FetchInfiniteQueryOptionsBase<
  TSchema extends { url: string; method: string },
  TData,
  TParams = {},
  TPageParam = unknown,
  TError = DefaultError,
> = Omit<
  FetchQueryOptions<
    TData,
    TError,
    InfiniteData<TData, TPageParam>,
    ServiceOperationQueryKey<TSchema, TParams>,
    TPageParam
  >,
  'queryKey'
> &
  InitialPageParam<PartialParameters<TPageParam>> &
  FetchInfiniteQueryPages<TData, TPageParam>;

type FetchInfiniteQueryOptionsByQueryKey<
  TSchema extends { url: string; method: string },
  TData,
  TParams = {},
  TPageParam = {},
  TError = DefaultError,
> = FetchInfiniteQueryOptionsBase<
  TSchema,
  TData,
  TParams,
  TPageParam,
  TError
> & {
  /**
   * Fetch Queries by query key
   */
  queryKey?: ServiceOperationInfiniteQueryKey<TSchema, TParams>;
  parameters?: never;
};

type FetchInfiniteQueryOptionsByParameters<
  TSchema extends { url: string; method: string },
  TData,
  TParams = {},
  TPageParam = {},
  TError = DefaultError,
> = FetchInfiniteQueryOptionsBase<
  TSchema,
  TData,
  TParams,
  TPageParam,
  TError
> & {
  /**
   * Fetch Queries by parameters
   */
  parameters?: TParams;
  queryKey?: never;
};
type FetchInfiniteQueryOptionsQueryFn<
  TSchema extends { url: string; method: string },
  TData,
  TParams = {},
> =
  | {
      queryFn?: QueryFunction<
        TData,
        ServiceOperationInfiniteQueryKey<TSchema, TParams>
      >;
    }
  | {
      requestFn: RequestFn<TData>;
      /**
       * Base URL to use for the request (used in the `queryFn`)
       * @example 'https://api.example.com'
       */
      baseUrl: string | undefined;
      queryFn?: never; // Workaround to fix union type error
    };

export interface ServiceOperationFetchInfiniteQuery<
  TSchema extends { url: string; method: string },
  TData,
  TParams = {},
  TError = DefaultError,
> {
  fetchInfiniteQuery<TPageParam extends TParams>(
    options:
      | (FetchInfiniteQueryOptionsByQueryKey<
          TSchema,
          TData,
          TParams,
          TPageParam,
          TError
        > &
          FetchInfiniteQueryOptionsQueryFn<TSchema, TData, TParams>)
      | (FetchInfiniteQueryOptionsByParameters<
          TSchema,
          TData,
          TParams,
          TPageParam,
          TError
        > &
          FetchInfiniteQueryOptionsQueryFn<TSchema, TData, TParams>),
    queryClient: QueryClient
  ): Promise<InfiniteData<TData, TPageParam>>;

  prefetchInfiniteQuery<TPageParam extends TParams>(
    options:
      | (FetchInfiniteQueryOptionsByQueryKey<
          TSchema,
          TData,
          TParams,
          TPageParam,
          TError
        > &
          FetchInfiniteQueryOptionsQueryFn<TSchema, TData, TParams>)
      | (FetchInfiniteQueryOptionsByParameters<
          TSchema,
          TData,
          TParams,
          TPageParam,
          TError
        > &
          FetchInfiniteQueryOptionsQueryFn<TSchema, TData, TParams>),
    queryClient: QueryClient
  ): Promise<void>;
}
