import { Navbar } from "nextra-theme-docs";
import { Podcasting20 } from "./icons/Podcasting20";

export function AppNavBar() {
  return (
    <Navbar
      logo={
        <>
          <Podcasting20 className="mr-2 size-6" />
          Podcasting 2.0
        </>
      }
      projectLink="https://github.com/thedanieljlewis/podcasting2.org/"

      // ... Your additional navbar options
    />
  );
}
