import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import "../assets/notification.css";
import ButtonAlert from "../components/buttonAlert";
import { useEffect } from "react";

type ConfirmNotificarionType = {
  text: string;
  icon: string;
  onConfirm: () => void;
  oncancel: () => void;
};

function ConfirmNotification({
  text,
  icon,
  onConfirm,
  oncancel,
}: ConfirmNotificarionType) {
  const { ref, focusKey, focusSelf } = useFocusable({
    trackChildren: true,
    onArrowPress: () => true,
    forceFocus: true,
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="modalAlert">
        <div className="modal-content">
          <div className="modal-icon">{icon}</div>
          <div className="modal-body" >
            <h2>{text}</h2>
            <div className="modal-buttons" ref={ref}>
              <ButtonAlert text="Sí" onEnterPress={onConfirm} />
              <ButtonAlert text="No" onEnterPress={oncancel} />
            </div>
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default ConfirmNotification;
