interface MyButtonProps {
  /** The text to display inside the button */
  title: string
  /** Whether the button can be interacted with */
  disabled: boolean
}

function MyButton({ title, disabled }: MyButtonProps) {
  return <button disabled={disabled}>{title}</button>
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" disabled={true} />
    </div>
  )
}
