const splitTextIntoSpans = (element) => {
  const text = element.textContent;
  element.innerHTML = '';
  const sentences = text.split('. ').filter(sentence => sentence !== '');
  
  sentences.forEach((sentence, index) => {
    const sentenceSpan = document.createElement('span');
    sentenceSpan.style.display = 'inline-block';
    
    const words = sentence.split(' ').filter(word => word !== '');
    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      
      word.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        wordSpan.appendChild(span);
      });
      
      if (wordIndex < words.length - 1) {
        const space = document.createElement('span');
        space.innerHTML = '&nbsp;';
        space.style.display = 'inline-block';
        wordSpan.appendChild(space);
      }
      
      sentenceSpan.appendChild(wordSpan);
    });
    
    if (index < sentences.length - 1) {
      const period = document.createElement('span');
      period.textContent = '. ';
      sentenceSpan.appendChild(period);
    }
    
    element.appendChild(sentenceSpan);
  });

  return element;
};

export default splitTextIntoSpans;
