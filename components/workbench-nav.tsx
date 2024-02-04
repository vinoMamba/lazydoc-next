import { ThemeMode } from "./theme-mode";
import { UserDropdown } from "./user-dropdown";

export function WorkbenchNav() {
  return (
    <div className=" flex items-center gap-2">
      <UserDropdown />
      <ThemeMode />
    </div>
  )
}
