import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();
  
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
    
  return (       
     
      <main className="overflow-hidden">
        <Hero/>
        
        <div className="mt-12 bg-clip-padding-x padding-y max-width" id="discover">
          
          <h1 className="text-4xl">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
          
          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-conteiner">
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </div>
          </div>
          </div> 
          
            {!isDataEmpty ? (
              <section>
                <div className="home__cars-wrapper">
                  {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
                </div>

              </section>
            ) : (
              <div className="home__error-conteiner">
                <h2 className="text-black text-x1 fond-bold">no results</h2>
                <p>{allCars?.massege}</p>
              </div>
            )}

      </main>
    
  );
}
