const fecthCripto = async(criptomoeda) => {
const API_URL = `https://api.coincap.io/v2/assets/${criptomoeda}`;

const criptoCoins = fetch(API_URL)
    .then(response => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());;

  return criptoCoins;
};

const getCriptos = async (nome) => {
  const coins = await fetchCripto(nome);

  const coinsList = document.getElementById('coins-list');

  coins.forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinsList.appendChild(newLi);
  });
};

const getList = () => {
  Promise.all([
    getCriptos('bitcoin'),
    getCriptos('ethereum'),
    getCriptos('ripple'),
    getCriptos('bitcoin-cash'),
    getCriptos('eos'),
    getCriptos('stellar'),
    getCriptos('litecoin'),
    getCriptos('cardano'),
    getCriptos('tether'),
    getCriptos('iota'),

  ])
};

window.onload = () => fecthCripto();