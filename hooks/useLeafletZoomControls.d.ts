/**
 * Custom hook to handle Leaflet zoom controls.
 * Provides stable zoom in and zoom out functions.
 */
declare const useLeafletZoomControls: () => {
    zoomInLeaflet: () => void;
    zoomOutLeaflet: () => void;
    getLeafletZoom: () => number | null;
};
export default useLeafletZoomControls;
