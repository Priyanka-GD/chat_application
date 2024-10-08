import { ChatEngine } from 'react-chat-engine';
import './App.css';
import { ChatFeed } from './components/ChatFeed';

const App = () => {
    return(
        <ChatEngine
            height = "100vh"
            projectID = "704cbcc3-4865-4893-8ed5-25a8583d9197"
            userName = "demouser"
            userSecret = "demouser"
            renderChatFeed = { (chatAppProps)=> <ChatFeed { ...chatAppProps} /> }
        />
    );
}

export default App;
