import { Chivo, Hepta_Slab, Shadows_Into_Light_Two } from 'next/font/google'

const chivo = Chivo({ subsets: ['latin'] })
const heptaSlab = Hepta_Slab({ subsets: ['latin'] })
const shadows = Shadows_Into_Light_Two({ subsets: ['latin'], weight: "400" })

export { chivo, heptaSlab, shadows }