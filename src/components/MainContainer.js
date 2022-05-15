import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [myPortfolio, setMyPorfolio] = useState([]); 
  const [sortList, setSortList] = useState('Alphabetically'); 
  const [selectedCategory, setSelectedCategory] = useState("Tech");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((stocks) => setStocks(stocks));
  }, []);


    // console.log('testing'); // console log's when state is updated
    
    // useEffect(() => {
      //   const sortedTypes = handleFilter()
      //   setSelectedCategory(sortedTypes);
      // }, []);
      
  //     function handleFilter(stock){
  //   // let value = e.target.value
  //     if (selectedCategory === stock.type) {
  //       return stock.type === 'Tech'
  //     } else if (selectedCategory === 'Sportswear') {
  //     return stock.type === 'Sportswear'
  //     } else if (selectedCategory === 'Finance') {
  //     return stock.type === 'Finance'
  //   }
  //   })
  // }
  
  const sortCategoryList = (e) => {
    // console.log('sort button clicked');
    // console.log(e.target.value);
    setSelectedCategory(e.target.value);
  }
  
  const sortStockList = (e) => {
    // console.log('sort button clicked');
    // console.log(e.target.value);
    setSortList(e.target.value);
  }
  
  const sortByPrice = () => {
    return [...stocks].sort(function (a, b) {
      return a.price - b.price;
    });
  }
  
  const sortAlphabetically = () => {
    return [...stocks].sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      
      // names must be equal
      return 0;
    });
  }
  
  let sortedList;
  if(sortList === 'Alphabetically'){
    sortedList = sortAlphabetically()
    // setStocks(sortedList);
  } else {
    sortedList = sortByPrice()
    // setStocks(sortedList);
  }

  const filterArray = sortedList.filter((stock) => selectedCategory === stock.type)

  const addStock = (stock) => {
    // console.log('buy')
    if(!myPortfolio.includes(stock)){
      const updatedPorfolio = [...myPortfolio, stock]
      setMyPorfolio(updatedPorfolio)
    }
  }

  const sellStock = (stock) => {
    const updateCart = [...myPortfolio].filter(myPortfolio => myPortfolio.id !== stock.id)
    setMyPorfolio(updateCart)
  }
  
  return (
    <div>
      <SearchBar type={sortList} sortStockList={sortStockList} sortList={sortList} sortCategoryList={sortCategoryList} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filterArray} handleClick={addStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={myPortfolio} handleClick={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;


// array1 []

// const a = array1.filter()

// a.filter

// array of obj colors and names, 