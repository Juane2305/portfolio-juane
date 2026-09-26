import { EvalenePreview } from "./EvalenePreview";
import { SendoPreview } from "./SendoPreview";
import { HorneroPreview } from "./HorneroPreview";

/** Indexed the same way as the prototype's pv-0/pv-1/pv-2 templates. */
export const previewByIndex = [
  EvalenePreview,
  SendoPreview,
  HorneroPreview,
] as const;
