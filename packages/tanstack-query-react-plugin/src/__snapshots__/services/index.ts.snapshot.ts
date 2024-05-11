/**
 * This file was auto-generated by @openapi-qraft/cli.
 * Do not make direct changes to the file.
 */

import { EntitiesService, entitiesService } from "./EntitiesService.js";
import { ApprovalPoliciesService, approvalPoliciesService } from "./ApprovalPoliciesService.js";
import { FilesService, filesService } from "./FilesService.js";
export type Services = {
    entities: EntitiesService;
    approvalPolicies: ApprovalPoliciesService;
    files: FilesService;
};
export const services = {
    entities: entitiesService,
    approvalPolicies: approvalPoliciesService,
    files: filesService
} as const;
