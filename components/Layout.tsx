import * as React from "react";

export interface LayoutProps {
  children: any;
}

export const Layout: React.SFC<LayoutProps> = (props) => {
  return (
    <div
      className="min-h-screen w-full grid grid-cols-12 gap-4"
      style={{ backgroundColor: "#e5e5e5" }}
    >
      {props.children}
    </div>
  );
};
