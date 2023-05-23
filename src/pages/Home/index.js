import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import H1 from '../../components/Title';
import Button from '../../components/Button';
import {Container, Image, ContainerItens, InputLabel, Input } from './style';
import Logo from '../../assets/burger.png';



const App = () => {

  const [orders, setOrders] = useState([]);
  const history = useHistory();

  const inputOrder = useRef();
  const inputClientName = useRef();
  
  async function addNewOrder() {
    const {data:newOrder} = await axios.post("http://localhost:3001/orders", {
    order:inputOrder.current.value,
    name:inputClientName.current.value,
  });
    
  setOrders([...orders, newOrder]);

  history.push("/pedidos");
}

  return (
    <Container>
      <Image alt="Logo-Burger" src={Logo} />
      <H1>Faça seu pedido!</H1>
        <ContainerItens>
          <InputLabel>Pedido</InputLabel>
          <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada" />
          <InputLabel>Nome do Cliente</InputLabel>
          <Input ref={inputClientName} placeholder="Steve Jobs" />
          <Button onClick={addNewOrder} >Novo Pedido</Button>
        </ContainerItens>
    </Container>
  )

}

export default App;