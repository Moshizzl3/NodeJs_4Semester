import { Router } from "express";

export const planetsRouter = Router();

const planets = [
  {
    name: "Mercury",
    lengthOfDay: 1408,
    lengthOfYear: 87.97,
    discription: "Et år på denne planet svarer til ca. 88 dage på jorden",
    imgUrl:
      "https://www.thoughtco.com/thmb/OofCf5WKuUefeP9tOPM8KTcQYaw=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mercury_in_color_-_Prockter07-fb017129b4e849febc1023da23c9f06e.jpg",
  },
  {
    name: "Venus",
    lengthOfDay: 5832,
    lengthOfYear: 224.7,
    discription: "Et år på denne planet svarer til ca. 225 dage på jorden",
    imgUrl:
      "https://www.thoughtco.com/thmb/ATUyt0vURFveZea9-CcBirTdSbo=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/42926275871_e5988ba84b_o-65ce56202cdf415caee10474d72d8d3e.jpg",
  },
  {
    name: "Earth",
    lengthOfDay: 24,
    lengthOfYear: 365.26,
    discription:
      "Det jorden, den blå perle - længden af et år her er rimelig kendt",
    imgUrl:
      "https://svs.gsfc.nasa.gov/vis/a010000/a012300/a012321/c30-1024.jpg",
  },
  {
    name: "Mars",
    lengthOfDay: 25,
    lengthOfYear: 687,
    discription: "Et år på denne planet svarer til ca. 687 dage på jorden",
    imgUrl:
      "https://www.thoughtco.com/thmb/UM7-VVHf35fwzAezvg--GOQvVfg=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/mars-1652270_1920-38e3808a02c24eedab5f9e5c6e65cc0f.jpg",
  },
  {
    name: "Jupiter",
    lengthOfDay: 10,
    lengthOfYear: 4333,
    discription: "Et år på denne planet svarer til ca. 4.333 dage på jorden",
    imgUrl:
      "https://www.thoughtco.com/thmb/QA8vCGjZNZc4CJc47Bk2ocrWQ38=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/jupiter-3813573_1920-0cd7ea03427f40cb8fe23be0aee754ae.jpg",
  },
  {
    name: "Saturn",
    lengthOfDay: 11,
    lengthOfYear: 10759,
    discription: "Et år på denne planet svarer til ca. 10.759 dage på jorden",
    imgUrl:
      "https://www.thoughtco.com/thmb/5dlsYv8TafAfVj5PgcbJvfTswbU=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/1920px-Saturn_during_Equinox-0a35741c904d4634be2ebb9fde7e3279.jpg",
  },
  {
    name: "Neptune",
    lengthOfDay: 17,
    lengthOfYear: 30687,
    discription: "Et år på denne planet svarer til ca. 30.687 dage på jorden",
    imgUrl:
      "https://www.thoughtco.com/thmb/LB5d1HTHTpqIhGZ2O9CK7h9JJ0s=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/Neptunes_South_Pole_-_August_25_1989_26512436398-3c525c714b0c41e7847586bcb7c81664.jpg",
  },
  {
    name: "Uranus",
    lengthOfDay: 16,
    lengthOfYear: 60190,
    discription: "Et år på denne planet svarer til ca. 60.190 dage på jorden",
    imgUrl:
      "http://www.nasa.gov/sites/default/files/thumbnails/image/pia18182-16.jpg",
  },
];

planetsRouter.get("/planets", (req, res) => {
  res.status(200).send({ data: planets });
});

planetsRouter.get("/planets/:name", (req, res) => {
  res
    .status(200)
    .send(
      planets.find(
        (planet) => planet.name.toLowerCase() === req.params.name.toLowerCase()
      )
    );
});
