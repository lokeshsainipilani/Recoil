import { useRecoilValue, RecoilRoot , useRecoilState} from "recoil"
// import { jobsAtom, messageAtom, networkAtom, notificationAtom,notificationCountSelector, } from "./store/atoms/atom";


// function App() {
  
//   return (
//     <RecoilRoot>
//       <MainApp/>
//     </RecoilRoot>
//   )
// }

// function MainApp(){
//   const networkAtomCount = useRecoilValue(networkAtom);
//   const notificationAtomCount = useRecoilValue(notificationAtom);
//   const  setMessageAtomCount = useSetRecoilState(messageAtom);
//   const jobsAtomCount = useRecoilValue(jobsAtom)
//   const messageAtomCount =useRecoilValue(messageAtom)
//   const totalNotificationCount = useRecoilValue(notificationCountSelector);

//   return (
//     <>
//       <button>Home</button>
//       <button>My Network ({networkAtomCount >=100? "99+":networkAtomCount})</button>
//       <button>Jobs ({jobsAtomCount})</button>
//       <button>Notifications ({notificationAtomCount})</button>
//       <button>Messaging ({messageAtomCount})</button>
//       <button >Me ({totalNotificationCount}) </button>
//     </>)
// }



import { notifications, totalNotificaionSelector } from "./store/atoms/atom";
import { useEffect } from "react";
import axios from 'axios'

function App() {
  
  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp(){
  const [networkCount,setNetworkCount] = useRecoilState(notifications);
  //const setNetworkCount = useRecoilValue(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificaionSelector);


  return (
    <>
      <button>Home</button>
      <button>My Network ({networkCount.network >=100? "99+":networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Notifications ({networkCount.notifications})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button >Me ({totalNotificationCount}) </button>
    </>)
}

export default App
