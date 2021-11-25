import styled from 'styled-components';

export interface WidgetProps {
  width: number;
  height: number;
}

const Background = styled.div`
  background-color: #14111D;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const WidgetItem = styled.div`
  width: 100%;
  height:100%;
  background: linear-gradient(199.67deg, rgba(149, 249, 133, 0.2) 6.4%, rgba(196, 196, 196, 0) 91.57%);
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Circles1 = styled.div`
  position: absolute;
  width: 325px;
  height: 325px;
  left: 30%;
  top: 20%;
  border-radius: 300px;
  background: linear-gradient(224.07deg, #C567F4 15.51%, #E700EC 81.99%);
`

const Circles2 = styled.div`
  border-radius: 300px;
  position: absolute;
  width: 192px;
  height: 192px;
  left: 70%;
  top: 35%;

  background: linear-gradient(287.74deg, #8401C6 19.32%, #CB67FD 82.16%);

`

const Circles3 = styled.div`
  position: absolute;
  width: 352px;
  height: 352px;
  left: 50%;
  bottom: 20%;
  border-radius: 300px;
  background: linear-gradient(32.95deg, #8701C7 13.95%, #4A15B8 84.94%);
`

export { 
  Background,
  WidgetItem,
  Circles1,
  Circles2,
  Circles3
};