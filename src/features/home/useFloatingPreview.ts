import {
  useCallback,
  useEffect,
  useRef,
  type PointerEvent,
  type RefObject,
} from "react";
import { useReducedMotion } from "@/shared/hooks/useReducedMotion";

function prefersFinePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(
    "(hover:hover) and (pointer:fine) and (min-width:760px)",
  ).matches;
}

export interface FloatingPreviewApi {
  floaterRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  onListPointerMove: (event: PointerEvent) => void;
  onListPointerLeave: () => void;
  onRowPointerEnter: (index: number) => (event: PointerEvent) => void;
  /** Reset the floater instantly, used right before a case navigation. */
  hide: () => void;
  isVisible: () => boolean;
  activeIndex: () => number;
}

/**
 * Ports the prototype's cursor-following floating preview: a lerp-based
 * rAF loop, velocity-derived tilt, and index-based track sliding between
 * the three preview mockups. Kept imperative (refs, not state) exactly
 * like the original, since it runs every animation frame while hovering.
 */
export function useFloatingPreview(): FloatingPreviewApi {
  const reduced = useReducedMotion();
  const floaterRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const state = useRef({
    x: 0,
    y: 0,
    tx: 0,
    ty: 0,
    rot: 0,
    vis: false,
    running: false,
    flIndex: -1,
  });

  const aim = (clientX: number, clientY: number) => {
    const s = state.current;
    s.tx = Math.min(clientX + 28, window.innerWidth - 360);
    s.ty = Math.max(12, Math.min(clientY - 115, window.innerHeight - 242));
  };

  // Recursive rAF loop: kept behind a ref indirection (assigned in an
  // effect, not during render) so it can call itself without a
  // "used before declared" self-reference in its own useCallback body.
  const loopRef = useRef<() => void>(() => {});
  useEffect(() => {
    loopRef.current = () => {
      const s = state.current;
      const fl = floaterRef.current;
      if (!fl) {
        s.running = false;
        return;
      }
      const k = reduced ? 1 : 0.14;
      const dx = (s.tx - s.x) * k;
      s.x += dx;
      s.y += (s.ty - s.y) * k;
      const targetRot = reduced ? 0 : Math.max(-6, Math.min(6, dx * 0.35));
      s.rot += (targetRot - s.rot) * 0.12;
      fl.style.transform = `translate3d(${s.x}px,${s.y}px,0) rotate(${s.rot.toFixed(2)}deg)`;
      if (s.vis || Math.abs(dx) > 0.1) {
        requestAnimationFrame(loopRef.current);
      } else {
        s.running = false;
      }
    };
  }, [reduced]);

  const onListPointerMove = useCallback((event: PointerEvent) => {
    if (event.pointerType !== "mouse" || !prefersFinePointer()) return;
    const s = state.current;
    const first = !s.vis;
    aim(event.clientX, event.clientY);
    if (first) {
      s.x = s.tx;
      s.y = s.ty;
    }
  }, []);

  const onRowPointerEnter = useCallback(
    (index: number) => (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !prefersFinePointer()) return;
      const s = state.current;
      aim(event.clientX, event.clientY);
      if (!s.vis) {
        s.x = s.tx;
        s.y = s.ty;
      }
      s.flIndex = index;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateY(${-index * 100}%)`;
      }
      s.vis = true;
      floaterRef.current?.classList.add("on");
      if (!s.running) {
        s.running = true;
        requestAnimationFrame(loopRef.current);
      }
    },
    [],
  );

  const onListPointerLeave = useCallback(() => {
    state.current.vis = false;
    floaterRef.current?.classList.remove("on");
  }, []);

  const hide = useCallback(() => {
    const s = state.current;
    s.vis = false;
    floaterRef.current?.classList.remove("on");
    const inner = floaterRef.current?.querySelector<HTMLElement>(".fl-in");
    if (inner) {
      inner.style.transition = "none";
      requestAnimationFrame(() => {
        inner.style.transition = "";
      });
    }
  }, []);

  return {
    floaterRef,
    trackRef,
    onListPointerMove,
    onListPointerLeave,
    onRowPointerEnter,
    hide,
    isVisible: () => state.current.vis,
    activeIndex: () => state.current.flIndex,
  };
}
