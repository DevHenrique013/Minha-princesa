export const themes = {
  pink: {
    primary: "#FF7DA9",
    secondary: "#E4007C",
  },
  purple: {
    primary: "#8806CE",
    secondary: "#A020F0",
  },
  orange: {
    primary: " #FFA500",
    secondary: "#FF7518",
  },
  green: {
    primary: "#5ECA75",
    secondary: "#006D6F",
  },
  blue: {
    primary: "#6DB5EF",
    secondary: "#4169E1",
  },
} as const

export type ThemeName = keyof typeof themes