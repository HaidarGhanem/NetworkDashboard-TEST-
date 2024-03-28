require('dotenv').config();
const data = require('../devices.json');
const express = require('express');
const router = express.Router();

//-------------------------------------the troubleshooting functionality-----------------------------------

//functionality of checking connectivity
//----------------------------------
// GET troubleshooting/connectivity 
//----------------------------------
router.get('/connectivity/:src_ip/:dst_ip', (req, res) => {
    const { src_ip, dst_ip } = req.params;
    try {
        if (!src_ip || !dst_ip) {
            return res.status(400).json({ error: "IP parameter is missing" });
        }
        const resultConnectivity = "Success rate is 100 percent (5/5)";
        console.log(resultConnectivity);
        res.json(resultConnectivity);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

//checking configurations
//----------------------------------
// GET troubleshooting/checkconfig 
//----------------------------------
router.get('/checkconfig/:ip', async (req, res) => {
    const { ip } = req.params;
    try {
        if (!ip) {
            return res.status(400).json({ error: "IP parameter is missing" });
        }
        const result = {
            "message": `No errors found on ${ip}`,
            "error_message": `Error found on ${ip}`,
            "suggestion_message": "Suggestion: Check the configurations and make necessary changes"
        };
        res.json(result);
        console.log(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

//check interfaces
//----------------------------------
// GET troubleshooting/interfaces -- 
//----------------------------------
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

//interfaces status
//----------------------------------
// GET troubleshooting/interfaceStatus
//----------------------------------
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

//DHCP functionality
//----------------------------------
// GET troubleshooting/dhcp
//----------------------------------
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

module.exports = router;