import Image from "next/image";
import React from "react";

function Weather({ data }) {
  console.log(data);

  const icon = data.weather[0].icon

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] h-[90vh] m-auto p-4 text-gray-300 z-10">
      <div className="relative flex justify-between items-center pt-12">
        <div className=" flex flex-col items-center">
          <Image
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
            width="150"
            height="150"
          />
          <p className=" font-bold text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>

      <div className="bg-black/50 relative p-8 rounded-2xl mb-8">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity.toFixed(0)}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)} mph</p>
            <p className="text-xl">Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
