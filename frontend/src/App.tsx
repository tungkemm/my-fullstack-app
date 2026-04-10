import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState<unknown>(null);

  useEffect(() => {
    fetch('http://localhost:3000/hello')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  return (
    <div>
      <h1>Fullstack App aaaaa bbbb</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;