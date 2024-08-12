import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

type ButtonAlertType = {
    text : string
    onEnterPress : ()=> void
}

function ButtonAlert({text, onEnterPress}:ButtonAlertType) {

    const { ref, focused } = useFocusable({ onEnterPress });

    return ( 
        <div  ref={ref} onClick={onEnterPress}>
            <button className={focused ? "btn-alert-active": ""} >{text}</button>
        </div>
     );
}

export default ButtonAlert;