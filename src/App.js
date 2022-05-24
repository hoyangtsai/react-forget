import "./styles.css";
import TodoList from "./components/TodoList";
import Toggle from './components/Toggle';
import { useReducer, createContext } from 'react';
import { counter } from './useCounter';

const switchConfig = {
  darkIcon: '👍',
  darkIconStyle: {},
  lightIcon: '👎',
  lightIconStyle: {},
};

const initialState = {
  memo: true,
}

function reducer(state, action) {
  switch (action.type) {
    case "MEMO":
      return { ...state, memo: true };
    case "NOT_MEMO":
      return { ...state, memo: false };
    default:
      throw new Error();
  }
}

export const AppContext = createContext(initialState);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggled = (e) => {
    dispatch({
      type: state.memo ? 'NOT_MEMO' : 'MEMO',
      memo: !state.memo
    })
    counter.reset();
  }

  return (
    <div className="app">
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="toggle">
          <span className="toggle-text">with memo or not</span>
          <Toggle
            className="toggle-on"
            checked={state.memo}
            switchConfig={switchConfig}
            onChange={handleToggled}
          />
        </div>
        <TodoList />
      </AppContext.Provider>
    </div>
  )
}
