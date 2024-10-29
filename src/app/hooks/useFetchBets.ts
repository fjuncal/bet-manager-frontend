import { useEffect, useState } from "react";

export const useFetchBets = () => {
  const [bets, setBets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthBets = async () => {
      try {
        const response = await fetch("/api/bets");
        const data = await response.json();
        setBets(data);
      } catch (error) {
        console.log("Erro ao buscar apostar: ", error);
      } finally {
        setLoading(false);
      }
    };
  });
};
