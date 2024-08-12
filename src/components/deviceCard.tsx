import {
  FocusableComponentLayout,
  FocusDetails,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { device } from "../types";
import { getIconDevice } from "../utils/deviceUtils";

interface deviceCardProps extends device {
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
  onEnterPress: ()=> void
}

function DeviceCard({ device, name, onFocus, onEnterPress }: deviceCardProps) {

  const { ref, focused } = useFocusable({
    onFocus,
    onEnterPress,
  });

  const srcIcon = getIconDevice(device)

  return (
    <div className={`movie-card ${focused ? "active" : ""}`} ref={ref}>
      {}

      <img src={srcIcon} alt=""  loading="lazy"/>

      <div className="movie-info">
        <h3 className="movie-title">{name}- {device}</h3>
      </div>
    </div>
  );
}

export default DeviceCard;
