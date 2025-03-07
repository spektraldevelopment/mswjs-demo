import { Provider } from 'react-redux';
import { store } from '../store';
import Header from '../components/Header';
import UserList from '../components/UserList';

const App: React.FC = () => {
  return <Provider store={store}>
    <div>
      <Header />
      <UserList />
    </div>
  </Provider>;
}

export default App;
