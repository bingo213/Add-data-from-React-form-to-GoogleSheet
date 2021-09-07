# Add Data from React form to Google Sheet using google-spreadsheed
Read more about `google-spreadsheat` in this link: https://theoephraim.github.io/node-google-spreadsheet/#/

First, create file `test.js`(in `src` folder). You can now use this file in your project to authenticate as your service account.
#### Setup Instructions 
1. Set up project and enable sheets API
2. Create a service account for your project
* In the sidebar on the left, select APIs & Services > Credentials
* Click blue "+ CREATE CREDENITALS" and select "Service account" option
* Enter name, description, click "CREATE"
* You can skip permissions, click "CONTINUE"
* Click "+ CREATE KEY" button
* Select the "JSON" key type option
* Click "Create" button
* download JSON key file

Copy and paste into `test.js` file. It looks like this
![im](https://user-images.githubusercontent.com/56663780/132393582-65f1e74b-ca45-4cdb-ae8a-a7cbd3fb972c.png)

Change doc_id in App.js by your sheet id (from google sheet link)
https://docs.google.com/spreadsheets/d/{sheet_id}/edit#gid=0

Now, run `npm start` and see the result!
![result](https://user-images.githubusercontent.com/56663780/132395353-566e08b9-31dc-4f9e-9aef-c4d0d0885a80.png)







