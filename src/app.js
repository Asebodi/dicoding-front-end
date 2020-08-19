import "./css/style.scss";

const dataFetch = async (url) => {
  const data = await fetch(url);
  const dataJson = await data.json();

  return dataJson;
};

const fetchedData = {};
const main = async () => {
  fetchedData.berita = await dataFetch(
    "//kkn-covid-jogja.herokuapp.com/api/berita"
  );
  fetchedData.covidProv = await dataFetch(
    "//kkn-covid-jogja.herokuapp.com/api/covid/provinsi"
  );
  fetchedData.covidKab = await dataFetch(
    "//kkn-covid-jogja.herokuapp.com/api/covid/kabupaten"
  );
  console.log(fetchedData);
};

main();
