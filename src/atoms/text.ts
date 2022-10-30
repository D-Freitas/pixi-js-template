import { Text, ITextStyle } from 'pixi.js'

export const TextAtom = (text: string, color: Partial<ITextStyle>) => {
  return new Text(text, color)
}
