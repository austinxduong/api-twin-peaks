import React, { useState } from 'react';
import { fetchApi } from '../../services/twinPeaksApi';
import Quote from '../../components/quote/Quote';
import Button from '../../components/quote/Loads';

const TwinsQuote = () => {
  const [quote, setQuote] = useState('Generate a Quote!');

  const handleClick = async () => {
    const res = await fetchApi();
    const quote = JSON.stringify(res);
    setQuote(quote);
  };

  return (
    <>
      <Quote quote={quote} />
      <Button button={handleClick} />
    </>
  );

};

export default TwinsQuote;
