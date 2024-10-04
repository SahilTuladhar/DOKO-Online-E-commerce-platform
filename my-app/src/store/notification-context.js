import { createContext } from "react";
import { useState } from "react";

const NotificationContext = createContext({
  notifications: [],
  totalNotifications: 0,
  notificationToggle: null,
  addNotification: (notificationAdded) => {},
  acceptNotification: () => {},
  rejectNotification: () => {},
});

export function NotificationContextProvider(props) {
  const [userNotification,setUserNotification] = useState([]);
  const [userNotificationToggle,setUserNotificationToggle] = useState();

  function addNotificationHandler(notificationAdded){
   setUserNotification((prevUserNotification) => {
    return prevUserNotification.concat(notificationAdded);
   })
  }
    
  function acceptNotificationHandler(){
   return setUserNotificationToggle(true);
  } 

  function rejectNotificationHandler(){
   return setUserNotificationToggle(false);
  }

  const context = {
    notifications: userNotification,
    totalNotifications: userNotification.length,
    notificationToggle: userNotificationToggle,
    addNotification: addNotificationHandler,
    acceptNotification: acceptNotificationHandler,
    rejectNotification: rejectNotificationHandler,

  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
