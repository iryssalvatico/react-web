import {Switch, Route} from "react-router-dom"
import { Pagone } from "../pages"
import { Pagetwo } from "../pages"
import { Pagethree } from "../pages"
import { Pagefour } from "../pages"


const Routes = () => {
    return(
        <Switch>
            <Route path="//" component={Pagone}/>
            <Route path="/gênero" component={Pagetwo}/>
            <Route path="/autores" component={Pagethree}/>
            <Route path="/livro 9" component={Pagefour}/>
    
        </Switch>
    
    )
}

export default Routes