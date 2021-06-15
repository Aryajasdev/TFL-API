export interface StopPoints {
    id: string,
    operationType: number,
    vehicleId: string,
    naptanId: string,
    stationName: string,
    lineId: string,
    lineName: string,
    platformName: string,
    direction: string,
    bearing: string,
    destinationNaptanId: string,
    destinationName: string,
    timestamp: string,
    timeToStation: number,
    currentLocation: string,
    towards: string,
    expectedArrival: Date,
    timeToLive: string,
    modeName: string
}

export interface tflData{
    Eastbound : StopPoints[],
    Westbound : StopPoints[]
}

export type StopPointArrival = Readonly<StopPoints>;