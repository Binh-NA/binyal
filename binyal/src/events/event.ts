import { createSyntheticEvent } from './synthetic';

export type EventType = 'change' | 'click' | 'focus' | 'blur';

export const createEvent = <T extends HTMLElement>(
  type: EventType,
  ref: React.RefObject<T>,
): React.SyntheticEvent<T, Event> => {
  const event = new Event(type, { bubbles: true });
  Object.defineProperty(event, 'target', {
    writable: false,
    value: ref.current,
  });
  return createSyntheticEvent<T, Event>(event);
};
