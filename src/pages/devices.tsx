import { useCallback, useRef, useState } from "react";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import Loader from "../components/loader";
import DeviceCard from "../components/deviceCard";
import { useDevices } from "../hooks/useDevices";
import ConfirmNotification from "../components/ConfirmNotification";
import { deleteDevice } from "../services/api";
import { useNavigate } from "react-router-dom";

function DevicesPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [deviceid, setDeviceid] = useState<string>("");

  const { ref, focusKey } = useFocusable({
    focusKey: "DEVICES",
    forceFocus: true,
  });
  const { loading, devices } = useDevices();

  const scrollingRef = useRef<HTMLDivElement>(null);

  const onDeviceFocus = useCallback(
    ({ x }: { x: number }) => {
      scrollingRef.current?.scrollTo({
        left: x,
        behavior: "smooth",
      });
    },
    [scrollingRef]
  );
  const navigate = useNavigate();
  const handleDeleteDevice = async () => {
    let data = new FormData();
    data.append("device", deviceid);
    await deleteDevice(data);
    navigate(0);
  };
  const handlerPress = (id: string) => {
    setOpen(true);
    setDeviceid(id);
  };

  if (loading) return <Loader />;

  return (
    <>
      {open && (
        <ConfirmNotification
          text="¿Desea eliminar el dispositivo?"
          icon="⚠️"
          oncancel={() => setOpen(false)}
          onConfirm={() => handleDeleteDevice()}
        />
      )}
      <FocusContext.Provider value={focusKey}>
        <div className="category" ref={ref}>
          <h2>Dispositivos</h2>
          <div className="slider-container" ref={scrollingRef}>
            <div className="slider">
              {devices.map((device) => (
                <DeviceCard
                  key={device.id}
                  {...device}
                  onFocus={onDeviceFocus}
                  onEnterPress={() => handlerPress(device.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </FocusContext.Provider>
    </>
  );
}

export default DevicesPage;
