import './styles.css'

// parâmetros: (props = { name: 'fernando', surname: 'oliveira' })
export function Title({ name, surname }) {

  // console.log('DESESTRUTURAÇÃO name: ', name)
  // console.log('DESESTRUTURAÇÃO surname: ', surname)

  const parsedName = name.toUpperCase()
  const parsedSurname = surname ? surname.toUpperCase() : ''

  return (
    <div id='title'>
      <h1 className='title'>Bem vindo {parsedName} {parsedSurname}</h1>

      <hr />
    </div>
  )
}