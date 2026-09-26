import { useEffect } from "react";
import type { FloatingPreviewApi } from "../useFloatingPreview";
import { previewByIndex } from "@/features/projects/previews/previewList";

interface FloatingPreviewProps {
  api: FloatingPreviewApi;
  /** True while a view transition to the currently-hovered case is pending. */
  isShotSource: boolean;
}

/**
 * The cursor-following card that previews whichever project row is hovered.
 * className is intentionally static: "on" (hover visibility) and "vt-shot"
 * (view transition participant) are both toggled imperatively via
 * classList, the same way the hook drives `transform` — a declarative
 * className here would fight those imperative writes on every re-render.
 */
export function FloatingPreview({ api, isShotSource }: FloatingPreviewProps) {
  useEffect(() => {
    api.floaterRef.current?.classList.toggle("vt-shot", isShotSource);
  }, [api.floaterRef, isShotSource]);

  return (
    // These refs are forwarded from useFloatingPreview (a ref-forwarding
    // custom hook), not created locally — a standard, safe pattern that the
    // experimental react-hooks/refs check can't statically verify.
    /* eslint-disable react-hooks/refs */
    <div className="floater" ref={api.floaterRef} aria-hidden="true">
      <div className="fl-in">
        <div className="track" ref={api.trackRef}>
          {previewByIndex.map((Preview, index) => (
            <Preview key={index} />
          ))}
        </div>
      </div>
    </div>
    /* eslint-enable react-hooks/refs */
  );
}
