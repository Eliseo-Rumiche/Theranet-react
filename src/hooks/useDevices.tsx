import { useEffect, useState } from "react";
import { device, devicesResponse } from "../types";
import { getDevices } from "../services/api";

export const useDevices = () => {
  const [devices, setDevices] = useState<device[]>([]);
  const [loading, setLoading] = useState(true);

  const get_Devices = async () => {
    const req: devicesResponse = await getDevices();
    setDevices(req.data);
    setLoading(false);
  };

  useEffect(() => {
    get_Devices();
  }, []);

  return { loading, devices };
};
