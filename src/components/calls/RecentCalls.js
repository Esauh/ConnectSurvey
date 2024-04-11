import React, { useState, useEffect } from 'react';
import { ConnectClient, SearchContactsCommand } from "@aws-sdk/client-connect";

console.log("Access Key ID:", process.env.REACT_APP_KEY);
console.log("Secret Access Key:", process.env.REACT_APP_SECRET_KEY);

const creds = {
  accessKeyId:process.env.REACT_APP_KEY,
  secretAccessKey:process.env.REACT_APP_SECRET_KEY,
}
const Connect = new ConnectClient({
  region: "us-east-1",
  credentials: creds
});

const RecentCalls = ({ user }) => {
  const [recentcalls, setRecentCalls] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const maxDurationInWeeks = 7;
        const currentTime = new Date();
        const startTime = new Date(currentTime - maxDurationInWeeks * 7 * 24 * 60 * 60 * 1000);
        const endTime = currentTime;
        
        const phoneNumber = user.phone_number;
        const input = {
          InstanceId: "9e272066-96ec-42ed-8b95-481f179803a8", //Amazon Connect instance 
          // SearchCriteria:{
          //   SearchableContactAttributes: { 
          //     Criteria: [ 
          //       { 
          //         Key: "Phone Number", 
          //         Values: [phoneNumber],
          //       },
          //     ],
          //     MatchType: "MATCH_ANY"
          //   }},
          TimeRange: {
            StartTime: startTime,
            EndTime: endTime,
            Type: "INITIATION_TIMESTAMP"
        },
        Sort: { 
          FieldName: "INITIATION_TIMESTAMP",
          Order: "ASCENDING"
        },
      };
        const command = new SearchContactsCommand(input);
        const response = await Connect.send(command);
        setRecentCalls(response.Contacts);
        console.log(response)
      } catch (error) {
        console.error('Error fetching recent calls:', error);
      }
    }

    fetchData();
  }, [user.phone_number]);
  return (
    <div>
    <h1>Call History: ConnectTest</h1>
    <div className="card-container">
      {recentcalls.map(contact => (
        <div key={contact.Id} className="card">
          <h2>Contact Info</h2>
          <p><strong>Date:</strong> {contact.AgentInfo.Id}</p>
          <p><strong>Contact ID:</strong> {contact.Id}</p>
          <p><strong>Channel:</strong> {contact.Channel}</p>
          <p><strong>Agent ID:</strong> {contact.AgentInfo.Id ? contact.AgentInfo.AgentId : 'N/A'}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default RecentCalls;
// import React, { useEffect, useState } from 'react';
// import { Connect } from 'aws-amplify';
// import { fetchUserAttributes } from 'aws-amplify/auth';

// function RecentCalls(user){

//     const usr = user.username;
//     const displayname = user.username[0].toUpperCase() + usr.slice(1)

    
    // const CallHistory = () => {
    //   const [recentCalls, setRecentCalls] = useState([]);
    
    //   useEffect(() => {
    //     async function fetchData() {
    //       try {
    //         const currentTime = new Date().getTime();
        
    //         const eightWeeksAgo = new Date();
    //         eightWeeksAgo.setDate(eightWeeksAgo.getDate() - (8 * 7)); // Subtract 8 weeks
            
    //         const user = await Auth.currentAuthenticatedUser();
    //         const phoneNumber = user.attributes.phone_number;
    
    //         const result = await Connect.searchContacts({
    //           SearchableContactAttributes: {
    //             Criteria: [
    //               {
    //                 Key: "Attributes",
    //                 Values: [phoneNumber]
    //               }
    //             ],
    //             MatchType: "MATCH_ANY"
    //           },
    //           TimeRange: {
    //             StartTime: eightWeeksAgo.getTime(), 
    //             EndTime: currentTime,
    //             Type: "RANGE_START_TO_END"
    //           }
    //         });
    
    //         setRecentCalls(result);
    //       } catch (error) {
    //         console.error('Error fetching recent calls:', error);
    //       }
    //     }
    
    //     fetchData();
    //   }, []);
    
//       return (
//         <div>
//           <h1>{CallHistory}</h1>
//           <ul>
//             {recentCalls.map(call => (
//               <li key={call.contactId}>{call.phoneNumber}</li>
//             ))}
//           </ul>
//         </div>
//       );
//     };
    
// }

// export default RecentCalls;