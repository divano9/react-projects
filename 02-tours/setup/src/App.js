import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
const petrovac = {
  id: "rnnumbrorwrd",
  image: "https://i.ytimg.com/vi/GdfEQL2R9a0/maxresdefault.jpg",
  info: "Svaki delić zemlje Paštrovića čudesan, a tu jedinstvenu lepotu nemoguće svesti na bilo kakve postojeće mere jer je izdržala i probe vremena i prolaznost i nedostupnost. Na tom malom mitskom tlu od Kufina do Babinog Vira kod Bečića, uz samu obalu, iza zidina stare tvrđave ponosno stoji grad omeđen maslinjacima i vinogradima, suncem i morem. Miran i čist, okupan Jadranom i mirisima borova i čempresa sa malim zalivom u obliku potkovice, svakog gosta je u svoja nedra uvek primao sa jednakom srdačnošću.Prvi susret sa Petrovcem doživite i pre nego što u njega stignete, budući da se panorama odlično vidi sa magistrale. Stari tvrđavu sagradili su Mlečani u 17. veku. Njena ne tako daleka prošlost krije dramatične ljudske sudbine, uzbudljive staze lepote i ljubavi, herojska srca ratnika koji su sve to čašću branili. No, hronika počinje u praistorijsko doba, od imena Pastro koje se pominjalo još u ilirskom svetu, preko Rimljana koju su ostavili duboke tragove u kamenu i čudesan mozaik iz 3. veka sa predstavom boga sna Hipnosa, a nastavlja pisanim dokumentima i 'Ljetopisom popa Dukljanina' koji su to umiljato mesto poznavali po nazivu Kastel Lastva. Gradnju mletačke tvrđave odobrili su Paštrovići, dobivši tako autonomiju od Venecijanaca. Ona ih je branila i od najezde Turaka. Stepenice kaštela vode do najvišeg platoa, sa koga se vidi stara topovska cev okrenuta prema moru, što nije slučajno. Ispred vaših očiju naći će se i Katič i Sveta Nedjelja sa malom crkvom na hridi.",
  price: "810",
  name: "Petrovac na Moru",
};

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id); // if a tour doesnt match the id return it in a newTours array

    setTours(newTours);
  };

  const getTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      tours.push(petrovac);
      console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useState(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={getTours}>
            refresh
          </button>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    );
  }
}

export default App;
