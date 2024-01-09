import type { DefaultError, QueryClient } from '@tanstack/query-core';
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  UndefinedInitialDataOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

export type ServiceOperationQueryKey<S extends Record<'url', string>, T> = [
  Pick<S, 'url'>,
  T,
];
export type ServiceOperationMutationKey<
  S extends Record<'url' | 'method', string>,
  T,
> = [Pick<S, 'url' | 'method'>, T];

type AreKeysOptional<T> = T extends object
  ? {
      [P in keyof T]-?: T[P] extends NonNullable<T[P]> ? true : false;
    }[keyof T] extends false
    ? true
    : false
  : never;

export interface ServiceOperationQuery<
  TSchema extends { url: string; method: string },
  TParams,
  TData,
  TError = DefaultError,
> {
  schema: TSchema;

  getQueryKey: <T extends TParams>(
    params: T
  ) => ServiceOperationQueryKey<TSchema, T>;

  queryFn: QueryFn<TSchema, TParams, TData>;

  // !! experimental, need to test
  useQuery: AreKeysOptional<TParams> extends true
    ? ServiceOperationQueryOptionalParameters<TSchema, TParams, TData, TError>
    : ServiceOperationQueryRequiredParameters<TSchema, TParams, TData, TError>;

  // useQuery(
  //   params: TParams,
  //   options?: Omit<
  //     UndefinedInitialDataOptions<
  //       TData,
  //       TError,
  //       TData,
  //       ServiceOperationQueryKey<TSchema, TParams>
  //     >,
  //     'queryKey'
  //   >,
  //   queryClient?: QueryClient
  // ): UseQueryResult<TData, TError>;
  //
  // useQuery(
  //   params: TParams,
  //   options?: Omit<
  //     DefinedInitialDataOptions<
  //       TData,
  //       TError,
  //       TData,
  //       ServiceOperationQueryKey<TSchema, TParams>
  //     >,
  //     'queryKey'
  //   >,
  //   queryClient?: QueryClient
  // ): DefinedUseQueryResult<TData, TError>;
}

interface ServiceOperationQueryOptionalParameters<
  TSchema extends { url: string; method: string },
  TParams,
  TData,
  TError = DefaultError,
> {
  (
    params?: TParams,
    options?: Omit<
      UndefinedInitialDataOptions<
        TData,
        TError,
        TData,
        ServiceOperationQueryKey<TSchema, TParams>
      >,
      'queryKey'
    >,
    queryClient?: QueryClient
  ): UseQueryResult<TData, TError>;

  (
    params?: TParams,
    options?: Omit<
      DefinedInitialDataOptions<
        TData,
        TError,
        TData,
        ServiceOperationQueryKey<TSchema, TParams>
      >,
      'queryKey'
    >,
    queryClient?: QueryClient
  ): DefinedUseQueryResult<TData, TError>;
}

interface ServiceOperationQueryRequiredParameters<
  TSchema extends { url: string; method: string },
  TParams,
  TData,
  TError = DefaultError,
> {
  (
    params: TParams,
    options?: Omit<
      UndefinedInitialDataOptions<
        TData,
        TError,
        TData,
        ServiceOperationQueryKey<TSchema, TParams>
      >,
      'queryKey'
    >,
    queryClient?: QueryClient
  ): UseQueryResult<TData, TError>;

  (
    params: TParams,
    options?: Omit<
      DefinedInitialDataOptions<
        TData,
        TError,
        TData,
        ServiceOperationQueryKey<TSchema, TParams>
      >,
      'queryKey'
    >,
    queryClient?: QueryClient
  ): DefinedUseQueryResult<TData, TError>;
}

export interface ServiceOperationMutation<
  TSchema extends { url: string; method: string },
  TParams,
  TBody,
  TData,
  TError = DefaultError,
> {
  schema: TSchema;

  getMutationKey: <T extends TParams>(
    params: T
  ) => ServiceOperationMutationKey<TSchema, T>;

  mutationFn: MutationFn<TSchema, TParams, TBody, TData>;

  useMutation<TVariables extends { body: TBody } & TParams, TContext = unknown>(
    params?: undefined,
    options?: Omit<
      UseMutationOptions<TData, TError, TVariables, TContext>,
      'mutationKey'
    > & {
      mutationKey?: ServiceOperationMutationKey<TSchema, TParams>;
    },
    queryClient?: QueryClient
  ): UseMutationResult<TData, TError, TVariables, TContext>;

  // ????experimental, need to test
  useMutation<TVariables extends TBody, TContext = unknown>(
    params: TParams,
    options?: Omit<
      UseMutationOptions<TData, TError, TVariables, TContext>,
      'mutationKey'
    >,
    queryClient?: QueryClient
  ): UseMutationResult<TData, TError, TVariables, TContext>;
}

export interface QueryFn<
  TSchema extends { url: string; method: string },
  TParams,
  TData,
> {
  <
    T extends TData,
    TMeta extends Record<string, unknown>,
    TSignal extends AbortSignal,
  >(
    client: (
      schema: TSchema,
      options: {
        parameters: TParams;
        signal?: TSignal;
        meta?: TMeta;
      }
    ) => T,
    options: { signal?: TSignal; meta?: TMeta } & (
      | { queryKey: [unknown, TParams] }
      | { parameters: TParams }
    )
  ): TData;
  <
    T extends TData,
    TMeta extends Record<string, unknown>,
    TSignal extends AbortSignal,
  >(
    client: (
      schema: TSchema,
      options: {
        parameters: TParams;
        signal?: TSignal;
        meta?: TMeta;
      }
    ) => Promise<T>,
    options: { signal?: TSignal; meta?: TMeta } & (
      | { queryKey: [unknown, TParams] }
      | { parameters: TParams }
    )
  ): Promise<TData>;
}

export interface MutationFn<
  TSchema extends { url: string; method: string },
  TParams,
  TBody,
  TData,
> {
  <T extends TData>(
    client: (
      schema: TSchema,
      options: {
        parameters: TParams;
        body: TBody;
      }
    ) => T,
    options: {
      parameters: TParams;
      body: TBody;
    }
  ): TData;
  <T extends TData>(
    client: (
      schema: TSchema,
      options: {
        parameters: TParams;
        body: TBody;
      }
    ) => Promise<T>,
    options: {
      parameters: TParams;
      body: TBody;
    }
  ): Promise<TData>;
}

export type RequestSchema = {
  url: string;
  method: 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch';
  errors?: number[];
  mediaType?: string;
};
