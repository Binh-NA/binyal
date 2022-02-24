import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children: React.ReactChild;
  type?: keyof HTMLElementTagNameMap;
  className?: string;
}

export const Portal = (props: PortalProps): React.ReactPortal => {
  const [container] = useState(() => {
    const el = document.createElement(props.type ?? 'div');
    if (props.className) el.classList.add(props.className);
    return el;
  });

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(props.children, container);
};
