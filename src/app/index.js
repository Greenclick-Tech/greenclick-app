import MyProvider from './provider';
import { registerRootComponent } from 'expo';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

//Custom configuration setup, using registerRootComponent to apply
//provider content as the main application pages
export default registerRootComponent(MyProvider);