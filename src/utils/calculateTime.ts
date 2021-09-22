const removeColon = (hour: string) => hour.replace(':', '')

export const getTotalMinutes = (hour1: string, hour2: string) => {
  // 08:30
  const hour1Part1 = removeColon(hour1).slice(0, 2) // 08
  const hour1Part2 = removeColon(hour1).slice(-2) // 30

  // 12:00
  const hour2Part1 = removeColon(hour2).slice(0, 2) // 12
  const hour2Part2 = removeColon(hour2).slice(-2) // 00

  const date1 = new Date(0, 0, 0, Number(hour1Part1), Number(hour1Part2))
  const date2 = new Date(0, 0, 0, Number(hour2Part1), Number(hour2Part2))

  const milliseconds = Number(date2) - Number(date1)
  const totalMinutes = milliseconds / 1000 / 60

  return totalMinutes
}

export const getHoursAndMinutes = (totalMinutes: number) => {
  const minutes = totalMinutes % 60
  const hours = Math.floor(totalMinutes / 60)

  return `${hours} ${hours > 1 ? 'horas' : 'hora'} e ${minutes} ${
    minutes > 1 ? 'minutos' : 'minuto'
  }`
}
