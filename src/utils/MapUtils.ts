type LatLng = {
    lat: number;
    lng: number;
};

type LayerType = 'marker' | 'polygon' | 'rectangle' | 'circle';

interface LayerCreatedEvent {
    layer: {
        getLatLng: () => LatLng; // Para marcadores
        getLatLngs: () => LatLng[] | LatLng[][]; // Para polígonos/retângulos
        getRadius: () => number; // Para círculos
    };
    layerType: LayerType;
}

export const handleCreated = (e: LayerCreatedEvent) => {
    const layer = e.layer;
    const type = e.layerType;

    let geometry;

    if (type === "polygon" || type === "rectangle") {
        geometry = layer.getLatLngs();
    } else if (type === "circle") {
        geometry = {
            center: layer.getLatLng(),
            radius: layer.getRadius(),
        };
    } else if (type === "marker") {
        geometry = layer.getLatLng();
    }

    console.log("Desenho criado:", {
        type,
        geometry,
    });

    // Aqui você pode fazer um POST para seu backend com os dados
    // await fetch('/api/projetos', { method: 'POST', body: JSON.stringify({ type, geometry }) })
};