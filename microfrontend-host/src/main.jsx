import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const App1 = React.lazy(() => import('app1/App'));
const App2 = React.lazy(() => import('app2/App'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h1>Hola, soy el host !</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App1 message={'Hola app1'} />
        <App2 />
      </React.Suspense>
    </div>
  </StrictMode>
)
