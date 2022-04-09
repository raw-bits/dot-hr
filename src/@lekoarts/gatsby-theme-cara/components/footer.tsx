/** @jsx jsx */
import { Box, useColorMode, jsx } from "theme-ui"

const START_YEAR = 2022;

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {START_YEAR === currentYear ? START_YEAR : `${START_YEAR}-${currentYear}`}. All rights reserved.
    </Box>
  )
}

export default Footer
