
export function relativeTimeForLanguage (unixTime: number, lang: string): string {
  interface DateUnitsTypes {
    [key: string]: number
  }

  const DATE_UNITS: DateUnitsTypes = {
    year: 3.154e+7,
    month: 2.628e+6,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  }

  // define la estructura del tiempo a utilizar
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })

  // se identifica el tiempo inicial (cuando se creo el post) y el tiempo actual
  const timeStart = new Date(unixTime * 1000).getTime()
  const now = new Date().getTime()

  // Evalua el transcurso del tiempo entre el inicio y el final, divido por 1000 para que nos devuelva segundos
  const elapsedTime = (timeStart - now) / 1000

  for (const unit in DATE_UNITS) {
    const absolutedElapsed = Math.abs(elapsedTime)

    if (absolutedElapsed > DATE_UNITS[unit] || unit === 'second') {
      return rtf.format(Math.round(elapsedTime / DATE_UNITS[unit]),
        unit as Intl.RelativeTimeFormatUnit)
    }
  }

  return ''
}
