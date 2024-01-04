import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, IconButton, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <IconButton
        aria-label={colorMode === "dark" ? "Dark Mode" : "Light Mode"}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
