/* eslint-disable @typescript-eslint/no-var-requires */
import { Earthquake } from '@Interfaces/earthquake';
const axios = require('axios').default;

/** The URL of the service. */
const SERVICE_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson';

interface FeatureStructure {
    properties: Earthquake;
}

/** The expected structure of the response from USGS. */
interface ResponseStructure {
    data: {
        features: FeatureStructure[];
    };
}

/**
 * Get the earthquakes from USGS with minimum magnitude.
 * @param minimumMagnitude the minimum magnitude
 * @return the USGS earthquake data
 */
export function getEarthquakes(minimumMagnitude: number): Promise<Earthquake[]> {
    return axios.get(SERVICE_URL).then((response: ResponseStructure): Earthquake[] => {
        console.log(response);
        return response.data.features.reduce((quakes: Earthquake[], feature: FeatureStructure) => {
            const quake = feature.properties;
            if (quake.mag >= minimumMagnitude && quake.type == 'earthquake') {
                quakes.push(quake);
            }
            return quakes;
        }, [] as Earthquake[]);
    });
}
