import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 41.934977,
      lng: 12.524414,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="h-[calc(100vh-20vh)] ">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
