import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';
import https from 'https';
import Analytics from '../index.js'

// Use your write key and endpoint.
const WRITE_KEY = ""
const ENDPOINT = ""

function getMkcertRootCA() {
    try {
        const caroot = execSync('mkcert -CAROOT', { encoding: 'utf8' }).trim();
        const rootCAPath = path.join(caroot, 'rootCA.pem');
        return fs.existsSync(rootCAPath) ? rootCAPath : null;
    } catch (err) {
        return null;
    }
}

const caPath = process.env.CA_PATH || getMkcertRootCA();

let httpsAgent;
if (caPath && fs.existsSync(caPath)) {
    const ca = fs.readFileSync(caPath, 'utf8');
    httpsAgent = new https.Agent({ ca });
} else {
    console.warn('WARNING: no CA found. TLS verification will fail if you are using self-signed certificates.');
}

const client = new Analytics(
    WRITE_KEY, 
    ENDPOINT,
    {
        axiosConfig: {
            httpsAgent: httpsAgent,
        },
    }
);

client.identify({
    anonymousId: "ac3496a8-0782-4173-856f-2f7dd37d7f14",   
    userId: "703991475",
    traits: {
        "email": "emily.johnson@example.com",
        "plan": "Enterprise",
        "company": "Acme Corp",
        "jobTitle": "Product Manager",
        "country": "United States"
    }
});
