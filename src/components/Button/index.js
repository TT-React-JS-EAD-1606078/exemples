import './styles.css'

export const Button = ({ text, variant }) => {
  console.log(variant)
  return (
    <button className={variant === 'secondary' ? 'buttonSecondary' : 'button'}>{text}</button>
  )
}