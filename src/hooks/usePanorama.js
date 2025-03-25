import { useEffect } from 'react';
import pannellum from 'pannellum';

const usePanorama = (elementId, location) => {
  useEffect(() => {
    pannellum.viewer(elementId, {
      type: 'equirectangular',
      panorama: `/api/placeholder/2000/1000`,
      autoLoad: true,
      compass: true,
      hotSpots: [
        {
          pitch: -20,
          yaw: 0,
          type: "info",
          text: "Main entrance to the cave"
        }
      ]
    });
  }, [elementId, location]);
};

export default usePanorama;