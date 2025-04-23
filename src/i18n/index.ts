
import english from '@/i18n/en.json';
import portuguese from '@/i18n/pt.json';

const LANG = {
  ENGLISH: 'en',
  PORTUGUESE: 'pt',
};

export const getI18N = (
  { currentLocale = 'en' }:
    { currentLocale: string | undefined; }
) => {
  if (currentLocale === LANG.ENGLISH) return english
  if (currentLocale === LANG.PORTUGUESE) return portuguese
  return portuguese;
};