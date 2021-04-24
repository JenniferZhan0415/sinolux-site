import React from "react"

import Jebel from "./films/jebel"
import Cru from "./films/cru"
import Farewell from "./films/farewell/farewell"
import Frac from "./films/fractures/frac"
import Dnp from "./films/prisons/dnp"
import False from "./films/false/false"
import Imagination from "./films/imagination/imagination"
import Bygone from "./films/bygone/bygone"
import Truth from "./films/truth/truth"
import Childhood from "./films/childhood/childhood"

const Introductions = {
    "farewell": <Farewell/>,
    "jebel": <Jebel/>,
    "cru": <Cru/>,
    "frac": <Frac/>,
    "dnp": <Dnp/>,
    "false": <False/>,
    "imagination": <Imagination/>,
    "bygone": <Bygone/>,
    "truth": <Truth/>,
    "childhood": <Childhood/>,
    "edward": <div>my prince edward</div>,
    "wind": <div>let the wind carry me</div>,
    "suzhou": <div>suzhou river</div>,
    "butterfly": <div>purple butterfly</div>,
    "mystery": <div>mystery</div>,
    "blind": <div>blind message</div>,
    "rouge": <div>rouge</div>,
    "concubine": <div>farewell my concubine</div>,
    "ash": <div>ashes of time</div>,
    "current": <div>crosscurrent</div>,
    "free": <div>free and easy</div>,
    "summer": <div>the summer is gone</div>,
    "gate": <div>blue gate cross</div>
}

export default Introductions
