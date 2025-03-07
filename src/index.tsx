import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { worker } from './mocks/browser'

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const startWorker = async () => {
    await worker.start({
        onUnhandledRequest: 'bypass'
    });
    console.log("Worker started");

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};


startWorker();
