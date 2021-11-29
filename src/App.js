import { SizeMe } from 'react-sizeme';
import './App.css';
import Dashboard from './modules/main/Dashboard';

function App() {
  return <SizeMe
    refreshRate={16}
    render={({ size }) => <Dashboard size={size.width} />}
  />
}

export default App;
