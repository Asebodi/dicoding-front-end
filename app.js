const covidFetch = async (url) => {
    try {
        const data = await fetch(url);
        const dataJson = await data.json();

        return dataJson
    } catch (err) {
        console.log(err)
    }
}

const covidProf = 