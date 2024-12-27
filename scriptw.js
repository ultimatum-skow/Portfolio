const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd354de5afbmsh88244f97dd1cbfdp1f38bcjsnf10232431496',
		'x-rapidapi-host': 'tomorrow-io1.p.rapidapi.com'
	}
};
async function getweather(city) {
    CITY.innerHTML = city;
const url = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=' + city + '&units=metric';

try {
	const response = await fetch(url, options);
	const result = await response.text();
	// console.log(result);
    const weatherData = JSON.parse(result); 
    // Access the temperature from the first entry in the "minutely" array 
    const temperature = weatherData.timelines.minutely[0].values.temperature; 
    const temperatureApparent = weatherData.timelines.minutely[0].values.temperatureApparent; 
    const uvIndex = weatherData.timelines.minutely[0].values.uvIndex; 
    const precipitationProbability = weatherData.timelines.minutely[0].values.precipitationProbability; 
    const humidity = weatherData.timelines.minutely[0].values.humidity; 
    const windSpeed = weatherData.timelines.minutely[0].values.windSpeed; 
    const cloudCover = weatherData.timelines.minutely[0].values.cloudCover; 
    const temperatureAvg = weatherData.timelines.daily[0].values.temperatureAvg; 
    const temperatureMax = weatherData.timelines.daily[0].values.temperatureMax; 
    const temperatureMin = weatherData.timelines.daily[0].values.temperatureMin; 
    const uvIndexAvg = weatherData.timelines.daily[0].values.uvIndexAvg;
    const visibility = weatherData.timelines.daily[0].values.visibility; 
   // const fcity = weatherData.location.name; 
   // CITY.innerHTML = city;

    // for top tomorrow
    const temperatureAvgt = weatherData.timelines.daily[1].values.temperatureAvg; 
    const humidityAvgt = weatherData.timelines.daily[1].values.humidityAvg; 
    const temperatureApparentAvgt = weatherData.timelines.daily[1].values.temperatureApparentAvg; 
    const uvIndexAvgt = weatherData.timelines.daily[1].values.uvIndexAvg;
    const precipitationProbabilityMaxt = weatherData.timelines.daily[1].values.precipitationProbabilityMax; 
    // for top tomorrow +
    const temperatureAvgtt = weatherData.timelines.daily[2].values.temperatureAvg; 
    const humidityAvgtt = weatherData.timelines.daily[2].values.humidityAvg; 
    const temperatureApparentAvgtt = weatherData.timelines.daily[2].values.temperatureApparentAvg; 
    const uvIndexAvgtt = weatherData.timelines.daily[2].values.uvIndexAvg;
    const precipitationProbabilityMaxtt = weatherData.timelines.daily[2].values.precipitationProbabilityMax; 

    // Print the temperature 
    // console.log(`Temperature: ${temperature}°C`);
    tempe.innerHTML = temperature;
    feel.innerHTML = temperatureApparent;
    humd.innerHTML = humidity;
    uv.innerHTML = uvIndex;
    rc.innerHTML = precipitationProbability;
    // FOR TOMORROW
    tempet.innerHTML = temperatureAvgt;
    feelt.innerHTML = temperatureApparentAvgt;
    humdt.innerHTML = humidityAvgt;
    uvt.innerHTML = uvIndexAvgt;
    rct.innerHTML = precipitationProbabilityMaxt;
    // FOR TOMORROW +
    tempett.innerHTML = temperatureAvgtt;
    feeltt.innerHTML = temperatureApparentAvgtt;
    humdtt.innerHTML = humidityAvgtt;
    uvtt.innerHTML = uvIndexAvgtt;
    rctt.innerHTML = precipitationProbabilityMaxtt;
} catch (error) {
	console.error(error);
}
}
 submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getweather(city.value);
 });

 // getweather("Muzaffarpur");
 async function getweatherd(dity) {
const url = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=' + dity + '&units=metric';

try {
	var responsem = await fetch(url, options);
	var resultm = await responsem.text();
	// console.log(result);
    var weatherData = JSON.parse(resultm); 
    // Access the temperature from the first entry in the "minutely" array 
    var temperaturem = weatherData.timelines.minutely[0].values.temperature; 
    var uvIndexm = weatherData.timelines.minutely[0].values.uvIndex; 
    var precipitationProbabilitym = weatherData.timelines.minutely[0].values.precipitationProbability; 
    var humiditym = weatherData.timelines.minutely[0].values.humidity; 
    var windSpeedm = weatherData.timelines.minutely[0].values.windSpeed; 
    var cloudCoverm= weatherData.timelines.minutely[0].values.cloudCover; 
    var temperatureMaxm = weatherData.timelines.daily[0].values.temperatureMax; 
    var temperatureMinm = weatherData.timelines.daily[0].values.temperatureMin; 
    // console.log(`Temperature: ${temperature}°C`);
    if(dity == "Muzaffarpur"){
        avgtempm.innerHTML = temperaturem;
        mintempm.innerHTML = temperatureMinm;
        maxtempm.innerHTML = temperatureMaxm;
        uvm.innerHTML = uvIndexm;
        rcm.innerHTML = precipitationProbabilitym;
        humdm.innerHTML = humiditym;
        wsm.innerHTML = windSpeedm;
        clm.innerHTML = cloudCoverm;

    }
    if(dity == "Delhi"){
        avgtempd.innerHTML = temperaturem;
        mintempd.innerHTML = temperatureMinm;
        maxtempd.innerHTML = temperatureMaxm;
        uvd.innerHTML = uvIndexm;
        rcd.innerHTML = precipitationProbabilitym;
        humdd.innerHTML = humiditym;
        wsd.innerHTML = windSpeedm;
        cld.innerHTML = cloudCoverm;

    }
    if(dity == "Mumbai"){
        avgtemps.innerHTML = temperaturem;
        mintemps.innerHTML = temperatureMinm;
        maxtemps.innerHTML = temperatureMaxm;
        uvs.innerHTML = uvIndexm;
        rcs.innerHTML = precipitationProbabilitym;
        humds.innerHTML = humiditym;
        wss.innerHTML = windSpeedm;
        cls.innerHTML = cloudCoverm;

    }
    if(dity == "Pune"){
        avgtempp.innerHTML = temperaturem;
        mintempp.innerHTML = temperatureMinm;
        maxtempp.innerHTML = temperatureMaxm;
        uvp.innerHTML = uvIndexm;
        rcp.innerHTML = precipitationProbabilitym;
        humdp.innerHTML = humiditym;
        wsp.innerHTML = windSpeedm;
        clp.innerHTML = cloudCoverm;

    }
    if(dity == "Imphal"){
        avgtempi.innerHTML = temperaturem;
        mintempi.innerHTML = temperatureMinm;
        maxtempi.innerHTML = temperatureMaxm;
        uvi.innerHTML = uvIndexm;
        rci.innerHTML = precipitationProbabilitym;
        humdi.innerHTML = humiditym;
        wsi.innerHTML = windSpeedm;
        cli.innerHTML = cloudCoverm;

    }
    if(dity == "Faridabad"){
        avgtempf.innerHTML = temperaturem;
        mintempf.innerHTML = temperatureMinm;
        maxtempf.innerHTML = temperatureMaxm;
        uvf.innerHTML = uvIndexm;
        rcf.innerHTML = precipitationProbabilitym;
        humdf.innerHTML = humiditym;
        wsf.innerHTML = windSpeedm;
        clf.innerHTML = cloudCoverm;

    }
} catch (error) {
	console.error(error);
}
}
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWeatherData() {
    await getweatherd("Delhi");
    await delay(1000); // 1-second delay
    await getweatherd("Pune");
    await delay(1000);
    await getweatherd("Muzaffarpur");
    await delay(1000);
    await getweatherd("Imphal");
    await delay(1000);
    await getweatherd("Mumbai");
    await delay(1000);
    await getweatherd("Faridabad");
}

fetchWeatherData();
