const Titulo = () => {
  return(
    <h1>Olá, Mundo</h1>
  )
}

const Footer = () => {
  return(
    <footer>footer</footer>
  )
}

const Card = ({ title }) => {
  return(
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px' }}>
      <span>{title}</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officiis blanditiis totam, quae ipsa quasi odit ad quod quaerat possimus perferendis reprehenderit laboriosam vitae, dolore explicabo beatae fugit quis voluptatum?</p>
      <Footer />

    </div>
  )
}

export function App() {
  
  return (
    <>
      <Titulo />
      <Card title='Card 1'/>
      <Card title='Card 2'/>
      <Card title='Card 3'/>
      <Card title='Card 4'/>
    </>
  )
}
