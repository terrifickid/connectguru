import clsx from "clsx";

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx("mx-auto container px-8 lg:px-8", className)}
      {...props}
    />
  );
}
