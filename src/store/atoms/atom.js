import { atom, selector } from "recoil";


// export const networkAtom = atom({
//     key:"networkAtom",
//     default:102
// })



// export const jobsAtom = atom({
//     key:"jobsAtom",
//     default:0
// })

// export const messageAtom = atom({
//     key:"messageAtom",
//     default:0
// })

// export const notificationAtom = atom({
//     key:"notificationAtom",
//     default:12
// })

// export const notificationCountSelector = selector({
//     key:"notificationCountSelector",
//     get:({get})=>{
//         const notificationAtomCount = get(notificationAtom);
//         const messageAtomCount = get(messageAtom);
//         const jobsAtomCount = get(jobsAtom);
//         const networkAtomCount = get(networkAtom);
//         return notificationAtomCount + messageAtomCount + jobsAtomCount + networkAtomCount
//     }
// })

export const notifications = atom({
    key:"networkAtom",
    default:{
        key:"networkAtoomSelector",
        get: async()=>{
           const res = await axios.get("http://localhost:3000/notifications")
            return res.data
        }
    }
        
        
})

export const totalNotificaionSelector = selector({
    key:"totalNotificaionSelector",
    get:({get})=>{
        const allNotifications = get(notifications);
        return (
            allNotifications.network +
            allNotifications.jobs +
            allNotifications.messaging +
            allNotifications.notifications
        )      
    }
})