export default function todayIs() {
  let date = new Date()
  const today = date.toISOString().split('T')[0]

  return today
}
