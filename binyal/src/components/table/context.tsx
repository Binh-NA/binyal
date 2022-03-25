import React from 'react';

export type NodeFixed = {
  width: number;
  isStickyLeft: boolean;
  isStickyRight: boolean;
};

export type TableFixed = Record<number, NodeFixed>;

export type TableScroll = {
  left: number;
  right: number;
};

export interface TableContext {
  stickies?: TableFixed;
  setStickies?: (key: number, val: NodeFixed) => void;
  timeResize?: number;
  setTimeResize?: (time: number) => void;
  scroll?: TableScroll;
  setScroll?: (scroll: TableScroll) => void;
}

export const TableContext = React.createContext<TableContext>({});

export const TableContainer = (props: {
  children: React.ReactChild;
}): React.ReactElement => {
  const [stickies, setStickies] = React.useState<TableFixed>();
  const [timeResize, setTimeResize] = React.useState<number>();
  const [scroll, setScroll] = React.useState<TableScroll>();

  return (
    <TableContext.Provider
      value={{
        stickies,
        timeResize,
        scroll,
        setStickies: (key, val) => {
          setStickies((pre) => ({
            ...pre,
            [key]: val,
          }));
        },
        setTimeResize,
        setScroll,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
};
