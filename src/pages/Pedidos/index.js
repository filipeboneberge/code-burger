import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import H1 from '../../components/Title';
import Button from '../../components/Button';
import { Container, Image, ContainerItens, Ul, ContainerPedidos, Paragrafos } from './style';
import Burger from '../../assets/pedido.png';
import Trash from '../../assets/trash.png';
const Pedidos = () => {

    const [orders, setOrders] = useState([]);
    const history = useHistory();
    
    useEffect(()=>{
      async function fetchOrders(){
        const {data: newOrders} = await axios.get("http://localhost:3001/orders/");
  
    setOrders(newOrders);
    }
  
    fetchOrders()
  }, [])
  
  async function deleteOrder (orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`)
    const newOrders = orders.filter (order => order.id !== orderId)
    setOrders (newOrders);
  }
  
    function goBackPage(){
      history.push("/")
    }

  return( 
    <Container>
      <Image alt="Imagem-Burger" src={Burger} />
      <H1>Pedidos</H1>
      <ContainerItens>
       
        <Ul>
        {orders.map ((order) => (
          <ContainerPedidos key={order.id}>
            <Paragrafos>
              <p >{order.order}</p>
              <p>{order.name}</p>
            </Paragrafos>
            <button onClick={() => deleteOrder(order.id)} >
              <img alt="Imagem-Trash" src={Trash} /> 
            </button>
          </ContainerPedidos>
          ))}
        </Ul>
            
        <Button isBack={true} onClick={goBackPage} >Novo Pedido</Button>
      
      </ContainerItens> 

    </Container>
  )

}

export default Pedidos;