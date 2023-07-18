import { useEffect, useState } from "react";
import axios from "axios";
import ImgCard from "./ImgCard";
const HomePage = () => {
  const [enterdName, setEnterdName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=20`)
      .then((res) => setData(res.data.coins));
  }, []);

  return (
    <>
      <div className="header">
        <input
          type="text"
          placeholder="search for Crypto"
          value={enterdName}
          className="input"
          onChange={(e) => setEnterdName(e.target.value)}
        />
      </div>
      {(data.length > 0) &&
      (
        <div className="grid-container">
            
          {data.filter(crypt=>
          crypt.name.toLowerCase().includes(enterdName.toLowerCase())
          ).
          map((crypt) => (
            <div className="grid-containerdiv">
            <ImgCard
              name={crypt.name}
              rank={crypt.rank}
              price={crypt.price}
              marketCap={crypt.marketCap}
              key={crypt.id}
              url={crypt.icon}
            />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default HomePage;
