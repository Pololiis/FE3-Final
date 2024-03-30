import Form from '../Components/Form'
import { useTheme } from '../Context'

const Contact = () => {

  const { theme } = useTheme();

  return (
    <div className={theme} style={{textAlign: "center"}}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you.</p>
      <Form/>
    </div>
  )
}

export default Contact