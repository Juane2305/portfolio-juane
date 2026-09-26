import type { CSSProperties, ReactNode } from "react";

export interface WordSegment {
  text: string;
  accent?: boolean;
}

interface SplitWordsOptions {
  className: string;
  startIndex?: number;
}

interface SplitWordsResult {
  nodes: ReactNode[];
  nextIndex: number;
}

/**
 * Ports the prototype's splitWords(): wraps every word of the given
 * segments in its own <span>, carrying a `--i` custom property (a running
 * word index) so CSS can stagger a rise animation across the whole
 * headline/statement, exactly like the vanilla implementation did.
 */
export function splitWords(
  segments: WordSegment[],
  { className, startIndex = 0 }: SplitWordsOptions,
): SplitWordsResult {
  let i = startIndex;
  const nodes: ReactNode[] = [];

  segments.forEach((segment, segmentIndex) => {
    const parts = segment.text.split(/(\s+)/);
    parts.forEach((part, partIndex) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        nodes.push(" ");
        return;
      }
      const classes = [className, segment.accent ? "acc" : null]
        .filter(Boolean)
        .join(" ");
      nodes.push(
        <span
          key={`${segmentIndex}-${partIndex}-${i}`}
          className={classes}
          style={{ "--i": i } as CSSProperties}
        >
          {part}
        </span>,
      );
      i += 1;
    });
  });

  return { nodes, nextIndex: i };
}
