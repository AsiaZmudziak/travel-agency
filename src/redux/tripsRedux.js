/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // DONE - TODO - filter by duration
  const durationDays = parseInt(filters.duration.to)-parseInt(filters.duration.from);
 
  if(durationDays >= 0){
    output = output.filter(trip => trip.days >= parseInt(filters.duration.from) && trip.days <= parseInt(filters.duration.to));
  } else {
    output = [];
  }

  // DONE - TODO - filter by tags
  if (filters.tags) {
    output = output.filter(trip => filters.tags.every(tag => trip.tags.indexOf(tag) > -1));
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({ trips }, tripId) => {
  // DONE - TODO - filter trips by tripId
  const filtered = trips.filter(trip => trip.id == tripId);

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  // DONE - TODO - filter trips by countryCode
  const filtered = trips.filter(trip => trip.country.code == countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;
// action types
// action creators
// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */