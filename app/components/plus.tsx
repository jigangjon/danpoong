import { cn } from "~/lib/utils";

export default function Plus({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "flex justify-center items-center aspect-square rounded-full bg-white",
        className,
      )}
      {...props}
    >
      plus
    </button>
  );
}
