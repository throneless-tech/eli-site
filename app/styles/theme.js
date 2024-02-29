import { defineStyleConfig, extendTheme } from "@chakra-ui/react"
import { chivo } from './fonts';

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'red.500',
      color: 'red.500',
    },
    solid: {
      bg: 'red.500',
      boxShadow: '0 4px 4px #4C4E52',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: 'solid',
  },
})

export const theme = extendTheme({
  colors: {
    orange: {
      100: "#FAB66B",
      500: "#FA846A",
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
  components: {
    Button,
  },
  textStyles: {
    h2: {
      fontFamily: chivo,
      fontSize: 36,
      fontWeight: "bold",
    },
    wotd: {
      fontFamily: 'Shadows Into Light Two'
    }
  }
})