import {Earthquake} from '@Interfaces/earthquake';

/**
 * Get the earthquakes from USGS with minimum magnitude.
 * @param minimumMagnitude the minimum magnitude
 * @return the USGS earthquake data
 */
export function getEarthquakes(minimumMagnitude: number): Promise<Earthquake[]> {
    return fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson')
        .then(res => res.json())
        .then(res => {
            // use reduce to get the properties care about and
            // filter quakes with less desired magnitude
            return res.features.reduce(
                (quakes: Earthquake[], feature: {properties: Earthquake}) => {
                    const quake = feature.properties;
                    if (quake.mag >= minimumMagnitude && quake.type == 'earthquake') {
                        quakes.push(quake);
                    }
                    return quakes;
                }, [] as Earthquake[]);
        });
}