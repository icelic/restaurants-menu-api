import { Restaurant } from "../models/Restaurant";

const addAwsPublicUrlPrefixToImageKey = (restaurants) => {
  restaurants.forEach((value: Restaurant) => {
    if (value.imageKey !== '') {
      value.imageKey = process.env.AWS_PUBLIC_URL_PREFIX + value.imageKey;
    }
  });

  return restaurants;
}

export { addAwsPublicUrlPrefixToImageKey };