export function formatBytes(bytes: number) {
  const unites = ['B', 'KB', 'MB', 'GB', 'TB']

  let value = bytes
  let index = 0

  while (value >= 1024 && index < unites.length - 1) {
    value /= 1024
    index++
  }

  return `${value.toFixed(1)} ${unites[index]}`
}
