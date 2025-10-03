export type ThemePreset = {
  id: string;
  name: string;
  description: string;
  colors: {
    light: {
      primary: string;
      primaryForeground: string;
      primaryHover: string;
      accent: string;
      accentForeground: string;
    };
    dark: {
      primary: string;
      primaryForeground: string;
      primaryHover: string;
      accent: string;
      accentForeground: string;
    };
  };
};

export const themePresets: ThemePreset[] = [
  {
    id: "default",
    name: "Xanh Dương",
    description: "Theme mặc định - Xanh dương tin cậy",
    colors: {
      light: {
        primary: "217 91% 60%",
        primaryForeground: "0 0% 100%",
        primaryHover: "217 91% 55%",
        accent: "158 64% 42%",
        accentForeground: "0 0% 100%",
      },
      dark: {
        primary: "217 91% 60%",
        primaryForeground: "224 71% 4%",
        primaryHover: "217 91% 55%",
        accent: "158 64% 42%",
        accentForeground: "224 71% 4%",
      },
    },
  },
  {
    id: "emerald",
    name: "Xanh Lá",
    description: "Tươi mới và thân thiện với môi trường",
    colors: {
      light: {
        primary: "142 76% 36%",
        primaryForeground: "0 0% 100%",
        primaryHover: "142 76% 31%",
        accent: "173 58% 39%",
        accentForeground: "0 0% 100%",
      },
      dark: {
        primary: "142 76% 45%",
        primaryForeground: "224 71% 4%",
        primaryHover: "142 76% 40%",
        accent: "173 58% 45%",
        accentForeground: "224 71% 4%",
      },
    },
  },
  {
    id: "violet",
    name: "Tím",
    description: "Sang trọng và hiện đại",
    colors: {
      light: {
        primary: "262 83% 58%",
        primaryForeground: "0 0% 100%",
        primaryHover: "262 83% 53%",
        accent: "280 65% 60%",
        accentForeground: "0 0% 100%",
      },
      dark: {
        primary: "262 83% 65%",
        primaryForeground: "224 71% 4%",
        primaryHover: "262 83% 60%",
        accent: "280 65% 65%",
        accentForeground: "224 71% 4%",
      },
    },
  },
  {
    id: "rose",
    name: "Hồng",
    description: "Ấm áp và thân thiện",
    colors: {
      light: {
        primary: "346 77% 50%",
        primaryForeground: "0 0% 100%",
        primaryHover: "346 77% 45%",
        accent: "351 83% 82%",
        accentForeground: "346 77% 20%",
      },
      dark: {
        primary: "346 77% 60%",
        primaryForeground: "224 71% 4%",
        primaryHover: "346 77% 55%",
        accent: "351 83% 50%",
        accentForeground: "224 71% 4%",
      },
    },
  },
  {
    id: "orange",
    name: "Cam",
    description: "Năng động và sáng tạo",
    colors: {
      light: {
        primary: "24 94% 50%",
        primaryForeground: "0 0% 100%",
        primaryHover: "24 94% 45%",
        accent: "38 92% 50%",
        accentForeground: "0 0% 100%",
      },
      dark: {
        primary: "24 94% 60%",
        primaryForeground: "224 71% 4%",
        primaryHover: "24 94% 55%",
        accent: "38 92% 60%",
        accentForeground: "224 71% 4%",
      },
    },
  },
  {
    id: "cyan",
    name: "Xanh Ngọc",
    description: "Mát mẻ và chuyên nghiệp",
    colors: {
      light: {
        primary: "189 94% 43%",
        primaryForeground: "0 0% 100%",
        primaryHover: "189 94% 38%",
        accent: "174 72% 56%",
        accentForeground: "0 0% 100%",
      },
      dark: {
        primary: "189 94% 50%",
        primaryForeground: "224 71% 4%",
        primaryHover: "189 94% 45%",
        accent: "174 72% 60%",
        accentForeground: "224 71% 4%",
      },
    },
  },
  {
    id: "amber",
    name: "Vàng Hổ Phách",
    description: "Ấm áp và sang trọng",
    colors: {
      light: {
        primary: "38 92% 50%",
        primaryForeground: "0 0% 100%",
        primaryHover: "38 92% 45%",
        accent: "45 93% 47%",
        accentForeground: "0 0% 100%",
      },
      dark: {
        primary: "38 92% 60%",
        primaryForeground: "224 71% 4%",
        primaryHover: "38 92% 55%",
        accent: "45 93% 55%",
        accentForeground: "224 71% 4%",
      },
    },
  },
  {
    id: "indigo",
    name: "Chàm",
    description: "Chuyên nghiệp và đáng tin cậy",
    colors: {
      light: {
        primary: "239 84% 67%",
        primaryForeground: "0 0% 100%",
        primaryHover: "239 84% 62%",
        accent: "221 83% 53%",
        accentForeground: "0 0% 100%",
      },
      dark: {
        primary: "239 84% 70%",
        primaryForeground: "224 71% 4%",
        primaryHover: "239 84% 65%",
        accent: "221 83% 60%",
        accentForeground: "224 71% 4%",
      },
    },
  },
];

export function applyThemePreset(preset: ThemePreset, mode: "light" | "dark") {
  const colors = preset.colors[mode];
  const root = document.documentElement;

  root.style.setProperty("--primary", colors.primary);
  root.style.setProperty("--primary-foreground", colors.primaryForeground);
  root.style.setProperty("--primary-hover", colors.primaryHover);
  root.style.setProperty("--accent", colors.accent);
  root.style.setProperty("--accent-foreground", colors.accentForeground);
}

export function getStoredPreset(): string {
  return localStorage.getItem("theme-preset") || "default";
}

export function setStoredPreset(presetId: string) {
  localStorage.setItem("theme-preset", presetId);
}

