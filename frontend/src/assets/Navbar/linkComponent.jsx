import Home from "../../pages/Home/index.jsx";
import FormPage from "../../pages/Form/index.jsx";
import Readings from "../../pages/Readings/index.jsx";

export default function LinkComponent(){
    let Component
    switch (window.location.pathname) {
        case "/":
            Component = Home
            break;
        case "/form":
            Component = FormPage
            break;
        case "/readings":
            Component = Readings
            break;   
        default:
            break;
    }

    return( <Component /> )
}