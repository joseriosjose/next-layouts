import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3",
        padding: 10,
        borderRadius: 5,
      }}
    >
      <h3>dark layout</h3>
      <div> {children}</div>
    </div>
  );
};
