import './App.css';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { secret } from './test';
import { useState } from 'react';
import Loading from './loading.svg';

function App() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const [loading, setLoading] = useState(false);

  const doc_id = '13dLdMcc8TLHlG2rcCmMViqOnMW5NEtjnX9ASokbWNE0';

  const doc = new GoogleSpreadsheet(doc_id);

  const insertRow = async () => {
    setLoading(true);
    await doc.useServiceAccountAuth(secret);

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    if (!sheet.headerValues) {
      await sheet.setHeaderRow(Object.keys(data));
    }

    const validData = Object.values(data).filter(v => !!v).length > 1;
    if (validData) {
      const row = await sheet.addRow(data);

      await row.save();
    }

    setData({
      name: '',
      email: '',
      phoneNumber: '',
    });
    setLoading(false);
  };

  const onChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  {console.log(loading)}
  return (
    <div className="App">
      <div id="form">
        <h2>Add Data From Form To Google Sheet</h2>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={onChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="number"
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={onChange}
            />
          </label>
        </form>
        <button onClick={insertRow}>ADD DATA TO GOOGLE SHEET</button>
        <a href={`https://docs.google.com/spreadsheets/d/${doc_id}/edit#gid=0`}>
          Link to Google Sheet
        </a>
      </div>
      <div className={loading ? "overlay loading" : "overlay"}>
        <img
          src={Loading}
          alt="loading"
          // className={loading && "loading"}
        />
      </div>
    </div>
  );
}

export default App;
