import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import { themePresets, applyThemePreset, getStoredPreset } from "@/lib/theme-presets";

function ThemeWatcher() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "system") return;

    const presetId = getStoredPreset();
    const preset = themePresets.find((p) => p.id === presetId);

    if (preset && (theme === "light" || theme === "dark")) {
      applyThemePreset(preset, theme);
    }
  }, [theme]);

  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeWatcher />
      {children}
    </NextThemesProvider>
  );
}

