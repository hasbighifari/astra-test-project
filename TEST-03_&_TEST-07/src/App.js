
import './App.css';
import Dashboard from './screens/Dashboard/index'
import ErrorSentryMonitoring from './components/ErrorSentryMonitoring/index'

function App() {
  return (
    <ErrorSentryMonitoring>
      <Dashboard />
    </ErrorSentryMonitoring>
  );
}

export default App;
