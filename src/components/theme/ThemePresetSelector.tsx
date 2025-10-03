import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  themePresets,
  applyThemePreset,
  getStoredPreset,
  setStoredPreset,
  type ThemePreset,
} from "@/lib/theme-presets";

export function ThemePresetSelector() {
  const { theme: mode } = useTheme();
  const [selectedPreset, setSelectedPreset] = useState<string>("default");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedPreset = getStoredPreset();
    setSelectedPreset(storedPreset);
    
    // Apply preset on mount
    const preset = themePresets.find((p) => p.id === storedPreset);
    if (preset && mode !== "system") {
      applyThemePreset(preset, mode as "light" | "dark");
    }
  }, [mode]);

  const handlePresetSelect = (preset: ThemePreset) => {
    setSelectedPreset(preset.id);
    setStoredPreset(preset.id);
    
    // Apply immediately if not system mode
    if (mode !== "system") {
      applyThemePreset(preset, mode as "light" | "dark");
    } else {
      // For system mode, detect current theme
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyThemePreset(preset, isDark ? "dark" : "light");
    }
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Chọn màu theme</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Chọn màu sắc giao diện</DialogTitle>
          <DialogDescription>
            Tùy chỉnh màu sắc chính của giao diện theo sở thích của bạn
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {themePresets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handlePresetSelect(preset)}
                className={cn(
                  "relative flex flex-col items-start gap-3 rounded-lg border-2 p-4 text-left transition-all hover:border-primary",
                  selectedPreset === preset.id
                    ? "border-primary bg-primary/5"
                    : "border-border"
                )}
              >
                {selectedPreset === preset.id && (
                  <div className="absolute right-3 top-3">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                )}
                
                <div className="flex gap-2">
                  {/* Light mode preview */}
                  <div className="flex flex-col gap-1">
                    <div className="text-xs text-muted-foreground mb-1">Sáng</div>
                    <div className="flex gap-1">
                      <div
                        className="h-8 w-8 rounded border"
                        style={{
                          backgroundColor: `hsl(${preset.colors.light.primary})`,
                        }}
                      />
                      <div
                        className="h-8 w-8 rounded border"
                        style={{
                          backgroundColor: `hsl(${preset.colors.light.accent})`,
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Dark mode preview */}
                  <div className="flex flex-col gap-1">
                    <div className="text-xs text-muted-foreground mb-1">Tối</div>
                    <div className="flex gap-1">
                      <div
                        className="h-8 w-8 rounded border"
                        style={{
                          backgroundColor: `hsl(${preset.colors.dark.primary})`,
                        }}
                      />
                      <div
                        className="h-8 w-8 rounded border"
                        style={{
                          backgroundColor: `hsl(${preset.colors.dark.accent})`,
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold">{preset.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {preset.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

