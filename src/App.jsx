import NavBar from './Components/Navbar'
import TaskList_TaskHeader_TaskInput from './Components/TaskList_TaskHeader_TaskInput';

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#1f1f1f',
      padding: '0'
    }}>
      <NavBar style={{
        flexGrow: 0,
        height: '56px'
      }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        padding: '0 48px'
      }}>
        <TaskList_TaskHeader_TaskInput style={{
          flexGrow: 1,
          height: 'auto',
          marginTop: '24px'
        }} />
      </div>
    </div>
  );
};

export default App;
