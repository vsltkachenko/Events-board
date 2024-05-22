// // import { getData, getPaticipants } from "./data"
// // import { useCreateEventMutation } from "../store/services/eventApi"
// import { useAddParticipantMutation } from "../store/services/participantApi"
// import { Source } from "../enums/source"

// const SendingDataToDb = () => {
//   // const data = getData(50)
//   // const dataPaticipants = getPaticipants(12)

//   // const [createEvent] = useCreateEventMutation()
//   const [addParticipant] = useAddParticipantMutation()

//   // const send = async () => {
//   //   data.forEach(async (event, index) => {
//   //     const response = await createEvent({
//   //       title: event.title,
//   //       description: event.description,
//   //       eventdate: event.eventdate,
//   //       organizer: event.organizer,
//   //     }).unwrap()
//   //     console.log(`response #${index}:`, response)
//   //   })
//   // }



//   const sendPaticipants = async () => {
//     dataPaticipants.forEach(async (paticipant) => {
//       const response = await addParticipant({
//         id: "664e1ef20f2fbb2a5e098de7",
//         name: paticipant.name,
//         email: paticipant.email,
//         birthday: paticipant.birthday,
//         source: paticipant.source as Source,
//       }).unwrap()
//       console.log(`response:`, response)
//     })
//   }
   

//   return (
//     <button onClick={sendPaticipants} className="btn bg-red-600">
//       Send to DB
//     </button>
//   )
// }

// export default SendingDataToDb
