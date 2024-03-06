import { callQueryClientMethodWithQueryFilters } from '../lib/callQueryClientMethodWithQueryFilters.js';
import type { QraftClientOptions } from '../qraftAPIClient.js';
import type { RequestClientSchema } from '../RequestClient.js';
import type { ServiceOperationInvalidateQueriesCallback } from '../ServiceOperation.js';

export function invalidateQueries<TData>(
  qraftOptions: QraftClientOptions | undefined,
  schema: RequestClientSchema,
  args: Parameters<
    ServiceOperationInvalidateQueriesCallback<
      RequestClientSchema,
      unknown,
      TData
    >['invalidateQueries']
  >
): Promise<void> {
  return callQueryClientMethodWithQueryFilters(
    'invalidateQueries',
    schema,
    args as never
  ) as never;
}
