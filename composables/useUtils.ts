import { filename } from 'pathe/utils'


export const useUtils = () => {

  const getPngs = () => {
    const glob = import.meta.glob('@/assets/img/*.png', { eager: true })
    const countries = Object.fromEntries(
      Object.entries(glob).map(([key, value]) => [filename(key), value.default])
    )
    return countries
  }

  return {
    getPngs
  }
}