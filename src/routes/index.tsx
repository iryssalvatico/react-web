import {Switch, Route} from "react-router-dom"
import { Pagone } from "../pages"

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Pagone}/>
        </Switch>
    )
}

export default Routes