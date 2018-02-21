# Watson Natural Language Classifier using React Native and IBM Watson API
This App classifies your input `(URL or String)` into  different categories where the input belongs to along with corresponding confidence in %. Most appropriate classification corresponding to input has more confidence % and is displayed at the top followed by others.   

## Installing App in your machine.

### Pre-requisite:
Node.js (prefer "npm":"4.6.1", node:"v8.9.1"), react(prefer "react": "16.0.0"), react-native (prefer "react-native": "0.50.3"), Android Emulator(with Expo app installed in mobile device or Expo XDE installed in Desktop machine) or Android device (with Expo App installed in the device) or IOS Simulator(only available in Mac with expo app installed in it) or IOS device(with Expo App installed in the device). (If you are not familiar with react-native refer https://facebook.github.io/react-native/docs/getting-started.html).

### Steps for installation

  1. Open command line in administrator mode, Clone this repository
  ```
  git clone https://github.com/AkshayRaman97/watson_integration.git
  ```

  2. Installing npm dependencies
```
 cd watson_integration
 cd React-Native
 npm install
```  
   
  3. Installing react-navigation (For more detailed explanation, refer https://reactnavigation.org/docs/intro/quick-start)
```
     npm install --save react-navigation
```  
   (prefer "react-navigation": "^1.0.0-beta.21")
   
  4. Run the app on the device: 
  
   - For Android device or emulator with already installed expo app.
  ```
       npm run android 
 ``` 
      
   - For IOS device or simulator with already installed expo app.
   
  ```
       npm run ios 
  ``` 
  
  - Using Expo XDE 
  
    *  Open `Expo XDE`.
    
	   *  Click on `Open existing project...` and Select `React-Native` folder present inside the cloned directory.
    
   	*  Wait for React-Native packager to start and all dependencies are loaded. Finally, After seeing `Project opened! You can now use          the "Share" or "Device" buttons to view your project.` 
    
   	*  At the top right corner, 
	      Select `Share` (QR code based)to run app on Android or IOS device with already installed Expo App.
               (OR)
       Select `Device`	and then click on `Open on Android`	then it installs Expo Android App (Ignores if already there) on Android              device(including Virtual Emulator) and runs the app.	   
