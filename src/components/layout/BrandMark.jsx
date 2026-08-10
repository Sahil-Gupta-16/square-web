import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND } from "@/constants/brand";

/**
 * Karobar wordmark — the client-supplied lockup with a transparent background.
 * The site renders on light surfaces, so the ink lockup is the default; pass
 * variant="dark" for the silver lockup when placing it on a dark surface.
 */
const SRC = {
  light: "/wordmark-light.png",
  dark: "/wordmark-dark.png",
};

export function BrandMark({ variant = "light", className }) {
  return (
    <Image
      src={SRC[variant]}
      alt={BRAND.fullName}
      width={984}
      height={283}
      priority
      className={cn("h-9 w-auto", className)}
    />
  );
}

export default BrandMark;
