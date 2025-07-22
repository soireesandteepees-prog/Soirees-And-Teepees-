
'use client';

interface GoogleMapProps {
  address?: string;
  zoom?: number;
  className?: string;
}

export default function GoogleMap({ 
  address = "Los Angeles, CA", 
  zoom = 12, 
  className = "w-full h-96 rounded-xl" 
}: GoogleMapProps) {
  
  const generateMapUrl = (location: string, zoomLevel: number) => {
    const encodedAddress = encodeURIComponent(location);
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}&zoom=${zoomLevel}`;
  };

  // For demo purposes, using a general Los Angeles embed
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2741728131!2d-118.6919259!3d34.0201613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus";

  return (
    <div className={className}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${address}`}
      ></iframe>
    </div>
  );
}
