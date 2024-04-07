export const json = {
    "title": "Feedback Survey",
    "description": "Thank you for choosing Amazon Connect Customer Service! We value your feedback to enhance our services. Your input is invaluable in helping us serve you better. Thank you for taking the time to connect with us.",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "boolean",
        "name": "question1",
        "title": "DId the customer service representative resolve your issue? ",
        "labelTrue": "No",
        "labelFalse": "Yes"
       },
       {
        "type": "boolean",
        "name": "question2",
        "title": "Was your issue resolved in a timely manner?",
        "isRequired": true,
        "labelTrue": "No",
        "labelFalse": "Yes"
       },
       {
        "type": "boolean",
        "name": "question3",
        "title": "Was the customer service representative knowledgeable?",
        "isRequired": true,
        "labelTrue": "No",
        "labelFalse": "Yes"
       },
       {
        "type": "boolean",
        "name": "question4",
        "title": "Was it easy to contact and get a hold of a customer service representative?",
        "isRequired": true,
        "labelTrue": "No",
        "labelFalse": "Yes"
       },
       {
        "type": "boolean",
        "name": "question5",
        "title": "Did the customer service representative make you feel valued? ",
        "isRequired": true,
        "labelTrue": "No",
        "labelFalse": "Yes"
       },
       {
        "type": "boolean",
        "name": "question6",
        "title": "Were you overall satisfied with the customer service provided?",
        "isRequired": true,
        "labelTrue": "No",
        "labelFalse": "Yes"
       },
       {
        "type": "rating",
        "name": "question7",
        "title": "How would you rate the service given by our customer service representative?",
        "isRequired": true,
        "rateType": "stars"
       },
       {
        "type": "rating",
        "name": "question8",
        "title": "Overall what would you rate the quality of your customer service?",
        "isRequired": true,
        "rateType": "stars"
       },
       {
        "type": "comment",
        "name": "question9",
        "title": "How can we improve our service?"
       }
      ]
     }
    ]
   }