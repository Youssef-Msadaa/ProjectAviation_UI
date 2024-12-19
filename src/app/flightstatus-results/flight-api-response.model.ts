// flight-api-response.model.ts

export interface FlightApiResponse {
    pagination: {
      limit: number;
      offset: number;
      count: number;
      total: number;
    };
    data: any[];  // The array containing flight data
  }
  