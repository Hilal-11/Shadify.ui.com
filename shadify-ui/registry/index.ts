import { component } from "./registry-components";
import { lib } from "./registry-lib";
import type { Registry } from "./schema";
import { block } from "./registry-blocks";

export const registry: Registry = [...component, ...lib, ...block];
