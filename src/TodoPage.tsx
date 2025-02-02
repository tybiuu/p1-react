import Encabezado from "./Encabezado"
import FormularioTODO from "./FormularioTODO"
import ListaTODOs from "./ListaTODOs"
import Footer from "./Footer"

export interface TODO{
    descripcion : string;
    fecha : Date
}
const TodoPage = () =>{
    const nombreAplicacion = "TODO App"
    const listadoPorHacer : TODO[] =[
        {
            descripcion: "Dormir",
            fecha : new Date()
        },
        {
            descripcion: "Comer",
         fecha : new Date()
        }
    ]

    return <div>
        <Encabezado titulo = {nombreAplicacion}/>
        <FormularioTODO/>
        <ListaTODOs lista={listadoPorHacer}/>
        <Footer/>
    </div>
}
export default TodoPage
