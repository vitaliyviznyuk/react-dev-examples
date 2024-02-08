const today = new Date()

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
}

export default function TodoList() {
  const name = 'Hedy Lamarr'
  return (
    <h1>
      {name}'s To Do List for {formatDate(today)}
    </h1>
  )
}
