/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Component, createVNode, type VNode } from "vue";

export const withProps = (
  component: Component,
  props: Record<string, unknown>
): VNode => {
  return createVNode(component, props);
};

export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay = 300
) => {
  let timeoutId: number | undefined = undefined;

  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
    timeoutId = setTimeout(() => fn(...args), delay) as unknown as number;
  };
};
