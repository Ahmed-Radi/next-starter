import { Dispatch, SetStateAction, useMemo } from "react";

import { useTheme } from "next-themes";

type Theme = "dark" | "light";
type setTheme = Dispatch<SetStateAction<Theme>>;

const useSystemTheme = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  return useMemo(() => {
    return { theme: theme === "system" ? systemTheme : theme, setTheme } as {
      theme: Theme;
      setTheme: setTheme;
    };
  }, [theme, setTheme, systemTheme]);
};

export default useSystemTheme;
