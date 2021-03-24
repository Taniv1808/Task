import React,{Component}from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import { getUserData } from './src/utils/utils';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      isLogged:false
    }
  }

  componentDidMount=()=>{
    getUserData().
    then(res=>{
      if(res){
        this.setState({
          isLogged:true
        })
      }
    })
  }
  render(){
    const{isLogged}=this.state
  return(
    <SafeAreaProvider>
    <Provider store={store}>
    <Routes isLogged={isLogged}/>
    <FlashMessage position='top'/>
    </Provider>
    </SafeAreaProvider>
  )
}
}