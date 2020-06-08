/**The different possible levels of alerts.*/
export type Alert = 'green' | 'yellow' | 'orange' | 'red';

/** The data used to described an earthquake. */
export interface Earthquake {
    /** The magnitude  of the event (Range -1.0 to 10.0). */
    mag: number;
    /** Textual description of named geographic region near to the event.
     *
     * This may be a city name, or a Flinn-Engdahl Region name.
     */
    place: string;
    /** Time when the event occurred.
     *
     * Times are reported in milliseconds since the epoch ( 1970-01-01T00:00:00.000Z)
     */
    time: number;
    /** Timezone offset from UTC in minutes at the event epicenter (Range -1200 to 1200). */
    tz: number;
    /** The maximum reported intensity for the event (Range 0 to 10.0).*/
    cdi: number;
    /** The maximum estimated instrumental intensity for the event (Range 0 to 10.0).*/
    mmi: number;
    /** The alert level from the PAGER earthquake impact scale.*/
    alert: Alert;
    /** A number describing how significant the event is. Larger numbers indicate a more significant event.*/
    sig: number;
    /** Type of seismic event.*/
    type: 'earthquake';
}
