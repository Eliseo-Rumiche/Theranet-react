import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useRef } from "react";

type ButtonFormType = {
    text : string
}

function ButtonForm({text}:ButtonFormType) {

    const btnRef = useRef<HTMLButtonElement>(null)


    const onEnterPress = () => {
        btnRef.current?.click()
      }
    
    const { ref, focused } = useFocusable({ onEnterPress });


    return ( 
        <div  ref={ref}>
            <button className={focused ? "btn-active": ""} ref={btnRef} >{text}</button>
        </div>
     );
}

export default ButtonForm;