import "./css/style.scss";

const dataFetch = async (url) => {
  const data = await fetch(url);
  const dataJson = await data.json();

  return dataJson;
};

class CovidInfo extends HTMLElement {
  async connectedCallback() {
    this.covidProv = await dataFetch(
      "//kkn-covid-jogja.herokuapp.com/api/covid/provinsi"
    );
    this.covidKab = await dataFetch(
      "//kkn-covid-jogja.herokuapp.com/api/covid/kabupaten"
    );
    this.innerHTML = `
     <div class="top-flex">
        <div class="top-info left">
          <h3 class="info-title">Provinsi DIY</h3>
          <div class="sub-info">
            <div class="sub-info-item">
              <h3>Positif</h3>
              <p>${this.covidProv.activeProv}</p>
            </div>

            <div class="sub-info-item">
              <h3>Sembuh</h3>
              <p>${this.covidProv.recoveredProv}</p>
            </div>

            <div class="sub-info-item">
              <h3>Meninggal</h3>
              <p>${this.covidProv.deathProv}</p>
            </div>
          </div>
        </div>

        <div class="top-info right">
          <h3 class="info-title">Sebaran per Kabupaten</h3>
          <table>
            <tr>
              <th></th>
              <th>Aktif</th>
              <th>ODP</th>
              <th>PDP</th>
            </tr>
            <tr>
              <td class="table-name">Kabupaten Bantul</td>
              <td>${this.covidKab[0].activeKab}</td>
              <td>${this.covidKab[0].odpKab}</td>
              <td>${this.covidKab[0].pdpKab}</td>
            </tr>
            <tr>
              <td class="table-name">Kabupaten Gunung Kidul</td>
              <td>${this.covidKab[1].activeKab}</td>
              <td>${this.covidKab[1].odpKab}</td>
              <td>${this.covidKab[1].pdpKab}</td>
            </tr>
            <tr>
              <td class="table-name">Kabupaten Kulon Progo</td>
              <td>${this.covidKab[2].activeKab}</td>
              <td>${this.covidKab[2].odpKab}</td>
              <td>${this.covidKab[2].pdpKab}</td>
            </tr>
            <tr>
              <td class="table-name">Kabupaten Sleman</td>
              <td>${this.covidKab[3].activeKab}</td>
              <td>${this.covidKab[3].odpKab}</td>
              <td>${this.covidKab[3].pdpKab}</td>
            </tr>
            <tr>
              <td class="table-name">Kota Yogyakarta</td>
              <td>${this.covidKab[4].activeKab}</td>
              <td>${this.covidKab[4].odpKab}</td>
              <td>${this.covidKab[4].pdpKab}</td>
            </tr>
          </table>
        </div>
      </div>
   `;

    const loading = document.querySelector(".loading");
    loading.remove();
  }
}
customElements.define("covid-info", CovidInfo);

const htmlMain = document.querySelector("main");
const covidInfoElement = document.createElement("covid-info");
htmlMain.appendChild(covidInfoElement);
