import { useContext } from 'react';

import type { DefaultError } from '@tanstack/query-core';
import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation as useMutationBase } from '@tanstack/react-query';

import { QueryCraftContext, RequestSchema } from '../QueryCraftContext.js';
import {
  ServiceOperationMutation,
  ServiceOperationMutationKey,
} from '../ServiceOperation.js';

export const useMutation: <
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown,
>(
  schema: RequestSchema,
  args: Parameters<
    ServiceOperationMutation<
      RequestSchema,
      object | undefined,
      TVariables,
      TData
    >['useMutation']
  >
) => UseMutationResult<TData, TError, TVariables, TContext> = (
  schema,
  args
) => {
  const [parameters, options, ...restArgs] = args;

  if (
    parameters &&
    typeof parameters === 'object' &&
    options &&
    'mutationKey' in options
  )
    throw new Error(
      `'useMutation': parameters and 'options.mutationKey' cannot be used together`
    );

  const client = useContext(QueryCraftContext)?.requestClient;

  if (!client) throw new Error(`QueryCraftContext.client not found`);

  const mutationKey =
    parameters && typeof parameters === 'object'
      ? ([
          {
            url: schema.url,
            method: schema.method,
          },
          parameters,
        ] as const)
      : options && 'mutationKey' in options
        ? (options.mutationKey as ServiceOperationMutationKey<
            typeof schema,
            unknown
          >)
        : ([
            {
              url: schema.url,
              method: schema.method,
            },
          ] as const);

  return useMutationBase(
    {
      ...options,
      mutationKey,
      mutationFn:
        options?.mutationFn ??
        (parameters
          ? function (bodyPayload) {
              return client(schema, {
                parameters,
                body: bodyPayload as never,
              });
            }
          : function (parametersAndBodyPayload) {
              const { body, ...parameters } = parametersAndBodyPayload as {
                body: unknown;
              };

              return client(schema, {
                body,
                parameters,
              } as never);
            }),
    },
    ...restArgs
  ) as never;
};
