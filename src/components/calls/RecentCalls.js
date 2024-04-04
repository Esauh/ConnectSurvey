import React from 'react';

const RecentCalls = ({ recentCalls }) => {
  return (
    <div>
      <h1>Call History</h1>
      <ul>
        {recentCalls.map(call => (
          <li key={call.contactId}>{call.phoneNumber}</li>
          // Render other contact fields as needed
        ))}
      </ul>
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