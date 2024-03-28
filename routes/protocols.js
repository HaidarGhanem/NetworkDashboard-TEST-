require('dotenv').config();
const express = require('express');
const router = express.Router();

//----- GET protocols/interfaces -----
router.get('/interfaces/:ip', (req, res) => {
    const { ip } = req.params;
    try {
        if (!ip) {
            return res.status(400).json({ error: "IP parameter is missing" });
        }
        const result = {
            "FastEthernet0/0": "up",
            "FastEthernet1/0": "up",
            "FastEthernet2/0": "up"
        };
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

//GET protocols/interfacesStatus
router.get('/interfacesStatus/:ip/:interface/:action', (req, res) => {
    const { ip, interface, action } = req.params;
    try {
        if (!ip || !interface || !action) {
            return res.status(400).json({ error: "IP, interface, or action parameter is missing" });
        }
        const result = `Interface ${interface} on IP ${ip} has been ${action} successfully`;
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

// GET protocols/dhcp
router.get('/dhcp/:ip/:interfaces/:networks', (req, res) => {
    const { ip, interfaces, networks } = req.params;
    try {
        if (!ip || !interfaces || !networks) {
            return res.status(400).json({ error: "IP, interfaces, or networks parameter is missing" });
        }
        const result = `DHCP assigned IP for ${ip} - ${interfaces}: 192.168.1.10 with subnet mask 255.255.255.0`;
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

// GET protocols/rip
router.get('/rip/:version/:ip/:network', (req, res) => {
    const { version, ip, network } = req.params;
    try {
        if (!ip || !network) {
            return res.status(400).json({ error: "IP or network parameter is missing" });
        }
        
        const result = (version === '1') ? "RIP1 configuration applied successfully." : "RIP2 configuration applied successfully.";
        
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

// GET protocols/ripdis
router.get('/ripdis/:version/:ip', (req, res) => {
    const { version, ip } = req.params;
    try {
        if (!ip) {
            return res.status(400).json({ error: "IP is missing" });
        }
        
        const result = (version === '1') ? "RIP1 configuration disabled successfully" : "RIP2 configuration disabled successfully";
        
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

// GET protocols/eigrp
router.get('/eigrp/:ip/:networks/:as_number', (req, res) => {
    const { ip, networks, as_number } = req.params;
    try {
        if (!ip || !networks || !as_number) {
            return res.status(400).json({ error: "IP, networks, or AS number parameter is missing" });
        }
        const result = "EIGRP configuration applied successfully.";
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

// GET protocols/eigrpdis
router.get('/eigrpdis/:ip/:as_number', (req, res) => {
    const { ip, as_number } = req.params;
    try {
        if (!ip || !as_number) {
            return res.status(400).json({ error: "IP or AS number parameter is missing" });
        }
        const result = "EIGRP configuration disabled successfully.";
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

// GET protocols/ospf
router.get('/ospf/:ip/:networks/:interface/:area', (req, res) => {
    const { ip, networks, interfaces, area } = req.params;
    try {
        if (!ip || !networks || !interfaces || !area) {
            return res.status(400).json({ error: "IP, networks, interface, or area parameter is missing" });
        }
        const result = "OSPF configuration applied successfully.";
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

// GET protocols/ospfdis
router.get('/ospfdis/:ip/:networks/:interface/:area', (req, res) => {
    const { ip, networks, interfaces, area } = req.params;
    try {
        if (!ip || !networks || !interfaces || !area) {
            return res.status(400).json({ error: "IP, networks, interface, or area parameter is missing" });
        }
        const result = "OSPF configuration disabled successfully.";
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

module.exports = router;