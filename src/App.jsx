import Botao from './components/Botao';
import React from 'react';
import './App.css';

function App() {
  const [screenValue, setScreenValue] = React.useState(' ');
  const [bolean, setBolean] = React.useState(false);
  const [initialValue, setInitialValue] = React.useState('');
  const [secondaryValue, setSecondaryValue] = React.useState('');
  const [operator, setOperator] = React.useState('');

  let secontValueLength = secondaryValue.length;

  const setInput = (p) => {
    const regra = /^[0-9]+$/;

    const regra2 = /^[-+x÷/ ]+$/;

    if (p.match(regra)) {
      let prev = bolean ? secondaryValue : initialValue;

      const concat = `${prev}${p}`;

      bolean ? setSecondaryValue(concat) : setInitialValue(concat);
      setScreenValue(concat);
    } else {
      if (p === '=' && secontValueLength > 0) {
        printResult();
      } else if (p === '.') {
        let prev = bolean ? secondaryValue : initialValue;

        if (prev.endsWith('.') || prev === '') {
        } else {
          const concat = `${prev}.`;

          bolean ? setSecondaryValue(concat) : setInitialValue(concat);
        }
      } else if (p.match(regra2)) {
        addOperator(p);
      } else if (p === 'C') {
        setSecondaryValue('');
        setInitialValue('');
        setScreenValue('');
        setBolean(false);
      }
    }
  };

  const addOperator = (op) => {
    if (op === '√') {
    } else {
      setBolean(true);
      setOperator(op);
      console.log(operator);
    }
  };
  const printResult = () => {
    const inicialNum = Number(initialValue);
    const finalNum = Number(secondaryValue);

    const resultado = result();
    function result() {
      if (operator === '+') {
        return inicialNum + finalNum;
      } else if (operator === '÷') {
        return inicialNum / finalNum;
      } else if (operator === '-') {
        return inicialNum - finalNum;
      } else if (operator === 'x') {
        return inicialNum * finalNum;
      } else if (operator === '/') {
        return (finalNum * inicialNum) / 100;
      }
    }

    const resultInString = resultado.toString();

    setBolean(false);
    setSecondaryValue('');
    setInitialValue(resultInString);
    setScreenValue(resultInString);
  };

  const dell = (key) => {
    let atual = bolean ? secondaryValue : initialValue;
    if (key === 'Backspace') {
      let ultimoCaracterDell = atual.substring(0, atual.length - 1);
      bolean
        ? setSecondaryValue(ultimoCaracterDell)
        : setInitialValue(ultimoCaracterDell);
      setScreenValue(ultimoCaracterDell);
    }
  };

  return (
    <>
      <div
        className="App"
        onKeyPress={(e) => setInput(e.key)}
        onKeyDown={(e) => dell(e.key)}
      >
        <input
          value={screenValue}
          onChange={(e) => console.log('tecla')}
          type="text"
          className="inputArea"
        />
        <Botao call={setInput} nome={'7'} />
        <Botao call={setInput} nome={'8'} />
        <Botao call={setInput} nome={'9'} />
        <Botao call={setInput} nome={'C'} />

        <Botao call={setInput} nome={'4'} />
        <Botao call={setInput} nome={'5'} />
        <Botao call={setInput} nome={'6'} />
        <Botao call={setInput} nome={'x'} />

        <Botao call={setInput} nome={'1'} />
        <Botao call={setInput} nome={'2'} />
        <Botao call={setInput} nome={'3'} />
        <Botao call={setInput} nome={'+'} />

        <Botao call={setInput} nome={'.'} />
        <Botao call={setInput} nome={'0'} />
        <Botao call={setInput} nome={'-'} />
        <Botao call={setInput} nome={'='} resut={'-resut'} />

        <Botao call={setInput} nome={'/'} />
        <Botao call={setInput} nome={'√'} />
        <Botao call={setInput} nome={'÷'} />
        {/*  <Botao call={setInput} nome={"="} /> */}
      </div>
    </>
  );
}

export default App;
