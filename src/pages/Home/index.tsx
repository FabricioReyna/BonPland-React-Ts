import { TextareaStyled ,Contacto, Box, Input, Inputdiv } from "./home.styled";
import { TextArea } from "./TextareaContac/TextArea";



const Home = () => {
    return(
        <Contacto>
            <form action="" method="get" className="form_contact">
            <Box className="contacts">
                <h3 >contactanos</h3>
                <h3 >cuerpo del mensaje</h3>
                </Box>
                <Box>
                    <Inputdiv>
                <Input  type="text" placeholder="Nombre" />
                <Input  type="email" placeholder="Correo"/>
                </Inputdiv>  
               <TextareaStyled>
              
               <TextArea/>
               <button type="submit">enviar</button>

               </TextareaStyled>
            </Box>
            </form>
        </Contacto>
    )
}
export default Home;