import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoadoutsProvider } from './context/Loadouts.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReceivedLoadoutModal from './components/ReceiveLoadoutModal.jsx'
import Modal from 'react-modal'

Modal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root')).render(
    <LoadoutsProvider >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="s" element={<ReceivedLoadoutModal />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </LoadoutsProvider>
)
