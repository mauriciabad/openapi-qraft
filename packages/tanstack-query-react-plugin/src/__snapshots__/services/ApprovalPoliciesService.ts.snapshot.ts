import fs from 'node:fs';
import { expect } from 'vitest';

export default function () {
  expect(
    fs.readFileSync('/mock-fs/services/ApprovalPoliciesService.ts', 'utf-8')
  ).toMatchInlineSnapshot(`
    "/* generated using @openapi-qraft/cli -- do no edit */
    /* istanbul ignore file */
    import type { paths } from "../../openapi.js";
    import type { ServiceOperationQuery, ServiceOperationMutation } from "@openapi-qraft/react";
    export interface ApprovalPoliciesService {
        /**
         * @summary Get an approval policy by ID
         * @description Retrieve a specific approval policy.
         */
        getApprovalPoliciesId: ServiceOperationQuery<{
            method: "get";
            url: "/approval_policies/{approval_policy_id}";
        }, paths["/approval_policies/{approval_policy_id}"]["get"]["responses"]["200"]["content"]["application/json"], paths["/approval_policies/{approval_policy_id}"]["get"]["parameters"], paths["/approval_policies/{approval_policy_id}"]["get"]["responses"]["401"]["content"]["application/json"] | paths["/approval_policies/{approval_policy_id}"]["get"]["responses"]["422"]["content"]["application/json"] | paths["/approval_policies/{approval_policy_id}"]["get"]["responses"]["default"]["content"]["application/json"]>;
        /**
         * @summary Delete an approval policy
         * @description Delete an existing approval policy.
         */
        deleteApprovalPoliciesId: ServiceOperationMutation<{
            method: "delete";
            url: "/approval_policies/{approval_policy_id}";
        }, undefined, paths["/approval_policies/{approval_policy_id}"]["delete"]["responses"]["200"]["content"]["application/json"], paths["/approval_policies/{approval_policy_id}"]["delete"]["parameters"], paths["/approval_policies/{approval_policy_id}"]["delete"]["responses"]["401"]["content"]["application/json"] | paths["/approval_policies/{approval_policy_id}"]["delete"]["responses"]["422"]["content"]["application/json"] | paths["/approval_policies/{approval_policy_id}"]["delete"]["responses"]["default"]["content"]["application/json"]>;
        /**
         * @summary Update an approval policy
         * @description Update an existing approval policy.
         */
        patchApprovalPoliciesId: ServiceOperationMutation<{
            method: "patch";
            url: "/approval_policies/{approval_policy_id}";
            mediaType: "application/json";
        }, NonNullable<paths["/approval_policies/{approval_policy_id}"]["patch"]["requestBody"]>["content"]["application/json"], paths["/approval_policies/{approval_policy_id}"]["patch"]["responses"]["200"]["content"]["application/json"], paths["/approval_policies/{approval_policy_id}"]["patch"]["parameters"], paths["/approval_policies/{approval_policy_id}"]["patch"]["responses"]["401"]["content"]["application/json"] | paths["/approval_policies/{approval_policy_id}"]["patch"]["responses"]["422"]["content"]["application/json"] | paths["/approval_policies/{approval_policy_id}"]["patch"]["responses"]["default"]["content"]["application/json"]>;
    }
    export const approvalPoliciesService: {
        [key in keyof ApprovalPoliciesService]: Pick<ApprovalPoliciesService[key], "schema">;
    } = {
        getApprovalPoliciesId: {
            schema: {
                method: "get",
                url: "/approval_policies/{approval_policy_id}"
            }
        },
        deleteApprovalPoliciesId: {
            schema: {
                method: "delete",
                url: "/approval_policies/{approval_policy_id}"
            }
        },
        patchApprovalPoliciesId: {
            schema: {
                method: "patch",
                url: "/approval_policies/{approval_policy_id}",
                mediaType: "application/json"
            }
        }
    } as const;
    "
  `);
}
