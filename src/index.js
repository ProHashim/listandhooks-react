import React, { useState } from 'react';
import ReactDOM from 'react-dom';




function Count() {
  const [count, setCount] = useState(10)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> +</button>
      {/*button onClick={() => setCount(currentcounts => currentcounts + 1)}> +</button> */}
      <div>{count}</div>
    </div>
  );
}

ReactDOM.render(<Count />, document.getElementById('root'));



