import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
           height="100vh"
           projectID="90dbd40c-66f7-4251-9dfa-44fe6080c7ac"
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;