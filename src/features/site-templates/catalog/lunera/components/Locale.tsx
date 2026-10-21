'use client'

import { createContext, useContext } from 'react'
import type { TemplateLocale } from '../../../types'
import { getTranslator, type MessageKey } from '../messages'
import { useLuneraHost } from '../host'

export const LocaleContext = createContext<TemplateLocale>('zh')
export function useLuneraLocale() {
  const locale = useContext(LocaleContext)
  const host = useLuneraHost()
  return { locale, t: (key: MessageKey) => getTranslator(locale)(key).replaceAll('Lunera', host.brandName[locale]) }
}
