import {Switch, Route} from "react-router-dom"
import { Pagefour, Pagone } from "../pages"
import { Pagetwo } from "../pages"
import { Pagethree } from "../pages"

const Routes = () => {
    return(
        <Switch>
            <Route path="//" component={Pagone}/>
            <Route path="/gênero" component={Pagetwo}/>
            <Route path="/autores" component={Pagethree}/>
    
        </Switch>
    
    )
}

export default Routes