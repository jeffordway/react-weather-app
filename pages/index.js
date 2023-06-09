import Head from "next/head";
import { Inter } from "next/font/google";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Weather from "@/components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(apiUrl).then((response) => {
      setWeather(response.data);
    });
    setCity("");
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Overlay */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/40 z-[1]" />

      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        alt="photo of a dock on a lake during sunset"
        fill
        className="object-cover"
      />

      {/* Search */}
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-8 text-white z-10">
        <form
          onSubmit={fetchWeather}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
        >
          <div>
            <input
              className="bg-transparent border-none text-white focus:outline-none text-2xl"
              type="text"
              placeholder="Enter City Name"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button type="submit">
            <BsSearch size={24} />
          </button>
        </form>
      </div>
                                                                                                   
      {/* loading */}
      {loading && <Loading />}

      {/* Weather */}
      {weather.main && <Weather data={weather} />}
    </div>
  );
}
