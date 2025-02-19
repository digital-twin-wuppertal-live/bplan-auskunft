export declare const bplanFeatureStyler: (feature: any) => {
    color: string;
    weight: number;
    opacity: number;
    fillColor: string;
    fillOpacity: number;
};
export declare const getColorFromFeature: (feature: any) => string;
export declare const getLineColorFromFeature: (feature: any) => string;
export declare const getColorFromFeatureConsideringSelection: (feature: any) => string;
export declare const getLineColorFromFeatureConsideringSelection: (feature: any) => string;
export declare const getShadowColorFromFeatureConsideringSelection: (feature: any) => "#4395FE" | "#000000";
export declare const getTooltipStyleFromFeatureConsideringSelection: (feature: any) => {
    color: string;
    textShadow: string;
} | {
    background: string;
    WebkitBorderRadius: string;
    MozBorderRadius: string;
    borderRadius: string;
    padding: string;
    color: string;
    textShadow: string;
};
export declare const getFeatureOpacityConsideringSelection: (feature: any) => 0.5 | 0.4;
export declare const bplanLabeler: (feature: any) => import("react/jsx-runtime").JSX.Element;
export declare const getMarkerStyleFromFeatureConsideringSelection: (feature: any) => {
    radius: number;
    color: string;
    weight: number;
    opacity: number;
    fillOpacity: number;
    svgSize: number;
    className: string;
    svg: string;
};
