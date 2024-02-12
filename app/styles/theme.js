import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    orange: {
      100: "#FAB66B",
      500: "#FA846B",
      900: "#EF7332",
    },
    pink: {
      100: "#F295AB",
      500: "#FA6BC1",
      900: "#D93D9D",
    },
    red: {
      500: "#EB4A4C",
      900: "#B63637",
    },
    yellow: {
      500: "#E7C85C",
      900: "#EBAD49",
    }
  },
  textStyles: {
    wotd: {
      fontFamily: 'Shadows Into Light Two'
    }
  }
})