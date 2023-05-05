import { Title } from "../Title"

export const Card = ({ name, surname, description }) => {
  return (
    <div>
      <Title name={name} surname={surname} />

      <p>{description}</p>
    </div>
  )
}