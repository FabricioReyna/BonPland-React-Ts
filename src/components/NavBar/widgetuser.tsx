import User from "../../icons/User"
import { BuildIcon, ContactUsIcon, GpsIcon, ListIcon, QrCodeIcon, SharePri, WeUsIcon } from "../../icons/widgetUser/List"
import { Circle ,List, WidgetUse } from "./header.styled"
import { Link}  from "react-router-dom"

const WidgetUser = () => {
    const fill = "#5BC0BE"
    
    return(
        <WidgetUse>
        <List>
        <li className="user">
             <User  fill="#013459"/>
             <p>perfil</p>
        </li>
        {/* Add With the figma is finished */}
            <li>
                <Circle>
        <ListIcon className="Circle" fill={fill}/>
        </Circle>
        <Link to ={"#"} className= "LinkStyled"> buscar por lista</Link>
            </li>
            <li>
                <Circle>

        <GpsIcon className="Circle" fill={fill}/>
                </Circle>
        <Link to ={"#"} className= "LinkStyled"> buscar por mapa</Link>
            
            </li>
            <li>
                <Circle>

        <QrCodeIcon className="Circle" fill={fill}/>
                </Circle>
        <Link to ={"#"} className= "LinkStyled"> buscar por codigo QR</Link>
            
            </li>
            <li>
                <Circle>

        <BuildIcon className="Circle" fill={fill}/>
                </Circle>
        <Link to ={"#"} className= "LinkStyled"> buscar por anuciante</Link>
            
            </li>
            <li>
                <Circle>

        <SharePri className="Circle" fill={fill}/>
                </Circle>
        <Link to ={"#"} className= "LinkStyled"> publicar</Link>
            
            </li>
            <li>
                <Circle>

        <WeUsIcon className="Circle" fill={fill}/>
                </Circle>
        <Link to ={"#"} className= "LinkStyled"> nosotros</Link>
            
            </li>
            <li>
                <Circle>

        <ContactUsIcon className="Circle" fill={fill}/>
                </Circle>
        <Link to ={"#"} className= "LinkStyled"> contactanos</Link>
            
            </li>
        </List>
        
        </WidgetUse>
    
    )
}
export default WidgetUser